import type { Project } from "@/types";
import avanticLogo from "@/app/assets/img/proyectos/avantic.png";
import davidVeraLogo from "@/app/assets/img/proyectos/david-vera.png";
import idaeLogo from "@/app/assets/img/proyectos/idae.png";
import lluandaLogo from "@/app/assets/img/proyectos/lluanda.png";
import puertoRicanLogo from "@/app/assets/img/proyectos/Logo-puertorican-Craft-Beer.png";

// Imágenes preview
import avanticPreview from "@/app/assets/img/proyectos/preview/avantic.png";
import davidVeraPreview from "@/app/assets/img/proyectos/preview/david-vera.png";
import idaePreview from "@/app/assets/img/proyectos/preview/idae.png";
import laVidaPreview from "@/app/assets/img/proyectos/preview/la-vida-festival.png";
import lluandaPreview from "@/app/assets/img/proyectos/preview/lluanda.png";
import puertoRicanPreview from "@/app/assets/img/proyectos/preview/puertoricancraftbeer.png";

export const projects: Project[] = [
  {
    id: "avantics",
    name: "Avantics",
    url: "https://avantics.io/",
    domain: "avantics.io",
    categories: ["web-corporativa"],
    description: "Plataforma de servicios tecnológicos y desarrollo de software empresarial",
    shortDescription: "Plataforma de servicios tecnológicos y desarrollo de software",
    tags: ["Tecnología", "Software", "Servicios"],
    stack: ["Wordpress", "CSS", "HTML", "JavaScript"],
    manualLogo: avanticLogo.src,
    manualImage: avanticPreview.src,
    featured: true,
    year: 2025,
  },
  {
    id: "lavida-festival",
    name: "La Vida Festival",
    url: "https://lavidafestival.com/",
    domain: "lavidafestival.com",
    categories: ["festival-eventos", "landing-page"],
    description:
      "Sitio web oficial del festival de música La Vida con información de eventos, artistas y boletos",
    shortDescription: "Sitio web oficial del festival de música La Vida",
    tags: ["Landing Page", "Eventos"],
    stack: ["WordPress", "JavaScript", "CSS"],
    manualImage: laVidaPreview.src,
    featured: true,
    year: 2026,
  },
  {
    id: "david-vera",
    name: "David Vera",
    url: "https://david-vera.com/",
    domain: "david-vera.com",
    categories: ["crm", "software"],
    description:
      "CRM personalizado para la gestión integral de clientes, pólizas y agentes con dashboard administrativo y reportes avanzados",
    shortDescription: "CRM personalizado para gestión de clientes, pólizas y agentes",
    tags: ["CRM", "Gestión", "Software", "Dashboard"],
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    manualLogo: davidVeraLogo.src,
    manualImage: davidVeraPreview.src,
    year: 2023,
  },
  {
    id: "idae",
    name: "IDAE",
    url: "https://idae.com.co/",
    domain: "idae.com.co",
    categories: ["educacion", "web-corporativa"],
    description:
      "Institución educativa de alto nivel académico con plataforma web informativa y administrativa",
    shortDescription: "Institución educativa de alto nivel académico",
    tags: ["Educación", "Institución", "Academia", "Web Corporativa"],
    stack: ["WordPress", "PHP", "MySQL"],
    manualLogo: idaeLogo.src,
    manualImage: idaePreview.src,
    year: 2025,
  },
  {
    id: "lluanda",
    name: "Lluanda",
    url: "https://lluanda.com/",
    domain: "lluanda.com",
    categories: ["agencia", "web-corporativa"],
    description:
      "Agencia creativa y de marketing digital con diseño premium y experiencia interactiva",
    shortDescription: "Agencia creativa y de marketing digital",
    tags: ["Agencia", "Marketing", "Creatividad", "Web Corporativa"],
    stack: ["React", "Design System"],
    manualLogo: lluandaLogo.src,
    manualImage: lluandaPreview.src,
    darkLogoBg: true,
    featured: true,
    year: 2023,
  },
  {
    id: "puerto-rican-craft-beer",
    name: "Puerto Rican Craft Beer",
    url: "https://puertoricancraftbeer.com/",
    domain: "puertoricancraftbeer.com",
    categories: ["consumo", "e-commerce"],
    description:
      "E-commerce de cerveza artesanal puertorriqueña con catálogo de productos y sistema de ventas",
    shortDescription: "Sitio de cerveza artesanal puertorriqueña",
    tags: ["Consumo", "Cerveza", "Artesanal", "E-commerce"],
    stack: ["E-commerce", "Shopify", "JavaScript"],
    manualLogo: puertoRicanLogo.src,
    manualImage: puertoRicanPreview.src,
    year: 2024,
  },
];
