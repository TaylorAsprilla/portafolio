"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MessageSquare } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/config";

export function ContactSection() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=Hola,%20estoy%20interesado%20en%20tus%20servicios`;

  return (
    <Section id="contacto" className="bg-muted/30">
      <Container>
        <SectionHeader
          title="Contacto"
          description="¿Tienes un proyecto en mente? Conversemos y hagámoslo realidad"
        />

        <div className="mx-auto max-w-4xl space-y-8">
          {/* CTA Principal WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Button
              size="lg"
              className="group h-16 gap-3 bg-green-500 px-8 text-lg font-semibold transition-all hover:bg-green-600 hover:shadow-2xl hover:shadow-green-500/30 active:scale-95"
              asChild
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageSquare className="h-6 w-6" />
                Contactar por WhatsApp
              </a>
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">Respuesta en menos de 24 horas</p>
          </motion.div>

          {/* Información de contacto */}
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="glass h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <CardHeader>
                  <CardTitle>Información de contacto</CardTitle>
                  <CardDescription>
                    Disponibilidad para nuevos proyectos y colaboraciones
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="group flex items-center gap-4 rounded-lg p-3 transition-colors hover:bg-primary/10"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground group-hover:text-primary">
                        {siteConfig.email}
                      </p>
                    </div>
                  </a>

                  {siteConfig.phone && (
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="group flex items-center gap-4 rounded-lg p-3 transition-colors hover:bg-primary/10"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Teléfono</p>
                        <p className="text-sm text-muted-foreground group-hover:text-primary">
                          {siteConfig.phone}
                        </p>
                      </div>
                    </a>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="glass glow h-full transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl font-semibold">¿Por qué trabajar conmigo?</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Entrega a tiempo y presupuesto transparente</li>
                    <li>✓ Comunicación clara durante todo el proyecto</li>
                    <li>✓ Código de alta calidad y documentado</li>
                    <li>✓ Soporte post-lanzamiento incluido</li>
                    <li>✓ Experiencia con proyectos reales exitosos</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
