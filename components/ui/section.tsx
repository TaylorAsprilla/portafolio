"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      {children}
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({ title, description, className }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("mb-12 text-center md:mb-16", className)}
    >
      <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {description && (
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">{description}</p>
      )}
    </motion.div>
  );
}
