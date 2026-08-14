import { Link, useNavigate } from "@tanstack/react-router";
import { ShoppingCart, Search, User, Menu, Zap, Truck, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { CartSidebar } from "@/components/cart/CartSidebar";
import { Logo } from "@/components/layout/Logo";
import { useRef, useState } from "react";

const NAV_LINKS = [
  { label: "Suplementos", slug: "suplementos" },
  { label: "Creatina", slug: "creatina" },
  { label: "Pré-Treino", slug: "pre-treino" },
  { label: "Hipercalóricos", slug: "hipercaloricos" },
  { label: "Barrinhas", slug: "barrinhas" },
  { label: "Vitaminas", slug: "vitaminas" },
  { label: "Kits", slug: "kits" },
  { label: "Blog", href: "/blog" },
];

const PROMO_ITEMS = [
  { icon: Truck, text: "FRETE GRÁTIS PARA TODO O BRASIL" },
  { icon: Zap, text: "PIX COM 10% OFF NO CHECKOUT" },
  { icon: ShieldCheck, text: "PRODUTOS ORIGINAIS COM NOTA FISCAL" },
  { icon: Zap, text: "ENTREGA EXPRESSA EM ATÉ 48H" },
];

export const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const logoClicks = useRef(0);
  const logoTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleLogoClick = (e: React.MouseEvent) => {
    logoClicks.current += 1;
    if (logoTimer.current) clearTimeout(logoTimer.current);
    if (logoClicks.current >= 3) {
      e.preventDefault();
      logoClicks.current = 0;
      navigate({ to: "/admin/unlock" });
      return;
    }
    logoTimer.current = setTimeout(() => { logoClicks.current = 0; }, 800);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate({ to: "/busca", search: { q: searchQuery.trim() } });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top promo marquee */}
      <div className="w-full bg-black text-white overflow-hidden border-b border-white/10">
        <div className="flex whitespace-nowrap animate-marquee py-2">
          {[...PROMO_ITEMS, ...PROMO_ITEMS, ...PROMO_ITEMS].map((item, i) => {
            const Icon = item.icon;
            return (
              <span key={i} className="flex items-center gap-2 px-8 text-[10px] font-bold tracking-[0.25em] uppercase">
                <Icon className="h-3 w-3 text-orange-500" />
                {item.text}
                <span className="text-orange-500">•</span>
              </span>
            );
          })}
        </div>
      </div>

      {/* Main bar */}
      <div className="w-full bg-black/95 backdrop-blur-xl border-b border-white/10">
        <div className="container flex h-16 items-center justify-between px-4 gap-4">
          <div className="flex items-center gap-3">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10 hover:text-orange-500">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[380px] bg-black text-white border-white/10">
                <SheetHeader>
                  <SheetTitle className="text-left">
                    <Logo variant="dark" />
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-1 mt-8">
                  {NAV_LINKS.map((link) =>
                    link.href ? (
                      <Link key={link.label} to={link.href} className="text-base font-bold uppercase tracking-wider hover:text-orange-500 border-b border-white/5 py-3 transition-colors">
                        {link.label}
                      </Link>
                    ) : (
                      <Link key={link.slug} to="/$categoria" params={{ categoria: link.slug || "" }} className="text-base font-bold uppercase tracking-wider hover:text-orange-500 border-b border-white/5 py-3 transition-colors">
                        {link.label}
                      </Link>
                    )
                  )}
                </div>
              </SheetContent>
            </Sheet>

            <Link to="/" onClick={handleLogoClick} className="group">
              <Logo variant="dark" />
            </Link>
          </div>

          {/* Search */}
          <form onSubmit={handleSearch} className="hidden md:flex relative flex-1 max-w-xl items-center">
            <Search className="absolute left-4 h-4 w-4 text-white/40" />
            <input
              type="search"
              placeholder="O que você está procurando hoje?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-11 w-full rounded-full bg-white/5 border border-white/10 pl-11 pr-28 text-sm text-white placeholder:text-white/40 font-medium focus:outline-none focus:border-orange-500/60 focus:bg-white/[0.07] transition-all"
            />
            <button type="submit" className="absolute right-1.5 top-1/2 -translate-y-1/2 h-8 px-4 rounded-full bg-orange-500 hover:bg-orange-400 text-black text-xs font-black uppercase tracking-wider transition-colors">
              Buscar
            </button>
          </form>

          <div className="flex items-center gap-1">
            <Link to="/" className="hidden sm:flex items-center gap-2 px-3 h-10 rounded-full text-white/80 hover:text-white hover:bg-white/5 transition-colors">
              <User className="h-4 w-4" />
              <span className="font-bold uppercase text-[11px] tracking-wider">Conta</span>
            </Link>
            <div className="text-white">
              <CartSidebar />
            </div>
          </div>
        </div>

        {/* Category nav */}
        <nav className="hidden md:block border-t border-white/5 bg-black/60">
          <div className="container px-4 flex items-center gap-1 h-11 overflow-x-auto no-scrollbar">
            {NAV_LINKS.map((link) =>
              link.href ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="relative px-4 h-full flex items-center text-[11px] font-bold uppercase tracking-[0.18em] text-white/70 hover:text-orange-500 transition-colors group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-orange-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
                </Link>
              ) : (
                <Link
                  key={link.slug}
                  to="/$categoria"
                  params={{ categoria: link.slug || "" }}
                  className="relative px-4 h-full flex items-center text-[11px] font-bold uppercase tracking-[0.18em] text-white/70 hover:text-orange-500 transition-colors group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-orange-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
                </Link>
              )
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};
