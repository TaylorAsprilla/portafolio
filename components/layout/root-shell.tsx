import { preload } from "react-dom";
import { sans, display } from "@/lib/fonts";
import { getContent, localePath, type Locale } from "@/content";
import { Footer } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/site-header";
import { StructuredData } from "@/components/seo/structured-data";

/** <html> y <body> compartidos por todos los idiomas (cada idioma tiene su propio layout raíz). */
export function RootShell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const content = getContent(locale);
  const altLocale: Locale = locale === "es" ? "en" : "es";

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
        <SiteHeader
          nav={content.nav}
          ui={content.ui}
          cta={content.hero.ctaContact}
          altHref={localePath[altLocale]}
        />
        <main id="contenido">{children}</main>
        <Footer content={content.footer} backToTop={content.ui.backToTop} />
        <StructuredData locale={locale} />
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </body>
    </html>
  );
}
