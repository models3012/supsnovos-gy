import { createServerFn } from "@tanstack/react-start";
import { requireAdminUnlocked } from "./admin-gate.functions";

export type SiteSettings = {
  id: string;
  store_name: string | null;
  pix_key: string | null;
  pix_discount_percent: number | null;
  pix_provider: string | null;
  pix_city: string | null;
  pix_holder: string | null;
  hide_pix_holder: boolean | null;
  speedmax_token: string | null;
  whatsapp_api_url: string | null;
  whatsapp_api_token: string | null;
  whatsapp_number: string | null;
  zoepay_enabled: boolean | null;
  google_merchant_id: string | null;
};

export type AdminOrder = {
  id: string;
  status: string;
  total_amount: number;
  customer_name: string;
  customer_email: string;
  customer_phone: string | null;
  tracking_code: string | null;
  speedmax_synced: boolean | null;
  source: string | null;
  created_at: string;
  items_count: number;
};

export type AdminStats = {
  visitors_online: number;
  visits_today: number;
  pending_count: number;
  total_orders: number;
  paid_count: number;
  paid_revenue: number;
};

export const adminGetSettings = createServerFn({ method: "GET" }).handler(async () => {
  await requireAdminUnlocked();
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { data, error } = await supabaseAdmin
    .from("site_settings")
    .select("*")
    .eq("id", "default")
    .maybeSingle();
  if (error) throw new Error(error.message);
  return (data as SiteSettings) ?? null;
});

export const adminSaveSettings = createServerFn({ method: "POST" })
  .inputValidator((data: Partial<SiteSettings>) => data)
  .handler(async ({ data }) => {
    await requireAdminUnlocked();
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const patch = { ...data, id: "default", updated_at: new Date().toISOString() };
    const { error } = await supabaseAdmin.from("site_settings").upsert(patch, { onConflict: "id" });
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const adminListOrders = createServerFn({ method: "POST" })
  .inputValidator((data: { status?: string; search?: string; date?: string }) => data ?? {})
  .handler(async ({ data }) => {
    await requireAdminUnlocked();
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    let q = supabaseAdmin
      .from("orders")
      .select("id,status,total_amount,customer_name,customer_email,customer_phone,tracking_code,speedmax_synced,source,created_at,order_items(id)")
      .order("created_at", { ascending: false })
      .limit(200);
    if (data?.status && data.status !== "all") q = q.eq("status", data.status);
    if (data?.search) {
      const s = data.search.trim();
      q = q.or(`customer_name.ilike.%${s}%,customer_email.ilike.%${s}%,customer_phone.ilike.%${s}%,id.eq.${/^[0-9a-f-]{36}$/i.test(s) ? s : "00000000-0000-0000-0000-000000000000"}`);
    }
    if (data?.date) {
      const start = `${data.date}T00:00:00Z`;
      const end = `${data.date}T23:59:59Z`;
      q = q.gte("created_at", start).lte("created_at", end);
    }
    const { data: rows, error } = await q;
    if (error) throw new Error(error.message);
    return (rows ?? []).map((r: any) => ({
      ...r,
      items_count: Array.isArray(r.order_items) ? r.order_items.length : 0,
    })) as AdminOrder[];
  });

export const adminGetStats = createServerFn({ method: "GET" }).handler(async () => {
  await requireAdminUnlocked();
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const today = new Date();
  const startToday = new Date(today.getFullYear(), today.getMonth(), today.getDate()).toISOString();
  const [all, pending, paid] = await Promise.all([
    supabaseAdmin.from("orders").select("id", { count: "exact", head: true }),
    supabaseAdmin.from("orders").select("id", { count: "exact", head: true }).eq("status", "pending"),
    supabaseAdmin.from("orders").select("total_amount", { count: "exact" }).eq("status", "paid"),
  ]);
  const paidRevenue = (paid.data ?? []).reduce((s: number, r: any) => s + Number(r.total_amount ?? 0), 0);
  const visitsToday = await supabaseAdmin
    .from("orders")
    .select("id", { count: "exact", head: true })
    .gte("created_at", startToday);
  return {
    visitors_online: 1,
    visits_today: visitsToday.count ?? 0,
    pending_count: pending.count ?? 0,
    total_orders: all.count ?? 0,
    paid_count: paid.count ?? 0,
    paid_revenue: paidRevenue,
  } as AdminStats;
});

export const adminUpdateOrder = createServerFn({ method: "POST" })
  .inputValidator((data: { id: string; status?: string; tracking_code?: string }) => data)
  .handler(async ({ data }) => {
    await requireAdminUnlocked();
    if (!/^[0-9a-f-]{36}$/i.test(data.id)) throw new Error("Invalid order id");
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const patch: any = { updated_at: new Date().toISOString() };
    if (data.status) patch.status = data.status;
    if (data.tracking_code !== undefined) patch.tracking_code = data.tracking_code;
    const { error } = await supabaseAdmin.from("orders").update(patch).eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const adminDeleteTestOrders = createServerFn({ method: "POST" }).handler(async () => {
  await requireAdminUnlocked();
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { error } = await supabaseAdmin
    .from("orders")
    .delete()
    .or("customer_email.ilike.%teste%,customer_name.ilike.%teste%");
  if (error) throw new Error(error.message);
  return { ok: true };
});

export const adminResendSpeedmax = createServerFn({ method: "POST" }).handler(async () => {
  await requireAdminUnlocked();
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { data, error } = await supabaseAdmin
    .from("orders")
    .select("id")
    .eq("status", "paid")
    .or("tracking_code.is.null,speedmax_synced.eq.false");
  if (error) throw new Error(error.message);
  return { ok: true, queued: (data ?? []).length };
});
