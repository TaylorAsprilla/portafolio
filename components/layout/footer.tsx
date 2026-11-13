import { ArrowUp } from "lucide-react";
import { siteConfig } from "@/data/config";
import type { Content } from "@/content";

export function Footer({ content, backToTop }: { content: Content["footer"]; backToTop: string }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-page flex-col items-start justify-between gap-6 px-5 py-10 sm:flex-row sm:items-center sm:px-8 lg:px-12">
        <p className="font-sans text-xs text-muted-foreground">
          © {year} {siteConfig.name}. {content.rights} {content.built}
        </p>
        <a
          href="#inicio"
          className="group inline-flex h-10 items-center gap-2 rounded-full border border-border px-4 text-sm transition-colors hover:border-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <ArrowUp
            aria-hidden="true"
            className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5"
          />
          {backToTop}
        </a>
      </div>
    </footer>
  );
}
