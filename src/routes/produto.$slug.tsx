import { createFileRoute, useParams, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ShieldCheck, Truck, Star, ChevronLeft, Heart, Award, Zap, FileCheck, Lock, Plus, Minus, Share2, Check } from "lucide-react";
import { PRODUCTS } from "@/lib/products";
import { useCart } from "@/lib/cart-store";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { trackViewItem } from "@/lib/tracking";


export const Route = createFileRoute("/produto/$slug")({
  component: ProductPage,
});

function ProductPage() {
  const { slug } = useParams({ from: "/produto/$slug" });
  const addItem = useCart(state => state.addItem);
  const [qty, setQty] = useState(1);
  const [selectedFlavor, setSelectedFlavor] = useState<string | null>(null);
  const [tab, setTab] = useState<"desc" | "nutri" | "benef">("desc");

  const product = PRODUCTS.find(p => p.id === slug);

  useEffect(() => {
    if (product) {
      trackViewItem({
        id: product.id,
        name: product.name,
        brand: (product as any).brand,
        category: (product as any).category,
        price: product.price,
      });
    }
  }, [product?.id]);

  if (!product) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-black uppercase">Produto não encontrado</h1>
        <Link to="/" className="text-orange-600 font-bold uppercase mt-4 inline-block">Voltar para a loja</Link>
      </div>
    );
  }

  const flavors = product.flavors ?? [];
  const installment = (product.price / 10).toFixed(2);
  const savings = (product.originalPrice - product.price).toFixed(2);

  return (
    <div className="flex flex-col bg-white">
      {/* Breadcrumb */}
      <div className="container px-4 pt-6">
        <Link to="/" className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400 hover:text-orange-600 transition-colors">
          <ChevronLeft className="h-3.5 w-3.5" /> Loja
          <span className="text-slate-300 mx-1">/</span>
          <span className="text-slate-400">{product.brand}</span>
          <span className="text-slate-300 mx-1">/</span>
          <span className="text-slate-900 truncate max-w-[180px] sm:max-w-none">{product.name}</span>
        </Link>
      </div>

      {/* Cinematic Hero */}
      <section className="container px-4 py-6 md:py-10">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10">

          {/* Image — dark cinematic stage */}
          <div className="lg:col-span-7">
            <div className="relative rounded-[28px] md:rounded-[40px] overflow-hidden bg-gradient-to-br from-zinc-950 via-black to-zinc-900 aspect-square lg:aspect-[5/6] border border-white/5 group">
              {/* glow */}
              <div className="absolute inset-0 bg-grid-neon opacity-[0.07]" />
              <div className="absolute -top-1/3 -left-1/3 w-2/3 h-2/3 bg-orange-500/30 blur-[120px] rounded-full" />
              <div className="absolute -bottom-1/3 -right-1/3 w-2/3 h-2/3 bg-orange-600/20 blur-[140px] rounded-full" />

              {/* top badges */}
              <div className="absolute top-5 left-5 right-5 z-20 flex items-start justify-between gap-3">
                <div className="flex flex-col gap-2">
                  <span className="inline-flex items-center gap-1.5 bg-orange-500 text-black px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                    <Zap className="h-3 w-3 fill-black" /> Em estoque
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur text-white px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.18em] border border-white/10">
                    <FileCheck className="h-3 w-3" /> NF-e
                  </span>
                </div>
                <button className="h-10 w-10 rounded-full bg-white/10 backdrop-blur border border-white/10 text-white hover:bg-white/20 transition-colors grid place-items-center" aria-label="Compartilhar">
                  <Share2 className="h-4 w-4" />
                </button>
              </div>

              {/* product */}
              <img
                src={product.image}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-contain p-10 md:p-16 drop-shadow-[0_30px_60px_rgba(255,77,0,0.35)] group-hover:scale-105 transition-transform duration-700"
              />

              {/* bottom watermark */}
              <div className="absolute bottom-5 left-5 right-5 z-20 flex items-end justify-between">
                <span className="font-display text-white/15 text-5xl md:text-7xl leading-none uppercase select-none">
                  {product.brand.split(" ")[0]}
                </span>
                <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.25em]">Drop 2026</span>
              </div>
            </div>

            {/* Thumbnail strip */}
            <div className="hidden md:flex items-center gap-3 mt-4">
              {[0, 1, 2, 3].map((i) => (
                <button
                  key={i}
                  className={`relative w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all ${i === 0 ? "border-orange-500" : "border-slate-100 hover:border-slate-300"} bg-slate-50`}
                >
                  <img src={product.image} alt="" className="absolute inset-0 w-full h-full object-contain p-2 mix-blend-multiply" />
                </button>
              ))}
            </div>
          </div>

          {/* Purchase Rail — sticky on desktop */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28 flex flex-col gap-7">

              {/* Brand + Title */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Award className="h-3.5 w-3.5 text-orange-600" />
                  <span className="text-orange-600 font-black italic uppercase tracking-[0.2em] text-[11px]">{product.brand}</span>
                </div>
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase leading-[0.9] text-slate-950">
                  {product.name}
                </h1>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="h-4 w-4 fill-orange-500 text-orange-500" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-slate-400">4.9 · 482 avaliações</span>
                  <span className="text-slate-200">·</span>
                  <span className="text-[11px] font-black uppercase tracking-widest text-green-600">Em estoque</span>
                </div>
              </div>

              {/* Modern Price Stack */}
              <div className="relative bg-gradient-to-br from-slate-950 to-zinc-900 rounded-3xl p-6 md:p-7 text-white overflow-hidden">
                <div className="absolute -top-20 -right-20 w-56 h-56 bg-orange-500/20 blur-[80px] rounded-full" />
                <div className="relative z-10 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="bg-orange-500 text-black text-[10px] px-2.5 py-1 rounded-full font-black uppercase tracking-widest">
                      Economize R$ {savings}
                    </span>
                    <span className="text-white/40 line-through italic text-sm">R$ {product.originalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex flex-wrap items-end gap-x-3 gap-y-1">
                    <span className="font-display text-5xl md:text-6xl leading-none">R$ {product.price.toFixed(2)}</span>
                    <span className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">à vista cartão</span>
                  </div>
                  <div className="flex items-center justify-between gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3 backdrop-blur">
                    <div className="flex items-center gap-2.5">
                      <div className="h-9 w-9 rounded-xl bg-orange-500/15 grid place-items-center text-orange-400">
                        <Zap className="h-4 w-4" />
                      </div>
                      <div className="flex flex-col leading-none">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">No Pix</span>
                        <span className="font-display text-2xl text-orange-400">R$ {product.pixPrice.toFixed(2)}</span>
                      </div>
                    </div>
                    <span className="bg-orange-500/15 text-orange-400 text-[10px] px-2 py-1 rounded-md font-black uppercase tracking-widest">
                      10% OFF
                    </span>
                  </div>
                  <p className="text-[11px] font-medium text-white/60">
                    Ou em até <strong className="text-white">10x de R$ {installment}</strong> sem juros no cartão
                  </p>
                </div>
              </div>

              {/* Variant Picker */}
              {flavors.length > 0 && (
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">
                      {product.category === "roupas" ? "Tamanho" : "Sabor"}
                    </span>
                    <span className="text-[11px] font-bold text-slate-400">
                      {selectedFlavor ?? "Selecione uma opção"}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {flavors.map((flavor) => {
                      const active = selectedFlavor === flavor;
                      return (
                        <button
                          key={flavor}
                          onClick={() => setSelectedFlavor(flavor)}
                          className={`relative px-5 py-3 rounded-2xl text-xs font-black italic uppercase tracking-wide border-2 transition-all ${
                            active
                              ? "border-orange-600 bg-orange-50 text-orange-700 scale-[1.02]"
                              : "border-slate-200 bg-white text-slate-700 hover:border-slate-400 hover:-translate-y-0.5"
                          }`}
                        >
                          {flavor}
                          {active && (
                            <span className="absolute -top-1.5 -right-1.5 h-5 w-5 rounded-full bg-orange-600 text-white grid place-items-center">
                              <Check className="h-3 w-3" />
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Qty + Buy */}
              <div className="flex flex-col gap-3">
                <div className="flex items-stretch gap-3">
                  <div className="flex items-center bg-slate-50 border border-slate-200 rounded-full overflow-hidden">
                    <button
                      onClick={() => setQty(q => Math.max(1, q - 1))}
                      className="h-14 w-12 grid place-items-center text-slate-500 hover:text-orange-600 transition-colors"
                      aria-label="Diminuir"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="font-display text-xl w-10 text-center text-slate-900">{qty}</span>
                    <button
                      onClick={() => setQty(q => q + 1)}
                      className="h-14 w-12 grid place-items-center text-slate-500 hover:text-orange-600 transition-colors"
                      aria-label="Aumentar"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  <Button
                    className="flex-1 h-14 bg-green-600 hover:bg-green-500 text-white font-black uppercase italic tracking-wide text-sm md:text-base rounded-full shadow-[0_10px_30px_-8px_rgba(34,197,94,0.55)] transition-all hover:shadow-[0_14px_40px_-8px_rgba(34,197,94,0.75)] hover:-translate-y-0.5"
                    onClick={() => {
                      for (let i = 0; i < qty; i++) addItem(product);
                      toast.success(`${qty}x ${product.name.split("-")[0].trim()} adicionado!`);
                    }}
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" /> Adicionar ao Carrinho
                  </Button>

                  <button
                    className="h-14 w-14 rounded-full border-2 border-slate-200 text-slate-400 hover:border-orange-600 hover:text-orange-600 transition-colors grid place-items-center"
                    aria-label="Favoritar"
                  >
                    <Heart className="h-5 w-5" />
                  </button>
                </div>

                <Button
                  variant="outline"
                  className="h-12 rounded-full border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-black uppercase italic text-xs tracking-widest"
                  onClick={() => {
                    for (let i = 0; i < qty; i++) addItem(product);
                    toast.success("Indo para o checkout...");
                  }}
                >
                  Comprar Agora · Pix R$ {product.pixPrice.toFixed(2)}
                </Button>
              </div>

              {/* Trust mini-cards */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { icon: Truck, label: "Frete grátis", sub: "Acima R$199" },
                  { icon: FileCheck, label: "NF-e", sub: "Original" },
                  { icon: Lock, label: "Compra", sub: "SSL 256-bit" },
                ].map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="flex flex-col items-center text-center gap-1 p-3 rounded-2xl border border-slate-100 bg-slate-50/60">
                    <Icon className="h-4 w-4 text-orange-600" />
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-900 leading-none">{label}</span>
                    <span className="text-[9px] font-bold uppercase text-slate-400 leading-none">{sub}</span>
                  </div>
                ))}
              </div>

              {/* Delivery calc placeholder */}
              <div className="flex items-center justify-between gap-3 bg-white border border-slate-200 rounded-2xl px-4 py-3">
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-orange-600" />
                  <div className="flex flex-col leading-tight">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Entrega Expressa</span>
                    <span className="text-xs font-bold text-slate-900">Calcular frete e prazo</span>
                  </div>
                </div>
                <input
                  placeholder="CEP"
                  className="w-24 h-9 px-3 rounded-full border border-slate-200 bg-slate-50 text-xs font-bold text-slate-900 focus:outline-none focus:border-orange-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modular Content — Tabs */}
      <section className="border-t border-slate-100 bg-slate-50/60">
        <div className="container px-4 py-14 md:py-20">

          {/* Tab nav */}
          <div className="flex items-center gap-1 mb-8 md:mb-12 overflow-x-auto no-scrollbar -mx-4 px-4">
            {[
              { id: "desc" as const, label: "Descrição" },
              { id: "benef" as const, label: "Benefícios" },
              { id: "nutri" as const, label: "Tabela Nutricional" },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`shrink-0 px-5 md:px-7 h-12 rounded-full font-black uppercase italic text-xs md:text-sm tracking-wide transition-all ${
                  tab === t.id
                    ? "bg-slate-950 text-white shadow-[0_10px_30px_-12px_rgba(0,0,0,0.5)]"
                    : "bg-white text-slate-500 border border-slate-200 hover:text-slate-900"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Tab panels */}
          {tab === "desc" && (
            <div className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-8 flex flex-col gap-8">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-[0.25em] text-orange-600">Sobre o produto</span>
                  <h2 className="font-display text-3xl md:text-5xl uppercase leading-[0.95] mt-3 text-slate-950">
                    Performance projetada<br />em cada dose
                  </h2>
                </div>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                  {product.description} Desenvolvido para atletas de alto rendimento, o {product.name} oferece a pureza e a concentração necessárias para seus objetivos mais ambiciosos.
                </p>
                <div className="relative pl-6 border-l-2 border-orange-500">
                  <h3 className="font-display text-xl md:text-2xl uppercase mb-3 text-slate-950">Por que escolher o {product.brand}?</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    Utilizamos apenas as melhores matérias-primas importadas, com laudos de pureza e processos de fabricação certificados. Cada dose é projetada para máxima absorção e eficácia biológica.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-4">
                <div className="bg-orange-50 border border-orange-100 rounded-3xl p-6 flex flex-col gap-4 sticky top-28">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-orange-600 text-white grid place-items-center">
                      <Award className="h-5 w-5" />
                    </div>
                    <span className="font-display text-lg uppercase text-slate-950">Qualidade garantida</span>
                  </div>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    Este produto possui nota fiscal eletrônica e laudo de pureza disponível para consulta via suporte.
                  </p>
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="bg-white rounded-2xl p-3 border border-orange-100">
                      <span className="font-display text-2xl text-orange-600">100%</span>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Original</p>
                    </div>
                    <div className="bg-white rounded-2xl p-3 border border-orange-100">
                      <span className="font-display text-2xl text-orange-600">NF-e</span>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Garantida</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {tab === "benef" && (
            <div className="flex flex-col gap-8">
              <div className="max-w-2xl">
                <span className="text-[11px] font-black uppercase tracking-[0.25em] text-orange-600">Principais benefícios</span>
                <h2 className="font-display text-3xl md:text-5xl uppercase leading-[0.95] mt-3 text-slate-950">
                  O que você ganha<br />em cada treino
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                {[
                  "Recuperação muscular acelerada",
                  "Alta biodisponibilidade e absorção",
                  "Auxilia no ganho de massa magra",
                  "Testado e aprovado em laboratório",
                  "Sem adição de açúcares ou glúten",
                  "Sabor e solubilidade superiores",
                ].map((item, i) => (
                  <div key={item} className="group flex items-start gap-4 p-5 bg-white rounded-3xl border border-slate-100 hover:border-orange-600/30 hover:-translate-y-0.5 transition-all">
                    <div className="shrink-0 h-10 w-10 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white grid place-items-center font-display text-sm">
                      0{i + 1}
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="font-black uppercase italic text-xs tracking-wide text-slate-900 leading-tight">{item}</p>
                      <span className="text-[10px] font-bold uppercase text-slate-400 tracking-widest">Comprovado</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === "nutri" && (
            <div className="grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-5">
                <span className="text-[11px] font-black uppercase tracking-[0.25em] text-orange-600">Informação nutricional</span>
                <h2 className="font-display text-3xl md:text-5xl uppercase leading-[0.95] mt-3 text-slate-950">
                  Cada dose,<br />pura performance
                </h2>
                <p className="text-slate-500 font-medium mt-4 leading-relaxed">
                  Composição transparente, sem surpresas. Valores referentes a uma dose padrão do produto.
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="relative bg-slate-950 text-white rounded-[32px] p-8 md:p-10 overflow-hidden">
                  <div className="absolute -top-20 -right-20 w-72 h-72 bg-orange-500/15 blur-[100px] rounded-full" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-2">
                      <span className="font-display text-2xl uppercase">Tabela Nutricional</span>
                      <span className="h-2 w-2 bg-orange-500 rounded-full animate-pulse" />
                    </div>
                    <div className="flex flex-col">
                      {[
                        { label: "Valor Energético", value: "120 kcal" },
                        { label: "Proteínas", value: "24g" },
                        { label: "Carboidratos", value: "3g" },
                        { label: "Gorduras Totais", value: "1.5g" },
                        { label: "Sódio", value: "55mg" },
                        { label: "BCAA", value: "5.5g" },
                      ].map((row) => (
                        <div key={row.label} className="flex justify-between items-center border-b border-white/5 py-4 group/row">
                          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/50 group-hover/row:text-orange-400 transition-colors">
                            {row.label}
                          </span>
                          <span className="font-display text-2xl uppercase">{row.value}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-[10px] text-white/30 font-bold uppercase mt-6 tracking-widest">
                      * Valores Diários com base em uma dieta de 2.000 kcal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Recommendations */}
      <section className="container px-4 py-16 md:py-20 border-t border-slate-100">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-orange-600">Combine com</span>
            <h2 className="font-display text-3xl md:text-4xl uppercase leading-none mt-2 text-slate-950">
              Quem comprou, também levou
            </h2>
          </div>
          <Link to="/$categoria" params={{ categoria: product.category }} className="hidden sm:inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-500 hover:text-orange-600 transition-colors">
            Ver toda categoria →
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {PRODUCTS.filter(p => p.id !== product.id).slice(0, 4).map((p) => (
            <Link
              key={p.id}
              to="/produto/$slug"
              params={{ slug: p.id }}
              className="group bg-white border border-slate-100 rounded-3xl p-4 md:p-5 transition-all hover:shadow-xl hover:border-orange-600/20 hover:-translate-y-1 flex flex-col gap-3"
            >
              <div className="aspect-square bg-slate-50 rounded-2xl p-4 flex items-center justify-center relative overflow-hidden">
                <img src={p.image} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" alt={p.name} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[9px] font-black uppercase text-slate-400 tracking-widest italic">{p.brand}</span>
                <h4 className="text-xs md:text-sm font-black italic uppercase tracking-tight group-hover:text-orange-600 transition-colors line-clamp-2 h-9 md:h-10">{p.name}</h4>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-display text-xl md:text-2xl text-slate-950">R$ {p.price.toFixed(2)}</span>
                </div>
                <span className="text-[10px] font-bold italic text-orange-600">Pix R$ {p.pixPrice.toFixed(2)}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Mobile sticky buy bar */}
      <div className="lg:hidden sticky bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur border-t border-slate-200 px-4 py-3 flex items-center gap-3 shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.15)]">
        <div className="flex flex-col leading-none">
          <span className="font-display text-xl text-slate-950">R$ {product.price.toFixed(2)}</span>
          <span className="text-[10px] font-bold uppercase text-orange-600">Pix R$ {product.pixPrice.toFixed(2)}</span>
        </div>
        <Button
          className="flex-1 h-12 bg-green-600 hover:bg-green-500 text-white font-black uppercase italic text-sm rounded-full"
          onClick={() => {
            for (let i = 0; i < qty; i++) addItem(product);
            toast.success("Adicionado ao carrinho!");
          }}
        >
          <ShoppingCart className="mr-2 h-4 w-4" /> Comprar
        </Button>
      </div>
    </div>
  );
}
