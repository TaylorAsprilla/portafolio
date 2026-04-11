"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Search, Filter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { EnrichedProject, ProjectCategory } from "@/types";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { extractDomain } from "@/lib/utils";

interface ProjectsSectionProps {
  projects: EnrichedProject[];
}

const categories: { value: ProjectCategory | "all"; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "web-corporativa", label: "Web Corporativa" },
  { value: "landing-page", label: "Landing Page" },
  { value: "crm", label: "CRM" },
  { value: "software", label: "Software" },
  { value: "marca-personal", label: "Marca Personal" },
  { value: "educacion", label: "Educación" },
  { value: "agencia", label: "Agencia" },
  { value: "consumo", label: "Consumo" },
  { value: "festival-eventos", label: "Eventos" },
];

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | "all">("all");

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      search === "" ||
      project.name.toLowerCase().includes(search.toLowerCase()) ||
      project.domain.toLowerCase().includes(search.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()));

    const matchesCategory =
      selectedCategory === "all" || project.categories.includes(selectedCategory);

    return matchesSearch && matchesCategory;
  });

  return (
    <Section id="proyectos">
      <Container>
        <SectionHeader
          title="Proyectos"
          description="Sitios web y aplicaciones desarrolladas para clientes"
        />

        {/* Filtros */}
        <div className="mb-12 space-y-6">
          {/* Búsqueda */}
          <div className="relative mx-auto max-w-xl">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Buscar proyectos..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Categorías */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.value)}
                className="text-sm"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Grid de proyectos */}
        <AnimatePresence mode="popLayout">
          {filteredProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-20 text-center"
            >
              <p className="text-xl text-muted-foreground">
                No se encontraron proyectos con esos criterios.
              </p>
            </motion.div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          )}
        </AnimatePresence>
      </Container>
    </Section>
  );
}

function ProjectCard({ project, index }: { project: EnrichedProject; index: number }) {
  const displayImage = project.manualImage || project.metadata?.image;
  const displayLogo = project.manualLogo || project.metadata?.logo;
  const displayTitle = project.name || project.metadata?.title || extractDomain(project.url);
  const displayDescription =
    project.shortDescription || project.metadata?.description || project.description;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Card className="group h-full overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/30">
        {/* Imagen preview */}
        <div className="relative aspect-video w-full overflow-hidden bg-muted">
          {displayImage ? (
            <Image
              src={displayImage}
              alt={displayTitle}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-500/10 to-purple-500/10">
              <p className="text-4xl font-bold text-primary/30">
                {project.domain.slice(0, 1).toUpperCase()}
              </p>
            </div>
          )}

          {/* Badge featured */}
          {project.featured && <Badge className="absolute right-2 top-2">Destacado</Badge>}
        </div>

        <CardHeader>
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1">
              <CardTitle className="line-clamp-1 text-xl">{displayTitle}</CardTitle>
              <CardDescription className="mt-1">{project.domain}</CardDescription>
            </div>
            {displayLogo && (
              <div
                className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-md p-1 shadow-sm ${
                  project.darkLogoBg ? "bg-gray-900" : "bg-white"
                }`}
              >
                <Image
                  src={displayLogo}
                  alt={`${displayTitle} logo`}
                  fill
                  className="object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            )}
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {displayDescription && (
            <p className="line-clamp-2 text-sm text-muted-foreground">{displayDescription}</p>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Stack */}
          {project.stack && project.stack.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.stack.slice(0, 3).map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>

        <CardFooter>
          <Button
            variant="outline"
            className="w-full transition-transform active:scale-95 group-hover:bg-primary group-hover:text-primary-foreground"
            asChild
          >
            <Link href={project.url} target="_blank" rel="noopener noreferrer">
              Visitar sitio
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
