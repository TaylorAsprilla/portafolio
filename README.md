# Portafolio Profesional - Full Stack Developer

Portafolio profesional moderno y premium construido con Next.js 15, React, TypeScript, Tailwind CSS y Framer Motion. Diseñado para desarrolladores que ofrecen servicios de desarrollo web, móvil, software y datos.

## ✨ Características

- **Stack Tecnológico Premium**: Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion
- **Diseño Moderno y Elegante**: Dark mode por defecto, glassmorphism, animaciones suaves
- **100% Responsive**: Mobile-first, optimizado para todos los dispositivos
- **Toggle de Moneda**: Soporte para COP y USD con conversión automática
- **Extracción de Metadata**: Obtención automática de logos, imágenes y descripciones de proyectos
- **SEO Optimizado**: Metadata completa, Open Graph, Twitter Cards, sitemap, robots.txt
- **Filtrado de Proyectos**: Búsqueda y filtros por categoría
- **Animaciones Premium**: Framer Motion para transiciones y efectos interactivos
- **Código Profesional**: TypeScript, arquitectura limpia, componentes reutilizables

## 🎯 Secciones

1. **Hero** - Presentación impactante con CTAs principales
2. **Sobre mí** - Perfil profesional y propuesta de valor
3. **Servicios** - 10 servicios profesionales con precios
4. **Tecnologías** - Stack técnico organizado por categorías
5. **Proyectos** - Galería de proyectos con metadata enriquecida
6. **Contacto** - Formulario y métodos de contacto

## 🚀 Instalación y Configuración

### Requisitos Previos

- Node.js 18 o superior
- npm, yarn o pnpm

### Instalación

1. **Clonar o descargar el proyecto**

```bash
cd portafolio
```

2. **Instalar dependencias**

```bash
npm install
# o
yarn install
# o
pnpm install
```

3. **Configurar datos personales**

Edita los siguientes archivos con tu información:

#### `data/config.ts`
```typescript
export const siteConfig: SiteConfig = {
  name: "Tu Nombre", // ← Cambia esto
  title: "Tu título profesional",
  description: "Tu descripción",
  url: "https://tu-dominio.com",
  email: "tu@email.com",
  phone: "+57 300 123 4567",
  whatsapp: "573001234567",
  social: {
    github: "https://github.com/tuusuario",
    linkedin: "https://linkedin.com/in/tuusuario",
    twitter: "https://twitter.com/tuusuario",
  },
  exchangeRate: 4000, // Tasa de cambio COP/USD
};
```

#### `data/services.ts`
Personaliza tus servicios y precios

#### `data/projects.ts`
Agrega tus proyectos reales

#### `data/skills.ts`
Actualiza tus habilidades técnicas

4. **Ejecutar en desarrollo**

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📦 Build para Producción

```bash
npm run build
npm start
```

## 🚢 Despliegue en Vercel

Este proyecto está optimizado para Vercel:

1. Sube tu código a GitHub
2. Importa el repositorio en Vercel
3. Configura las variables de entorno si es necesario
4. Despliega

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 📁 Estructura del Proyecto

```
portafolio/
├── app/                      # App Router de Next.js
│   ├── layout.tsx           # Layout principal
│   ├── page.tsx             # Página de inicio
│   ├── globals.css          # Estilos globales
│   ├── sitemap.ts           # Sitemap para SEO
│   └── robots.ts            # Robots.txt
├── components/              # Componentes React
│   ├── sections/            # Secciones del portafolio
│   │   ├── hero-section.tsx
│   │   ├── about-section.tsx
│   │   ├── services-section.tsx
│   │   ├── skills-section.tsx
│   │   ├── projects-section.tsx
│   │   └── contact-section.tsx
│   ├── ui/                  # Componentes UI reutilizables
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── section.tsx
│   │   └── container.tsx
│   ├── header.tsx           # Navegación principal
│   ├── footer.tsx           # Pie de página
│   ├── currency-provider.tsx # Context de moneda
│   └── currency-toggle.tsx  # Toggle COP/USD
├── data/                    # Datos semilla
│   ├── config.ts            # Configuración general
│   ├── services.ts          # Servicios ofrecidos
│   ├── projects.ts          # Proyectos realizados
│   └── skills.ts            # Habilidades técnicas
├── lib/                     # Utilidades
│   ├── utils.ts             # Funciones auxiliares
│   ├── currency.ts          # Lógica de moneda
│   └── metadata/
│       └── extractor.ts     # Extractor de metadata
├── types/                   # Tipos TypeScript
│   └── index.ts
├── public/                  # Archivos estáticos
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── README.md
```

## 🎨 Personalización

### Colores y Tema

Edita `app/globals.css` para cambiar los colores del tema:

```css
:root {
  --primary: 217.2 91.2% 59.8%;
  --background: 222.2 84% 4.9%;
  /* ... */
}
```

### Animaciones

Las animaciones se definen en `tailwind.config.ts` y se utilizan con Framer Motion en los componentes.

### Servicios y Precios

Edita `data/services.ts` para agregar, eliminar o modificar servicios:

```typescript
{
  id: "mi-servicio",
  name: "Mi Servicio",
  description: "Descripción del servicio",
  benefits: ["Beneficio 1", "Beneficio 2"],
  technologies: ["Tech 1", "Tech 2"],
  price: {
    baseAmount: 1000,
    baseCurrency: "USD",
    isRange: true,
  },
  category: "web",
}
```

### Proyectos

Agrega tus proyectos en `data/projects.ts`:

```typescript
{
  id: "mi-proyecto",
  name: "Mi Proyecto",
  url: "https://miproyecto.com",
  domain: "miproyecto.com",
  category: "web-corporativa",
  shortDescription: "Descripción breve",
  tags: ["Tag1", "Tag2"],
  stack: ["React", "Node.js"],
  featured: true,
  year: 2024,
}
```

El sistema intentará extraer automáticamente:
- Logo/favicon
- Imagen de preview (og:image)
- Título y descripción
- Metadata adicional

## 🔧 Características Técnicas

### Extractor de Metadata

El sistema incluye un extractor server-side que obtiene información de sitios web:

- Ejecuta solo en el servidor (seguro)
- Timeout de 10 segundos por sitio
- Manejo de errores robusto
- Cache opcional en memoria
- Fallback elegante si falla

### Sistema de Moneda

- Context API de React para estado global
- Conversión automática COP ↔ USD
- Toggle animado con Framer Motion
- Formateo correcto con Intl.NumberFormat
- Tasa de cambio configurable

### SEO y Performance

- Server Components por defecto
- Metadata optimizada
- Open Graph y Twitter Cards
- Sitemap automático
- Robots.txt
- Imágenes optimizadas con next/image
- CSS-in-JS con Tailwind

## 🎯 Próximas Mejoras

Ideas para expandir el proyecto:

- [ ] Integrar CMS headless (Sanity, Contentful, Strapi)
- [ ] Blog con MDX
- [ ] API de contacto con email transaccional
- [ ] Analytics (Google Analytics, Plausible)
- [ ] Tests con Jest y Testing Library
- [ ] A11y completo (accesibilidad)
- [ ] i18n (multiidioma)
- [ ] Panel de administración
- [ ] Temas claro/oscuro personalizables
- [ ] Más animaciones y micro-interacciones

## 📝 Licencia

Proyecto de código abierto - úsalo como template para tu portafolio.

## 🤝 Contribuciones

Este es un template personal, pero las sugerencias son bienvenidas.

## 📧 Soporte

Si tienes preguntas sobre el proyecto, personalízalo según tus necesidades o consulta la documentación oficial de:

- [Next.js](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript](https://www.typescriptlang.org/docs/)

---

⚡ **Hecho con Next.js, React, TypeScript y mucho ☕**
