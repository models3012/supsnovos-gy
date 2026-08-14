import { COMPANY } from "@/lib/company";
import { cn } from "@/lib/utils";

/**
 * Assinatura tipográfica da marca — somente o nome, sem símbolo.
 * `variant` ajusta o contraste para fundo escuro (navbar) ou claro (rodapé).
 */
export const Logo = ({
  variant = "dark",
  className,
}: {
  variant?: "dark" | "light";
  className?: string;
}) => (
  <span
    className={cn(
      "font-display text-2xl md:text-3xl tracking-wide leading-none select-none",
      variant === "dark" ? "text-white" : "text-slate-900",
      className,
    )}
  >
    {COMPANY.nameParts.prefix}
    <span className={variant === "dark" ? "text-orange-500" : "text-orange-600"}>
      {" "}
      {COMPANY.nameParts.suffix.toUpperCase()}
    </span>
  </span>
);
