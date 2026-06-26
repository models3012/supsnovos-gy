import { createServerFn } from "@tanstack/react-start";
import { useSession } from "@tanstack/react-start/server";
import { createHash, timingSafeEqual } from "node:crypto";

export const ADMIN_SESSION_CONFIG = {
  password: process.env.ADMIN_SESSION_SECRET || "fallback-dev-only-secret-32chars-min",
  name: "ultra-admin",
  maxAge: 60 * 60 * 8, // 8h
  cookie: { httpOnly: true, secure: true, sameSite: "lax" as const, path: "/" },
};

export type AdminSession = { unlocked?: boolean; at?: number };

function pwMatches(input: string, expected: string): boolean {
  const a = createHash("sha256").update(input, "utf8").digest();
  const b = createHash("sha256").update(expected, "utf8").digest();
  return timingSafeEqual(a, b);
}

export async function requireAdminUnlocked() {
  const session = await useSession<AdminSession>(ADMIN_SESSION_CONFIG);
  if (!session.data.unlocked) {
    throw new Response("Unauthorized", { status: 401 });
  }
  return session;
}

export const adminUnlock = createServerFn({ method: "POST" })
  .inputValidator((data: { password: string }) => data)
  .handler(async ({ data }) => {
    const expected = process.env.SITE_ADMIN_PASSWORD;
    if (!expected) return { ok: false as const, error: "Senha do painel não configurada" };
    if (!data?.password || data.password.length > 128) return { ok: false as const };
    if (!pwMatches(data.password, expected)) {
      await new Promise((r) => setTimeout(r, 400)); // mitigate brute-force timing
      return { ok: false as const };
    }
    const session = await useSession<AdminSession>(ADMIN_SESSION_CONFIG);
    await session.update({ unlocked: true, at: Date.now() });
    return { ok: true as const };
  });

export const adminLock = createServerFn({ method: "POST" }).handler(async () => {
  const session = await useSession<AdminSession>(ADMIN_SESSION_CONFIG);
  await session.clear();
  return { ok: true as const };
});

export const adminCheck = createServerFn({ method: "GET" }).handler(async () => {
  const session = await useSession<AdminSession>(ADMIN_SESSION_CONFIG);
  return { unlocked: !!session.data.unlocked };
});
