import { createFileRoute, redirect, useRouter } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useState } from "react";
import { adminCheck, adminLock } from "@/lib/admin-gate.functions";
import {
  adminGetSettings,
  adminSaveSettings,
  adminListOrders,
  adminGetStats,
  adminUpdateOrder,
  adminDeleteTestOrders,
  adminResendSpeedmax,
  type SiteSettings,
  type AdminOrder,
  type AdminStats,
} from "@/lib/admin.functions";
import { toast } from "sonner";
import { LogOut, RefreshCw, Trash2, Search, Send, Zap } from "lucide-react";

export const Route = createFileRoute("/admin/")({
  beforeLoad: async () => {
    const res = await adminCheck();
    if (!res.unlocked) throw redirect({ to: "/admin/unlock" });
  },
  component: AdminPage,
});

const TABS = [
  { id: "orders", label: "Pedidos & Vendas" },
  { id: "blog", label: "Blog & SEO" },
  { id: "recovery", label: "Recuperação" },
] as const;

const STATUS_OPTIONS = [
  { id: "all", label: "Todos" },
  { id: "paid", label: "Pagos" },
  { id: "pending", label: "Pendentes" },
  { id: "shipped", label: "Enviados" },
  { id: "delivered", label: "Entregues" },
  { id: "cancelled", label: "Cancelados" },
];

const STATUS_BADGE: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-800",
  paid: "bg-emerald-100 text-emerald-800",
  shipped: "bg-blue-100 text-blue-800",
  delivered: "bg-violet-100 text-violet-800",
  cancelled: "bg-red-100 text-red-700",
};

function AdminPage() {
  const router = useRouter();
  const lock = useServerFn(adminLock);
  const [tab, setTab] = useState<(typeof TABS)[number]["id"]>("orders");

  async function handleLock() {
    await lock();
    router.navigate({ to: "/admin/unlock" });
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-black tracking-tight">Pedidos do Site</h1>
            <button
              className="text-[10px] text-red-500 font-bold uppercase mt-0.5"
              onClick={() => toast.info("Use a aba Pedidos → Limpar testes")}
            >
              LIMPAR PEDIDOS TESTE
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => router.invalidate()} className="h-9 px-3 rounded-lg bg-emerald-500 text-white text-xs font-black uppercase flex items-center gap-1.5">
              <RefreshCw className="h-3.5 w-3.5" /> Atualizar
            </button>
            <button onClick={handleLock} className="h-9 px-3 rounded-lg text-slate-500 hover:text-slate-900 text-xs font-bold uppercase flex items-center gap-1.5">
              <LogOut className="h-3.5 w-3.5" /> Sair
            </button>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 flex gap-6 border-b -mb-px">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`py-3 text-xs font-black uppercase tracking-wider border-b-2 transition-colors ${tab === t.id ? "border-emerald-500 text-emerald-600" : "border-transparent text-slate-400 hover:text-slate-600"}`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6 flex flex-col gap-6">
        {tab === "orders" && <OrdersTab />}
        {tab === "blog" && <PlaceholderTab title="Blog & SEO" desc="Gerencie posts do blog, meta tags, sitemap e indexação." />}
        {tab === "recovery" && <PlaceholderTab title="Recuperação de Carrinho" desc="Mensagens automáticas de Pix pendente via WhatsApp. Em breve." />}
      </main>
    </div>
  );
}

function OrdersTab() {
  return (
    <>
      <SettingsCard />
      <ResendSpeedmaxCard />
      <StatsCards />
      <OrdersListCard />
    </>
  );
}

function SettingsCard() {
  const getSettings = useServerFn(adminGetSettings);
  const saveSettings = useServerFn(adminSaveSettings);
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [showToken, setShowToken] = useState(false);
  const [showPanelPw, setShowPanelPw] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    getSettings().then((s) => setSettings(s || ({ id: "default" } as SiteSettings)));
  }, []);

  if (!settings) return <div className="bg-white rounded-2xl p-8 border text-sm text-slate-400">Carregando configurações…</div>;

  function update<K extends keyof SiteSettings>(k: K, v: SiteSettings[K]) {
    setSettings((s) => ({ ...(s as SiteSettings), [k]: v }));
  }

  async function onSave() {
    setSaving(true);
    try {
      await saveSettings({ data: settings as any });
      toast.success("Configurações salvas");
    } catch (e: any) {
      toast.error(e.message ?? "Erro ao salvar");
    } finally {
      setSaving(false);
    }
  }

  return (
    <section className="bg-white rounded-2xl border p-6 flex flex-col gap-5">
      <div>
        <h2 className="text-lg font-black">Configurações Gerais</h2>
        <p className="text-xs text-slate-500">Gerencie Pix, SpeedMax e segurança do painel.</p>
      </div>

      <div>
        <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Provedor de Pix</label>
        <div className="flex gap-2 mt-2">
          <button
            onClick={() => update("pix_provider", "pix_static")}
            className={`px-4 h-9 rounded-lg text-xs font-black uppercase ${settings.pix_provider === "pix_static" ? "bg-emerald-500 text-white" : "bg-slate-100 text-slate-600"}`}
          >
            Pix Estático
          </button>
          <button
            onClick={() => update("pix_provider", "zoepay")}
            className={`px-4 h-9 rounded-lg text-xs font-black uppercase ${settings.pix_provider === "zoepay" ? "bg-emerald-500 text-white" : "bg-slate-100 text-slate-600"}`}
          >
            ZoePay (Gateway)
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Field label="Chave Pix">
          <input value={settings.pix_key ?? ""} onChange={(e) => update("pix_key", e.target.value)} className="input" />
        </Field>
        <Field label="Cidade (QR Code)">
          <input value={settings.pix_city ?? ""} onChange={(e) => update("pix_city", e.target.value)} className="input" />
        </Field>
      </div>

      <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
        <Field label="👤 Titular do Pix (Exibição no Checkout)">
          <input value={settings.pix_holder ?? ""} onChange={(e) => update("pix_holder", e.target.value)} className="input" />
        </Field>
        <p className="text-[10px] text-slate-500 mt-2">QR Code: {settings.pix_holder || "—"} · Total: {settings.pix_holder || "—"} · {settings.store_name || "Skill Fitt"}</p>
      </div>

      <label className="flex items-center gap-2 text-sm text-slate-700">
        <input type="checkbox" checked={!!settings.hide_pix_holder} onChange={(e) => update("hide_pix_holder", e.target.checked)} />
        Ocultar informações do titular no Checkout
        <span className="text-[10px] text-slate-400 font-medium">(quando marcado, o aviso "Recebedor verificado" não aparece)</span>
      </label>

      <div className="grid md:grid-cols-2 gap-4">
        <Field label="Token SpeedMax" right={<button type="button" onClick={() => setShowToken((s) => !s)} className="text-emerald-600 text-[10px] font-bold uppercase">{showToken ? "Ocultar" : "Mostrar"}</button>}>
          <input type={showToken ? "text" : "password"} value={settings.speedmax_token ?? ""} onChange={(e) => update("speedmax_token", e.target.value)} className="input" />
        </Field>
        <Field label="Senha do Painel" right={<button type="button" onClick={() => setShowPanelPw((s) => !s)} className="text-emerald-600 text-[10px] font-bold uppercase">{showPanelPw ? "Ocultar" : "Mostrar"}</button>}>
          <input type={showPanelPw ? "text" : "password"} placeholder="Definida via variável de ambiente" disabled className="input bg-slate-50 text-slate-400" />
        </Field>
      </div>

      <div className="border-t pt-4">
        <p className="text-xs font-black uppercase text-slate-600 tracking-widest mb-3">API WhatsApp (Automação)</p>
        <div className="grid md:grid-cols-2 gap-4">
          <Field label="URL da API (Evolution/Z-API)">
            <input value={settings.whatsapp_api_url ?? ""} placeholder="Ex: https://api.z-api.io/instances/" onChange={(e) => update("whatsapp_api_url", e.target.value)} className="input" />
          </Field>
          <Field label="Token da API">
            <input value={settings.whatsapp_api_token ?? ""} placeholder="API Key ou Bearer Token" onChange={(e) => update("whatsapp_api_token", e.target.value)} className="input" />
          </Field>
        </div>
        <div className="mt-4">
          <Field label="Número do WhatsApp (Remetente)">
            <input value={settings.whatsapp_number ?? ""} placeholder="Ex: 5511999999999" onChange={(e) => update("whatsapp_number", e.target.value)} className="input" />
          </Field>
          <p className="text-[10px] text-slate-400 mt-1">Informe o número conectado na API (com DDI e DDD, só números).</p>
        </div>
        <p className="text-[10px] text-slate-400 mt-3 italic">Configurando esses campos, as mensagens de recuperação de Pix pendentes serão enviadas automaticamente pelo sistema após 10 minutos de inatividade.</p>
      </div>

      <button onClick={onSave} disabled={saving} className="self-start h-10 px-5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-black uppercase tracking-wider disabled:opacity-50">
        {saving ? "Salvando…" : "Salvar Configurações"}
      </button>
    </section>
  );
}

function ResendSpeedmaxCard() {
  const resend = useServerFn(adminResendSpeedmax);
  const [loading, setLoading] = useState(false);

  async function onResend() {
    setLoading(true);
    try {
      const r = await resend();
      toast.success(`${r.queued} pedidos reenviados para SpeedMax`);
    } catch (e: any) {
      toast.error(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-white rounded-2xl border p-5 flex items-center justify-between gap-4">
      <div>
        <h3 className="font-black text-sm">Reenviar pedidos para SpeedMax</h3>
        <p className="text-xs text-slate-500">Reenvia em lote todos os pedidos com status <b>pago</b> que ainda não têm código de rastreio.</p>
      </div>
      <button onClick={onResend} disabled={loading} className="h-9 px-4 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-black uppercase flex items-center gap-1.5 disabled:opacity-50">
        <Send className="h-3.5 w-3.5" /> {loading ? "Enviando…" : "Reenviar agora"}
      </button>
    </section>
  );
}

function StatsCards() {
  const getStats = useServerFn(adminGetStats);
  const [stats, setStats] = useState<AdminStats | null>(null);

  useEffect(() => {
    getStats().then(setStats).catch(() => {});
  }, []);

  const items = [
    { label: "VISITANTES ONLINE", value: stats?.visitors_online ?? "—", sub: "Pico hoje · Recorde geral", color: "text-emerald-600", icon: "👥" },
    { label: "VISITAS HOJE", value: stats?.visits_today ?? "—", sub: "visualizações", color: "text-blue-600", icon: "👁" },
    { label: "PENDENTES", value: stats?.pending_count ?? "—", sub: "aguardando Pix", color: "text-amber-600", icon: "⏱" },
  ];
  const totals = [
    { label: "Total Pedidos", value: stats?.total_orders ?? "—" },
    { label: "Pagos", value: stats?.paid_count ?? "—" },
    { label: "Receita Paga", value: `R$ ${(stats?.paid_revenue ?? 0).toFixed(2)}`, accent: "text-emerald-600" },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((i) => (
          <div key={i.label} className="bg-white border rounded-2xl p-5">
            <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-slate-500">
              <span>{i.label}</span>
              <span>{i.icon}</span>
            </div>
            <p className={`text-3xl font-black mt-1 ${i.color}`}>{i.value}</p>
            <p className="text-[10px] text-slate-400 mt-1">{i.sub}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        {totals.map((t) => (
          <div key={t.label} className="bg-white border rounded-2xl p-5">
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">{t.label}</p>
            <p className={`text-2xl font-black mt-1 ${t.accent ?? ""}`}>{t.value}</p>
          </div>
        ))}
      </div>
    </>
  );
}

function OrdersListCard() {
  const list = useServerFn(adminListOrders);
  const update = useServerFn(adminUpdateOrder);
  const purge = useServerFn(adminDeleteTestOrders);
  const [orders, setOrders] = useState<AdminOrder[]>([]);
  const [status, setStatus] = useState("all");
  const [search, setSearch] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);

  async function load() {
    setLoading(true);
    try {
      const rows = await list({ data: { status, search, date } });
      setOrders(rows);
    } catch (e: any) {
      toast.error(e.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
     
  }, [status, date]);

  async function setOrderStatus(id: string, newStatus: string) {
    try {
      await update({ data: { id, status: newStatus } });
      toast.success("Status atualizado");
      load();
    } catch (e: any) {
      toast.error(e.message);
    }
  }

  return (
    <section className="bg-white border rounded-2xl p-5 flex flex-col gap-4">
      <div className="flex flex-col md:flex-row gap-3 md:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && load()}
            placeholder="Pesquisar por número, nome, e-mail, CPF ou telefone…"
            className="input w-full pl-10"
          />
        </div>
        <button onClick={load} className="h-10 px-4 rounded-lg bg-slate-900 text-white text-xs font-black uppercase">Buscar</button>
        <button onClick={async () => { await purge(); toast.success("Pedidos de teste removidos"); load(); }} className="h-10 px-4 rounded-lg bg-red-50 text-red-600 text-xs font-black uppercase flex items-center gap-1.5">
          <Trash2 className="h-3.5 w-3.5" /> Limpar testes
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {STATUS_OPTIONS.map((s) => (
          <button
            key={s.id}
            onClick={() => setStatus(s.id)}
            className={`h-8 px-3 rounded-full text-[11px] font-black uppercase tracking-wide ${status === s.id ? "bg-emerald-500 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
          >
            {s.label}
          </button>
        ))}
        <div className="ml-auto flex items-center gap-2">
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="input h-8 text-xs" />
          <button onClick={() => setDate(new Date().toISOString().slice(0, 10))} className="text-[11px] font-black uppercase text-slate-500">Hoje</button>
          <button onClick={() => setDate("")} className="text-[11px] font-black uppercase text-slate-500">Limpar</button>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {loading ? (
          <p className="text-sm text-slate-400 py-8 text-center">Carregando pedidos…</p>
        ) : orders.length === 0 ? (
          <p className="text-sm text-slate-400 py-8 text-center">Nenhum pedido encontrado</p>
        ) : orders.map((o) => (
          <div key={o.id} className="border rounded-xl p-4 flex flex-col md:flex-row md:items-center gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-black text-sm">#UG_{o.id.slice(0, 8)}</span>
                <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${STATUS_BADGE[o.status] ?? "bg-slate-100 text-slate-600"}`}>{o.status}</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-slate-100 text-slate-500">{o.source ?? "organic"}</span>
                {o.tracking_code && <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-blue-100 text-blue-700">{o.tracking_code}</span>}
                {o.customer_phone && <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-emerald-100 text-emerald-700 flex items-center gap-1"><Zap className="h-3 w-3" /> WhatsApp</span>}
              </div>
              <p className="text-xs text-slate-700 mt-1 truncate">{o.customer_name} · {o.customer_email}</p>
              <p className="text-[10px] text-slate-400 mt-0.5">{new Date(o.created_at).toLocaleString("pt-BR")}</p>
            </div>
            <div className="text-right">
              <p className="font-black">R$ {Number(o.total_amount).toFixed(2)}</p>
              <p className="text-[10px] text-slate-400">{o.items_count} {o.items_count === 1 ? "item" : "itens"}</p>
            </div>
            <select
              value={o.status}
              onChange={(e) => setOrderStatus(o.id, e.target.value)}
              className="input h-9 text-xs"
            >
              {STATUS_OPTIONS.filter((s) => s.id !== "all").map((s) => (
                <option key={s.id} value={s.id}>{s.label}</option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </section>
  );
}

function PlaceholderTab({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white border rounded-2xl p-10 text-center">
      <h2 className="text-xl font-black">{title}</h2>
      <p className="text-sm text-slate-500 mt-2">{desc}</p>
    </div>
  );
}

function Field({ label, right, children }: { label: string; right?: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">{label}</label>
        {right}
      </div>
      {children}
    </div>
  );
}
