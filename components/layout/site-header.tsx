"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Globe, Menu, X } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Content } from "@/content";

interface SiteHeaderProps {
  nav: Content["nav"];
  ui: Content["ui"];
  cta: string;
  /** Ruta de la versión en el otro idioma. */
  altHref: string;
}

const pad = (n: number) => String(n).padStart(2, "0");

/** Píxeles de scroll a partir de los cuales aparece el header. */
const SHOW_AFTER = 40;

/**
 * Header fijo: logo a la izquierda, menú al centro y botón de contacto a la derecha.
 * - Efecto de vidrio; oculto en la parte superior y visible en cuanto se hace scroll.
 * - Resalta la sección activa y muestra una barra de progreso de lectura.
 * - En pantallas menores a `lg` el menú se despliega con un botón.
 */
export function SiteHeader({ nav, ui, cta, altHref }: SiteHeaderProps) {
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const openRef = useRef(open);
  openRef.current = open;

  // Ocultar al bajar / mostrar al subir + progreso de lectura
  useEffect(() => {
    let raf = 0;

    const update = () => {
      raf = 0;
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
      }
      setScrolled(y > 8);
      // Oculto en la parte superior; aparece en cuanto el usuario empieza a hacer scroll
      setHidden(y < SHOW_AFTER && !openRef.current);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Sección activa
  useEffect(() => {
    const sections = nav
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => io.observe(s));

    // Al volver al inicio no hay sección activa
    const onTop = () => {
      if (window.scrollY < 200) setActive(null);
    };
    window.addEventListener("scroll", onTop, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onTop);
    };
  }, [nav]);

  // Cerrar el menú móvil con Escape o al pasar a escritorio
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onChange);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
  }, [open]);

  return (
    <header
      ref={headerRef}
      onFocusCapture={() => setHidden(false)}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-transform duration-300 ease-out",
        hidden && !open ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <div
        className={cn(
          "border-b backdrop-blur-xl transition-colors duration-300",
          scrolled || open
            ? "border-border bg-background/80"
            : "border-transparent bg-background/40"
        )}
      >
        <div className="mx-auto flex h-20 w-full max-w-page items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
          <a
            href="#inicio"
            aria-label={ui.homeLabel}
            className="shrink-0 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Image
              src="/logo.png"
              alt=""
              width={480}
              height={235}
              priority
              className="h-12 w-auto sm:h-14"
            />
          </a>

          <nav aria-label={ui.index} className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {nav.map((item, i) => (
                <li key={item.id}>
                  <NavLink
                    id={item.id}
                    index={i}
                    label={item.label}
                    active={active === item.id}
                  />
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={altHref}
              hrefLang={ui.altLangCode.toLowerCase()}
              lang={ui.altLangCode.toLowerCase()}
              aria-label={ui.switchLang}
              className="flex h-10 items-center gap-1.5 rounded-full border border-border px-3.5 font-mono text-xs transition-colors hover:border-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Globe aria-hidden="true" className="h-3.5 w-3.5 text-primary" />
              <span aria-hidden="true">
                <span className="font-bold text-foreground">{ui.langCode}</span>
                <span className="text-muted-foreground"> / {ui.altLangCode}</span>
              </span>
            </a>
            <ButtonLink href="#contacto" size="sm" className="hidden lg:inline-flex">
              {cta}
            </ButtonLink>
            <button
              type="button"
              aria-expanded={open}
              aria-controls="menu-movil"
              aria-label={open ? ui.closeMenu : ui.openMenu}
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
            >
              {open ? (
                <X aria-hidden="true" className="h-5 w-5" />
              ) : (
                <Menu aria-hidden="true" className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        <div
          id="menu-movil"
          hidden={!open}
          className="border-t border-border bg-background/95 lg:hidden"
        >
          <nav aria-label={ui.index} className="mx-auto max-w-page px-5 py-5 sm:px-8">
            <ul className="flex flex-col">
              {nav.map((item, i) => (
                <li key={item.id} className="border-b border-border last:border-b-0">
                  <NavLink
                    id={item.id}
                    index={i}
                    label={item.label}
                    active={active === item.id}
                    onNavigate={() => setOpen(false)}
                    mobile
                  />
                </li>
              ))}
            </ul>
            <ButtonLink
              href="#contacto"
              size="lg"
              className="mt-5 w-full"
              onClick={() => setOpen(false)}
            >
              {cta}
            </ButtonLink>
          </nav>
        </div>

        {/* Progreso de lectura */}
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px">
          <div
            ref={barRef}
            className="h-full origin-left scale-x-0 bg-primary will-change-transform"
          />
        </div>
      </div>
    </header>
  );
}

function NavLink({
  id,
  index,
  label,
  active,
  mobile = false,
  onNavigate,
}: {
  id: string;
  index: number;
  label: string;
  active: boolean;
  mobile?: boolean;
  onNavigate?: () => void;
}) {
  return (
    <a
      href={`#${id}`}
      onClick={onNavigate}
      aria-current={active ? "true" : undefined}
      className={cn(
        "group relative flex items-baseline gap-2 rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        mobile ? "py-4 text-xl" : "py-2 text-base",
        active ? "font-bold text-primary" : "text-muted-foreground hover:text-foreground"
      )}
    >
      <span aria-hidden="true" className="font-mono text-xs text-primary">
        {pad(index + 1)}
      </span>
      {label}
      {!mobile && (
        <span
          aria-hidden="true"
          className={cn(
            "absolute inset-x-0 -bottom-0.5 h-0.5 origin-left rounded-full bg-primary transition-transform duration-300",
            active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
          )}
        />
      )}
    </a>
  );
}
