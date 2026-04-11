import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/config";
import { CurrencyProvider } from "@/components/currency-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StructuredData } from "@/components/seo/structured-data";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#3b82f6",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    // Servicios principales
    "desarrollo web",
    "desarrollo móvil",
    "desarrollo de software",
    "aplicaciones web",
    "aplicaciones móviles",
    "desarrollo full stack",

    // Tecnologías
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "JavaScript",
    "Tailwind CSS",

    // Especialidades
    "integración de IA",
    "inteligencia artificial",
    "automatización de procesos",
    "desarrollo de APIs",
    "arquitectura de software",
    "desarrollo escalable",

    // Tipos de proyectos
    "landing pages",
    "sitios web corporativos",
    "e-commerce",
    "CRM",
    "sistemas empresariales",
    "PWA",

    // Ubicación y alcance
    "freelance",
    "remoto",
    "Colombia",
    "internacional",
    "USA",
    "Europa",
    "Latinoamérica",

    // SEO técnico
    "desarrollo frontend",
    "desarrollo backend",
    "diseño web moderno",
    "UX/UI",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  icons: {
    icon: [{ url: "/icon.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: ["en_US"],
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}icon.png`,
        width: 1200,
        height: 630,
        alt: "Desarrollo Web y Móvil Profesional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}icon.png`],
    creator: "@TaylorAsprilla",
  },
  verification: {
    google: "google-site-verification-code",
    // yandex: "yandex-verification",
    // bing: "msvalidate.01",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <StructuredData />
      </head>
      <body className={inter.className}>
        <CurrencyProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </CurrencyProvider>
      </body>
    </html>
  );
}
