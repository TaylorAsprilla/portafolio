"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

interface SpecialtyCardProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Tarjeta con "foco de luz" que sigue al cursor (solo escritorio con ratón).
 * Es puramente decorativa: escribe dos variables CSS (--mx, --my) sin re-renderizar React.
 * Sin puntero fino o con movimiento reducido el foco no se muestra.
 */
export function SpecialtyCard({ children, className }: SpecialtyCardProps) {
  const ref = useRef<HTMLElement>(null);

  function onMove(e: React.PointerEvent) {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  return (
    <article
      ref={ref}
      onPointerMove={onMove}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background p-6 transition-colors duration-300 hover:border-primary/60 sm:p-8",
        className
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 motion-reduce:hidden [@media(hover:hover)]:group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), hsl(var(--primary) / 0.10), transparent 65%)",
        }}
      />
      <div className="relative flex h-full flex-col">{children}</div>
    </article>
  );
}
