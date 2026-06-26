import { createFileRoute, useParams, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { PRODUCTS } from "@/lib/products";
import { useCart } from "@/lib/cart-store";
import { toast } from "sonner";

const VALID_CATEGORIES = new Set([
  "suplementos",
  "creatina",
  "vitaminas",
  "pre-treino",
  "kits",
  "hipercaloricos",
  "barrinhas",
  "roupas",
]);

const CATEGORY_LABEL: Record<string, string> = {
  "suplementos": "Suplementos",
  "creatina": "Creatina",
  "vitaminas": "Vitaminas",
  "pre-treino": "Pré-Treino",
  "kits": "Kits",
  "hipercaloricos": "Hipercalóricos",
  "barrinhas": "Barrinhas",
  "roupas": "Roupas",
};

export const Route = createFileRoute("/$categoria")({
  component: CategoryPage,
});

function CategoryPage() {
  const { categoria } = useParams({ from: "/$categoria" });
  const addItem = useCart(state => state.addItem);

  if (!VALID_CATEGORIES.has(categoria)) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-black uppercase">Categoria não encontrada</h1>
        <Link to="/" className="text-orange-600 font-bold uppercase mt-4 inline-block">Voltar para a loja</Link>
      </div>
    );
  }

  const products = PRODUCTS.filter(p => p.category === categoria);
  const categoryName = CATEGORY_LABEL[categoria] ?? categoria;

  return (
    <div className="container px-4 py-12">
      <div className="flex flex-col gap-2 mb-12">
        <span className="text-orange-600 font-black italic uppercase tracking-widest text-xs">Explore nossa linha de</span>
        <h1 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter leading-none">
          {categoryName}
        </h1>
        <div className="h-2 w-24 bg-orange-600 mt-4" />
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {products.map((product) => (
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
                   decoding="async"
                   width={300}
                   height={300}
                   onError={(e) => {
                     (e.target as HTMLImageElement).src = 'https://bold-rush-s2acommerce.lovable.app/products/dad8ff31ec43.webp';
                   }}
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
      ) : (
        <div className="py-20 text-center">
           <p className="text-slate-500 font-bold uppercase italic">Nenhum produto encontrado nesta categoria ainda.</p>
           <Link to="/" className="text-orange-600 font-black uppercase italic mt-4 inline-block hover:underline">Voltar para a página inicial</Link>
        </div>
      )}
    </div>
  );
}
