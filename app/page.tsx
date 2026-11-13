import { getContent } from "@/content";
import { projects } from "@/data/projects";
import { HeroSection } from "@/components/sections/hero-section";
import { SpecialtiesSection } from "@/components/sections/specialties-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { StackSection } from "@/components/sections/stack-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function HomePage() {
  const content = getContent();

  return (
    <>
      <HeroSection content={content.hero} nav={content.nav} ui={content.ui} />
      <SpecialtiesSection content={content.specialties} />
      <ProjectsSection content={content.projects} projects={projects} visitLabel={content.ui.visit} />
      <StackSection content={content.stack} />
      <ContactSection content={content.contact} />
    </>
  );
}
