# 🚀 GUÍA RÁPIDA - Subir al Hosting

## ✅ Tu sitio está LISTO

**Tamaño total:** 6.5 MB  
**Archivos generados en:** `out/`

---

## 📤 3 PASOS SIMPLES

### 1️⃣ Accede a tu Hosting

**cPanel:**

- Ve a `File Manager` → `public_html/`

**FTP (FileZilla):**

- Host: `ftp.tudominio.com`
- Usuario y contraseña de tu hosting
- Puerto: 21

---

### 2️⃣ Sube los Archivos

**⚠️ IMPORTANTE:** Sube el CONTENIDO de la carpeta `out/`, NO la carpeta misma.

```
✅ CORRECTO:
public_html/
  ├── index.html
  ├── _next/
  ├── 404.html
  ├── robots.txt
  └── ...

❌ INCORRECTO:
public_html/
  └── out/
      └── index.html
```

**Archivos a subir:** TODOS los que están dentro de `out/`

---

### 3️⃣ Verifica tu Sitio

Visita: `https://tudominio.com`

---

## 📋 Checklist

- [ ] Build generado ✅ (Ya hecho con `npm run build:static`)
- [ ] Archivos subidos a `public_html/`
- [ ] Sitio cargando correctamente
- [ ] SSL/HTTPS activado (en cPanel)

---

## 🔧 Archivo .htaccess (Opcional pero Recomendado)

Ya tienes un archivo `.htaccess` en tu carpeta del proyecto. Súbelo también a `public_html/` para:

- ✅ Redirigir HTTP → HTTPS
- ✅ Comprimir archivos (más rápido)
- ✅ Cache de imágenes
- ✅ Seguridad mejorada

---

## 🆘 Problemas Comunes

**Página en blanco:**

- Verifica que subiste TODOS los archivos de `out/`
- Limpia cache del navegador (Ctrl+Shift+R)

**CSS no funciona:**

- Asegúrate de subir la carpeta `_next/` completa
- Permisos: 644 para archivos, 755 para carpetas

**Imágenes no cargan:**

- Verifica que todas las imágenes estén en `out/`
- Sube TODOS los archivos sin excepciones

---

## 💡 TIPS PRO

1. **SSL Gratis:** Activa Let's Encrypt en cPanel (Sección SSL/TLS)
2. **Más Rápido:** Usa Cloudflare (gratis) como CDN
3. **Mejor Opción:** Considera usar Vercel (gratis, más rápido que hosting compartido)

---

## 📞 Necesitas Hosting?

### Recomendaciones:

**Gratis y Mejor:**

- 🥇 **Vercel** - GRATIS, optimizado para Next.js
- 🥈 **Netlify** - GRATIS, muy rápido
- 🥉 **GitHub Pages** - GRATIS

**Pago (Compartido):**

- **Hostinger** - $1-3/mes
- **Namecheap** - $2-4/mes
- **SiteGround** - $3-7/mes

---

## 🎉 ¡Listo para Subir!

Todo está configurado. Solo sube los archivos de `out/` a tu hosting y tu portafolio estará en vivo.

Para instrucciones detalladas, consulta: **[HOSTING-COMPARTIDO.md](HOSTING-COMPARTIDO.md)**
