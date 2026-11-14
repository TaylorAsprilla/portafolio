import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/config";
import { localePath } from "@/content";

export const dynamic = "force-static";

// Sitio de una sola página por idioma: las secciones (#anclas) no son URLs indexables distintas.
export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => new URL(path, siteConfig.url).toString();
  const languages = { es: url(localePath.es), en: url(localePath.en) };

  return [
    { url: languages.es, lastModified: new Date(), changeFrequency: "monthly", priority: 1, alternates: { languages } },
    { url: languages.en, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9, alternates: { languages } },
  ];
}
