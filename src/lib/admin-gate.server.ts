import { useSession } from "@tanstack/react-start/server";
import { createHash, timingSafeEqual } from "node:crypto";

export const ADMIN_SESSION_CONFIG = {
  password: process.env.ADMIN_SESSION_SECRET || "fallback-dev-only-secret-32chars-min",
  name: "ws-suplementos-admin",
  maxAge: 60 * 60 * 8,
  cookie: { httpOnly: true, secure: true, sameSite: "lax" as const, path: "/" },
};

export type AdminSession = { unlocked?: boolean; at?: number };

export function pwMatches(input: string, expected: string): boolean {
  const a = createHash("sha256").update(input, "utf8").digest();
  const b = createHash("sha256").update(expected, "utf8").digest();
  return timingSafeEqual(a, b);
}

export async function getAdminSession() {
  return useSession<AdminSession>(ADMIN_SESSION_CONFIG);
}

export async function requireAdminUnlocked() {
  const session = await getAdminSession();
  if (!session.data.unlocked) {
    throw new Response("Unauthorized", { status: 401 });
  }
  return session;
}
