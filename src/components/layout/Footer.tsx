import { Link } from "@tanstack/react-router";
import { ShieldCheck, Lock, Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full bg-white border-t pt-16 pb-8">
      <div className="container px-4">
        {/* Top Section: Brand & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center space-x-2">
              <span className="inline-block font-black text-3xl tracking-tighter uppercase italic">
                Ultra<span className="text-orange-600">Gym</span>
              </span>
            </Link>
            <p className="text-sm text-slate-500 font-medium leading-relaxed">
              Performance Profissional e Suplementação de Elite. Qualidade garantida com o melhor preço do Brasil.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="bg-slate-100 p-2.5 rounded-full text-slate-600 hover:bg-orange-600 hover:text-white transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-100 p-2.5 rounded-full text-slate-600 hover:bg-orange-600 hover:text-white transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-100 p-2.5 rounded-full text-slate-600 hover:bg-orange-600 hover:text-white transition-all">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-sm font-black uppercase italic tracking-widest text-slate-900">Categorias</h3>
            <nav className="flex flex-col gap-3">
              <Link to="/$categoria" params={{ categoria: "suplementos" }} className="text-sm font-bold text-slate-500 hover:text-orange-600 transition-colors uppercase italic">Whey Protein</Link>
              <Link to="/$categoria" params={{ categoria: "creatina" }} className="text-sm font-bold text-slate-500 hover:text-orange-600 transition-colors uppercase italic">Creatina</Link>
              <Link to="/$categoria" params={{ categoria: "pre-treino" }} className="text-sm font-bold text-slate-500 hover:text-orange-600 transition-colors uppercase italic">Pré-Treino</Link>
              <Link to="/$categoria" params={{ categoria: "hipercaloricos" }} className="text-sm font-bold text-slate-500 hover:text-orange-600 transition-colors uppercase italic">Hipercalóricos</Link>
              <Link to="/$categoria" params={{ categoria: "barrinhas" }} className="text-sm font-bold text-slate-500 hover:text-orange-600 transition-colors uppercase italic">Barrinhas</Link>
              <Link to="/$categoria" params={{ categoria: "kits" }} className="text-sm font-bold text-slate-500 hover:text-orange-600 transition-colors uppercase italic">Kits Completos</Link>
              <Link to="/$categoria" params={{ categoria: "vitaminas" }} className="text-sm font-bold text-slate-500 hover:text-orange-600 transition-colors uppercase italic">Vitaminas</Link>
            </nav>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-sm font-black uppercase italic tracking-widest text-slate-900">Institucional</h3>
            <nav className="flex flex-col gap-3">
              <Link to="/sobre-nos" className="text-sm font-bold text-slate-500 hover:text-orange-600 transition-colors uppercase italic">Sobre Nós</Link>
              <Link to="/politica-de-envio" className="text-sm font-bold text-slate-500 hover:text-orange-600 transition-colors uppercase italic">Envio e Prazos</Link>
              <Link to="/politica-de-trocas" className="text-sm font-bold text-slate-500 hover:text-orange-600 transition-colors uppercase italic">Trocas e Devoluções</Link>
              <Link to="/politica-de-reembolso" className="text-sm font-bold text-slate-500 hover:text-orange-600 transition-colors uppercase italic">Reembolso</Link>
              <Link to="/politica-de-privacidade" className="text-sm font-bold text-slate-500 hover:text-orange-600 transition-colors uppercase italic">Privacidade</Link>
              <Link to="/termos-de-uso" className="text-sm font-bold text-slate-500 hover:text-orange-600 transition-colors uppercase italic">Termos e Condições</Link>
              <Link to="/blog" className="text-sm font-bold text-slate-500 hover:text-orange-600 transition-colors uppercase italic">Blog</Link>
            </nav>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-sm font-black uppercase italic tracking-widest text-slate-900">Atendimento</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-orange-600 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-xs font-black uppercase text-slate-400">WhatsApp</span>
                  <span className="text-sm font-bold">(34) 99887-7665</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-orange-600 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-xs font-black uppercase text-slate-400">E-mail</span>
                  <span className="text-sm font-bold">contato@ultragym.net</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-orange-600 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-xs font-black uppercase text-slate-400">Localização</span>
                  <span className="text-sm font-bold">Nova Ponte - MG</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mid Section: Payment & Security Seals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-12 border-y">
          <div className="flex flex-col gap-6">
            <h3 className="text-xs font-black uppercase italic tracking-widest text-slate-400">Formas de Pagamento</h3>
            <div className="flex flex-wrap gap-4 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
              <img src="https://logospng.org/download/pix/logo-pix-icone-512.png" className="h-6" alt="Pix" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-6" alt="Visa" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-6" alt="Mastercard" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Elo_logo.png" className="h-6" alt="Elo" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" className="h-6" alt="Amex" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Hipercard_logo.png" className="h-6" alt="Hipercard" />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-xs font-black uppercase italic tracking-widest text-slate-400">Segurança & Verificação</h3>
            <div className="flex flex-wrap gap-3">
              <a 
                href="https://transparencyreport.google.com/safe-browsing/search?url=ultragym.net" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-slate-50 border rounded-xl px-4 py-2 hover:border-orange-600 transition-colors group"
              >
                <Lock className="h-4 w-4 text-green-600 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase leading-none">Google Safe</span>
                  <span className="text-[8px] font-bold text-slate-400 uppercase">Site Seguro</span>
                </div>
              </a>
              <a 
                href="https://www.bcb.gov.br/estabilidadefinanceira/pix" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-slate-50 border rounded-xl px-4 py-2 hover:border-orange-600 transition-colors group"
              >
                <img src="https://logospng.org/download/pix/logo-pix-icone-512.png" className="h-4 group-hover:scale-110 transition-transform" alt="Pix BCB" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase leading-none">PIX OFICIAL</span>
                  <span className="text-[8px] font-bold text-slate-400 uppercase">Banco Central</span>
                </div>
              </a>
              <a 
                href="https://www.gov.br/anpd/pt-br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-slate-50 border rounded-xl px-4 py-2 hover:border-orange-600 transition-colors group"
              >
                <ShieldCheck className="h-4 w-4 text-blue-600 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase leading-none">LGPD</span>
                  <span className="text-[8px] font-bold text-slate-400 uppercase">Lei 13.709</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Legal Info */}
        <div className="pt-12 flex flex-col items-center gap-6 text-center">
          <p className="text-[10px] text-slate-400 font-medium max-w-4xl leading-relaxed uppercase">
            OS PREÇOS E CONDIÇÕES DE PAGAMENTO SÃO EXCLUSIVOS PARA O SITE. AS IMAGENS SÃO MERAMENTE ILUSTRATIVAS. 
            TODOS OS PEDIDOS ESTÃO SUJEITOS À ANÁLISE E CONFIRMAÇÃO DE DADOS. <br />
            <strong>ULTRA GYM SUPPLEMENTS LTDA | CNPJ: 53.320.355/0001-24</strong> <br />
            RUA OLIMPIO FORTUNATO, 149 – SÃO MIGUEL, NOVA PONTE/MG – CEP 38160-000
          </p>
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs font-black italic uppercase tracking-tighter">
              © {new Date().getFullYear()} ULTRA<span className="text-orange-600">GYM</span> SUPPLEMENTS
            </p>
            <span className="text-[8px] font-bold text-slate-300 uppercase tracking-[0.2em]">Nutrição de Alta Performance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
