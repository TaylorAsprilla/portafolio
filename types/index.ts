/**
 * Tipos para el sistema de moneda
 */
export type Currency = "COP" | "USD";

export interface Price {
  amount: number;
  currency: Currency;
  isRange?: boolean;
  isCustomQuote?: boolean;
}

export interface PriceConfig {
  baseAmount: number;
  baseCurrency: Currency;
  isRange?: boolean;
  isCustomQuote?: boolean;
}

/**
 * Tipos para servicios
 */
export interface Service {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  technologies: string[];
  price: PriceConfig;
  icon?: string;
  category: ServiceCategory;
}

export type ServiceCategory = "web" | "mobile" | "software" | "data" | "cloud" | "consulting";

/**
 * Tipos para proyectos
 */
export interface Project {
  id: string;
  name: string;
  url: string;
  domain: string;
  categories: ProjectCategory[];
  description?: string;
  shortDescription?: string;
  tags: string[];
  stack?: string[];
  manualLogo?: string;
  manualImage?: string;
  darkLogoBg?: boolean;
  featured?: boolean;
  year?: number;
}

export type ProjectCategory =
  | "web-corporativa"
  | "landing-page"
  | "marca-personal"
  | "educacion"
  | "agencia"
  | "consumo"
  | "festival-eventos"
  | "e-commerce"
  | "software"
  | "crm";

/**
 * Tipos para metadata extraída de sitios web
 */
export interface SiteMetadata {
  title?: string;
  description?: string;
  image?: string;
  logo?: string;
  favicon?: string;
  siteName?: string;
  domain: string;
  error?: string;
}

/**
 * Proyecto enriquecido con metadata
 */
export interface EnrichedProject extends Project {
  metadata?: SiteMetadata;
}

/**
 * Tipos para habilidades/tecnologías
 */
export interface Skill {
  name: string;
  icon?: string;
  category: SkillCategory;
  proficiency?: "beginner" | "intermediate" | "advanced" | "expert";
}

export type SkillCategory =
  | "frontend"
  | "backend"
  | "mobile"
  | "database"
  | "cloud"
  | "data"
  | "tools";

export interface SkillGroup {
  category: SkillCategory;
  title: string;
  skills: Skill[];
}

/**
 * Tipos para filtros
 */
export interface ProjectFilters {
  search: string;
  category?: ProjectCategory | "all";
  serviceType?: ServiceCategory | "all";
}

/**
 * Tipos para configuración general
 */
export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  email: string;
  phone?: string;
  whatsapp?: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  exchangeRate: number; // COP to USD
}
