import { es } from "./es";
import { en } from "./en";
import type { Content } from "./types";

/**
 * Punto único de acceso al contenido.
 * Español en `/` (idioma por defecto) e inglés en `/en/`.
 */
const dictionaries = { es, en } satisfies Record<string, Content>;

export type Locale = keyof typeof dictionaries;
export const locales = Object.keys(dictionaries) as Locale[];
export const defaultLocale: Locale = "es";

export function getContent(locale: Locale = defaultLocale): Content {
  return dictionaries[locale];
}

/** Ruta de cada idioma (con barra final, por `trailingSlash`). */
export const localePath: Record<Locale, string> = { es: "/", en: "/en/" };

export type { Content } from "./types";
