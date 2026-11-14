# Portafolio — Taylor Asprilla

Portafolio profesional de **Taylor Asprilla** (Software Engineer · Full Stack Developer · Engineering Team Lead).
Sitio estático en español con un estilo **editorial tipográfico**: titulares serif enormes, secciones numeradas, listas grandes de proyectos con vista previa al pasar el cursor, y **fondo blanco**. Listo para hosting compartido (cPanel/Apache + PHP).

- **Stack:** Next.js 15 (App Router, `output: "export"`), React 19, TypeScript, Tailwind CSS 3
- **Tipografía (las del logo de Taylor Interactivo):** Source Sans 3 para titulares ("Taylor") y Lato para texto y etiquetas ("Interactivo"), vía `next/font`
- **Sin precios ni tarifas** en ninguna sección

## Comandos

```bash
npm install
npm run dev        # desarrollo en http://localhost:3000
npm run build      # genera el sitio estático en out/
npm run typecheck  # tsc --noEmit
npm run lint       # ESLint
npm run images     # regenera public/projects/*.webp desde las capturas originales
npm run logo       # regenera public/logo.png y los íconos (favicon, apple-icon) desde el logo original
npm run hero       # regenera las imágenes del hero (laptop con el logo) desde app/assets/img/logo-PC.png
```

## Dónde editar cada cosa

| Qué                                                   | Archivo                                           |
| ----------------------------------------------------- | ------------------------------------------------- |
| Textos (hero, sobre mí, especialidades, proyectos, stack, contacto) | `content/es.ts` (tipo en `content/types.ts`) |
| Nombre, correo, WhatsApp, LinkedIn, GitHub, ubicación | `data/config.ts`                                  |
| Proyectos                                             | `data/projects.ts`                                |
| Colores (fondo blanco y paleta del logo)               | `app/globals.css` (variables) y `tailwind.config.ts` |
| Pie de página                                         | `components/layout/footer.tsx`                    |
| Índice numerado del hero (01–05)                      | `content/es.ts` → `nav` (el orden debe coincidir con `page.tsx`) |
| Secciones                                             | `components/sections/*` (estructura común en `section-shell.tsx`) |
| Imagen animada del hero (laptop) | `components/sections/hero-visual.tsx` + animaciones en `app/globals.css`; original en `app/assets/img/logo-PC.png` (no se publica, pesa 3 MB) |
| Logo (original en `app/assets/img/logo-taylor-interactivo.png`) | `npm run logo`; se usa en favicon, ícono de Apple, JSON-LD e imagen Open Graph (ya no hay encabezado) |
| SEO (metadatos, JSON-LD, imagen Open Graph)           | `app/layout.tsx`, `components/seo/`, `app/opengraph-image.tsx` |

### Agregar un proyecto

1. Guarda la captura (PNG) en `app/assets/img/proyectos/preview/<id>.png`.
2. Ejecuta `npm run images` (genera `public/projects/<id>.webp`, 1200×750).
3. Agrega el objeto en `data/projects.ts` con `image: "/projects/<id>.webp"`.
   Con `featured: true` aparece como proyecto destacado; si no, en "Otros proyectos".

### Idiomas

Español en `/` e inglés en `/en/`. El contenido está en `content/es.ts` y `content/en.ts` (mismo tipo `Content`);
los textos de los proyectos están en `data/projects.ts`. Cada idioma tiene su layout raíz en `app/(es)/` y `app/en/`.

## Contacto

No hay formulario ni servidor: la sección de contacto usa el correo (`mailto:`) y botones directos a WhatsApp y Telegram.
Los datos están en `data/config.ts` (`email`, `whatsapp`, `telegram`).

## Despliegue (hosting compartido)

1. `npm run build`
2. Sube **todo el contenido de `out/`** a `public_html/` (incluye `.htaccess` y `projects/`).
3. Verifica HTTPS y que `https://taylorasprilla.dev/opengraph-image` devuelva una imagen PNG.

`public/.htaccess` configura HTTPS, compresión, caché, cabeceras de seguridad, la página 404 y el tipo MIME de la imagen Open Graph.

> `SEO-GUIDE.md` y `HOSTING-COMPARTIDO.md` son guías complementarias y pueden estar desactualizadas (por ejemplo, no cubren la versión en inglés). Este README es la referencia vigente.
