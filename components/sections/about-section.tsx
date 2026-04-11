"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";

const highlights = [
  "Soluciones web y móviles de alto rendimiento",
  "Arquitectura escalable y mantenible",
  "Experiencia de usuario excepcional",
  "Código limpio y mejores prácticas",
  "Entrega a tiempo y comunicación clara",
];

export function AboutSection() {
  return (
    <Section id="sobre-mi" className="bg-muted/30 py-16 md:py-24">
      <Container>
        <SectionHeader
          title="Sobre el Servicio"
          description="Soluciones profesionales de desarrollo enfocadas en crear productos digitales que generan impacto"
        />

        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-lg leading-relaxed text-foreground/90"
          >
            <p className="mb-6">
              Servicio profesional de desarrollo full stack con amplia experiencia en la creación de{" "}
              <span className="font-semibold text-primary">
                aplicaciones web, móviles y sistemas empresariales
              </span>{" "}
              que resuelven problemas reales y generan valor para los negocios.
            </p>
            <p className="mb-6">
              El enfoque se centra en construir{" "}
              <span className="font-semibold text-primary">
                soluciones escalables, eficientes y con excelente experiencia de usuario
              </span>
              , utilizando las tecnologías más modernas y robustas del mercado.
            </p>
            <p>
              Colaboración con empresas, startups y emprendedores para transformar ideas en
              productos digitales exitosos, desde landing pages de alto impacto hasta sistemas
              complejos de gestión y análisis de datos.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-3"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <p className="text-foreground/90">{highlight}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
