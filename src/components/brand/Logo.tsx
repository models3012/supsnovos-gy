import { COMPANY } from "@/lib/company";
import { cn } from "@/lib/utils";

/**
 * Logo da marca: assinatura tipográfica, sem símbolo.
 * `tone` acompanha o fundo — "dark" no header preto, "light" no rodapé branco.
 */
export const Logo = ({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) => (
  <span
    className={cn(
      "font-display text-2xl md:text-3xl leading-none tracking-wide select-none",
      tone === "dark" ? "text-white" : "text-slate-900",
      className,
    )}
  >
    {COMPANY.nameParts.prefix}
    <span className={tone === "dark" ? "text-orange-500" : "text-orange-600"}>
      {" "}
      {COMPANY.nameParts.suffix.toUpperCase()}
    </span>
  </span>
);
