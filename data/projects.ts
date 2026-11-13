import type { Project } from "@/types";

/**
 * Proyectos del portafolio. Las imágenes se generan con `npm run images`
 * a partir de app/assets/img/proyectos/preview/*.png
 */
export const projects: Project[] = [
  {
    id: "beer-runners",
    name: "Beer Runners Cali",
    url: "https://beerrunners.co/",
    domain: "beerrunners.co",
    kind: "Comunidad · Plataforma web",
    description:
      "Plataforma web de una comunidad de running y cerveza artesanal en Cali, con más de 1.000 miembros. Centraliza el calendario de eventos, la inscripción, el entrenamiento semanal gratuito y la presentación de la comunidad.",
    role: "Diseño y desarrollo completo del sitio.",
    stack: ["WordPress", "PHP", "JavaScript", "CSS"],
    image: "/projects/beer-runners.webp",
    featured: true,
    year: 2026,
  },
  {
    id: "david-vera",
    name: "David Vera",
    url: "https://david-vera.com/",
    domain: "david-vera.com",
    kind: "Software a medida · CRM",
    description:
      "CRM personalizado para la gestión integral de clientes, pólizas y agentes, con dashboard administrativo y reportes avanzados.",
    role: "Arquitectura y desarrollo Full Stack.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    image: "/projects/david-vera.webp",
    featured: true,
    year: 2023,
  },
  {
    id: "lluanda",
    name: "Lluanda",
    url: "https://lluanda.com/",
    domain: "lluanda.com",
    kind: "Agencia · Web interactiva",
    description:
      "Sitio de una agencia creativa y de marketing digital, con diseño premium y una experiencia interactiva.",
    role: "Diseño e implementación frontend.",
    stack: ["React", "Design System"],
    image: "/projects/lluanda.webp",
    featured: true,
    year: 2023,
  },
  {
    id: "avantics",
    name: "Avantics",
    url: "https://avantics.io/",
    domain: "avantics.io",
    kind: "Corporativo · Tecnología",
    description: "Sitio corporativo de una plataforma de servicios tecnológicos y desarrollo de software.",
    role: "Desarrollo web.",
    stack: ["WordPress", "JavaScript", "CSS"],
    image: "/projects/avantic.webp",
    year: 2025,
  },
  {
    id: "puerto-rican-craft-beer",
    name: "Puerto Rican Craft Beer",
    url: "https://puertoricancraftbeer.com/",
    domain: "puertoricancraftbeer.com",
    kind: "E-commerce",
    description:
      "Tienda en línea de cerveza artesanal puertorriqueña, con catálogo de productos y flujo de compra.",
    role: "Desarrollo e integración del e-commerce.",
    stack: ["Shopify", "JavaScript"],
    image: "/projects/puertoricancraftbeer.webp",
    year: 2024,
  },
  {
    id: "idae",
    name: "IDAE",
    url: "https://idae.com.co/",
    domain: "idae.com.co",
    kind: "Educación · Corporativo",
    description: "Plataforma web informativa de una institución educativa de alto nivel académico.",
    role: "Desarrollo web.",
    stack: ["WordPress", "PHP", "MySQL"],
    image: "/projects/idae.webp",
    year: 2025,
  },
  {
    id: "lavida-festival",
    name: "La Vida Festival",
    url: "https://lavidafestival.com/",
    domain: "lavidafestival.com",
    kind: "Eventos · Landing",
    description: "Sitio oficial de un festival de música, con información de eventos, artistas y boletos.",
    role: "Desarrollo web.",
    stack: ["WordPress", "JavaScript", "CSS"],
    image: "/projects/la-vida-festival.webp",
    year: 2026,
  },
];
