import { getContent, type Locale } from "@/content";
import { getProjects } from "@/data/projects";
import { HeroSection } from "@/components/sections/hero-section";
import { SpecialtiesSection } from "@/components/sections/specialties-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { StackSection } from "@/components/sections/stack-section";
import { ContactSection } from "@/components/sections/contact-section";

export function Home({ locale }: { locale: Locale }) {
  const content = getContent(locale);

  return (
    <>
      <HeroSection content={content.hero} ui={content.ui} />
      <SpecialtiesSection content={content.specialties} />
      <ProjectsSection content={content.projects} projects={getProjects(locale)} ui={content.ui} />
      <StackSection content={content.stack} />
      <ContactSection content={content.contact} newTab={content.ui.newTab} />
    </>
  );
}
