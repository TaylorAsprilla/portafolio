export interface Content {
  lang: "es" | "en";
  /** Secciones numeradas del sitio (01, 02, …) en el orden de la página. */
  nav: { id: string; label: string }[];
  ui: {
    skip: string;
    index: string;
    backToTop: string;
    visit: string;
    scrollHint: string;
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
    form: {
      name: string;
      email: string;
      message: string;
      messagePlaceholder: string;
      send: string;
      sending: string;
      success: string;
      error: string;
      fallback: string;
    };
    channels: { email: string; whatsapp: string; location: string };
  };
  footer: { rights: string; built: string };
}
