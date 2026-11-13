"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

interface ProjectCarouselProps {
  projects: Project[];
  visitLabel: string;
  label: string;
  prevLabel: string;
  nextLabel: string;
}

/**
 * Carrusel horizontal con scroll-snap (CSS). Funciona con dedo, rueda, teclado (foco en los
 * enlaces) y botones. Todas las tarjetas están siempre en el HTML y con su texto completo.
 */
export function ProjectCarousel({
  projects,
  visitLabel,
  label,
  prevLabel,
  nextLabel,
}: ProjectCarouselProps) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  function scrollByCard(dir: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("li");
    const step = card ? card.getBoundingClientRect().width + 24 : el.clientWidth * 0.8;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * step, behavior: reduce ? "auto" : "smooth" });
  }

  const btn =
    "flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-30";

  return (
    <div>
      <div className="mb-6 flex items-center justify-between gap-4">
        <span className="label font-sans text-xs text-muted-foreground" aria-hidden="true">
          {String(projects.length).padStart(2, "0")} / {label}
        </span>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label={prevLabel}
            disabled={!canPrev}
            onClick={() => scrollByCard(-1)}
            className={btn}
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label={nextLabel}
            disabled={!canNext}
            onClick={() => scrollByCard(1)}
            className={btn}
          >
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>
      </div>

      <ul
        ref={trackRef}
        onScroll={update}
        aria-label={label}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-6 [scrollbar-width:none] motion-reduce:scroll-auto sm:gap-8 [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project) => (
          <li
            key={project.id}
            className="w-[85%] shrink-0 snap-start sm:w-[28rem] lg:w-[36rem] xl:w-[42rem]"
          >
            <article
              id={`proyecto-${project.id}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-background transition-colors duration-300 hover:border-primary"
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name}: ${visitLabel.toLowerCase()} (se abre en una pestaña nueva)`}
                className="absolute inset-0 z-10 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />

              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border bg-secondary">
                <Image
                  src={project.image}
                  alt={`Captura del sitio ${project.name}`}
                  fill
                  sizes="(min-width: 1280px) 672px, (min-width: 1024px) 576px, (min-width: 640px) 448px, 85vw"
                  className="object-cover object-left-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex flex-1 flex-col gap-5 p-6 sm:p-8">
                <div className="flex flex-col gap-2">
                  <p className="label">{project.kind}</p>
                  <h3 className="flex items-start justify-between gap-3 font-display text-3xl font-bold leading-[1.05] transition-colors duration-300 group-hover:text-primary">
                    {project.name}
                    <ArrowUpRight
                      aria-hidden="true"
                      className={cn(
                        "mt-1 h-6 w-6 shrink-0 text-muted-foreground transition-all duration-300",
                        "group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary"
                      )}
                    />
                  </h3>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  {project.description}
                </p>

                <ul
                  aria-label="Tecnologías"
                  className="mt-auto flex flex-wrap gap-x-3 gap-y-1 border-t border-border pt-5 font-sans text-xs text-muted-foreground"
                >
                  {project.stack.map((tech, t) => (
                    <li key={tech}>
                      {tech}
                      {t < project.stack.length - 1 && (
                        <span aria-hidden="true" className="ml-3 text-primary">
                          /
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
