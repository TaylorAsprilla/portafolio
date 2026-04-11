import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "landing-page",
    name: "Landing Pages de Alto Impacto",
    description:
      "Páginas de aterrizaje optimizadas para conversión, diseñadas para captar la atención de tu audiencia y generar resultados medibles.",
    benefits: [
      "Diseño centrado en conversión",
      "Optimización SEO técnica",
      "Rendimiento ultra-rápido",
      "Responsive en todos los dispositivos",
      "Integración con analytics",
    ],
    technologies: ["Next.js", "React", "Angular", "WordPress", "Tailwind CSS"],
    price: {
      baseAmount: 500,
      baseCurrency: "USD",
      isRange: true,
    },
    category: "web",
  },
  {
    id: "web-corporativa",
    name: "Desarrollo Web Corporativo",
    description:
      "Sitios web profesionales para empresas que buscan una presencia digital sólida y profesional.",
    benefits: [
      "Diseño a medida de tu marca",
      "CMS personalizado o headless",
      "Multiidioma",
      "Panel de administración",
      "Soporte y mantenimiento",
    ],
    technologies: ["Next.js", "Angular", "WordPress", "TypeScript", "API REST"],
    price: {
      baseAmount: 1100,
      baseCurrency: "USD",
      isRange: true,
    },
    category: "web",
  },
  {
    id: "ecommerce",
    name: "E-commerce y Tiendas Online",
    description:
      "Plataformas de comercio electrónico robustas con pasarelas de pago, gestión de inventario y experiencia de compra optimizada.",
    benefits: [
      "Pasarelas de pago integradas",
      "Gestión de productos e inventario",
      "Carrito de compras avanzado",
      "Panel administrativo completo",
      "Analytics y reportes",
    ],
    technologies: ["Next.js", "Angular", "WordPress", "Stripe", "PayPal"],
    price: {
      baseAmount: 1900,
      baseCurrency: "USD",
      isRange: true,
    },
    category: "web",
  },
  {
    id: "software-medida",
    name: "Desarrollo de Software a la Medida",
    description:
      "Sistemas y aplicaciones web personalizadas para resolver necesidades específicas de tu negocio.",
    benefits: [
      "Análisis de requerimientos",
      "Arquitectura escalable",
      "Desarrollo ágil",
      "Testing y QA",
      "Documentación completa",
    ],
    technologies: ["React", "Angular", "NestJS", "Python", "PostgreSQL"],
    price: {
      baseAmount: 2900,
      baseCurrency: "USD",
      isRange: true,
    },
    category: "software",
  },
  {
    id: "mobile-app",
    name: "Desarrollo de Aplicaciones Móviles",
    description:
      "Apps nativas o híbridas para iOS y Android con rendimiento óptimo y experiencia de usuario excepcional.",
    benefits: [
      "iOS y Android",
      "Diseño UX/UI nativo",
      "Notificaciones push",
      "Integración con APIs",
      "Publicación en stores",
    ],
    technologies: ["React Native", "Flutter", "Firebase", "REST API"],
    price: {
      baseAmount: 2400,
      baseCurrency: "USD",
      isRange: true,
    },
    category: "mobile",
  },
  {
    id: "api-backend",
    name: "APIs y Desarrollo Backend",
    description:
      "Construcción de APIs RESTful o GraphQL escalables, seguras y documentadas para tus aplicaciones.",
    benefits: [
      "Arquitectura RESTful o GraphQL",
      "Autenticación y seguridad",
      "Documentación automática",
      "Testing y CI/CD",
      "Escalabilidad cloud",
    ],
    technologies: ["NestJS", "Express JS", "Python", "PostgreSQL", "MongoDB"],
    price: {
      baseAmount: 1400,
      baseCurrency: "USD",
      isRange: true,
    },
    category: "software",
  },
  {
    id: "dashboard",
    name: "Dashboards y Sistemas Administrativos",
    description:
      "Paneles de control interactivos para visualizar datos, gestionar contenido y administrar tu negocio.",
    benefits: [
      "Visualización de datos en tiempo real",
      "Gestión de usuarios y roles",
      "Reportes y analytics",
      "Interfaz intuitiva",
      "Responsive y optimizado",
    ],
    technologies: ["React", "Angular", "TypeScript", "NestJS", "Charts"],
    price: {
      baseAmount: 1600,
      baseCurrency: "USD",
      isRange: true,
    },
    category: "software",
  },
  {
    id: "data-solutions",
    name: "Soluciones de Datos e Integraciones",
    description:
      "Integración de sistemas, automatización de procesos, ETL, análisis de datos y business intelligence.",
    benefits: [
      "Integración de sistemas",
      "Automatización de procesos",
      "ETL y pipelines de datos",
      "Business Intelligence",
      "Reportes personalizados",
    ],
    technologies: ["Python", "SQL", "Power BI", "APIs", "Cloud Services"],
    price: {
      baseAmount: 1900,
      baseCurrency: "USD",
      isRange: true,
    },
    category: "data",
  },
  {
    id: "mantenimiento",
    name: "Mantenimiento y Evolución de Plataformas",
    description:
      "Soporte técnico, actualizaciones, mejoras de rendimiento y evolución continua de tus sistemas.",
    benefits: [
      "Soporte técnico continuo",
      "Actualizaciones de seguridad",
      "Mejoras de rendimiento",
      "Nuevas funcionalidades",
      "Monitoreo proactivo",
    ],
    technologies: ["Según plataforma", "CI/CD", "Monitoring", "Analytics"],
    price: {
      baseAmount: 400,
      baseCurrency: "USD",
      isRange: true,
    },
    category: "consulting",
  },
  {
    id: "consultoria",
    name: "Arquitectura y Consultoría Tecnológica",
    description:
      "Asesoramiento estratégico en decisiones tecnológicas, arquitectura de software y transformación digital.",
    benefits: [
      "Análisis de arquitectura",
      "Selección de tecnologías",
      "Roadmap tecnológico",
      "Code review",
      "Mejores prácticas",
    ],
    technologies: ["AWS", "Azure", "GCP", "Microservicios", "Cloud Native"],
    price: {
      baseAmount: 0,
      baseCurrency: "USD",
      isCustomQuote: true,
    },
    category: "consulting",
  },
];
