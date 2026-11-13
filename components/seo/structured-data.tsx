import { siteConfig } from "@/data/config";

/** Datos estructurados (JSON-LD): Person + WebSite. */
export function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteConfig.url}#person`,
        name: siteConfig.name,
        url: siteConfig.url,
        image: `${siteConfig.url}logo.png`,
        email: siteConfig.email,
        jobTitle: "Software Engineer y Engineering Team Lead",
        description: siteConfig.description,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bogotá",
          addressCountry: "CO",
        },
        sameAs: [siteConfig.social.linkedin, siteConfig.social.github],
        knowsAbout: [
          "Artificial Intelligence",
          "AI Integration",
          "Process Automation",
          "Chatbots and AI Assistants",
          "AI Agents",
          "Model Context Protocol (MCP)",
          "API Development and Integrations",
          "Retrieval-Augmented Generation (RAG)",
          "Software Engineering",
          "Full Stack Development",
          "Software Architecture",
          "Data Engineering",
          "Cloud Solutions",
          "DevOps",
          "Technical Leadership",
          "TypeScript",
          "React",
          "Next.js",
          "Node.js",
          "Python",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}#service`,
        name: `${siteConfig.name} — Soluciones de IA y software`,
        url: siteConfig.url,
        image: `${siteConfig.url}logo.png`,
        provider: { "@id": `${siteConfig.url}#person` },
        serviceType: [
          "Soluciones de inteligencia artificial",
          "Asistentes y chatbots con IA",
          "Automatización de procesos",
          "Análisis de datos",
          "Desarrollo de software a medida",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}#website`,
        url: siteConfig.url,
        name: `${siteConfig.name} — Portafolio`,
        inLanguage: "es",
        publisher: { "@id": `${siteConfig.url}#person` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // JSON-LD estático generado en build; no contiene entrada de usuario.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
