import { createFileRoute, Link } from "@tanstack/react-router";
import { SEO } from "@/components/seo/SEO";
import { Button } from "@/components/ui/button";
import { Truck, ShieldCheck, CreditCard, ChevronRight, Star, Clock, Plus, Lock, Shirt } from "lucide-react";
import { PRODUCTS } from "@/lib/products";
import { BLOG_POSTS } from "@/lib/blog";
import { useCart } from "@/lib/cart-store";




import { toast } from "sonner";



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
  const addItem = useCart(state => state.addItem);
  
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

      {/* Best Sellers Section */}
      <section className="container px-4 py-16 bg-white">
        <div className="flex flex-col gap-2 mb-10 text-center md:text-left">
           <h2 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter">Os Mais Vendidos</h2>
           <p className="text-muted-foreground text-sm font-bold uppercase tracking-widest">A performance que você busca está aqui</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {PRODUCTS.slice(0, 4).map((product) => (
            <Link 
              key={product.id} 
              to="/produto/$slug" 
              params={{ slug: product.id }}
              className="group relative bg-white border rounded-[20px] md:rounded-[32px] p-4 md:p-6 transition-all hover:shadow-2xl hover:border-orange-600/20 flex flex-col gap-3 md:gap-4"
            >
              <div className="relative aspect-square bg-slate-50 rounded-lg md:rounded-2xl overflow-hidden p-3 md:p-6 flex items-center justify-center">
                 <img 
                   src={product.image} 
                   className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 mix-blend-multiply" 
                   alt={product.name}
                   loading="lazy"
                 />
                 <div className="absolute top-2 left-2 bg-slate-900 text-white text-[8px] px-2 py-0.5 font-black uppercase italic rounded-full tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Ver Detalhes</div>
              </div>
              <div className="flex flex-col gap-1">
                 <span className="text-[8px] md:text-[10px] font-black uppercase text-slate-400 tracking-widest italic">{product.brand}</span>
                 <h3 className="font-black italic uppercase text-xs md:text-base leading-tight group-hover:text-orange-600 transition-colors h-8 md:h-10 overflow-hidden line-clamp-2">
                   {product.name}
                 </h3>
                 <div className="flex items-center gap-0.5 md:gap-1 my-0.5 md:my-1">
                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="h-2 w-2 md:h-3 md:w-3 fill-orange-500 text-orange-500" />)}
                 </div>
                 <div className="mt-1 md:mt-2 flex flex-col">
                    <span className="text-base md:text-xl font-black text-slate-900 leading-none">R$ {product.price.toFixed(2)}</span>
                    <span className="text-orange-600 font-bold italic text-[10px] md:text-sm mt-0.5 md:mt-1">Pix R$ {product.pixPrice.toFixed(2)}</span>
                 </div>
              </div>
              <Button 
                className="bg-green-600 hover:bg-green-500 text-white font-black uppercase italic rounded-full py-3 md:py-5 mt-1 md:mt-2 transition-colors text-[10px] md:text-sm h-10 md:h-auto"
                onClick={(e) => {
                  e.preventDefault();
                  addItem(product);
                  toast.success("Adicionado ao carrinho!");
                }}
              >
                Comprar
              </Button>
            </Link>
          ))}
        </div>
      </section>

      {/* Product Highlight Row - Whey */}
      <section className="bg-slate-950 py-12 md:py-16 overflow-hidden">
        <div className="container px-4 grid lg:grid-cols-5 gap-8 md:gap-12 items-center">
          <div className="lg:col-span-2 flex flex-col gap-5 md:gap-6 text-white order-2 lg:order-1">
             <span className="text-orange-600 font-black italic uppercase tracking-widest text-xs md:text-sm">Linha Whey Protein</span>
             <h2 className="text-3xl sm:text-4xl md:text-5xl font-black italic uppercase leading-[0.9]">Whey Protein <br /> Concentrado 80%</h2>
             <p className="text-slate-400 font-medium text-sm md:text-base">Proteína de alta concentração com 24g por dose. Qualidade Growth Supplements com o melhor preço.</p>
             <div className="flex gap-4 md:gap-8 py-4 border-y border-slate-800">
                <div className="flex flex-col">
                   <span className="text-xl md:text-2xl font-black text-orange-500">80%</span>
                   <span className="text-[10px] uppercase font-bold text-slate-500">Concentração</span>
                </div>
                <div className="flex flex-col">
                   <span className="text-xl md:text-2xl font-black text-white italic">NF-e</span>
                   <span className="text-[10px] uppercase font-bold text-slate-500">Nota Fiscal</span>
                </div>
             </div>
             <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                   <span className="text-slate-500 line-through text-sm italic">R$ 172,11</span>
                   <span className="bg-green-600/20 text-green-500 text-[10px] px-2 py-0.5 rounded font-black uppercase tracking-widest">Oferta</span>
                </div>
                <span className="text-3xl md:text-4xl font-black">R$ 108,43</span>
                <p className="text-orange-500 font-bold italic text-sm md:text-base">R$ 97,59 no Pix (10% OFF)</p>
             </div>
             <Button className="bg-green-600 hover:bg-green-500 text-white font-black uppercase italic w-full h-14 md:h-auto md:py-8 text-base md:text-lg rounded-full">Comprar Agora</Button>
          </div>
          <div className="lg:col-span-3 order-1 lg:order-2">
             <img src="https://bold-rush-s2acommerce.lovable.app/products/b7332e96d23f.webp" className="w-full max-w-xs sm:max-w-sm md:max-w-lg mx-auto drop-shadow-[0_20px_60px_rgba(234,88,12,0.2)] transform hover:rotate-3 transition-transform" alt="Whey Growth" />
          </div>
        </div>
      </section>

      {/* Trust Badges for Google Ads Compliance */}
      <section className="bg-slate-50 border-y py-12">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center gap-3">
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                <Truck className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="font-black italic uppercase text-xs">Frete Grátis</h4>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Nas compras acima <br /> de R$ 199,00</p>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                <Lock className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-black italic uppercase text-xs">Compra Segura</h4>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Criptografia SSL <br /> de 256 bits</p>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                <CreditCard className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-black italic uppercase text-xs">Desconto Pix</h4>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Ganhe 10% OFF <br /> pagamento instantâneo</p>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                <ShieldCheck className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="font-black italic uppercase text-xs">Revenda Oficial</h4>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Produtos originais <br /> com nota fiscal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Apparel Highlight Section */}
      <section className="bg-white py-20 overflow-hidden border-t">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-orange-600/10 blur-[100px] rounded-full group-hover:bg-orange-600/20 transition-all duration-1000" />
              <img 
                src="https://bold-rush-s2acommerce.lovable.app/products/fem-outlet-29.webp" 
                alt="Roupas Ultra Gym" 
                className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col gap-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest italic w-fit mx-auto lg:mx-0">
                <Shirt className="h-3 w-3" /> New Collection
              </div>
              <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none">
                VISTA A <br />
                <span className="text-orange-600">ARMADURA</span>
              </h2>
              <p className="text-lg text-slate-500 font-bold uppercase italic tracking-tight max-w-md mx-auto lg:mx-0">
                Linha de vestuário exclusiva desenvolvida para proporcionar conforto e estilo durante os treinos mais intensos.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="flex flex-col p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <span className="text-2xl font-black italic text-slate-900">100%</span>
                  <span className="text-[10px] font-bold uppercase text-slate-400">Poliamida</span>
                </div>
                <div className="flex flex-col p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <span className="text-2xl font-black italic text-slate-900">DRY</span>
                  <span className="text-[10px] font-bold uppercase text-slate-400">Technology</span>
                </div>
              </div>
              <Link to="/$categoria" params={{ categoria: 'roupas' }}>
                <Button size="lg" className="bg-green-600 hover:bg-green-500 text-white font-black uppercase italic text-lg px-12 h-16 w-full lg:w-fit rounded-full shadow-xl transition-all">
                  Ver Coleção Completa
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Kits */}
      <section className="container px-4 py-14 md:py-20">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 md:mb-12">
          <div className="flex flex-col gap-1">
             <h2 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter">Kits em Destaque</h2>
             <p className="text-muted-foreground font-bold text-xs md:text-sm uppercase">Combos com desconto direto na linha de kits</p>
          </div>
          <Button variant="outline" className="hidden sm:flex rounded-full px-6 font-bold border-slate-200">Ver Todos <ChevronRight className="ml-2 h-4 w-4" /></Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.filter(p => p.category === 'kits').map((product) => (
            <Link 
              key={product.id} 
              to="/produto/$slug"
              params={{ slug: product.id }}
              className="group relative bg-white border rounded-[32px] p-8 transition-all hover:shadow-2xl hover:border-orange-600/20 flex flex-col gap-6"
            >
              <div className="relative aspect-square bg-slate-50 rounded-2xl overflow-hidden p-8">
                 <img 
                   src={product.image} 
                   className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" 
                   alt={product.name}
                 />
                 <div className="absolute top-4 left-4 bg-slate-900 text-white text-[10px] px-3 py-1 font-black uppercase italic rounded-full tracking-widest">Economia</div>
              </div>
              <div className="flex flex-col gap-2">
                 <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest italic">{product.brand}</span>
                 <h3 className="font-black italic uppercase text-lg leading-tight group-hover:text-orange-600 transition-colors">{product.name}</h3>
                 <div className="mt-4 flex flex-col">
                    <span className="text-xs text-slate-400 line-through italic">R$ {product.originalPrice.toFixed(2)}</span>
                    <span className="text-2xl font-black text-slate-900 leading-none">R$ {product.price.toFixed(2)}</span>
                    <span className="text-orange-600 font-bold italic text-sm mt-1">Pix R$ {product.pixPrice.toFixed(2)}</span>
                 </div>
              </div>
              <Button className="bg-green-600 hover:bg-green-500 text-white font-black uppercase italic rounded-full py-6 mt-2">Comprar</Button>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-slate-50 py-20 border-t">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto bg-white border rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-10 shadow-xl">
             <div className="flex-1 flex flex-col gap-4 text-center md:text-left">
                <h2 className="text-3xl font-black italic uppercase tracking-tighter leading-tight">Junte-se ao <br /><span className="text-orange-600">Time Ultra Gym</span></h2>
                <p className="text-slate-500 font-medium">Receba ofertas exclusivas, dicas de treino e lançamentos direto no seu e-mail.</p>
             </div>
             <div className="flex-1 w-full flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="Seu melhor e-mail" 
                  className="h-16 w-full rounded-full border border-slate-200 px-8 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-orange-600/20 focus:border-orange-600 transition-all"
                />
                <Button className="h-16 w-full bg-green-600 hover:bg-green-500 text-white font-black uppercase italic rounded-full text-lg shadow-lg transition-all">
                  Cadastrar Agora
                </Button>
                <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest italic">Ao assinar, você concorda com nossa Política de Privacidade.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="container px-4 py-24 bg-slate-50 border-t">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-black italic uppercase tracking-tighter leading-none">Ultra<span className="text-orange-600">News</span></h2>
            <p className="text-slate-400 text-sm font-bold uppercase tracking-widest italic">Dicas de quem entende de performance</p>
          </div>
          <Link to="/blog">
            <Button variant="outline" className="rounded-full px-8 font-black uppercase italic border-slate-200 hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all">Ver Todo o Blog</Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.slice(0, 3).map((post) => (
            <Link 
              key={post.id} 
              to="/blog/$slug" 
              params={{ slug: post.id }}
              className="group bg-white border rounded-[32px] overflow-hidden transition-all hover:shadow-xl hover:border-orange-600/20 flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden">
                <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={post.title} />
              </div>
              <div className="p-6 flex flex-col gap-3">
                <span className="text-[10px] font-black uppercase text-orange-600 italic tracking-widest">{post.category}</span>
                <h3 className="font-black italic uppercase text-lg leading-tight group-hover:text-orange-600 transition-colors line-clamp-2">{post.title}</h3>
                <div className="flex items-center text-[10px] font-bold text-slate-400 uppercase italic">
                  <Clock className="h-3 w-3 mr-1" /> {post.readTime} de leitura
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container px-4 py-24 bg-white border-t">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-2 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
             <h2 className="text-4xl font-black italic uppercase tracking-tighter">Dúvidas Comuns</h2>
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


      {/* Subscription Teaser */}
      <section className="bg-orange-600 py-16">
        <div className="container px-4 text-center flex flex-col items-center gap-6">
           <span className="bg-white/20 text-white text-xs font-black uppercase px-3 py-1 rounded-full tracking-widest italic">Novidade em Breve</span>
           <h2 className="text-4xl md:text-6xl font-black italic uppercase text-white tracking-tighter">Assinatura Ultra Gym</h2>
           <p className="text-orange-100 font-bold max-w-2xl text-lg leading-relaxed uppercase italic tracking-tight">
             A maneira mais inteligente de manter sua suplementação em dia. Escolha seus produtos, defina o intervalo e relaxe.
           </p>
           <div className="flex flex-wrap justify-center gap-8 mt-4">
              <div className="flex items-center gap-2 text-white font-black italic uppercase text-xs">
                 <Clock className="h-4 w-4" /> Entrega Automática
              </div>
              <div className="flex items-center gap-2 text-white font-black italic uppercase text-xs">
                 <Star className="h-4 w-4" /> 15% de Desconto Real
              </div>
              <div className="flex items-center gap-2 text-white font-black italic uppercase text-xs">
                 <ShieldCheck className="h-4 w-4" /> Sem Multas ou Taxas
              </div>
           </div>
           <Button className="bg-white text-orange-600 hover:bg-slate-100 font-black uppercase italic text-lg px-12 py-8 rounded-full shadow-2xl mt-4">Quero ser Avisado</Button>
        </div>
      </section>
    </div>
  );
}
