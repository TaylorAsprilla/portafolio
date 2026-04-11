"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/services";
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
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCurrency } from "@/components/currency-provider";
import { formatPriceFromConfig } from "@/lib/currency";

export function ServicesSection() {
  const { currency } = useCurrency();

  return (
    <Section id="servicios">
      <Container>
        <SectionHeader
          title="Servicios"
          description="Soluciones tecnológicas profesionales adaptadas a tus necesidades"
        />

        <div className="grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/30">
                <CardHeader>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Beneficios */}
                  <div className="space-y-2">
                    {service.benefits.slice(0, 3).map((benefit) => (
                      <div key={benefit} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <p className="text-sm text-muted-foreground">{benefit}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Precio */}
                  <div className="pt-2">
                    <p className="text-2xl font-bold text-primary">
                      {formatPriceFromConfig(service.price, currency)}
                    </p>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full transition-transform active:scale-95 group-hover:bg-primary group-hover:text-primary-foreground"
                    asChild
                  >
                    <Link href="#contacto">
                      Consultar
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
