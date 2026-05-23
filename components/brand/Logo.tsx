import { cn } from "@/lib/utils";
import { CompassMark } from "./CompassMark";

type Variant = "dark" | "light";

interface LogoProps {
  variant?: Variant;
  className?: string;
  showWordmark?: boolean;
}

/**
 * Logo completo: brújula + wordmark "Brújula MARKETS".
 * `dark` = wordmark navy (úsalo sobre fondos claros).
 * `light` = wordmark crema (úsalo sobre fondos navy).
 */
export function Logo({
  variant = "dark",
  className,
  showWordmark = true,
}: LogoProps) {
  const isDark = variant === "dark";
  const wordmarkColor = isDark ? "text-navy" : "text-cream";
  const subtitleColor = isDark ? "text-mist" : "text-sand";

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <CompassMark variant={variant} className="h-auto w-full" />
      {showWordmark && (
        <div className="mt-4 flex flex-col items-center">
          <span
            className={cn(
              "font-display text-3xl font-medium tracking-[0.05em]",
              wordmarkColor,
            )}
          >
            Brújula
          </span>
          <span
            className={cn(
              "mt-1 text-[0.7rem] font-light tracking-[0.5em]",
              subtitleColor,
            )}
          >
            M A R K E T S
          </span>
          <span className="mt-2 h-px w-12 bg-gold" />
        </div>
      )}
    </div>
  );
}
