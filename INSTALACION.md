# Guía de Instalación y Configuración

## Primeros Pasos

### 1. Instalar Dependencias

```bash
npm install
```

Este comando instalará todas las dependencias necesarias:
- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React (iconos)
- Cheerio (para extracción de metadata)

### 2. Configurar tus Datos Personales

#### Configuración General

Abre `data/config.ts` y personaliza:

```typescript
export const siteConfig: SiteConfig = {
  name: "Juan Pérez",                    // TU NOMBRE
  title: "Desarrollador Full Stack...",  // TU TÍTULO
  description: "...",                     // TU DESCRIPCIÓN
  url: "https://juanperez.com",          // TU DOMINIO
  email: "juan@juanperez.com",           // TU EMAIL
  phone: "+57 300 123 4567",             // TU TELÉFONO
  whatsapp: "573001234567",              // TU WHATSAPP (sin +)
  social: {
    github: "https://github.com/juanperez",
    linkedin: "https://linkedin.com/in/juanperez",
    twitter: "https://twitter.com/juanperez",
  },
  exchangeRate: 4000, // 1 USD = 4000 COP (actualiza según el tipo de cambio)
};
```

#### Tus Servicios

Abre `data/services.ts` y personaliza los servicios que ofreces.

Para cada servicio puedes cambiar:
- Nombre y descripción
- Beneficios
- Tecnologías
- Precio base
- Categoría

Ejemplo:
```typescript
{
  id: "landing-page",
  name: "Landing Pages de Alto Impacto",
  price: {
    baseAmount: 400,  // ← Cambia el precio
    baseCurrency: "USD",
    isRange: true,    // true = "Desde $400", false = "$400"
  },
}
```

Para marcar un servicio como "Cotización personalizada":
```typescript
price: {
  baseAmount: 0,
  baseCurrency: "USD",
  isCustomQuote: true,  // ← Esto mostrará "Cotización personalizada"
}
```

#### Tus Proyectos

Abre `data/projects.ts` y agrega tus proyectos reales:

```typescript
{
  id: "mi-proyecto",
  name: "Mi Proyecto Increíble",
  url: "https://miproyecto.com",
  domain: "miproyecto.com",
  category: "web-corporativa",
  shortDescription: "Descripción corta del proyecto",
  tags: ["E-commerce", "React", "Node.js"],
  stack: ["Next.js", "PostgreSQL", "AWS"],
  featured: true,  // true = destacado en home
  year: 2024,
}
```

El sistema intentará extraer automáticamente:
- Logo del sitio
- Imagen de preview
- Descripción del meta tag
- Título del sitio

Si quieres usar imágenes personalizadas:
```typescript
{
  // ... otros datos
  manualLogo: "/logos/mi-proyecto-logo.png",
  manualImage: "/images/mi-proyecto-preview.jpg",
}
```

**Categorías disponibles:**
- `web-corporativa`
- `landing-page`
- `marca-personal`
- `educacion`
- `agencia`
- `consumo`
- `festival-eventos`
- `e-commerce`
- `software`

#### Tus Habilidades

Abre `data/skills.ts` y personaliza tus tecnologías.

Las habilidades están organizadas por categorías:
- Frontend
- Backend
- Mobile
- Bases de Datos
- Cloud & DevOps
- Data & Analytics
- Herramientas

Puedes agregar, eliminar o modificar habilidades:

```typescript
{
  category: "frontend",
  title: "Frontend Development",
  skills: [
    { name: "React", category: "frontend", proficiency: "expert" },
    { name: "Vue.js", category: "frontend", proficiency: "advanced" },
    // Agrega más...
  ],
}
```

Niveles de proficiencia:
- `beginner` - Principiante
- `intermediate` - Intermedio
- `advanced` - Avanzado
- `expert` - Experto

### 3. Ejecutar en Desarrollo

```bash
npm run dev
```

Abre tu navegador en `http://localhost:3000`

### 4. Verificar y Ajustar

- ✅ Revisa que tus datos aparezcan correctamente
- ✅ Verifica los precios en COP y USD usando el toggle
- ✅ Comprueba que los proyectos se visualicen correctamente
- ✅ Prueba el formulario de contacto
- ✅ Revisa la navegación en móvil

### 5. Build de Producción

```bash
npm run build
```

Este comando:
- Compila el proyecto
- Optimiza el código
- Extrae la metadata de los proyectos
- Genera el sitemap

Si todo está bien:
```bash
npm start
```

Esto ejecutará la versión de producción localmente en `http://localhost:3000`

## Personalización Avanzada

### Cambiar Colores del Tema

Edita `app/globals.css`:

```css
:root {
  --primary: 217.2 91.2% 59.8%;      /* Azul principal */
  --secondary: 217.2 32.6% 17.5%;    /* Azul oscuro */
  /* Cambia estos valores HSL */
}
```

Herramienta recomendada: [https://uicolors.app/](https://uicolors.app/)

### Cambiar Fuente

Edita `app/layout.tsx`:

```typescript
import { Inter, Poppins } from "next/font/google";

const poppins = Poppins({ 
  weight: ["400", "600", "700"],
  subsets: ["latin"] 
});
```

### Agregar Más Secciones

Crea un nuevo archivo en `components/sections/mi-seccion.tsx`:

```typescript
"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { Container } from "@/components/ui/container";

export function MiSeccion() {
  return (
    <Section id="mi-seccion">
      <Container>
        <SectionHeader 
          title="Mi Sección" 
          description="Descripción" 
        />
        {/* Tu contenido aquí */}
      </Container>
    </Section>
  );
}
```

Luego impórtala en `app/page.tsx`:

```typescript
import { MiSeccion } from "@/components/sections/mi-seccion";

export default async function HomePage() {
  return (
    <>
      {/* ... otras secciones */}
      <MiSeccion />
    </>
  );
}
```

## Despliegue

### Opción 1: Vercel (Recomendado)

1. Sube tu código a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Click en "Import Project"
4. Selecciona tu repositorio
5. Click en "Deploy"

¡Listo! Tu sitio estará en línea en minutos.

### Opción 2: Netlify

1. Sube tu código a GitHub
2. Ve a [netlify.com](https://netlify.com)
3. Click en "Add new site"
4. Conecta con GitHub
5. Configura:
   - Build command: `npm run build`
   - Publish directory: `.next`

### Opción 3: Servidor Propio

```bash
# En tu servidor
npm run build
npm start
```

Configura Nginx o Apache para reverse proxy al puerto 3000.

## Solución de Problemas

### Error al instalar dependencias

```bash
# Borra node_modules y package-lock.json
rm -rf node_modules package-lock.json
npm install
```

### Error al extraer metadata

Si algunos proyectos no muestran logo/imagen:
- Es normal, algunos sitios bloquean el scraping
- El sistema usa fallback automático
- Puedes agregar manualmente en `data/projects.ts`:

```typescript
manualLogo: "/logos/proyecto.png",
manualImage: "/images/proyecto-preview.jpg",
```

### Error de TypeScript

```bash
npm run build
```

Si hay errores, revisa los tipos en `types/index.ts`

### Problemas con imágenes externas

Agrega el dominio en `next.config.ts`:

```typescript
images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "ejemplo.com",
    },
  ],
},
```

## Soporte

Si tienes problemas:
1. Revisa la consola del navegador (F12)
2. Revisa los logs del terminal
3. Consulta la documentación de Next.js
4. Revisa que todos los datos en `/data` estén correctos

---

¡Listo! Tu portafolio está configurado y listo para impresionar. 🚀
