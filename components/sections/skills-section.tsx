"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/skills";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";

export function SkillsSection() {
  return (
    <Section id="tecnologias" className="bg-muted/30">
      <Container>
        <SectionHeader
          title="Tecnologías"
          description="Stack tecnológico y herramientas con las que trabajo"
        />

        <div className="space-y-12">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            >
              <h3 className="mb-6 text-2xl font-semibold text-primary">{group.title}</h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Badge
                      variant="outline"
                      className="glass glass-hover cursor-default px-4 py-2 text-sm font-medium"
                    >
                      {skill.name}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
