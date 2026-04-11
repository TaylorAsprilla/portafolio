import { projects as projectsData } from "@/data/projects";
import { extractMultipleMetadata } from "@/lib/metadata/extractor";
import type { EnrichedProject } from "@/types";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ContactSection } from "@/components/sections/contact-section";

// Configuración: cambia a false si la extracción de metadata causa problemas durante el build
const ENABLE_METADATA_EXTRACTION = false;

async function getEnrichedProjects(): Promise<EnrichedProject[]> {
  // Si la extracción está deshabilitada, retornar proyectos sin metadata
  if (!ENABLE_METADATA_EXTRACTION) {
    console.log("Metadata extraction disabled");
    return projectsData;
  }

  try {
    // Extraer metadata de todos los proyectos
    const urls = projectsData.map((p) => p.url);

    // Timeout general para toda la extracción (30 segundos máximo)
    const metadataPromise = extractMultipleMetadata(urls);
    const timeoutPromise = new Promise<Map<string, any>>((_, reject) =>
      setTimeout(() => reject(new Error("Metadata extraction timeout")), 30000)
    );

    const metadataMap = await Promise.race([metadataPromise, timeoutPromise]);

    // Enriquecer proyectos con metadata
    const enrichedProjects: EnrichedProject[] = projectsData.map((project) => ({
      ...project,
      metadata: metadataMap.get(project.domain),
    }));

    console.log(`Successfully enriched ${enrichedProjects.length} projects`);
    return enrichedProjects;
  } catch (error) {
    console.warn("Could not enrich projects with metadata:", error);
    // En caso de error, devolver proyectos sin metadata
    return projectsData;
  }
}

export default async function HomePage() {
  const projects = await getEnrichedProjects();

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection projects={projects} />
      <ContactSection />
    </>
  );
}
