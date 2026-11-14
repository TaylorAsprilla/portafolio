import type { Content } from "./types";

export const en: Content = {
  lang: "en",
  nav: [
    { id: "especialidades", label: "Expertise" },
    { id: "proyectos", label: "Projects" },
    { id: "stack", label: "Stack" },
    { id: "contacto", label: "Contact" },
  ],
  ui: {
    skip: "Skip to content",
    index: "Menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    backToTop: "Back to top",
    visit: "View site",
    scrollHint: "Scroll",
    newTab: "(opens in a new tab)",
    techLabel: "Technologies",
    servicesLabel: "Services",
    heroAlt: "Laptop showing the Taylor Interactivo logo",
    shotAlt: "Screenshot of the {name} website",
    homeLabel: "Taylor Interactivo — home",
    switchLang: "Cambiar a español",
    langCode: "EN",
    altLangCode: "ES",
  },
  meta: {
    title: "Taylor Asprilla | AI Solutions, Automation and Software Development",
    description:
      "AI solutions, process automation and custom software for businesses. Taylor Asprilla, Full Stack software engineer based in Bogotá, Colombia.",
    ogLocale: "en_US",
    jobTitle: "Software Engineer and Engineering Team Lead",
    serviceName: "Taylor Asprilla — AI and software solutions",
    serviceTypes: [
      "Artificial intelligence solutions",
      "AI assistants and chatbots",
      "Process automation",
      "Data analytics",
      "Custom software development",
    ],
    ogAlt: "Taylor Asprilla — Software Engineer, Full Stack Developer and Engineering Team Lead",
    ogHeadline: "AI solutions and automation",
    ogSubtitle: "Software Engineer · Full Stack Developer",
    ogFooter: "AI agents · Process automation · Custom software",
  },
  hero: {
    seoTitle: "AI solutions, automation and software development",
    roles: ["AI agents", "MCP servers", "APIs and integrations", "Automation"],
    headline: "AI agents, MCP and APIs that",
    verb: "automate",
    rotating: ["your operations", "your support", "your reports", "your processes"],
    chips: [
      "AI agents",
      "Automation",
      "Data analytics",
      "Chatbots",
      "MCP servers",
      "APIs and integrations",
      "RAG",
      "Cloud",
    ],
    description:
      "Design and integration of artificial intelligence into processes and products: agents and assistants, MCP servers, APIs, task automation and data analytics, custom built and production-ready.",
    ctaProjects: "View projects",
    ctaContact: "Tell me about your project",
  },
  specialties: {
    eyebrow: "Expertise",
    title: "Technical and leadership skills.",
    description: "Seven areas that cover the full lifecycle of a software solution.",
    items: [
      {
        title: "AI Agents & Integrations",
        text: "AI agents and assistants connected to your systems, data and work channels.",
        points: [
          "AI agents with tools and memory",
          "MCP servers and APIs to connect AI to your systems",
          "RAG: assistants that answer from your documents",
          "Workflow automation, WhatsApp, Slack and email",
          "Quality evaluation and security guardrails",
        ],
      },
      {
        title: "Software Engineering",
        text: "Maintainable, well-tested code with clear APIs and good practices.",
        points: ["REST and GraphQL APIs", "Testing and code review", "Clean, modular code"],
      },
      {
        title: "Full Stack Development",
        text: "The complete product, from the interface to the database.",
        points: [
          "React, Next.js and Angular",
          "Node.js, NestJS and Python",
          "TypeScript end to end",
        ],
      },
      {
        title: "Software Architecture",
        text: "Systems designed to evolve without being rewritten.",
        points: [
          "System and module design",
          "Documented technical decisions",
          "Scalability and maintainability",
        ],
      },
      {
        title: "Data Engineering & Analytics",
        text: "Reliable data, ready to analyze and to support decisions.",
        points: ["ETL pipelines", "SQL and data modeling", "Visualization with Power BI"],
      },
      {
        title: "Cloud & DevOps",
        text: "Automated deployments on reproducible infrastructure.",
        points: ["AWS and Vercel", "Docker", "CI/CD with GitHub Actions"],
      },
      {
        title: "Technical Leadership",
        text: "Teams that deliver with judgment, pace and quality.",
        points: [
          "Engineering team leadership",
          "Mentoring and code review",
          "Planning and delivery",
        ],
      },
    ],
  },
  projects: {
    eyebrow: "Projects",
    title: "Real cases.",
    description: "Platforms and websites in production that I have worked on.",
    carouselLabel: "Projects",
    prev: "Previous project",
    next: "Next project",
  },
  stack: {
    eyebrow: "Tech stack",
    title: "Technologies.",
    description: "Tools I use on real projects, organized by area.",
    groups: [
      {
        title: "AI & Agents",
        items: [
          "Claude API",
          "OpenAI API",
          "MCP (Model Context Protocol)",
          "LangChain",
          "RAG and embeddings",
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
        items: ["Node.js", "NestJS", "Python", "FastAPI", "REST and GraphQL"],
      },
      {
        title: "Databases",
        items: ["PostgreSQL", "MongoDB", "Redis"],
      },
      {
        title: "Cloud & DevOps",
        items: ["AWS", "Vercel", "Docker", "CI/CD", "GitHub Actions"],
      },
      {
        title: "Data Engineering",
        items: ["Pandas / NumPy", "SQL", "ETL pipelines", "Power BI"],
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's talk.",
    description:
      "Have a project, a technical challenge or an opportunity? Tell me the context and I will reply personally.",
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      messagePlaceholder: "Tell me about your project or what you need…",
      send: "Send message",
      sending: "Sending…",
      success: "Thank you! I received your message and will reply soon.",
      error: "I couldn't send the message.",
      fallback: "Write to me directly by email",
    },
    channels: { email: "Email", whatsapp: "WhatsApp", location: "Location" },
  },
  footer: {
    rights: "All rights reserved.",
  },
};
