# Quick Start - Comandos Rápidos

## Instalación
```bash
npm install
```

## Desarrollo
```bash
npm run dev
# Abre http://localhost:3000
```

## Build
```bash
npm run build
npm start
```

## Linting
```bash
npm run lint
```

## Formateo (si configuraste Prettier)
```bash
npm run format
```

## Estructura Mínima para Empezar

1. **Personaliza tus datos** (5 min)
   - `data/config.ts` → Nombre, email, redes
   - `data/services.ts` → Tus servicios y precios
   - `data/projects.ts` → Tus proyectos
   - `data/skills.ts` → Tus tecnologías

2. **Ejecuta en desarrollo** (1 min)
   ```bash
   npm run dev
   ```

3. **Revisa en el navegador** (5 min)
   - Verifica que todo se vea bien
   - Prueba el toggle de moneda
   - Revisa en móvil (F12 > modo responsive)

4. **Build y despliega** (5 min)
   ```bash
   npm run build
   # Si todo OK, despliega en Vercel
   ```

## Ediciones Comunes

### Cambiar precio de un servicio
```typescript
// data/services.ts
{
  id: "landing-page",
  price: {
    baseAmount: 500, // ← Cambia esto
    baseCurrency: "USD",
  }
}
```

### Agregar un proyecto
```typescript
// data/projects.ts
{
  id: "nuevo-proyecto",
  name: "Mi Nuevo Proyecto",
  url: "https://miproyecto.com",
  domain: "miproyecto.com",
  category: "web-corporativa",
  tags: ["React", "TypeScript"],
  featured: true,
}
```

### Agregar una skill
```typescript
// data/skills.ts - dentro de un grupo existente
{
  name: "Next.js 15",
  category: "frontend",
  proficiency: "expert"
}
```

### Cambiar color principal
```css
/* app/globals.css */
:root {
  --primary: 217.2 91.2% 59.8%; /* ← Cambia esto (formato HSL) */
}
```

### Cambiar tasa de cambio
```typescript
// data/config.ts
exchangeRate: 4200, // ← Actualiza según el tipo de cambio actual
```

## Deploy a Vercel (3 pasos)

1. Sube a GitHub
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/tu-usuario/tu-repo.git
   git push -u origin main
   ```

2. Ve a [vercel.com](https://vercel.com) y haz login

3. Click "New Project" → Importa tu repo → Deploy

¡Listo! 🚀

## Troubleshooting Rápido

**Error: Module not found**
```bash
rm -rf node_modules package-lock.json
npm install
```

**TypeScript errors**
```bash
npm run build
```
Revisa los errores que indica

**Proyecto no carga metadata**
Normal, algunos sitios bloquean scraping. Agrega manualmente:
```typescript
manualLogo: "/logos/proyecto.png",
```

**Puerto 3000 ocupado**
```bash
npm run dev -- -p 3001
```

---

**¿Dudas? Revisa README.md o INSTALACION.md**
