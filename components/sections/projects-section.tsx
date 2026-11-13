import { SectionShell } from "@/components/sections/section-shell";
import { ProjectCarousel } from "@/components/sections/project-carousel";
import { Reveal } from "@/components/ui/reveal";
import type { Content } from "@/content";
import type { Project } from "@/types";

interface ProjectsSectionProps {
  content: Content["projects"];
  projects: Project[];
  visitLabel: string;
}

export function ProjectsSection({ content, projects, visitLabel }: ProjectsSectionProps) {
  // Destacados primero, manteniendo el orden original dentro de cada grupo
  const ordered = [...projects.filter((p) => p.featured), ...projects.filter((p) => !p.featured)];

  return (
    <SectionShell
      id="proyectos"
      number="02"
      titleId="projects-title"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      wide
    >
      <Reveal>
        <ProjectCarousel
          projects={ordered}
          visitLabel={visitLabel}
          label={content.carouselLabel}
          prevLabel={content.prev}
          nextLabel={content.next}
        />
      </Reveal>
    </SectionShell>
  );
}
