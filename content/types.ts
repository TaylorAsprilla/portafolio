export interface Content {
  lang: "es" | "en";
  /** Secciones numeradas del sitio (01, 02, …) en el orden de la página. */
  nav: { id: string; label: string }[];
  ui: {
    skip: string;
    index: string;
    openMenu: string;
    closeMenu: string;
    backToTop: string;
    visit: string;
    scrollHint: string;
    /** Texto oculto para enlaces que abren en pestaña nueva. */
    newTab: string;
    techLabel: string;
    servicesLabel: string;
    heroAlt: string;
    /** "{name}" se sustituye por el nombre del proyecto. */
    shotAlt: string;
    homeLabel: string;
    /** Nombre del idioma al que cambia el selector (para lectores de pantalla). */
    switchLang: string;
    /** Código corto del idioma actual y del alternativo. */
    langCode: string;
    altLangCode: string;
  };
  /** SEO, metadatos y datos estructurados. */
  meta: {
    title: string;
    description: string;
    ogLocale: string;
    jobTitle: string;
    serviceName: string;
    serviceTypes: string[];
    ogAlt: string;
    ogHeadline: string;
    ogSubtitle: string;
    ogFooter: string;
  };
  hero: {
    /** Texto oculto que acompaña al nombre en el <h1> (para SEO y lectores de pantalla). */
    seoTitle: string;
    roles: string[];
    /** Titular: "{headline} {verb} {rotating[n]}." — la última parte rota. */
    headline: string;
    verb: string;
    rotating: string[];
    /** Etiquetas flotantes alrededor del laptop (decorativas). Las 3 primeras son fijas; el resto solo aparece en la primera pantalla. */
    chips: string[];
    description: string;
    ctaProjects: string;
    ctaContact: string;
  };
  specialties: {
    eyebrow: string;
    title: string;
    description: string;
    items: { title: string; text: string; points: string[] }[];
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    carouselLabel: string;
    prev: string;
    next: string;
  };
  stack: {
    eyebrow: string;
    title: string;
    description: string;
    groups: { title: string; items: string[] }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    /** Botones de mensajería directa. */
    chat: { label: string; whatsapp: string; telegram: string; email: string; more: string };
    channels: { email: string; whatsapp: string; location: string };
  };
  footer: { rights: string };
}
