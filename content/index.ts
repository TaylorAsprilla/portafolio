import { es } from "./es";
import type { Content } from "./types";

/**
 * Punto único de acceso al contenido.
 * Para agregar inglés: crear `content/en.ts` (mismo tipo `Content`),
 * registrarlo aquí y exponer la ruta `/en`.
 */
const dictionaries = { es } satisfies Record<string, Content>;

export type Locale = keyof typeof dictionaries;
export const defaultLocale: Locale = "es";

export function getContent(locale: Locale = defaultLocale): Content {
  return dictionaries[locale];
}

export type { Content } from "./types";
