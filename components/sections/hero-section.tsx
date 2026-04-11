"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code, Smartphone, Database, Cloud, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { AnimatedTechBackground } from "@/components/ui/animated-tech-background";

const roles = [
  { icon: Code, label: "Web" },
  { icon: Smartphone, label: "Mobile" },
  { icon: Database, label: "Software" },
  { icon: Brain, label: "Data" },
  { icon: Cloud, label: "Cloud" },
];

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Fondo animado interactivo con tecnología */}
      <AnimatedTechBackground />

      <Container>
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge Internacional */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="mb-8 flex justify-center"
          ></motion.div>

          {/* Título mejorado con animación */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Ideas Transformadas en{" "}
              <span className="animate-gradient bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-[length:200%_auto] bg-clip-text text-transparent">
                Soluciones Digitales
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-10 text-xl font-medium text-black md:text-2xl"
          >
            Desarrollo de aplicaciones web y móviles escalables, integración de modelos de IA,
            automatización de procesos y soluciones de software personalizadas que impulsan la
            transformación digital de tu negocio.
          </motion.p>

          {/* Badges de roles mejorados */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12 flex flex-wrap items-center justify-center gap-3"
          >
            {roles.map((role, index) => {
              const Icon = role.icon;
              return (
                <motion.div
                  key={role.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                >
                  <Badge
                    variant="outline"
                    className="glass glass-hover border-blue-300/40 px-5 py-2.5 text-sm font-semibold shadow-md transition-all duration-300 hover:border-blue-400/60 hover:shadow-lg hover:shadow-blue-500/20"
                  >
                    <Icon className="mr-2 h-4 w-4 text-blue-500" />
                    {role.label}
                  </Badge>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTAs mejorados */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              asChild
              className="group h-14 bg-gradient-to-r from-blue-600 to-cyan-600 px-8 text-base font-semibold shadow-xl shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/40 active:scale-95"
            >
              <Link href="#contacto">
                Solicitar cotización
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="h-14 border-2 border-blue-400/50 bg-white/50 px-8 text-base font-semibold backdrop-blur-sm transition-all duration-300 hover:border-blue-500 hover:bg-blue-50/80 hover:shadow-lg hover:shadow-blue-500/20 active:scale-95"
            >
              <Link href="#proyectos">Ver proyectos</Link>
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
