/**
 * Tipos para proyectos
 */
export interface Project {
  id: string;
  name: string;
  url: string;
  domain: string;
  /** Etiqueta corta que describe el tipo de proyecto (p. ej. "Comunidad · Web"). */
  kind: string;
  description: string;
  /** Qué hice yo en el proyecto. */
  role: string;
  stack: string[];
  /** Ruta pública a la imagen optimizada (WebP 16:10). */
  image: string;
  featured?: boolean;
  year?: number;
}

/**
 * Configuración general del sitio
 */
export interface SiteConfig {
  name: string;
  jobTitle: string;
  title: string;
  description: string;
  url: string;
  email: string;
  whatsapp: string;
  whatsappDisplay: string;
  telegram: string;
  location: string;
  social: {
    github: string;
    linkedin: string;
  };
}
