import type { Metadata } from "next";
import { siteConfig } from "@/data/config";
import { getContent, localePath, type Locale } from "@/content";

const keywords: Record<Locale, string[]> = {
  es: [
    "Taylor Asprilla",
    "soluciones de IA",
    "inteligencia artificial",
    "integración de IA",
    "asistentes con IA",
    "chatbots",
    "automatización de procesos",
    "automatización con IA",
    "software a medida",
    "desarrollo de software",
    "Software Engineer",
    "Full Stack Developer",
    "Engineering Team Lead",
    "ingeniería de datos",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Bogotá",
    "Colombia",
  ],
  en: [
    "Taylor Asprilla",
    "AI solutions",
    "artificial intelligence",
    "AI integration",
    "AI assistants",
    "AI agents",
    "MCP servers",
    "chatbots",
    "process automation",
    "custom software",
    "software development",
    "Software Engineer",
    "Full Stack Developer",
    "Engineering Team Lead",
    "data engineering",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Bogotá",
    "Colombia",
  ],
};

export function buildMetadata(locale: Locale): Metadata {
  const { meta } = getContent(locale);
  const other = locale === "es" ? "en" : "es";

  return {
    metadataBase: new URL(siteConfig.url),
    title: { default: meta.title, template: `%s | ${siteConfig.name}` },
    description: meta.description,
    keywords: keywords[locale],
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    alternates: {
      canonical: localePath[locale],
      languages: {
        [locale]: localePath[locale],
        [other]: localePath[other],
        "x-default": localePath.es,
      },
    },
    openGraph: {
      type: "website",
      locale: meta.ogLocale,
      alternateLocale: [getContent(other).meta.ogLocale],
      url: new URL(localePath[locale], siteConfig.url).toString(),
      title: meta.title,
      description: meta.description,
      siteName: siteConfig.name,
    },
    twitter: { card: "summary_large_image", title: meta.title, description: meta.description },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    manifest: "/manifest.json",
    icons: { icon: "/icon.png", apple: "/apple-icon.png" },
  };
}
