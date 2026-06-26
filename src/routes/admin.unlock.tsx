import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { adminUnlock } from "@/lib/admin-gate.functions";
import { Lock } from "lucide-react";

export const Route = createFileRoute("/admin/unlock")({
  component: UnlockPage,
});

function UnlockPage() {
  const router = useRouter();
  const unlock = useServerFn(adminUnlock);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await unlock({ data: { password } });
      if (res.ok) {
        await router.navigate({ to: "/admin" });
      } else {
        setError("Senha incorreta");
      }
    } catch {
      setError("Erro ao verificar senha");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <form onSubmit={onSubmit} className="w-full max-w-sm bg-white rounded-2xl shadow-xl border p-8 flex flex-col gap-5">
        <div className="flex flex-col items-center gap-2">
          <div className="bg-emerald-500/10 text-emerald-600 p-3 rounded-full">
            <Lock className="h-6 w-6" />
          </div>
          <h1 className="text-xl font-black uppercase tracking-tight">Painel Admin</h1>
          <p className="text-xs text-slate-500">Digite a senha de acesso</p>
        </div>
        <input
          type="password"
          autoFocus
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha do painel"
          className="h-11 px-4 rounded-xl border border-slate-200 focus:border-emerald-500 focus:outline-none text-sm"
          maxLength={128}
        />
        {error && <p className="text-red-600 text-xs font-semibold text-center">{error}</p>}
        <button
          type="submit"
          disabled={loading || !password}
          className="h-11 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-black uppercase tracking-wider text-sm disabled:opacity-50 transition-colors"
        >
          {loading ? "Verificando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
}
