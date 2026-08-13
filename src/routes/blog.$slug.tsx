import { createFileRoute, useParams, Link } from '@tanstack/react-router'
import { SEO } from '@/components/seo/SEO'
import { BLOG_POSTS } from '@/lib/blog'
import { Calendar, Clock, ChevronLeft, Share2 } from 'lucide-react'

export const Route = createFileRoute('/blog/$slug')({
  component: PostPage,
})

function PostPage() {
  const { slug } = useParams({ from: '/blog/$slug' });
  const post = BLOG_POSTS.find(p => p.id === slug);

  if (!post) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-black uppercase italic">Artigo não encontrado</h1>
        <Link to="/blog" className="text-orange-600 font-bold uppercase italic mt-4 inline-block hover:underline">Voltar para o Blog</Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <SEO title={`${post.title} | Skill Fitt Blog`} description={post.excerpt} />
      
      {/* Hero Header */}
      <div className="relative w-full h-[400px] md:h-[600px] bg-slate-950 overflow-hidden">
         <img src={post.image} className="w-full h-full object-cover opacity-40" alt={post.title} />
         <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent" />
         
         <div className="absolute inset-0 container px-4 flex flex-col justify-end pb-12">
            <Link to="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-xs font-black uppercase tracking-widest italic mb-8">
               <ChevronLeft className="h-4 w-4" /> Voltar ao Blog
            </Link>
            <div className="flex flex-col gap-6 max-w-4xl">
               <span className="bg-orange-600 text-white text-[10px] px-4 py-1.5 rounded-full font-black uppercase italic w-fit tracking-widest">
                  {post.category}
               </span>
               <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-[0.95] text-white">
                  {post.title}
               </h1>
               <div className="flex items-center gap-6 text-white/60 text-xs font-bold uppercase tracking-widest italic">
                  <span className="flex items-center gap-2"><Calendar className="h-4 w-4 text-orange-600" /> {post.date}</span>
                  <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-orange-600" /> {post.readTime} de leitura</span>
               </div>
            </div>
         </div>
      </div>

      <div className="container px-4 -mt-10 relative z-10">
         <div className="grid lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2 bg-white rounded-[40px] border p-8 md:p-16 shadow-xl prose prose-slate max-w-none prose-headings:italic prose-headings:uppercase prose-headings:font-black prose-headings:tracking-tighter prose-p:leading-relaxed prose-p:font-medium prose-strong:text-slate-900 prose-img:rounded-3xl">
               <div dangerouslySetInnerHTML={{ __html: post.content }} />
               
               <div className="mt-16 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-6">
                  <p className="text-sm font-bold text-slate-400 italic">Compartilhe este conhecimento:</p>
                  <div className="flex gap-3">
                     {['Facebook', 'Twitter', 'WhatsApp'].map(social => (
                        <button key={social} className="px-6 py-2.5 bg-slate-100 rounded-full text-xs font-black uppercase italic hover:bg-orange-600 hover:text-white transition-all">
                           {social}
                        </button>
                     ))}
                  </div>
               </div>
            </article>

            <aside className="flex flex-col gap-8">
               <div className="bg-slate-950 text-white rounded-[40px] p-8 shadow-2xl">
                  <h3 className="text-xl font-black italic uppercase tracking-tighter mb-6">Newsletter Skill Fitt</h3>
                  <p className="text-slate-400 text-sm font-medium mb-6">Receba novos artigos e ofertas exclusivas direto no seu e-mail.</p>
                  <div className="flex flex-col gap-3">
                     <input placeholder="Seu e-mail" className="h-14 bg-white/5 border border-white/10 rounded-2xl px-6 font-bold text-sm focus:border-orange-600 outline-none transition-all" />
                     <button className="h-14 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black uppercase italic tracking-widest transition-all">Inscrever</button>
                  </div>
               </div>

               <div className="bg-white rounded-[40px] border p-8 shadow-sm">
                  <h3 className="text-xl font-black italic uppercase tracking-tighter mb-6">Mais Lidos</h3>
                  <div className="flex flex-col gap-6">
                     {BLOG_POSTS.filter(p => p.id !== post.id).map(p => (
                        <Link key={p.id} to="/blog/$slug" params={{ slug: p.id }} className="group flex gap-4">
                           <div className="h-16 w-16 rounded-xl overflow-hidden shrink-0">
                              <img src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform" alt={p.title} />
                           </div>
                           <div className="flex flex-col">
                              <h4 className="text-sm font-black italic uppercase leading-tight group-hover:text-orange-600 transition-colors line-clamp-2">{p.title}</h4>
                              <span className="text-[10px] font-bold text-slate-400 mt-1 uppercase italic">{p.date}</span>
                           </div>
                        </Link>
                     ))}
                  </div>
               </div>
            </aside>
         </div>
      </div>
    </div>
  )
}
