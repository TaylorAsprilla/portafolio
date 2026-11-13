import { Bot, Cloud, Code2, Database, Layers, Network, Users, type LucideIcon } from "lucide-react";
import { SectionShell } from "@/components/sections/section-shell";
import { SpecialtyCard } from "@/components/sections/specialty-card";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import type { Content } from "@/content";

/** Ícono y color (paleta del logo) de cada especialidad, en el mismo orden que `content.specialties.items`. */
const META: { icon: LucideIcon; bg: string; fg: string }[] = [
  { icon: Bot, bg: "hsl(34 93% 61% / 0.22)", fg: "hsl(28 90% 36%)" },
  { icon: Code2, bg: "hsl(223 45% 46% / 0.14)", fg: "hsl(223 45% 40%)" },
  { icon: Layers, bg: "hsl(205 85% 70% / 0.3)", fg: "hsl(205 70% 28%)" },
  { icon: Network, bg: "hsl(310 29% 38% / 0.14)", fg: "hsl(310 29% 36%)" },
  { icon: Database, bg: "hsl(65 40% 50% / 0.22)", fg: "hsl(65 45% 28%)" },
  { icon: Cloud, bg: "hsl(205 85% 70% / 0.3)", fg: "hsl(205 70% 28%)" },
  { icon: Users, bg: "hsl(223 45% 46% / 0.14)", fg: "hsl(223 45% 40%)" },
];

/**
 * Cuadrícula tipo "bento": la primera especialidad (IA) es la destacada y ocupa 2×2;
 * las demás se reparten alrededor. En móvil es una sola columna; en tablet, dos.
 */
const LAYOUT = [
  "lg:col-span-2 lg:row-span-2", // 01 destacada
  "",
  "",
  "",
  "",
  "lg:col-span-2", // 06
  "lg:col-span-2", // 07
];

export function SpecialtiesSection({ content }: { content: Content["specialties"] }) {
  return (
    <SectionShell
      id="especialidades"
      number="01"
      titleId="specialties-title"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      wide
    >
      <ol className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
        {content.items.map((item, i) => {
          const meta = META[i % META.length];
          const Icon = meta.icon;
          const featured = i === 0;
          return (
            <li key={item.title} className={cn("min-w-0", LAYOUT[i], featured && "sm:col-span-2")}>
              <Reveal className="h-full" delay={Math.min(i, 4) * 0.06}>
                <SpecialtyCard>
                  <div className="flex items-start justify-between gap-4">
                    <span
                      aria-hidden="true"
                      className={cn(
                        "flex items-center justify-center rounded-xl",
                        featured ? "h-14 w-14" : "h-11 w-11"
                      )}
                      style={{ backgroundColor: meta.bg, color: meta.fg }}
                    >
                      <Icon className={featured ? "h-7 w-7" : "h-5 w-5"} />
                    </span>
                    <span aria-hidden="true" className="font-sans text-xs text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3
                    className={cn(
                      "font-display font-bold leading-[1.08] transition-colors duration-300 group-hover:text-primary",
                      featured ? "mt-8 text-4xl lg:text-5xl" : "mt-6 text-2xl"
                    )}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-3 leading-relaxed text-muted-foreground",
                      featured ? "max-w-md text-base md:text-lg" : "text-sm md:text-base"
                    )}
                  >
                    {item.text}
                  </p>

                  <ul
                    className={cn(
                      "mt-auto flex flex-wrap gap-2 border-t border-border pt-5",
                      featured ? "lg:pt-6" : ""
                    )}
                  >
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-foreground/90 sm:text-[13px]"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </SpecialtyCard>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </SectionShell>
  );
}
