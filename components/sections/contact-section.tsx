import { ArrowUpRight, Github, Linkedin, Mail, MapPin, type LucideIcon } from "lucide-react";
import { SectionShell } from "@/components/sections/section-shell";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/data/config";
import type { Content } from "@/content";

/* Íconos de marca (lucide no los incluye). Rellenos con el color de la marca. */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88a9.82 9.82 0 0 1 6.99 2.9 9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88zM20.52 3.45A11.8 11.8 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.16-3.48-8.41z" />
    </svg>
  );
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M11.94 0A12 12 0 1 0 24 12 12 12 0 0 0 11.94 0zm5.57 8.22-1.97 9.28c-.15.66-.54.82-1.09.51l-3-2.21-1.45 1.39c-.16.16-.3.3-.6.3l.21-3.05 5.56-5.02c.24-.21-.05-.33-.38-.12l-6.87 4.33-2.96-.92c-.64-.2-.66-.64.14-.95l11.57-4.46c.54-.2 1 .13.84.92z" />
    </svg>
  );
}

interface ChatButtonProps {
  href: string;
  label: string;
  detail: string;
  newTab?: string;
  icon: React.ReactNode;
  /** Color de la marca de cada canal: tiñe el fondo, el ícono y el resplandor al pasar el cursor. */
  brand: string;
}

function ChatButton({ href, label, detail, newTab, icon, brand }: ChatButtonProps) {
  return (
    <a
      href={href}
      {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      style={
        {
          "--brand": brand,
          backgroundImage:
            "linear-gradient(150deg, color-mix(in srgb, var(--brand) 12%, white), white 62%)",
          borderColor: "color-mix(in srgb, var(--brand) 22%, hsl(var(--border)))",
        } as React.CSSProperties
      }
      className="group relative flex min-h-[15rem] flex-col justify-between overflow-hidden rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[color:var(--brand)] hover:shadow-[0_24px_48px_-24px_var(--brand)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:p-8"
    >
      {/* Marca de agua del ícono, muy tenue */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 -right-8 h-48 w-48 opacity-[0.07] transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-110 group-hover:opacity-[0.12] [&>svg]:h-full [&>svg]:w-full"
        style={{ color: "var(--brand)" }}
      >
        {icon}
      </span>

      <span className="relative flex items-start justify-between">
        <span
          aria-hidden="true"
          className="flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-[0_12px_24px_-10px_var(--brand)] transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3"
          style={{ backgroundColor: "var(--brand)" }}
        >
          {icon}
        </span>
        <span
          aria-hidden="true"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-all duration-300 group-hover:border-transparent group-hover:bg-[color:var(--brand)] group-hover:text-white"
        >
          <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </span>

      <span className="relative mt-10 block">
        <span className="sr-only">{label}: </span>
        <span className="block break-all font-display text-xl font-bold leading-tight sm:text-2xl">
          {detail}
        </span>
      </span>
      {newTab && <span className="sr-only">{newTab}</span>}
    </a>
  );
}

interface PillProps {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
  newTab?: string;
}

/** Enlace secundario en forma de píldora (o texto simple si no tiene enlace). */
function Pill({ icon: Icon, label, value, href, newTab }: PillProps) {
  const body = (
    <>
      <span
        aria-hidden="true"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground"
      >
        <Icon className="h-4 w-4" />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="label text-[10px]">{label}</span>
        <span className="text-sm font-medium text-foreground">{value}</span>
      </span>
      {newTab && <span className="sr-only">{newTab}</span>}
    </>
  );
  const cls =
    "group inline-flex items-center gap-3 rounded-full border border-border bg-background py-2 pl-2 pr-6 transition-all duration-300";

  if (!href) return <div className={cls}>{body}</div>;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${cls} hover:-translate-y-0.5 hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring`}
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
        <p className="label mb-5 flex items-center gap-3">
          <span aria-hidden="true" className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-warm opacity-70 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-warm" />
          </span>
          {content.chat.label}
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          <ChatButton
            href={`https://wa.me/${siteConfig.whatsapp}`}
            label={content.chat.whatsapp}
            detail={siteConfig.whatsappDisplay}
            newTab={newTab}
            brand="#25D366"
            icon={<WhatsAppIcon className="h-8 w-8" />}
          />
          <ChatButton
            href={`https://t.me/+${siteConfig.telegram}`}
            label={content.chat.telegram}
            detail={siteConfig.whatsappDisplay}
            newTab={newTab}
            brand="#229ED9"
            icon={<TelegramIcon className="h-8 w-8" />}
          />
          <ChatButton
            href={`mailto:${siteConfig.email}`}
            label={content.chat.email}
            detail={siteConfig.email}
            brand="#3F5EA8"
            icon={<Mail aria-hidden="true" className="h-8 w-8" />}
          />
        </div>
      </Reveal>

      <Reveal delay={0.08} className="mt-14 lg:mt-20">
        <p className="label mb-5">{content.chat.more}</p>
        <ul className="flex flex-wrap gap-3">
          <li>
            <Pill icon={Linkedin} label="LinkedIn" value="in/TaylorAsprilla" href={siteConfig.social.linkedin} newTab={newTab} />
          </li>
          <li>
            <Pill icon={Github} label="GitHub" value="TaylorAsprilla" href={siteConfig.social.github} newTab={newTab} />
          </li>
          <li>
            <Pill icon={MapPin} label={content.channels.location} value={siteConfig.location} />
          </li>
        </ul>
      </Reveal>
    </SectionShell>
  );
}
