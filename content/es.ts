import type { Content } from "./types";

export const es: Content = {
  lang: "es",
  nav: [
    { id: "especialidades", label: "Especialidades" },
    { id: "proyectos", label: "Proyectos" },
    { id: "stack", label: "Stack" },
    { id: "contacto", label: "Contacto" },
  ],
  ui: {
    skip: "Saltar al contenido",
    index: "Menú",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    backToTop: "Volver arriba",
    visit: "Ver sitio",
    scrollHint: "Desplázate",
    newTab: "(se abre en una pestaña nueva)",
    techLabel: "Tecnologías",
    servicesLabel: "Servicios",
    heroAlt: "Laptop mostrando el logo de Taylor Interactivo",
    shotAlt: "Captura del sitio {name}",
    homeLabel: "Taylor Interactivo — inicio",
    switchLang: "Switch to English",
    langCode: "ES",
    altLangCode: "EN",
  },
  meta: {
    title: "Taylor Asprilla | Soluciones de IA, Automatización y Desarrollo de Software",
    description:
      "Soluciones de inteligencia artificial, automatización de procesos y software a medida para empresas. Taylor Asprilla, ingeniero de software Full Stack en Bogotá, Colombia.",
    ogLocale: "es_CO",
    jobTitle: "Software Engineer y Engineering Team Lead",
    serviceName: "Taylor Asprilla — Soluciones de IA y software",
    serviceTypes: [
      "Soluciones de inteligencia artificial",
      "Asistentes y chatbots con IA",
      "Automatización de procesos",
      "Análisis de datos",
      "Desarrollo de software a medida",
    ],
    ogAlt: "Taylor Asprilla — Software Engineer, Full Stack Developer y Engineering Team Lead",
    ogHeadline: "Soluciones de IA y automatización",
    ogSubtitle: "Software Engineer · Full Stack Developer",
    ogFooter: "Agentes de IA · Automatización de procesos · Software a medida",
  },
  hero: {
    seoTitle: "Soluciones de IA, automatización y desarrollo de software",
    roles: ["Agentes de IA", "Servidores MCP", "APIs e integraciones", "Automatización"],
    headline: "Agentes de IA, MCP y APIs que",
    verb: "automatizan",
    rotating: ["tu operación", "tu soporte", "tus reportes", "tus procesos"],
    chips: [
      "Agentes de IA",
      "Automatización",
      "Análisis de datos",
      "Chatbots",
      "Servidores MCP",
      "APIs e integraciones",
      "RAG",
      "Cloud",
    ],
    description:
      "Diseño e integración de inteligencia artificial en procesos y productos: agentes y asistentes, servidores MCP, APIs, automatización de tareas y análisis de datos, desarrollados a medida y listos para producción.",
    ctaProjects: "Ver proyectos",
    ctaContact: "Cuéntame tu proyecto",
  },
  specialties: {
    eyebrow: "Especialidades",
    title: "Capacidades técnicas y de liderazgo.",
    description: "Siete áreas que cubren el ciclo completo de una solución de software.",
    items: [
      {
        title: "Agentes de IA e integraciones",
        text: "Agentes y asistentes de IA conectados a tus sistemas, datos y canales de trabajo.",
        points: [
          "Agentes de IA con herramientas y memoria",
          "Servidores MCP y APIs para conectar la IA a tus sistemas",
          "RAG: asistentes que responden con tus documentos",
          "Automatización de flujos, WhatsApp, Slack y correo",
          "Evaluación de calidad y guardarraíles de seguridad",
        ],
      },
      {
        title: "Ingeniería de software",
        text: "Código mantenible y bien probado, con APIs claras y buenas prácticas.",
        points: ["APIs REST y GraphQL", "Pruebas y code review", "Código limpio y modular"],
      },
      {
        title: "Desarrollo Full Stack",
        text: "Producto completo, de la interfaz a la base de datos.",
        points: [
          "React, Next.js y Angular",
          "Node.js, NestJS y Python",
          "TypeScript de punta a punta",
        ],
      },
      {
        title: "Arquitectura de software",
        text: "Sistemas pensados para evolucionar sin reescribirse.",
        points: [
          "Diseño de sistemas y módulos",
          "Decisiones técnicas documentadas",
          "Escalabilidad y mantenibilidad",
        ],
      },
      {
        title: "Ingeniería de datos y analítica",
        text: "Datos confiables, listos para analizar y para tomar decisiones.",
        points: ["Pipelines ETL", "SQL y modelado de datos", "Visualización con Power BI"],
      },
      {
        title: "Cloud y DevOps",
        text: "Despliegues automatizados sobre infraestructura reproducible.",
        points: ["AWS y Vercel", "Docker", "CI/CD con GitHub Actions"],
      },
      {
        title: "Liderazgo técnico",
        text: "Equipos que entregan con criterio, ritmo y calidad.",
        points: [
          "Liderazgo de equipos de ingeniería",
          "Mentoría y code review",
          "Planificación y entrega",
        ],
      },
    ],
  },
  projects: {
    eyebrow: "Proyectos",
    title: "Casos reales.",
    description: "Plataformas y sitios en producción en los que he participado.",
    carouselLabel: "Proyectos",
    prev: "Proyecto anterior",
    next: "Proyecto siguiente",
  },
  stack: {
    eyebrow: "Stack tecnológico",
    title: "Tecnologías.",
    description: "Herramientas que uso en proyectos reales, organizadas por área.",
    groups: [
      {
        title: "IA y agentes",
        items: [
          "Claude API",
          "OpenAI API",
          "MCP (Model Context Protocol)",
          "LangChain",
          "RAG y embeddings",
          "n8n / Make",
          "WhatsApp Business API",
        ],
      },
      {
        title: "Frontend",
        items: ["React", "Next.js", "Angular", "TypeScript", "Tailwind CSS"],
      },
      {
        title: "Backend",
        items: ["Node.js", "NestJS", "Python", "FastAPI", "REST y GraphQL"],
      },
      {
        title: "Bases de datos",
        items: ["PostgreSQL", "MongoDB", "Redis"],
      },
      {
        title: "Cloud y DevOps",
        items: ["AWS", "Vercel", "Docker", "CI/CD", "GitHub Actions"],
      },
      {
        title: "Ingeniería de datos",
        items: ["Pandas / NumPy", "SQL", "Pipelines ETL", "Power BI"],
      },
    ],
  },
  contact: {
    eyebrow: "Contacto",
    title: "Conversemos.",
    description:
      "¿Tienes un proyecto, un reto técnico o una oportunidad? Cuéntame el contexto y te respondo personalmente.",
    chat: {
      label: "Escríbeme directo",
      whatsapp: "Escríbeme por WhatsApp",
      telegram: "Escríbeme por Telegram",
    },
    channels: { email: "Correo", whatsapp: "WhatsApp", location: "Ubicación" },
  },
  footer: {
    rights: "Todos los derechos reservados.",
  },
};
