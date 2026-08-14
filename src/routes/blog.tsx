import { createFileRoute, Link } from '@tanstack/react-router'
import { SEO } from '@/components/seo/SEO'
import { BLOG_POSTS } from '@/lib/blog'
import { Calendar, Clock, ChevronRight } from 'lucide-react'

export const Route = createFileRoute('/blog')({
  component: BlogPage,
})

function BlogPage() {
  return (
    <div className="container px-4 py-12">
      <SEO title="Blog WS Suplementos | Dicas de Suplementação e Performance" description="Fique por dentro das últimas novidades, guias e comparativos sobre suplementação esportiva." />
      
      <div className="flex flex-col gap-2 mb-12">
        <span className="text-orange-600 font-black italic uppercase tracking-widest text-xs">Conteúdo para sua evolução</span>
        <h1 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter leading-none">
          Ultra<span className="text-orange-600">Blog</span>
        </h1>
        <div className="h-2 w-24 bg-orange-600 mt-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => (
          <Link 
            key={post.id} 
            to="/blog/$slug" 
            params={{ slug: post.id }}
            className="group bg-white border rounded-[32px] overflow-hidden transition-all hover:shadow-2xl hover:border-orange-600/20 flex flex-col"
          >
            <div className="relative aspect-video overflow-hidden">
               <img 
                 src={post.image} 
                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                 alt={post.title}
               />
               <div className="absolute top-4 left-4 bg-orange-600 text-white text-[10px] px-3 py-1 font-black uppercase italic rounded-full">
                  {post.category}
               </div>
            </div>
            <div className="p-8 flex flex-col gap-4 flex-1">
               <div className="flex items-center gap-4 text-slate-400 text-[10px] font-bold uppercase tracking-widest italic">
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
               </div>
               <h3 className="text-xl font-black italic uppercase leading-tight group-hover:text-orange-600 transition-colors">
                 {post.title}
               </h3>
               <p className="text-slate-500 font-medium text-sm line-clamp-3 leading-relaxed">
                 {post.excerpt}
               </p>
               <div className="mt-auto pt-6 flex items-center text-orange-600 font-black italic uppercase text-xs tracking-tighter">
                  Ler Matéria <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
               </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
