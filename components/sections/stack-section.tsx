import { BarChart3, Cloud, Database, Monitor, Server, Sparkles, type LucideIcon } from "lucide-react";
import { SectionShell } from "@/components/sections/section-shell";
import { SpecialtyCard } from "@/components/sections/specialty-card";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import type { Content } from "@/content";

/** Ícono de cada grupo, en el mismo orden que `content.stack.groups`. */
const ICONS: LucideIcon[] = [Sparkles, Monitor, Server, Database, Cloud, BarChart3];

/** Ancho de cada grupo en la cuadrícula de 3 columnas (escritorio), en el mismo orden que los grupos. */
const SPAN = [
  "md:col-span-2 lg:col-span-3", // IA: fila completa
  "",
  "",
  "",
  "lg:col-span-2", // Cloud y DevOps
  "md:col-span-2 lg:col-span-1", // Datos
];

export function StackSection({ content }: { content: Content["stack"] }) {
  return (
    <SectionShell
      id="stack"
      number="03"
      titleId="stack-title"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      wide
    >
      <ul className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
        {content.groups.map((group, i) => {
          const Icon = ICONS[i % ICONS.length];
          const highlight = i === 0;
          return (
            <li key={group.title} className={cn("min-w-0", SPAN[i % SPAN.length])}>
              <Reveal className="h-full" delay={Math.min(i, 5) * 0.05}>
                <SpecialtyCard
                  className={highlight ? "border-primary/30 bg-primary/[0.04]" : undefined}
                >
                  <section aria-label={group.title} className="flex h-full flex-col">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span
                          aria-hidden="true"
                          className={cn(
                            "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
                            highlight
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary text-primary"
                          )}
                        >
                          <Icon className="h-5 w-5" />
                        </span>
                        <h3 className="font-display text-xl font-bold leading-tight">
                          {group.title}
                        </h3>
                      </div>
                      <span aria-hidden="true" className="font-sans text-xs text-muted-foreground">
                        {String(group.items.length).padStart(2, "0")}
                      </span>
                    </div>

                    <ul className="mt-6 flex flex-wrap content-start gap-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className={cn(
                            "flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 text-sm transition-all duration-200",
                            "hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground [&:hover>span]:bg-primary-foreground"
                          )}
                        >
                          <span
                            aria-hidden="true"
                            className="h-1.5 w-1.5 rounded-full bg-primary transition-colors"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                </SpecialtyCard>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </SectionShell>
  );
}
