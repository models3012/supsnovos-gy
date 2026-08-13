import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: "Skill Fitt | Loja de Suplementos com Nota Fiscal — Whey, Creatina, Pré-Treino" },
      { name: "description", content: "Skill Fitt Suplementos: loja online de suplementos esportivos com produtos originais, nota fiscal eletrônica, frete grátis acima de R$ 199 e Pix com desconto." },
      { name: "author", content: "Skill Fitt" },
      { name: "google-site-verification", content: "aVyIW5BIKgJU2SMjL7DHC1-YpukeGqiejt5DWIl6SWo" },
      { property: "og:title", content: "Skill Fitt | Loja de Suplementos com Nota Fiscal — Whey, Creatina, Pré-Treino" },
      { property: "og:description", content: "Skill Fitt Suplementos: loja online de suplementos esportivos com produtos originais, nota fiscal eletrônica, frete grátis acima de R$ 199 e Pix com desconto." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Skill Fitt" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@SkillFitt" },
      { name: "twitter:title", content: "Skill Fitt | Loja de Suplementos com Nota Fiscal — Whey, Creatina, Pré-Treino" },
      { name: "twitter:description", content: "Skill Fitt Suplementos: loja online de suplementos esportivos com produtos originais, nota fiscal eletrônica, frete grátis acima de R$ 199 e Pix com desconto." },
      { property: "og:image", content: "https://skillfit.online/og-image.png" },
      { name: "twitter:image", content: "https://skillfit.online/og-image.png" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "dns-prefetch", href: "https://www.googletagmanager.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;600;800;900&display=swap",
      },
      {
        rel: "preload",
        as: "image",
        href: "/img/hero-academia.jpg",
        fetchpriority: "high",
      } as any,
    ],
    scripts: [
      { src: "https://www.googletagmanager.com/gtag/js?id=AW-18088511561", async: true },
      {
        children: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  wait_for_update: 500
});
gtag('js', new Date());
gtag('config', 'AW-18088511561', { send_page_view: false, allow_enhanced_conversions: true });`,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 overflow-x-hidden">{children}</main>
          <Footer />

        </div>
        <CookieConsent />
        <a 
          href="https://wa.me/5534998877665" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <svg className="w-8 h-8 relative z-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.224-3.52c1.547.919 3.175 1.403 4.845 1.403 4.909 0 8.905-3.996 8.908-8.904.002-2.378-.921-4.614-2.598-6.292s-3.914-2.601-6.292-2.601c-4.91 0-8.906 3.996-8.908 8.905 0 1.6.423 3.174 1.226 4.547l-.951 3.474 3.571-.932zm9.523-5.492c.193.097 1.138.562 1.314.626.176.065.293.097.336.173.044.076.044.439-.131.937-.176.496-.885.812-1.21.844-.324.033-.631.034-1.084-.044-.374-.065-.848-.205-1.482-.473-2.54-1.074-4.191-3.741-4.318-3.911-.127-.171-.926-1.233-.926-2.353 0-1.12.585-1.671.79-1.897.204-.227.444-.284.593-.284.15 0 .298.001.428.006.136.006.319-.052.499.384.181.436.617 1.503.67 1.611.053.108.089.233.018.373-.071.141-.107.233-.213.357-.107.124-.225.277-.321.373-.106.106-.217.222-.094.433.124.211.55.908 1.181 1.52.811.787 1.491 1.03 1.702 1.136.21.107.333.089.458-.054.125-.143.534-.622.677-.834.144-.211.287-.179.483-.107z"/>
          </svg>
        </a>
        <Scripts />

      </body>
    </html>
  );
}

import { CookieConsent } from "@/components/legal/CookieConsent";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";


function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
