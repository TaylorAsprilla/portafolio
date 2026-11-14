import type { Locale } from "@/content";
import type { Project } from "@/types";

interface ProjectText {
  kind: string;
  description: string;
  role: string;
}

type ProjectSource = Omit<Project, "kind" | "description" | "role"> & {
  text: Record<Locale, ProjectText>;
};

/**
 * Proyectos del portafolio. Las imágenes se generan con `npm run images`
 * a partir de app/assets/img/proyectos/preview/*.png
 * Los textos están en cada idioma dentro de `text`.
 */
const source: ProjectSource[] = [
  {
    id: "beer-runners",
    name: "Beer Runners Cali",
    url: "https://beerrunners.co/",
    domain: "beerrunners.co",
    stack: ["WordPress", "PHP", "JavaScript", "CSS"],
    image: "/projects/beer-runners.webp",
    featured: true,
    year: 2026,
    text: {
      es: {
        kind: "Comunidad · Plataforma web",
        description:
          "Plataforma web de una comunidad de running y cerveza artesanal en Cali, con más de 1.000 miembros. Centraliza el calendario de eventos, la inscripción, el entrenamiento semanal gratuito y la presentación de la comunidad.",
        role: "Diseño y desarrollo completo del sitio.",
      },
      en: {
        kind: "Community · Web platform",
        description:
          "Web platform for a running and craft beer community in Cali, with more than 1,000 members. It centralizes the event calendar, registration, the free weekly training and the community's presentation.",
        role: "Complete design and development of the site.",
      },
    },
  },
  {
    id: "david-vera",
    name: "David Vera",
    url: "https://david-vera.com/",
    domain: "david-vera.com",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    image: "/projects/david-vera.webp",
    featured: true,
    year: 2023,
    text: {
      es: {
        kind: "Software a medida · CRM",
        description:
          "CRM personalizado para la gestión integral de clientes, pólizas y agentes, con dashboard administrativo y reportes avanzados.",
        role: "Arquitectura y desarrollo Full Stack.",
      },
      en: {
        kind: "Custom software · CRM",
        description:
          "Custom CRM for end-to-end management of clients, policies and agents, with an admin dashboard and advanced reports.",
        role: "Architecture and Full Stack development.",
      },
    },
  },
  {
    id: "lluanda",
    name: "Lluanda",
    url: "https://lluanda.com/",
    domain: "lluanda.com",
    stack: ["React", "Design System"],
    image: "/projects/lluanda.webp",
    featured: true,
    year: 2023,
    text: {
      es: {
        kind: "Agencia · Web interactiva",
        description:
          "Sitio de una agencia creativa y de marketing digital, con diseño premium y una experiencia interactiva.",
        role: "Diseño e implementación frontend.",
      },
      en: {
        kind: "Agency · Interactive web",
        description:
          "Website for a creative and digital marketing agency, with premium design and an interactive experience.",
        role: "Frontend design and implementation.",
      },
    },
  },
  {
    id: "avantics",
    name: "Avantics",
    url: "https://avantics.io/",
    domain: "avantics.io",
    stack: ["WordPress", "JavaScript", "CSS"],
    image: "/projects/avantic.webp",
    year: 2025,
    text: {
      es: {
        kind: "Corporativo · Tecnología",
        description:
          "Sitio corporativo de una plataforma de servicios tecnológicos y desarrollo de software.",
        role: "Desarrollo web.",
      },
      en: {
        kind: "Corporate · Technology",
        description:
          "Corporate website for a technology services and software development platform.",
        role: "Web development.",
      },
    },
  },
  {
    id: "puerto-rican-craft-beer",
    name: "Puerto Rican Craft Beer",
    url: "https://puertoricancraftbeer.com/",
    domain: "puertoricancraftbeer.com",
    stack: ["Shopify", "JavaScript"],
    image: "/projects/puertoricancraftbeer.webp",
    year: 2024,
    text: {
      es: {
        kind: "E-commerce",
        description:
          "Tienda en línea de cerveza artesanal puertorriqueña, con catálogo de productos y flujo de compra.",
        role: "Desarrollo e integración del e-commerce.",
      },
      en: {
        kind: "E-commerce",
        description:
          "Online store for Puerto Rican craft beer, with a product catalog and checkout flow.",
        role: "E-commerce development and integration.",
      },
    },
  },
  {
    id: "idae",
    name: "IDAE",
    url: "https://idae.com.co/",
    domain: "idae.com.co",
    stack: ["WordPress", "PHP", "MySQL"],
    image: "/projects/idae.webp",
    year: 2025,
    text: {
      es: {
        kind: "Educación · Corporativo",
        description:
          "Plataforma web informativa de una institución educativa de alto nivel académico.",
        role: "Desarrollo web.",
      },
      en: {
        kind: "Education · Corporate",
        description: "Informational web platform for a high-level academic institution.",
        role: "Web development.",
      },
    },
  },
  {
    id: "lavida-festival",
    name: "La Vida Festival",
    url: "https://lavidafestival.com/",
    domain: "lavidafestival.com",
    stack: ["WordPress", "JavaScript", "CSS"],
    image: "/projects/la-vida-festival.webp",
    year: 2026,
    text: {
      es: {
        kind: "Eventos · Landing",
        description:
          "Sitio oficial de un festival de música, con información de eventos, artistas y boletos.",
        role: "Desarrollo web.",
      },
      en: {
        kind: "Events · Landing page",
        description:
          "Official website of a music festival, with event, artist and ticket information.",
        role: "Web development.",
      },
    },
  },
];

export function getProjects(locale: Locale): Project[] {
  return source.map(({ text, ...project }) => ({ ...project, ...text[locale] }));
}
