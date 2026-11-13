"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RotatingPhraseProps {
  words: string[];
}

/**
 * Final del titular que va cambiando ("tu operación" → "tu soporte" → …).
 * - Todas las frases ocupan la misma celda de una grilla, así el alto nunca cambia (sin saltos).
 * - El HTML inicial muestra la primera frase; sin JS o con movimiento reducido no rota.
 * - Es decorativo para lectores de pantalla (el H1 incluye la lista completa en texto oculto).
 * - Se pausa cuando la pestaña no está visible.
 */
export function RotatingPhrase({ words }: RotatingPhraseProps) {
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const current = useRef(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || words.length < 2) return;

    let timer: ReturnType<typeof setInterval> | undefined;
    const tick = () => {
      const next = (current.current + 1) % words.length;
      setPrev(current.current);
      setIndex(next);
      current.current = next;
    };
    const start = () => {
      if (!timer) timer = setInterval(tick, 3200);
    };
    const stop = () => {
      clearInterval(timer);
      timer = undefined;
    };
    const onVisibility = () => (document.hidden ? stop() : start());

    start();
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [words.length]);

  return (
    <span aria-hidden="true" className="rotator block text-primary">
      {words.map((word, i) => (
        <span
          key={word}
          className={cn("rotator__item", i === index && "is-active", i === prev && i !== index && "is-leaving")}
        >
          {word}.
        </span>
      ))}
    </span>
  );
}
