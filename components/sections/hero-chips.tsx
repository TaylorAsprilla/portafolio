"use client";

import {
  BarChart3,
  Bot,
  Cloud,
  Code2,
  Cpu,
  Database,
  MessageSquare,
  Workflow,
  type LucideIcon,
} from "lucide-react";

interface Chip {
  icon: LucideIcon;
  /** Posición dentro del contenedor del laptop (zonas vacías de la imagen). */
  position: string;
  /** Profundidad (px) para el efecto de paralaje al inclinar. */
  depth: number;
  /** Duración y amplitud de la flotación (distintas en cada tarjeta). */
  duration: string;
  amplitude: string;
  delay: string;
  /** Colores del logo: fondo tintado del ícono y color del trazo. */
  iconBg: string;
  iconFg: string;
  /** Solo se ve en la primera pantalla (se desvanece al hacer scroll). */
  extra?: boolean;
}

const ORANGE = { iconBg: "hsl(34 93% 61% / 0.2)", iconFg: "hsl(28 90% 36%)" };
const PURPLE = { iconBg: "hsl(310 29% 38% / 0.14)", iconFg: "hsl(310 29% 36%)" };
const OLIVE = { iconBg: "hsl(65 40% 50% / 0.2)", iconFg: "hsl(65 45% 28%)" };
const BLUE = { iconBg: "hsl(223 45% 46% / 0.14)", iconFg: "hsl(223 45% 40%)" };
const SKY = { iconBg: "hsl(205 85% 70% / 0.28)", iconFg: "hsl(205 70% 28%)" };

/**
 * Las 3 primeras son las fijas (en el layout final). Las demás forman la "nube de palabras"
 * de la primera pantalla y se desvanecen con el scroll (solo escritorio con scroll animado).
 * El orden coincide con `content.hero.chips`.
 */
const CHIPS: Chip[] = [
  { icon: Bot, position: "right-[3%] top-[2%]", depth: 90, duration: "6s", amplitude: "-10px", delay: "1.0s", ...ORANGE },
  { icon: Workflow, position: "right-0 top-[27%] lg:right-[-1%]", depth: 130, duration: "7.2s", amplitude: "-12px", delay: "1.25s", ...PURPLE },
  { icon: BarChart3, position: "left-[1%] bottom-[9%]", depth: 110, duration: "6.6s", amplitude: "-9px", delay: "1.5s", ...OLIVE },
  { icon: MessageSquare, position: "left-[-24%] top-[8%]", depth: 70, duration: "7.6s", amplitude: "-11px", delay: "1.7s", extra: true, ...SKY },
  { icon: Cpu, position: "right-[-26%] top-[52%]", depth: 140, duration: "6.4s", amplitude: "-13px", delay: "1.9s", extra: true, ...BLUE },
  { icon: Code2, position: "left-[-30%] top-[46%]", depth: 100, duration: "8s", amplitude: "-10px", delay: "2.1s", extra: true, ...ORANGE },
  { icon: Database, position: "right-[-14%] bottom-[-2%]", depth: 80, duration: "7s", amplitude: "-9px", delay: "2.3s", extra: true, ...PURPLE },
  { icon: Cloud, position: "left-[16%] top-[-10%]", depth: 60, duration: "6.8s", amplitude: "-12px", delay: "2.5s", extra: true, ...OLIVE },
];

/**
 * Etiquetas de servicios que flotan alrededor del laptop. Son decorativas (aria-hidden):
 * el mismo mensaje ya está en el texto del hero.
 */
export function HeroChips({ labels }: { labels: string[] }) {
  return (
    <>
      {CHIPS.map((chip, i) => {
        const Icon = chip.icon;
        const label = labels[i];
        if (!label) return null;
        return (
          <div
            key={label}
            aria-hidden="true"
            className={`pointer-events-none absolute z-10 ${chip.position} ${chip.extra ? "hero-chip--extra" : ""}`}
            style={{ transform: `translateZ(${chip.depth}px)` }}
          >
            <div className="hero-chip__in" style={{ "--chip-delay": chip.delay } as React.CSSProperties}>
              <div
                className="hero-chip__float flex items-center gap-2 rounded-full border border-border bg-background/90 py-1.5 pl-1.5 pr-3 shadow-[0_8px_24px_-8px_rgba(20,27,46,0.35)] backdrop-blur-sm sm:gap-2.5 sm:py-2 sm:pl-2 sm:pr-4"
                style={{ "--chip-dur": chip.duration, "--chip-amp": chip.amplitude } as React.CSSProperties}
              >
                <span
                  className="flex h-6 w-6 items-center justify-center rounded-full sm:h-7 sm:w-7"
                  style={{ backgroundColor: chip.iconBg, color: chip.iconFg }}
                >
                  <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </span>
                <span className="whitespace-nowrap text-[11px] font-bold text-foreground sm:text-sm">{label}</span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
