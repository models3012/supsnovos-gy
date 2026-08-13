import { cn } from "@/lib/utils";

/**
 * Símbolo da marca: placa chanfrada com gradiente laranja e o "S" geométrico vazado.
 * Vetor puro — nítido em qualquer tamanho, de favicon a banner.
 */
export const LogoMark = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 40 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Skill Fitt"
    className={cn("h-10 w-auto", className)}
  >
    <defs>
      <linearGradient id="sf-mark" x1="0" y1="4" x2="40" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FDBA74" />
        <stop offset="0.45" stopColor="#F97316" />
        <stop offset="1" stopColor="#EA580C" />
      </linearGradient>
    </defs>
    <g transform="skewX(-9) translate(4 0)">
      {/* placa com o canto superior direito chanfrado */}
      <path
        d="M10 4H28L40 16V34A10 10 0 0 1 30 44H10A10 10 0 0 1 0 34V14A10 10 0 0 1 10 4Z"
        fill="url(#sf-mark)"
      />
      {/* "S" vazado */}
      <path d="M9 12H31V18H15V21H31V36H9V30H25V27H9Z" fill="#0A0A0B" />
    </g>
  </svg>
);

/**
 * Logo completa: símbolo + assinatura tipográfica.
 * `tone` acompanha o fundo — "dark" no header preto, "light" no rodapé branco.
 */
export const Logo = ({
  className,
  tone = "dark",
  showMark = true,
}: {
  className?: string;
  tone?: "dark" | "light";
  showMark?: boolean;
}) => (
  <span className={cn("flex items-center gap-2.5 select-none", className)}>
    {showMark && (
      <span className="relative">
        <span
          className="absolute inset-0 bg-orange-500 blur-lg opacity-50 group-hover:opacity-100 transition-opacity"
          aria-hidden="true"
        />
        <LogoMark className="relative h-9 w-auto" />
      </span>
    )}
    <span
      className={cn(
        "font-display text-2xl md:text-3xl leading-none tracking-wide",
        tone === "dark" ? "text-white" : "text-slate-900",
      )}
    >
      SKILL<span className={tone === "dark" ? "text-orange-500" : "text-orange-600"}>FITT</span>
    </span>
  </span>
);
