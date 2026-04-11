import type { SiteMetadata } from "@/types";
import { extractDomain, normalizeUrl } from "@/lib/utils";

/**
 * Extrae metadata de una página web
 * Debe ejecutarse solo en el servidor (server-side)
 */
export async function extractMetadata(url: string): Promise<SiteMetadata> {
  const domain = extractDomain(url);

  // En desarrollo local o si falla, retornar objeto mínimo
  try {
    const normalizedUrl = normalizeUrl(url);

    // Importación dinámica de cheerio (solo servidor)
    const cheerio = await import("cheerio");

    // Timeout de 8 segundos (más corto para no ralentizar el build)
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    const response = await fetch(normalizedUrl, {
      signal: controller.signal,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
      },
      redirect: "follow",
    });

    clearTimeout(timeoutId);

    // Si la respuesta no es OK, retornar metadata básica sin lanzar error
    if (!response.ok) {
      console.warn(`Could not fetch ${url}: HTTP ${response.status}`);
      return {
        domain,
        error: `HTTP ${response.status}`,
      };
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    // Extraer metadata
    const title =
      $('meta[property="og:title"]').attr("content") ||
      $("title").text() ||
      $('meta[name="title"]').attr("content") ||
      "";

    const description =
      $('meta[property="og:description"]').attr("content") ||
      $('meta[name="description"]').attr("content") ||
      "";

    const ogImage = $('meta[property="og:image"]').attr("content") || "";

    const twitterImage = $('meta[name="twitter:image"]').attr("content") || "";

    const siteName = $('meta[property="og:site_name"]').attr("content") || title || domain;

    // Intentar encontrar favicon o logo
    const favicon =
      $('link[rel="icon"]').attr("href") ||
      $('link[rel="shortcut icon"]').attr("href") ||
      $('link[rel="apple-touch-icon"]').attr("href") ||
      "/favicon.ico";

    // Normalizar URLs relativas
    const absoluteUrl = (relativeUrl: string): string => {
      if (!relativeUrl) return "";
      if (relativeUrl.startsWith("http")) return relativeUrl;
      if (relativeUrl.startsWith("//")) return `https:${relativeUrl}`;
      if (relativeUrl.startsWith("/")) {
        try {
          const urlObj = new URL(normalizedUrl);
          return `${urlObj.protocol}//${urlObj.host}${relativeUrl}`;
        } catch {
          return "";
        }
      }
      return `${normalizedUrl}/${relativeUrl}`;
    };

    const image = absoluteUrl(ogImage || twitterImage);
    const logo = absoluteUrl(favicon);

    return {
      title: title.trim(),
      description: description.trim(),
      image,
      logo,
      favicon: logo,
      siteName: siteName.trim(),
      domain,
    };
  } catch (error) {
    // Log del error pero no romper la ejecución
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.warn(`Could not extract metadata from ${url}: ${errorMessage}`);

    // Retornar objeto mínimo con el dominio
    return {
      domain,
      error: errorMessage,
    };
  }
}

/**
 * Extrae metadata de múltiples URLs en paralelo
 */
export async function extractMultipleMetadata(urls: string[]): Promise<Map<string, SiteMetadata>> {
  const results = await Promise.allSettled(urls.map((url) => extractMetadata(url)));

  const metadataMap = new Map<string, SiteMetadata>();

  results.forEach((result, index) => {
    const url = urls[index];
    const domain = extractDomain(url);

    if (result.status === "fulfilled") {
      metadataMap.set(domain, result.value);
    } else {
      metadataMap.set(domain, {
        domain,
        error: result.reason?.message || "Failed to extract metadata",
      });
    }
  });

  return metadataMap;
}

/**
 * Cache simple en memoria para metadata (opcional)
 */
const metadataCache = new Map<string, { data: SiteMetadata; timestamp: number }>();
const CACHE_DURATION = 1000 * 60 * 60; // 1 hora

export async function getCachedMetadata(url: string): Promise<SiteMetadata> {
  const domain = extractDomain(url);
  const cached = metadataCache.get(domain);

  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }

  const metadata = await extractMetadata(url);
  metadataCache.set(domain, { data: metadata, timestamp: Date.now() });

  return metadata;
}
