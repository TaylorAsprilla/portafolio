import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

interface SectionShellProps {
  id: string;
  /** Número de sección mostrado en grande, p. ej. "01". */
  number: string;
  /** id del <h2> (para aria-labelledby). */
  titleId: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  /** Ancho casi completo: sin columna lateral; la etiqueta va sobre el titular. */
  wide?: boolean;
}

/**
 * Estructura editorial común: columna izquierda con número y etiqueta (fija al hacer
 * scroll en escritorio) y columna derecha con titular grande y contenido.
 */
export function SectionShell({
  id,
  number,
  titleId,
  eyebrow,
  title,
  description,
  children,
  className,
  wide = false,
}: SectionShellProps) {
  return (
    <section id={id} aria-labelledby={titleId} className={cn("border-t border-border", className)}>
      <div
        className={cn(
          "mx-auto grid w-full",
          wide
            ? "max-w-[120rem] gap-6 px-6 py-16 sm:px-10 md:py-24 lg:gap-8 lg:px-20 lg:py-28"
            : "max-w-page gap-10 px-5 py-20 sm:px-8 md:py-32 lg:grid-cols-[13rem_1fr] lg:gap-16 lg:px-12"
        )}
      >
        <Reveal className={wide ? undefined : "lg:sticky lg:top-10 lg:self-start"}>
          <p className="flex items-baseline gap-3">
            <span aria-hidden="true" className="font-sans text-sm text-primary">
              {number}
            </span>
            <span className="label">{eyebrow}</span>
          </p>
        </Reveal>

        <div className="min-w-0">
          <Reveal className={cn("max-w-4xl", wide ? "mb-10 md:mb-14" : "mb-14 md:mb-20")}>
            <h2
              id={titleId}
              className="text-pretty-balance font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl"
            >
              {title}
            </h2>
            {description && (
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {description}
              </p>
            )}
          </Reveal>
          {children}
        </div>
      </div>
    </section>
  );
}
