import { siteConfig } from "@/data/config";

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      // Organization
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.url}icon.png`,
          width: 180,
          height: 180,
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: siteConfig.phone,
          contactType: "Customer Service",
          email: siteConfig.email,
          availableLanguage: ["Spanish", "English"],
        },
        sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
      },
      // Website
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}#website`,
        url: siteConfig.url,
        name: siteConfig.title,
        description: siteConfig.description,
        publisher: {
          "@id": `${siteConfig.url}#organization`,
        },
        inLanguage: "es-ES",
      },
      // Professional Service
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}#service`,
        name: "Desarrollo Web y Móvil Profesional",
        description: siteConfig.description,
        url: siteConfig.url,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        priceRange: "$$",
        areaServed: [
          {
            "@type": "Country",
            name: "Colombia",
          },
          {
            "@type": "Country",
            name: "United States",
          },
          {
            "@type": "Country",
            name: "Europe",
          },
        ],
        serviceType: [
          "Web Development",
          "Mobile App Development",
          "Software Development",
          "AI Integration",
          "Process Automation",
        ],
        provider: {
          "@id": `${siteConfig.url}#organization`,
        },
      },
      // Person (Developer)
      {
        "@type": "Person",
        "@id": `${siteConfig.url}#person`,
        name: siteConfig.name,
        url: siteConfig.url,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        jobTitle: "Full Stack Developer",
        worksFor: {
          "@id": `${siteConfig.url}#organization`,
        },
        sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
        knowsAbout: [
          "Web Development",
          "Mobile Development",
          "React",
          "Next.js",
          "TypeScript",
          "Node.js",
          "Artificial Intelligence",
          "Software Architecture",
        ],
      },
      // WebPage
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}#webpage`,
        url: siteConfig.url,
        name: siteConfig.title,
        description: siteConfig.description,
        isPartOf: {
          "@id": `${siteConfig.url}#website`,
        },
        about: {
          "@id": `${siteConfig.url}#organization`,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${siteConfig.url}icon.png`,
        },
        inLanguage: "es-ES",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
