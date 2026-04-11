# 🌐 Guía de Despliegue en Hosting Compartido

Esta guía te ayudará a subir tu portafolio a hosting compartido (cPanel, Hostinger, GoDaddy, etc.)

## 📋 Requisitos

- Hosting con cPanel o cualquier servidor web (Apache/Nginx)
- Acceso FTP o File Manager
- Dominio configurado

---

## 🚀 Pasos para Desplegar

### 1️⃣ Generar Archivos Estáticos

En tu computadora local, ejecuta:

```bash
npm run build:static
```

Esto generará todos los archivos estáticos en la carpeta `out/`

**Estructura generada:**

```
out/
├── _next/          # Archivos JavaScript y CSS
│   ├── static/     # Assets optimizados
│   └── ...
├── index.html      # Página principal
├── sobre-mi.html
├── servicios.html
├── proyectos.html
├── contacto.html
├── robots.txt
├── sitemap.xml
└── ... (otros archivos)
```

---

### 2️⃣ Subir Archivos al Hosting

#### Opción A: Usando File Manager (cPanel)

1. **Accede a cPanel** de tu hosting
2. **Abre File Manager**
3. **Navega a `public_html/`** (o la carpeta raíz de tu dominio)
4. **Elimina archivos existentes** si es un sitio nuevo
5. **Sube TODO el contenido** de la carpeta `out/`:
   - Selecciona todos los archivos dentro de `out/`
   - Arrastra y suelta en File Manager
   - O usa el botón "Upload"

**⚠️ IMPORTANTE:** Sube el CONTENIDO de la carpeta `out/`, no la carpeta misma.

```
❌ INCORRECTO:
public_html/
  └── out/
      └── index.html

✅ CORRECTO:
public_html/
  └── index.html
  └── _next/
  └── ...
```

---

#### Opción B: Usando FTP (FileZilla)

1. **Descarga FileZilla** (https://filezilla-project.org/)

2. **Conecta a tu hosting:**
   - Host: `ftp.tudominio.com` o IP del servidor
   - Usuario: Tu usuario FTP
   - Contraseña: Tu contraseña FTP
   - Puerto: 21 (FTP) o 22 (SFTP)

3. **Navega a la carpeta raíz:**
   - Busca `public_html/` o `www/` o `htdocs/`

4. **Sube los archivos:**
   - En el panel izquierdo: navega a la carpeta `out/` local
   - En el panel derecho: carpeta `public_html/` del servidor
   - Selecciona TODO el contenido de `out/`
   - Arrastra al panel derecho
   - Espera a que termine la transferencia

---

### 3️⃣ Configurar Dominio (si es necesario)

Si tu dominio apunta a una subcarpeta:

1. En cPanel, ve a **"Dominios"** o **"Addon Domains"**
2. Configura el Document Root hacia la carpeta donde subiste los archivos
3. Guarda los cambios

---

### 4️⃣ Configurar Archivo .htaccess (Recomendado)

Crea un archivo `.htaccess` en `public_html/` para mejorar el rendimiento y SEO:

```apache
# Redireccionar a HTTPS (si tienes SSL)
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>

# Comprimir archivos para mejor rendimiento
<IfModule mod_deflate.c>
AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Cache de archivos estáticos
<IfModule mod_expires.c>
ExpiresActive On
ExpiresByType image/jpg "access plus 1 year"
ExpiresByType image/jpeg "access plus 1 year"
ExpiresByType image/gif "access plus 1 year"
ExpiresByType image/png "access plus 1 year"
ExpiresByType image/svg+xml "access plus 1 year"
ExpiresByType text/css "access plus 1 month"
ExpiresByType text/javascript "access plus 1 month"
ExpiresByType application/javascript "access plus 1 month"
ExpiresByType application/pdf "access plus 1 month"
ExpiresByType image/x-icon "access plus 1 year"
</IfModule>

# Headers de seguridad
<IfModule mod_headers.c>
Header set X-Content-Type-Options "nosniff"
Header set X-Frame-Options "SAMEORIGIN"
Header set X-XSS-Protection "1; mode=block"
Header set Referrer-Policy "origin-when-cross-origin"
</IfModule>

# Forzar trailing slash para compatibilidad
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_URI} !(.*)/$
RewriteRule ^(.*)$ https://%{HTTP_HOST}/$1/ [L,R=301]
</IfModule>
```

**Cómo crear .htaccess:**

1. En File Manager o FTP
2. Crea un nuevo archivo llamado `.htaccess`
3. Copia y pega el contenido anterior
4. Guarda

---

### 5️⃣ Verificar el Sitio

1. **Visita tu dominio:** `https://tudominio.com`
2. **Verifica todas las páginas:**
   - Inicio (`/`)
   - Sobre mí
   - Servicios
   - Proyectos
   - Contacto
3. **Revisa que funcionen:**
   - ✅ Las imágenes se muestran
   - ✅ Los estilos CSS están aplicados
   - ✅ Las animaciones funcionan
   - ✅ Los enlaces internos funcionan
   - ✅ El formulario de contacto funciona

---

## 🔄 Actualizar el Sitio

Cuando hagas cambios:

1. **Edita el código localmente**
2. **Genera nuevo build:**
   ```bash
   npm run build:static
   ```
3. **Sube los archivos actualizados** (solo los que cambiaron o todo)
4. **Limpia el cache del navegador:** Ctrl+Shift+R o Ctrl+F5

---

## 🌟 Optimizaciones Adicionales

### SSL/HTTPS Gratuito

La mayoría de hostings ofrecen **Let's Encrypt SSL gratis**:

1. En cPanel, busca **"SSL/TLS Status"**
2. Activa SSL para tu dominio
3. Espera 5-10 minutos
4. Tu sitio estará en HTTPS

### CDN (Opcional - Cloudflare)

Para mejorar velocidad globalmente:

1. Crea cuenta en [Cloudflare](https://www.cloudflare.com/)
2. Agrega tu dominio
3. Cambia los DNS en tu registrador de dominio
4. Activa modo proxy (nube naranja)
5. Configura cache y minificación

---

## 📊 Archivos del Build

**Peso aproximado del sitio completo:** ~2-5 MB

- `_next/static/` - JavaScript y CSS minificados
- `*.html` - Páginas HTML prerrenderizadas
- `images/` - Imágenes del sitio
- `manifest.json` - Configuración PWA
- `robots.txt` - SEO
- `sitemap.xml` - SEO

---

## ⚠️ Solución de Problemas

### Problema: Página en blanco

**Solución:**

- Verifica que subiste TODOS los archivos de `out/`
- Revisa que la carpeta `_next/` esté completa
- Limpia el cache del navegador

### Problema: CSS no se aplica

**Solución:**

- Verifica que la carpeta `_next/static/css/` esté subida
- Revisa permisos de archivos (644 para archivos, 755 para carpetas)
- Limpia cache del navegador y del hosting

### Problema: Imágenes no cargan

**Solución:**

- Verifica que todas las imágenes estén en la carpeta correcta
- Revisa que las rutas sean relativas (no absolutas)
- Comprueba permisos de archivos

### Problema: Error 404 en rutas

**Solución:**

- Asegúrate de tener el archivo `.htaccess` configurado
- Verifica que `trailingSlash: true` esté en `next.config.ts`
- Accede a las rutas con `/` al final: `/servicios/`

### Problema: El sitio es muy lento

**Solución:**

- Activa SSL/HTTPS
- Usa .htaccess para compresión
- Considera usar Cloudflare CDN
- Verifica recursos del hosting (no esté sobrecargado)

---

## 📝 Checklist de Despliegue

- [ ] Build generado con `npm run build:static`
- [ ] Todos los archivos de `out/` subidos
- [ ] Archivo `.htaccess` creado y configurado
- [ ] SSL/HTTPS activado
- [ ] Dominio apuntando correctamente
- [ ] Todas las páginas funcionando
- [ ] Imágenes cargando correctamente
- [ ] Estilos aplicados
- [ ] Navegación entre páginas funciona
- [ ] Cache del navegador limpiado para ver cambios

---

## 🎯 Hostings Recomendados

Para este tipo de sitio estático:

### Económicos (Pago)

- **Hostinger** - $1-5/mes, excelente rendimiento
- **Namecheap** - $2-4/mes, incluye SSL
- **SiteGround** - $3-7/mes, muy rápido

### Gratuitos (Mejores opciones)

- **Vercel** - GRATIS, muy rápido, recomendado para Next.js
- **Netlify** - GRATIS, muy bueno, incluye CDN
- **GitHub Pages** - GRATIS, bueno para sitios estáticos

**💡 Tip:** Si quieres hosting gratuito con mejor rendimiento, te recomiendo usar **Vercel** en lugar de hosting compartido. Es gratis, más rápido, y está optimizado para Next.js.

---

## 📞 ¿Necesitas Ayuda?

Si encuentras problemas:

1. Verifica los logs de error en cPanel
2. Revisa la consola del navegador (F12)
3. Contacta al soporte de tu hosting
4. Consulta la documentación de tu proveedor

---

## 🎉 ¡Listo!

Tu portafolio ahora está en vivo. Comparte tu enlace:

- `https://tudominio.com`

**Próximos pasos:**

- Configura Google Analytics
- Registra sitio en Google Search Console
- Optimiza para SEO
- Comparte en redes sociales

¡Felicidades por tu nuevo portafolio en línea! 🚀
