import { createFileRoute, Link, useSearch } from '@tanstack/react-router'
import { SEO } from '@/components/seo/SEO'
import { PRODUCTS } from '@/lib/products'
import { Button } from '@/components/ui/button'
import { Star, Search as SearchIcon } from 'lucide-react'
import { useCart } from '@/lib/cart-store'
import { toast } from 'sonner'

export const Route = createFileRoute('/busca')({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      q: (search.q as string) || '',
    }
  },
  component: SearchResultsPage,
})

function SearchResultsPage() {
  const { q } = useSearch({ from: '/busca' })
  const addItem = useCart(state => state.addItem)

  const filteredProducts = PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(q.toLowerCase()) || 
    p.brand.toLowerCase().includes(q.toLowerCase()) ||
    p.category.toLowerCase().includes(q.toLowerCase())
  )

  return (
    <div className="container px-4 py-12">
      <SEO title={`Resultados para "${q}" | Ultra Gym`} description={`Buscando por ${q} na Ultra Gym Supplements.`} />
      
      <div className="flex flex-col gap-2 mb-12">
        <span className="text-orange-600 font-black italic uppercase tracking-widest text-xs">Resultados da busca por</span>
        <h1 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter leading-none">
          "{q}"
        </h1>
        <div className="h-2 w-24 bg-orange-600 mt-4" />
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <Link 
              key={product.id} 
              to="/produto/$slug" 
              params={{ slug: product.id }}
              className="group relative bg-white border rounded-[32px] p-6 transition-all hover:shadow-2xl hover:border-orange-600/20 flex flex-col gap-4"
            >
              <div className="relative aspect-square bg-slate-50 rounded-2xl overflow-hidden p-6 flex items-center justify-center">
                 <img 
                   src={product.image} 
                   className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 mix-blend-multiply" 
                   alt={product.name}
                 />
              </div>
              <div className="flex flex-col gap-1">
                 <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest italic">{product.brand}</span>
                 <h3 className="font-black italic uppercase text-base leading-tight group-hover:text-orange-600 transition-colors h-10 overflow-hidden line-clamp-2">
                   {product.name}
                 </h3>
                 <div className="flex items-center gap-1 my-1">
                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="h-3 w-3 fill-orange-500 text-orange-500" />)}
                 </div>
                 <div className="mt-2 flex flex-col">
                    <span className="text-xl font-black text-slate-900 leading-none">R$ {product.price.toFixed(2)}</span>
                    <span className="text-orange-600 font-bold italic text-sm mt-1">Pix R$ {product.pixPrice.toFixed(2)}</span>
                 </div>
              </div>
              <Button 
                className="bg-slate-950 hover:bg-orange-600 text-white font-black uppercase italic rounded-full py-5 mt-2 transition-colors"
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
        <div className="py-20 text-center flex flex-col items-center gap-6">
           <div className="bg-slate-50 p-8 rounded-full">
             <SearchIcon className="h-12 w-12 text-slate-200" />
           </div>
           <div className="flex flex-col gap-2">
             <p className="text-slate-950 font-black uppercase italic text-xl">Nenhum resultado encontrado</p>
             <p className="text-slate-500 font-medium">Tente buscar por termos mais genéricos como "Whey" ou "Creatina".</p>
           </div>
           <Link to="/" className="text-orange-600 font-black uppercase italic mt-4 hover:underline">Voltar para a página inicial</Link>
        </div>
      )}
    </div>
  )
}
