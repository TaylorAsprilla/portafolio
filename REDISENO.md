# Rediseño del portafolio — resumen de cambios

Rama: `redesign/dark-tech`

## Decisiones

- **No se adoptó un template comercial.** Se diseñó a medida sobre el mismo stack (Next.js, Tailwind): los templates de portafolio son justo el aspecto genérico que se quería evitar y no había razón técnica para cambiar de framework.
- **Identidad:** fondo blanco, acento azul del logo, superficies con borde de 1 px, tipografías del logo (ver abajo). La primera propuesta oscura (`#0A0B0F` + cian) se descartó.
- **Concepto final: editorial tipográfico.** Se probó antes una versión tipo editor de código (IDE) y se descartó. La versión actual usa titulares enormes, secciones numeradas (01–04), mucho aire y bordes finos. Sin barras laterales. Las secciones Especialidades, Proyectos y Tecnologías usan ancho casi completo (opción `wide` de `SectionShell`, máx. 120 rem y márgenes de 24/40/80 px) con la etiqueta numerada sobre el titular.
- **Identidad del logo:** fondo blanco por defecto; fuentes del logo (Source Sans 3 Bold para "Taylor", Lato para "Interactivo", identificadas comparándolas con el PNG del logo); paleta del logo: azul `#3F5EA8` (primario), celeste `#A5D8F8` (primario en oscuro), naranja `#F8A840` (solo decorativo, p. ej. el punto del nombre), morado `#784070` y verde oliva `#A0A848` (sin usar por ahora).
- **Proyectos ("Casos reales."):** carrusel horizontal con scroll-snap y botones anterior/siguiente, dentro del margen de la sección. Cada tarjeta muestra captura, tipo, nombre, descripción y tecnologías (sin numeración, rol ni año); toda la tarjeta es un enlace. Destacados primero. Todo el contenido está siempre en el HTML.
- **Especialidades:** cuadrícula tipo bento (la de IA, 2×2) con ícono en colores del logo, etiquetas de puntos y foco de luz que sigue al cursor (solo ratón).
- **Tecnologías ("Tecnologías."):** tarjetas por grupo con etiquetas; grupo "AI & Agents" resaltado y a todo el ancho.
- **Animaciones del hero (decidido: se mantienen ambas; el interruptor `?anim=` ya se eliminó):** (1) frase rotatoria en el titular ("…automatizan tu operación / tu soporte / tus reportes / tus procesos"; ancho de celda fijo para evitar saltos, pausa con la pestaña oculta, estática con movimiento reducido) y (2) tarjetas flotantes con los servicios alrededor del laptop, en los colores del logo y con paralaje 3D.
- **Hero con scroll:** la primera pantalla (escritorio) muestra solo el laptop centrado con una nube de 8 palabras flotantes ("Agentes de IA", "Servidores MCP", "APIs e integraciones", "RAG"…) y la indicación "Desplázate". Al bajar, el laptop se desplaza a la izquierda, las palabras extra se desvanecen y aparece el texto, el índice y los botones. Son animaciones CSS ligadas al scroll (`animation-timeline: scroll()`), sin JavaScript. Donde no hay soporte (Firefox, Safari antiguo), en móvil o con `prefers-reduced-motion` se muestra directamente el diseño final; en móvil el laptop va primero y el texto debajo. Con teclado, al enfocar un botón del texto se muestra el diseño final. El texto siempre está en el HTML (SEO/lectores de pantalla).
- **Sin encabezado:** se eliminaron el header, el logo, el menú (escritorio y móvil) y el botón de tema. La navegación es el índice numerado del hero y el enlace "Volver arriba" del pie. El logo se usa en el favicon, el ícono de Apple, el manifest, el JSON-LD y la imagen Open Graph.
- **Hero con imagen animada:** el nombre gigante se reemplazó por un laptop con el logo (`logo-PC.png`, optimizado de 3 MB a 36/79 KB en WebP). Animación: entrada, flotación continua con sombra propia e inclinación 3D que sigue al cursor (solo ratón; se desactiva con `prefers-reduced-motion`). El titular (H1) pasó a ser el mensaje de servicios de IA, con el nombre en texto accesible y visible en la etiqueta superior.
- **Tema único blanco:** se retiró el modo oscuro al quitar el botón de tema. Contraste medido ≥ 6.1:1 en texto atenuado, acento y botón principal.
- **Se mantiene** una sola página con scroll normal y todo el contenido en el HTML (SEO, anclas, imprimible).

## Eliminado

- Todo lo relacionado con precios: toggle COP/USD, `lib/currency.ts`, `data/services.ts`, sección de servicios, tasa de cambio, ofertas en JSON-LD.
- `framer-motion`, `cheerio`, `node-fetch` (la extracción de metadata estaba desactivada; las animaciones ahora son CSS + IntersectionObserver).
- Keywords de SEO de freelance/landing pages/e-commerce; imagen OG falsa (`icon.png` declarado 1200×630); código de verificación de Google de relleno.

## Nuevo

- Secciones: Hero, Especialidades (7, con "AI Agents & Integrations"), Proyectos, Tecnologías (8 categorías, con "AI & Agents"), Contacto. Se retiraron Experiencia y Sobre mí a petición del propietario.
- Titular del hero: "Agentes de IA, MCP y APIs que automatizan…" (SEO y JSON-LD actualizados).
- `npm run start` sirve `out/` con `serve` (el proyecto usa `output: "export"`).
- Beer Runners Cali como primer proyecto destacado.
- Formulario de contacto funcional (`public/api/contact.php`).
- Contenido en diccionario tipado (`content/`) preparado para inglés.
- Imagen Open Graph generada en build (`app/opengraph-image.tsx`), JSON-LD `Person` + `WebSite`, manifest y `theme-color`.
- `scripts/optimize-images.mjs` (capturas PNG de 0.4–1.9 MB → WebP de 14–65 KB).
- `public/.htaccess` (antes en la raíz): ahora viaja dentro de `out/`.

## Verificación realizada

| Prueba                                  | Resultado |
| --------------------------------------- | --------- |
| `tsc --noEmit`, `next lint`, `next build` | Sin errores ni avisos |
| Rutas (`/`, robots, sitemap, manifest, OG, íconos, imágenes) | 200 |
| Precios en texto visible y en fuentes   | Ninguno |
| Consola del navegador                   | Sin errores (escritorio y móvil) |
| Desbordamiento horizontal en 390 px     | 0 px |
| a11y básica: un H1, imágenes con `alt`, campos con `label`, enlaces/botones con nombre, anclas válidas, `rel="noopener"` | Correcto |
| Formulario: vacío / email inválido / mensaje corto / honeypot / origen ajeno / inyección de cabeceras | 422 / 422 / 422 / 200 silencioso / 403 / 422 |
| `prefers-reduced-motion`                | El contenido es visible y sin animaciones |
| Tema único blanco                       | Contraste AA (≥ 6.1:1 en texto atenuado, acento y botón) |
| Vista previa de proyectos, índice del hero y "Volver arriba" | Correcto |

_Nota: las filas de menú móvil y alternancia de tema se retiraron porque esas funciones ya no existen._
| Rendimiento (móvil emulado: CPU ×4, 1.6 Mbps/150 ms) | FCP 1.8 s · LCP 2.3 s · CLS 0 |
| Rendimiento (escritorio)                | FCP 0.34 s · LCP 0.50 s · CLS 0 |
| JS de la página                         | 43 kB → 7.8 kB (First Load 153 → 118 kB) |

Limitaciones: no se pudo ejecutar Lighthouse (sin acceso al registro de npm); las cifras anteriores se midieron con DevTools y las transferencias están sin comprimir (en producción `.htaccess` activa gzip). El envío real de correo solo se puede probar en el hosting.
