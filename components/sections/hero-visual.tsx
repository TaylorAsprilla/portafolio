"use client";

import { useEffect, useRef } from "react";
import { HeroChips } from "@/components/sections/hero-chips";

interface HeroVisualProps {
  alt: string;
  /** Etiquetas de servicios que flotan alrededor del laptop. */
  chips: string[];
}

/**
 * Laptop con el logo. Animaciones (ver globals.css): entrada, flotación continua y,
 * con ratón, una ligera inclinación 3D que sigue al cursor sobre la sección.
 * Se desactiva con `prefers-reduced-motion` y en pantallas táctiles.
 */
export function HeroVisual({ alt, chips }: HeroVisualProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const section = el?.closest<HTMLElement>(".hero-stage") ?? el?.closest("section");
    if (!el || !section) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mouse = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (reduce || !mouse) return;

    let raf = 0;
    let nx = 0;
    let ny = 0;

    const apply = () => {
      raf = 0;
      el.style.setProperty("--ry", `${(nx * 10).toFixed(2)}deg`);
      el.style.setProperty("--rx", `${(-ny * 8).toFixed(2)}deg`);
    };
    const onMove = (e: PointerEvent) => {
      const r = section.getBoundingClientRect();
      nx = (e.clientX - r.left) / r.width - 0.5;
      ny = (e.clientY - r.top) / r.height - 0.5;
      if (!raf) raf = requestAnimationFrame(apply);
    };
    const onLeave = () => {
      nx = 0;
      ny = 0;
      if (!raf) raf = requestAnimationFrame(apply);
    };

    section.addEventListener("pointermove", onMove);
    section.addEventListener("pointerleave", onLeave);
    return () => {
      section.removeEventListener("pointermove", onMove);
      section.removeEventListener("pointerleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className="hero-visual">
      <div className="hero-visual__tilt relative">
        {/* Sombra propia: se encoge y se aclara cuando el laptop sube */}
        <div aria-hidden="true" className="hero-visual__shadow" />
        <HeroChips labels={chips} />
        <div className="hero-visual__float relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero-laptop-1400.webp"
            srcSet="/hero-laptop-760.webp 760w, /hero-laptop-1400.webp 1400w"
            sizes="(min-width: 1024px) 46vw, 92vw"
            width={1400}
            height={1059}
            alt={alt}
            fetchPriority="high"
            decoding="async"
            className="h-auto w-full select-none"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}
