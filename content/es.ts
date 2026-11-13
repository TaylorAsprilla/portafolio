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
    index: "Índice",
    backToTop: "Volver arriba",
    visit: "Ver sitio",
    scrollHint: "Desplázate",
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
        title: "AI Agents & Integrations",
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
        title: "Software Engineering",
        text: "Código mantenible y bien probado, con APIs claras y buenas prácticas.",
        points: ["APIs REST y GraphQL", "Pruebas y code review", "Código limpio y modular"],
      },
      {
        title: "Full Stack Development",
        text: "Producto completo, de la interfaz a la base de datos.",
        points: [
          "React, Next.js y Angular",
          "Node.js, NestJS y Python",
          "TypeScript de punta a punta",
        ],
      },
      {
        title: "Software Architecture",
        text: "Sistemas pensados para evolucionar sin reescribirse.",
        points: [
          "Diseño de sistemas y módulos",
          "Decisiones técnicas documentadas",
          "Escalabilidad y mantenibilidad",
        ],
      },
      {
        title: "Data Engineering & Analytics",
        text: "Datos confiables, listos para analizar y para tomar decisiones.",
        points: ["Pipelines ETL", "SQL y modelado de datos", "Visualización con Power BI"],
      },
      {
        title: "Cloud Solutions & DevOps",
        text: "Despliegues automatizados sobre infraestructura reproducible.",
        points: ["AWS y Vercel", "Docker", "CI/CD con GitHub Actions"],
      },
      {
        title: "Technical Leadership",
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
        title: "AI & Agents",
        items: [
          "Claude API",
          "OpenAI API",
          "MCP (Model Context Protocol)",
          "LangChain",
          "RAG y embeddings",
          "pgvector / Vector DBs",
          "n8n / Make",
          "Webhooks",
          "WhatsApp Business API",
        ],
      },
      {
        title: "Frontend",
        items: [
          "React",
          "Next.js",
          "Angular",
          "TypeScript",
          "JavaScript",
          "Tailwind CSS",
          "Redux / Zustand",
          "React Query",
          "Framer Motion",
          "React Native",
          "Flutter",
        ],
      },
      {
        title: "Backend",
        items: [
          "Node.js",
          "Express",
          "NestJS",
          "Python",
          "Django / FastAPI",
          "GraphQL",
          "REST APIs",
          "JWT / Autenticación",
        ],
      },
      {
        title: "Databases",
        items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma", "Firebase"],
      },
      {
        title: "Cloud & Infrastructure",
        items: ["AWS", "Vercel", "Nginx"],
      },
      {
        title: "DevOps",
        items: ["Docker", "CI/CD", "GitHub Actions", "Git"],
      },
      {
        title: "Data Engineering",
        items: [
          "Python",
          "Pandas / NumPy",
          "SQL",
          "Pipelines ETL",
          "Power BI",
          "Visualización de datos",
        ],
      },
      {
        title: "Tools & Platforms",
        items: ["GitHub", "Postman", "Figma", "Jira / Linear", "WordPress"],
      },
    ],
  },
  contact: {
    eyebrow: "Contacto",
    title: "Conversemos.",
    description:
      "¿Tienes un proyecto, un reto técnico o una oportunidad? Cuéntame el contexto y te respondo personalmente.",
    form: {
      name: "Nombre",
      email: "Correo electrónico",
      message: "Mensaje",
      messagePlaceholder: "Cuéntame sobre tu proyecto o tu necesidad…",
      send: "Enviar mensaje",
      sending: "Enviando…",
      success: "¡Gracias! Recibí tu mensaje y te responderé pronto.",
      error: "No pude enviar el mensaje.",
      fallback: "Escríbeme directamente por correo",
    },
    channels: { email: "Correo", whatsapp: "WhatsApp", location: "Ubicación" },
  },
  footer: {
    rights: "Todos los derechos reservados.",
  },
};
