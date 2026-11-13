import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { siteConfig } from "@/data/config";
import type { Content } from "@/content";

export function Footer({ content, backToTop }: { content: Content["footer"]; backToTop: string }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-page flex-col items-start justify-between gap-6 px-5 pb-6 pt-10 sm:flex-row sm:items-center sm:px-8 lg:px-12">
        <Image
          src="/logo.png"
          alt="Taylor Interactivo"
          width={480}
          height={235}
          className="h-14 w-auto sm:h-16"
        />
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
      <p className="px-5 pb-8 text-center font-sans text-[11px] text-muted-foreground sm:px-8">
        © {year} {content.rights}
      </p>
    </footer>
  );
}
