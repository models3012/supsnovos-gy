import { createFileRoute, Link } from "@tanstack/react-router";
import { SEO } from "@/components/seo/SEO";
import { Button } from "@/components/ui/button";
import { Truck, ShieldCheck, CreditCard, ChevronRight, Star, Plus, Lock } from "lucide-react";

const hazeHardcoreImg = "https://bold-rush-s2acommerce.lovable.app/products/dad8ff31ec43.webp";




export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ultra Gym Supplements | Performance Profissional" },
      { name: "description", content: "Loja oficial Ultra Gym. Whey Protein, Creatina e Suplementos de alta performance com o melhor preço e entrega rápida." },
    ],
  }),
  component: Index,
});

function Index() {

  
  return (

    <div className="flex flex-col">
      <SEO 
        title="Ultra Gym Supplements | Loja Oficial" 
        description="Encontre os melhores suplementos para sua evolução. Whey Protein, Creatina, Pré-treino e muito mais."
      />

      {/* Modern Bento Hero */}
      <section className="relative w-full bg-black overflow-hidden">
        <div className="absolute inset-0 bg-grid-neon opacity-50" />
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-orange-600/30 blur-[180px] rounded-full" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-orange-500/20 blur-[180px] rounded-full" />

        <div className="container relative z-10 px-4 py-6 md:py-12">
          <div className="grid grid-cols-12 gap-3 md:gap-4 auto-rows-[110px] sm:auto-rows-[140px] md:auto-rows-[160px]">

            {/* Main hero card */}
            <div className="col-span-12 lg:col-span-8 row-span-4 lg:row-span-3 relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 group">
              <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" alt="" className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:opacity-35 group-hover:scale-105 transition-all duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
              <div className="relative z-10 h-full flex flex-col justify-between p-5 sm:p-6 md:p-10">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="flex items-center gap-1.5 bg-orange-500 text-black px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                    <Star className="h-3 w-3 fill-black" /> Drop 2026
                  </span>
                  <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.25em]">Performance Series</span>
                </div>

                <div className="flex flex-col gap-3 md:gap-4 max-w-xl">
                  <h1 className="font-display text-white text-[44px] leading-[0.9] sm:text-7xl md:text-[112px] md:leading-[0.85] uppercase">
                    Evolução <br />
                    <span className="text-orange-500 [text-shadow:0_0_40px_rgba(255,77,0,0.5)]">sem limites</span>
                  </h1>
                  <p className="text-white/60 text-[13px] sm:text-sm md:text-base font-medium max-w-md">
                    Suplementação de elite, entrega expressa e desconto de 10% no Pix.
                  </p>
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-1 sm:mt-2">
                    <Link to="/$categoria" params={{ categoria: 'suplementos' }} className="w-full sm:w-auto">
                      <Button className="w-full sm:w-auto bg-green-500 hover:bg-green-400 text-black font-black uppercase tracking-wider rounded-full h-12 md:h-14 px-7 md:px-9 animate-neon-pulse">
                        Comprar Agora <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                    <div className="flex flex-col">
                      <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">A partir de</span>
                      <span className="text-white font-display text-2xl sm:text-3xl leading-none">R$ 62,14</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured product card */}
            <div className="col-span-12 sm:col-span-7 lg:col-span-4 row-span-2 relative rounded-3xl overflow-hidden border border-orange-500/30 bg-gradient-to-br from-orange-500/15 via-zinc-900 to-black group">
              <div className="absolute inset-0 bg-orange-500/20 blur-[100px] opacity-60" />
              <Link to="/produto/$slug" params={{ slug: 'haze-hardcore' }} className="relative z-10 h-full flex items-center p-5 md:p-7 gap-4">
                <div className="flex-1 flex flex-col gap-2">
                  <span className="text-orange-400 text-[9px] font-black uppercase tracking-[0.25em]">Mais Vendido</span>
                  <h3 className="font-display text-white text-2xl md:text-3xl leading-none uppercase">Haze<br/>Hardcore</h3>
                  <div className="flex items-center gap-0.5">
                    {[1,2,3,4,5].map(i => <Star key={i} className="h-3 w-3 fill-orange-400 text-orange-400" />)}
                  </div>
                  <span className="text-white font-display text-2xl mt-1">R$ 62,14</span>
                </div>
                <img src={hazeHardcoreImg} alt="Haze Hardcore" className="w-32 md:w-40 drop-shadow-[0_20px_40px_rgba(255,77,0,0.4)] animate-float group-hover:scale-110 transition-transform duration-500" />
              </Link>
            </div>

            {/* Pix badge card */}
            <div className="col-span-6 sm:col-span-5 lg:col-span-2 row-span-1 relative rounded-3xl overflow-hidden border border-white/10 bg-zinc-900 hover:border-orange-500/40 transition-colors group">
              <div className="h-full flex flex-col justify-center items-center text-center p-3">
                <span className="font-display text-orange-500 text-3xl md:text-4xl leading-none">10%</span>
                <span className="text-white/70 text-[10px] font-bold uppercase tracking-widest mt-1">Off no Pix</span>
              </div>
            </div>

            {/* NF-e badge */}
            <div className="col-span-6 sm:col-span-7 lg:col-span-2 row-span-1 relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-zinc-900 to-black hover:border-orange-500/40 transition-colors">
              <div className="h-full flex flex-col justify-center items-center text-center p-3">
                <ShieldCheck className="h-6 w-6 text-orange-500 mb-1" />
                <span className="text-white text-[10px] font-black uppercase tracking-widest">100% Original</span>
                <span className="text-white/40 text-[9px] font-bold uppercase mt-0.5">NF-e Garantida</span>
              </div>
            </div>

            {/* Frete */}
            <div className="col-span-12 sm:col-span-5 lg:col-span-2 row-span-1 relative rounded-3xl overflow-hidden border border-white/10 bg-zinc-900 hover:border-orange-500/40 transition-colors">
              <div className="h-full flex items-center gap-3 p-4">
                <div className="bg-orange-500/15 text-orange-500 p-2 rounded-xl">
                  <Truck className="h-5 w-5" />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-white text-xs font-black uppercase">Frete Grátis</span>
                  <span className="text-white/40 text-[10px] font-bold uppercase">Todo o Brasil</span>
                </div>
              </div>
            </div>

            {/* Categorias mini */}
            <Link to="/$categoria" params={{ categoria: 'creatina' }} className="col-span-6 sm:col-span-3 lg:col-span-2 row-span-1 relative rounded-3xl overflow-hidden border border-white/10 bg-zinc-900 hover:border-orange-500/40 transition-all group">
              <div className="h-full flex items-center justify-center p-3 text-center">
                <span className="font-display text-white text-xl md:text-2xl uppercase group-hover:text-orange-500 transition-colors">Creatina →</span>
              </div>
            </Link>

            <Link to="/$categoria" params={{ categoria: 'kits' }} className="col-span-6 sm:col-span-4 lg:col-span-2 row-span-1 relative rounded-3xl overflow-hidden border border-white/10 bg-orange-500 hover:bg-orange-400 transition-colors group">
              <div className="h-full flex items-center justify-center p-3 text-center">
                <span className="font-display text-black text-xl md:text-2xl uppercase">Kits →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>



      {/* Promotional Grid Banners */}
      <section className="container px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link 
            to="/$categoria" 
            params={{ categoria: 'suplementos' }}
            className="relative h-80 rounded-[32px] overflow-hidden group border-2 border-slate-100 hover:border-orange-600/20 transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10" />
            <img src="https://bold-rush-s2acommerce.lovable.app/products/b7332e96d23f.webp" className="absolute right-0 bottom-0 w-2/3 object-contain z-0 group-hover:scale-110 transition-transform duration-500 mix-blend-multiply" alt="Proteínas" />
            <div className="relative z-20 h-full p-8 flex flex-col justify-end gap-2">
              <span className="text-orange-500 font-black italic uppercase text-xs tracking-widest">Linha Whey</span>
              <h3 className="text-white text-3xl font-black italic uppercase leading-none">PROTEÍNA <br /> DE ELITE</h3>
              <p className="text-slate-400 text-xs font-bold uppercase italic mt-2">Até 40% OFF nos combos</p>
            </div>
          </Link>

          <Link 
            to="/$categoria" 
            params={{ categoria: 'creatina' }}
            className="relative h-80 rounded-[32px] overflow-hidden group border-2 border-slate-100 hover:border-orange-600/20 transition-all bg-slate-950"
          >
            <div className="absolute inset-0 bg-orange-600/5 z-0" />
            <img src="https://bold-rush-s2acommerce.lovable.app/products/farma_50e35d098594.webp" className="absolute right-[-20%] top-1/2 -translate-y-1/2 w-4/5 object-contain z-10 group-hover:rotate-6 transition-transform duration-500" alt="Creatina" />
            <div className="relative z-20 h-full p-8 flex flex-col justify-center gap-2">
              <span className="text-orange-500 font-black italic uppercase text-xs tracking-widest">Força Explosiva</span>
              <h3 className="text-white text-3xl font-black italic uppercase leading-none">CREATINA <br /> PURA</h3>
              <p className="text-slate-400 text-xs font-bold uppercase italic mt-2">Recuperação Máxima</p>
            </div>
          </Link>

          <Link 
            to="/$categoria" 
            params={{ categoria: 'pre-treino' }}
            className="relative h-80 rounded-[32px] overflow-hidden group border-2 border-slate-100 hover:border-orange-600/20 transition-all md:col-span-2 lg:col-span-1"
          >
            <div className="absolute inset-0 bg-gradient-to-l from-orange-600 via-orange-600/40 to-transparent z-10 opacity-20" />
            <img src="https://bold-rush-s2acommerce.lovable.app/products/dad8ff31ec43.webp" className="absolute left-[-10%] bottom-0 h-4/5 object-contain z-0 group-hover:translate-x-4 transition-transform duration-500" alt="Pré-Treino" />
            <div className="relative z-20 h-full p-8 flex flex-col justify-end items-end gap-2 text-right">
              <span className="text-orange-600 font-black italic uppercase text-xs tracking-widest">Foco Extremo</span>
              <h3 className="text-slate-950 text-3xl font-black italic uppercase leading-none">HAZE <br /> HARDCORE</h3>
              <p className="text-slate-500 text-xs font-bold uppercase italic mt-2">Energia Instantânea</p>
            </div>
          </Link>
        </div>
      </section>


      {/* Trust Badges */}
      <section className="bg-white border-b py-8">
        <div className="container px-4 grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          <div className="flex items-center gap-3 justify-center md:justify-start border-r md:border-r-0 last:border-0 pr-4 md:pr-0">
            <div className="bg-orange-100 p-2 rounded-lg text-orange-600">
               <Truck className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-black uppercase">Frete Grátis</p>
              <p className="text-[10px] text-slate-500">Para todo o Brasil</p>
            </div>
          </div>
          <div className="flex items-center gap-3 justify-center md:justify-start border-r md:border-r-0 last:border-0 pr-4 md:pr-0">
            <div className="bg-orange-100 p-2 rounded-lg text-orange-600">
               <CreditCard className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-black uppercase">Desconto Pix</p>
              <p className="text-[10px] text-slate-500">Ganhe 10% OFF</p>
            </div>
          </div>
          <div className="flex items-center gap-3 justify-center md:justify-start border-r md:border-r-0 last:border-0 pr-4 md:pr-0">
            <div className="bg-orange-100 p-2 rounded-lg text-orange-600">
               <Star className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-black uppercase">Consultoria</p>
              <p className="text-[10px] text-slate-500">Com nutricionista</p>
            </div>
          </div>
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="bg-orange-100 p-2 rounded-lg text-orange-600">
               <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-black uppercase">Compra 100%</p>
              <p className="text-[10px] text-slate-500">Segura e garantida</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Categories */}
      <section className="container px-4 py-12">
        <div className="flex flex-col gap-2 text-center mb-10">
           <h2 className="text-3xl font-black italic uppercase tracking-tighter">Objetivos</h2>
           <p className="text-muted-foreground text-sm font-bold uppercase tracking-widest">Massa Muscular · Definição · Energia · Saúde</p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
          {[
            { name: 'Creatina', img: 'https://bold-rush-s2acommerce.lovable.app/products/farma_50e35d098594.webp', slug: 'creatina' },
            { name: 'Whey', img: 'https://bold-rush-s2acommerce.lovable.app/products/b7332e96d23f.webp', slug: 'suplementos' },
            { name: 'Pré-Treino', img: 'https://bold-rush-s2acommerce.lovable.app/products/7cc8cd45e4ac.webp', slug: 'pre-treino' },
            { name: 'Kits', img: 'https://bold-rush-s2acommerce.lovable.app/products/2d8178cf16de.webp', slug: 'kits' },
            { name: 'Vitaminas', img: 'https://bold-rush-s2acommerce.lovable.app/products/farma_90d878ade7a8.webp', slug: 'vitaminas' },
            { name: 'Roupas', img: 'https://bold-rush-s2acommerce.lovable.app/products/fem-outlet-29.webp', slug: 'roupas' },
          ].map((cat) => (
            <Link 
              key={cat.name} 
              to="/$categoria" 
              params={{ categoria: cat.slug }}
              className="flex flex-col items-center gap-2 md:gap-3 group cursor-pointer"
            >
              <div className="w-full aspect-square bg-slate-50 rounded-xl md:rounded-2xl p-2 md:p-4 border border-slate-100 group-hover:border-orange-600/30 group-hover:bg-orange-50 transition-all">
                <img src={cat.img} alt={cat.name} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform" loading="lazy" />
              </div>
              <span className="text-[10px] md:text-xs font-black uppercase tracking-tighter group-hover:text-orange-600 text-center">{cat.name}</span>
            </Link>
          ))}
        </div>

      </section>

      {/* FAQ Section */}
      <section className="container px-4 py-16 bg-white border-t">
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-2 text-center">
             <h2 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter">Dúvidas Comuns</h2>
             <p className="text-slate-400 text-sm font-bold uppercase tracking-widest italic">Tudo o que você precisa saber antes de comprar</p>
          </div>
          <div className="grid gap-4">
            {[
              { q: "Qual o prazo de entrega?", a: "O prazo varia de acordo com sua região, mas a maioria das entregas para capitais ocorre em até 3-5 dias úteis." },
              { q: "Os produtos são originais?", a: "Sim! Somos revendedores oficiais de marcas premium como Growth Supplements, com nota fiscal e garantia total de procedência." },
              { q: "Como ganho o desconto no Pix?", a: "O desconto de 10% é aplicado automaticamente ao selecionar 'Pix' como forma de pagamento no checkout." },
              { q: "Posso retirar meu pedido?", a: "No momento operamos exclusivamente com envios via transportadoras parceiras para garantir a agilidade e segurança." }
            ].map((item, i) => (
              <details key={i} className="group border rounded-[24px] p-5 md:p-6 open:border-orange-600 open:bg-orange-50/50 hover:border-orange-600 transition-all duration-300 cursor-pointer">
                <summary className="font-black italic uppercase tracking-tight text-base md:text-lg group-open:text-orange-600 group-hover:text-orange-600 transition-colors flex items-center justify-between list-none [&::-webkit-details-marker]:hidden">
                  <span className="flex-1 pr-3">{item.q}</span>
                  <Plus className="h-5 w-5 shrink-0 text-slate-300 group-open:text-orange-600 group-open:rotate-45 transition-all" />
                </summary>
                <p className="text-slate-500 font-medium text-sm leading-relaxed mt-4 pt-4 border-t border-slate-100">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
