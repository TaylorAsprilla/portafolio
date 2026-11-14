import { ArrowUpRight } from "lucide-react";
import { SectionShell } from "@/components/sections/section-shell";
import { Reveal } from "@/components/ui/reveal";
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
  newTab: string;
  icon: React.ReactNode;
  /** Color de la marca (solo decorativo en el ícono). */
  brand: string;
}

function ChatButton({ href, label, detail, newTab, icon, brand }: ChatButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-5 rounded-2xl border border-border bg-background p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:p-6"
    >
      <span
        aria-hidden="true"
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-white sm:h-16 sm:w-16"
        style={{ backgroundColor: brand }}
      >
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-display text-xl font-bold leading-tight sm:text-2xl">{label}</span>
        <span className="mt-1 block text-sm text-muted-foreground">{detail}</span>
      </span>
      <ArrowUpRight
        aria-hidden="true"
        className="h-6 w-6 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary"
      />
      <span className="sr-only">{newTab}</span>
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
          <p className="label mb-5">{content.chat.label}</p>
          <div className="grid gap-4">
            <ChatButton
              href={`https://wa.me/${siteConfig.whatsapp}`}
              label={content.chat.whatsapp}
              detail={siteConfig.whatsappDisplay}
              newTab={newTab}
              brand="#25D366"
              icon={<WhatsAppIcon className="h-8 w-8 sm:h-9 sm:w-9" />}
            />
            <ChatButton
              href={`https://t.me/+${siteConfig.telegram}`}
              label={content.chat.telegram}
              detail={siteConfig.whatsappDisplay}
              newTab={newTab}
              brand="#229ED9"
              icon={<TelegramIcon className="h-8 w-8 sm:h-9 sm:w-9" />}
            />
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
