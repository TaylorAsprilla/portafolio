# Notas de Implementación

## Decisiones Técnicas

### 1. Arquitectura

**Server Components por defecto**
- La página principal (page.tsx) es un Server Component
- Extrae metadata de proyectos en el servidor (más seguro)
- Los componentes interactivos usan "use client"

**Estado global con Context API**
- Currency Provider para manejo de moneda
- Ligero y suficiente para este caso de uso
- Se puede migrar a Zustand si crece la complejidad

### 2. Extracción de Metadata

**¿Por qué en el servidor?**
- Evita problemas de CORS
- No expone tu IP/user agent al extraer de sitios
- Más rápido (no depende del navegador del usuario)
- Timeout controlado

**Manejo de errores**
- Si un sitio no responde → fallback elegante
- Si no hay logo → usa inicial del dominio
- Si no hay imagen → gradiente con letra
- No rompe el build

**Cache en memoria**
- Evita re-scraping en cada request
- Cache de 1 hora por defecto
- Se puede mejorar con Redis/KV en producción

### 3. Sistema de Moneda

**Conversión local vs API**
- Por ahora: tasa fija configurable
- Beneficio: sin dependencias externas, sin límites de API
- Mejora futura: integrar API de tasas reales
- Como implementar API:
  ```typescript
  // lib/currency.ts
  export async function getExchangeRate() {
    const res = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const data = await res.json();
    return data.rates.COP;
  }
  ```

**Formato de precios**
- Usa Intl.NumberFormat (estándar, multi-idioma)
- COP: sin decimales
- USD: sin decimales (puedes cambiar a 2 decimales si prefieres)

### 4. Componentes UI

**shadcn/ui style**
- Componentes propios, no librería externa
- Fácil de personalizar
- Ligero (solo incluyes lo que usas)
- Tailwind + class-variance-authority para variantes

**Framer Motion**
- Solo donde aporta valor (hero, cards, filtros)
- Animaciones sutiles y profesionales
- No abusa de efectos innecesarios

### 5. SEO

**Metadata estática**
- Definida en layout.tsx
- Open Graph y Twitter Cards
- Robots.txt permite todo
- Sitemap generado automáticamente

**Mejoras futuras**
- Metadata dinámica por proyecto (si agregas páginas de detalle)
- Schema.org structured data
- JSON-LD para rich snippets

### 6. Performance

**Optimizaciones incluidas**
- Server Components reduce JavaScript del cliente
- next/image optimiza imágenes automáticamente
- Tailwind purge elimina CSS no usado
- Font optimization con next/font

**Métricas esperadas**
- Lighthouse: 90+ en todas las categorías
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s

## Limitaciones Conocidas

### 1. Extracción de Metadata

**Sitios que pueden fallar:**
- Sitios con protección anti-bot fuerte
- Sitios que requieren JavaScript para renderizar
- Sitios con WAF/Cloudflare agresivo
- Sitios con geoblocking

**Solución:** Agregar manualmente logo/imagen en `data/projects.ts`

### 2. Formulario de Contacto

**Estado actual:**
- Solo console.log y alert
- No envía emails realmente

**Para producción, integra:**
- Resend.com (fácil, moderno)
- SendGrid
- Nodemailer con SMTP
- API de tu backend

Ejemplo con Resend:
```typescript
// app/api/contact/route.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();
  
  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'tu@email.com',
    subject: `Nuevo mensaje de ${name}`,
    html: `<p>${message}</p>`,
  });
  
  return Response.json({ success: true });
}
```

### 3. Imágenes Locales

**No incluidas:**
- No hay imágenes en /public
- Logos de proyectos se extraen automáticamente
- Para mejorar: agregar placeholder images

**Agregar imágenes:**
```
public/
  logos/
    proyecto1.png
    proyecto2.png
  images/
    hero-bg.jpg
```

## Mejoras Recomendadas

### Corto Plazo (1-2 semanas)

- [ ] **Integrar email real** (Resend, SendGrid)
- [ ] **Añadir Google Analytics**
- [ ] **Agregar imágenes optimizadas** a /public
- [ ] **Crear página 404 personalizada**
- [ ] **Agregar loading states** en el formulario

### Medio Plazo (1-2 meses)

- [ ] **Blog con MDX**
  - Artículos técnicos
  - Casos de estudio
  - Tutoriales

- [ ] **Página de detalle por proyecto**
  - Ruta: /proyectos/[slug]
  - Galería de imágenes
  - Tecnologías usadas
  - Desafíos y soluciones

- [ ] **Testimonios reales**
  - Integrar con LinkedIn Recommendations
  - O crear sección manual

- [ ] **Sistema de comentarios**
  - Disqus, Giscus o similar

### Largo Plazo (3+ meses)

- [ ] **CMS Headless**
  - Sanity.io
  - Contentful
  - Strapi

- [ ] **Panel de administración**
  - Agregar/editar proyectos sin código
  - Gestionar servicios
  - Ver mensajes de contacto

- [ ] **Multi-idioma (i18n)**
  - Español/Inglés
  - next-intl o similar

- [ ] **Analytics Dashboard**
  - Visualizar métricas
  - Conversiones
  - Proyectos más vistos

- [ ] **Dark/Light Mode Toggle**
  - Con next-themes
  - Persistir preferencia

## Estructura de Archivos - Explicación Detallada

```
app/
  layout.tsx          # Envuelve toda la app, incluye Header/Footer
  page.tsx            # Home (Server Component, llama a extractMetadata)
  globals.css         # Estilos globales, tema, animaciones
  sitemap.ts          # SEO - genera sitemap.xml
  robots.ts           # SEO - genera robots.txt

components/
  sections/           # Secciones grandes de la página
  ui/                 # Componentes reutilizables estilo shadcn
  header.tsx          # Navegación sticky con menú móvil
  footer.tsx          # Pie de página con links
  currency-provider.tsx  # Context para estado de moneda
  currency-toggle.tsx    # Switch USD/COP

data/
  config.ts           # Configuración general del sitio
  services.ts         # Array de servicios con precios
  projects.ts         # Array de proyectos
  skills.ts           # Array de skills organizadas

lib/
  utils.ts            # Utilidades generales
  currency.ts         # Lógica de conversión y formato
  metadata/
    extractor.ts      # Extrae metadata de URLs (server-only)

types/
  index.ts            # Todos los tipos TypeScript
```

## Buenas Prácticas Implementadas

✅ **TypeScript Estricto** - Todo tipado correctamente
✅ **Componentes Pequeños** - Cada componente hace una cosa
✅ **Server Components First** - Menos JS en el cliente
✅ **Responsive Design** - Mobile-first approach
✅ **Accesibilidad Básica** - Semántica correcta, ARIA labels
✅ **SEO Optimizado** - Metadata, sitemap, robots
✅ **Code Splitting** - Solo carga lo necesario
✅ **Error Boundaries** - Manejo de errores en metadata
✅ **Loading States** - Animaciones suaves
✅ **DRY Code** - Sin repetición, todo reutilizable

## Convenciones de Código

**Nombres de archivos:**
- Componentes: `kebab-case.tsx` (hero-section.tsx)
- Tipos: `index.ts`
- Datos: `kebab-case.ts` (services.ts)

**Componentes:**
- "use client" solo cuando necesario
- Props tipadas con TypeScript
- Export named cuando hay varios exports
- Export default para páginas

**Estilos:**
- Tailwind para todo
- Clases utilitarias custom en globals.css
- cn() para combinar clases condicionales
- No CSS modules por ahora

**Estado:**
- Context API para global (moneda)
- useState para local (formularios, filtros)
- Server Components para datos

## Testing (No implementado aún)

**Para agregar tests:**

```bash
npm install -D @testing-library/react @testing-library/jest-dom jest jest-environment-jsdom
```

```javascript
// components/__tests__/Button.test.tsx
import { render, screen } from '@testing-library/react';
import { Button } from '../ui/button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
```

## Deployment Checklist

Antes de desplegar a producción:

- [ ] Actualizar todos los datos personales
- [ ] Cambiar URLs de ejemplo a URLs reales
- [ ] Agregar email real en contacto
- [ ] Integrar servicio de email
- [ ] Verificar que todos los proyectos carguen
- [ ] Probar en móvil real
- [ ] Verificar SEO metadata
- [ ] Agregar Google Analytics (opcional)
- [ ] Configurar dominio personalizado
- [ ] Activar HTTPS
- [ ] Crear sitio en Google Search Console
- [ ] Enviar sitemap a Google

## Recursos Útiles

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [shadcn/ui](https://ui.shadcn.com)
- [Vercel Deployment](https://vercel.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

---

**Este proyecto es una base sólida y profesional, lista para personalizar y escalar según tus necesidades.**
