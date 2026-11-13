import type { Metadata, Viewport } from "next";
import { Lato, Source_Sans_3 } from "next/font/google";
import { preload } from "react-dom";
import "./globals.css";
import { siteConfig } from "@/data/config";
import { getContent } from "@/content";
import { Footer } from "@/components/layout/footer";
import { StructuredData } from "@/components/seo/structured-data";

/* Fuentes del logo: "Taylor" → Source Sans (Bold); "Interactivo" → Lato. */
const display = Source_Sans_3({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const sans = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
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

  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_CO",
    alternateLocale: ["en_US"],
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
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
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const content = getContent();

  // La imagen del hero es el elemento más grande de la primera pantalla (LCP): se pide cuanto antes.
  preload("/hero-laptop-1400.webp", {
    as: "image",
    fetchPriority: "high",
    imageSrcSet: "/hero-laptop-760.webp 760w, /hero-laptop-1400.webp 1400w",
    imageSizes: "(min-width: 1024px) 46vw, 92vw",
  });

  return (
    <html lang={content.lang} className={`${sans.variable} ${display.variable}`}>
      <body className="font-sans">
        <a
          href="#contenido"
          className="sr-only z-[60] rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          {content.ui.skip}
        </a>
        <main id="contenido">{children}</main>
        <Footer content={content.footer} backToTop={content.ui.backToTop} />
        <StructuredData />
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </body>
    </html>
  );
}
