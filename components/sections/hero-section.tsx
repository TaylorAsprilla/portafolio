import { ArrowDown, ArrowDownRight, ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { HeroVisual } from "@/components/sections/hero-visual";
import { RotatingPhrase } from "@/components/sections/rotating-phrase";
import { siteConfig } from "@/data/config";
import type { Content } from "@/content";

/** Retraso escalonado de la animación de entrada (CSS puro, sin esperar a React). */
const delay = (seconds: number) => ({ "--reveal-delay": `${seconds}s` }) as React.CSSProperties;

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Hero con "primera pantalla" de solo el laptop y las palabras flotantes. Al hacer scroll
 * (animaciones CSS ligadas al scroll, solo escritorio) el laptop pasa a la izquierda y aparece
 * el texto. En móvil, sin soporte de scroll animado o con movimiento reducido se muestra el
 * diseño final directamente (ver `.hero-scroll` en globals.css). El texto está siempre en el HTML.
 */
export function HeroSection({
  content,
  nav,
  ui,
}: {
  content: Content["hero"];
  nav: Content["nav"];
  ui: Content["ui"];
}) {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="hero-scroll relative">
      <div className="hero-stage relative flex min-h-[100dvh] flex-col justify-center overflow-hidden pb-10 pt-16 sm:pb-14 sm:pt-20">
        <div className="mx-auto w-full max-w-page px-5 [container-type:inline-size] sm:px-8 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
            {/* El laptop va primero en móvil y a la izquierda en escritorio; en el HTML el texto va primero (orden de lectura y SEO) */}
            <div className="hero-text relative z-20 order-2 lg:col-span-6 lg:pl-6">
              <h1
                id="hero-title"
                style={delay(0.05)}
                className="hero-in text-pretty-balance font-display text-5xl font-bold leading-[1.04] tracking-[-0.03em] sm:text-6xl xl:text-7xl"
              >
                <span className="sr-only">
                  {siteConfig.name} — {content.headline} {content.verb} {content.rotating.join(", ")}.
                </span>
                <span aria-hidden="true">
                  {content.headline} <span className="text-primary">{content.verb}</span>
                </span>
                <RotatingPhrase words={content.rotating} />
              </h1>

              <p
                style={delay(0.15)}
                className="hero-in mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
              >
                {content.description}
              </p>

              <ul
                aria-label="Servicios"
                style={delay(0.2)}
                className="hero-in label mt-6 flex flex-wrap gap-x-4 gap-y-1 text-foreground"
              >
                {content.roles.map((role, i) => (
                  <li key={role} className="flex items-center gap-4">
                    {role}
                    {i < content.roles.length - 1 && (
                      <span aria-hidden="true" className="text-warm">
                        /
                      </span>
                    )}
                  </li>
                ))}
              </ul>

              <div style={delay(0.25)} className="hero-in mt-9 flex flex-wrap gap-3">
                <ButtonLink href="#contacto" size="lg">
                  {content.ctaContact}
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </ButtonLink>
                <ButtonLink href="#proyectos" variant="outline" size="lg">
                  {content.ctaProjects}
                </ButtonLink>
              </div>
            </div>

            <div className="hero-visual-col order-1 lg:col-span-6">
              <HeroVisual alt="Laptop mostrando el logo de Taylor Interactivo" chips={content.chips} />
            </div>
          </div>

          <nav
            aria-label={ui.index}
            style={delay(0.35)}
            className="hero-in hero-text-late mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border pt-5 lg:mt-16"
          >
            <span className="label flex items-center gap-2">
              <ArrowDownRight aria-hidden="true" className="h-3.5 w-3.5 text-primary" />
              {ui.index}
            </span>
            {nav.map((item, i) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="group flex items-baseline gap-2 rounded-sm text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span aria-hidden="true" className="text-[10px] text-primary">
                  {pad(i + 1)}
                </span>
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Indicación de scroll (solo en la primera pantalla animada) */}
        <div
          aria-hidden="true"
          className="hero-cue absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="label">{ui.scrollHint}</span>
          <ArrowDown className="hero-cue__arrow h-4 w-4 text-primary" />
        </div>
      </div>
    </section>
  );
}
