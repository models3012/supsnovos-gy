import { createServerFn } from "@tanstack/react-start";

export const adminUnlock = createServerFn({ method: "POST" })
  .inputValidator((data: { password: string }) => data)
  .handler(async ({ data }) => {
    const { getAdminSession, pwMatches } = await import("./admin-gate.server");
    const expected = process.env.SITE_ADMIN_PASSWORD;
    if (!expected) return { ok: false as const, error: "Senha do painel não configurada" };
    if (!data?.password || data.password.length > 128) return { ok: false as const };
    if (!pwMatches(data.password, expected)) {
      await new Promise((r) => setTimeout(r, 400));
      return { ok: false as const };
    }
    const session = await getAdminSession();
    await session.update({ unlocked: true, at: Date.now() });
    return { ok: true as const };
  });

export const adminLock = createServerFn({ method: "POST" }).handler(async () => {
  const { getAdminSession } = await import("./admin-gate.server");
  const session = await getAdminSession();
  await session.clear();
  return { ok: true as const };
});

export const adminCheck = createServerFn({ method: "GET" }).handler(async () => {
  const { getAdminSession } = await import("./admin-gate.server");
  const session = await getAdminSession();
  return { unlocked: !!session.data.unlocked };
});
