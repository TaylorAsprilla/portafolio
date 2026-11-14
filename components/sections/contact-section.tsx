import { ArrowUpRight } from "lucide-react";
import { SectionShell } from "@/components/sections/section-shell";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/sections/contact-form";
import { siteConfig } from "@/data/config";
import type { Content } from "@/content";

interface RowProps {
  newTab: string;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}

function Row({ newTab, label, value, href, external }: RowProps) {
  const body = (
    <>
      <span className="label">{label}</span>
      <span className="flex items-center gap-2 text-base text-foreground">
        {value}
        {external && (
          <ArrowUpRight
            aria-hidden="true"
            className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
          />
        )}
      </span>
      {external && <span className="sr-only">{newTab}</span>}
    </>
  );

  const cls = "group flex items-baseline justify-between gap-6 border-t border-border py-4";

  if (!href) return <div className={cls}>{body}</div>;

  return (
    <a
      href={href}
      className={`${cls} rounded-sm transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {body}
    </a>
  );
}

export function ContactSection({
  content,
  newTab,
}: {
  content: Content["contact"];
  newTab: string;
}) {
  return (
    <SectionShell
      id="contacto"
      number="04"
      titleId="contact-title"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    >
      <Reveal>
        <a
          href={`mailto:${siteConfig.email}`}
          className="link-underline inline-block break-all rounded-sm pb-1 font-display text-3xl font-bold transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:text-4xl lg:text-5xl"
        >
          {siteConfig.email}
        </a>
      </Reveal>

      <div className="mt-16 grid gap-14 lg:mt-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <ul className="border-b border-border">
            <li>
              <Row newTab={newTab} label={content.channels.whatsapp} value={siteConfig.whatsappDisplay} href={`https://wa.me/${siteConfig.whatsapp}`} external />
            </li>
            <li>
              <Row newTab={newTab} label="LinkedIn" value="in/TaylorAsprilla" href={siteConfig.social.linkedin} external />
            </li>
            <li>
              <Row newTab={newTab} label="GitHub" value="TaylorAsprilla" href={siteConfig.social.github} external />
            </li>
            <li>
              <Row newTab={newTab} label={content.channels.location} value={siteConfig.location} />
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.08}>
          <ContactForm labels={content.form} />
        </Reveal>
      </div>
    </SectionShell>
  );
}
