import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/config";
import logo from "@/app/assets/img/logo.png";

const footerLinks = {
  servicios: [
    { label: "Desarrollo Web", href: "#servicios" },
    { label: "Desarrollo Móvil", href: "#servicios" },
    { label: "Software a Medida", href: "#servicios" },
    { label: "Consultoría", href: "#servicios" },
  ],
  recursos: [
    { label: "Acerca de", href: "#sobre-mi" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Contacto", href: "#contacto" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-muted/30 py-8 md:py-12">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Image
                src={logo}
                alt="Logo"
                width={100}
                height={100}
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="mb-4 text-sm text-muted-foreground">
              Servicios profesionales de desarrollo Full Stack enfocados en crear soluciones
              digitales innovadoras y escalables.
            </p>
            <div className="flex gap-4">
              {siteConfig.social.github && (
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              )}
              {siteConfig.social.linkedin && (
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              )}

              <a
                href={`mailto:${siteConfig.email}`}
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="mb-4 font-semibold">Servicios</h4>
            <ul className="space-y-2">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h4 className="mb-4 font-semibold">Recursos</h4>
            <ul className="space-y-2">
              {footerLinks.recursos.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="mb-4 font-semibold">Contacto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-primary"
                >
                  {siteConfig.email}
                </a>
              </li>
              {siteConfig.phone && (
                <li>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="transition-colors hover:text-primary"
                  >
                    {siteConfig.phone}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
