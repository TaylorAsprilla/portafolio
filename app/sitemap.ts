import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/config";

export const dynamic = "force-static";

// Sitio de una sola página: las secciones (#anclas) no son URLs indexables distintas.
// Al agregar la versión en inglés (/en/) añadirla aquí con `alternates.languages`.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
