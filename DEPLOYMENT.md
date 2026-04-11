# Guía de Despliegue On-Premise

Esta guía te ayudará a desplegar tu portafolio Next.js 15 en un servidor on-premise.

## 📋 Requisitos Previos

En el servidor de producción necesitas:

- Node.js 18.0.0 o superior
- npm o yarn
- PM2 (gestor de procesos)
- Nginx o Apache (opcional, como proxy reverso)

## 🚀 Proceso de Despliegue

### Opción 1: Despliegue Automatizado (Recomendado)

#### En Windows (desarrollo):

```bash
# Ejecutar script de build
deploy.bat

# Comprimir carpeta deploy
# Usar 7-Zip, WinRAR o PowerShell:
Compress-Archive -Path .\deploy -DestinationPath portafolio.zip
```

#### En Linux/Mac (desarrollo):

```bash
# Dar permisos de ejecución
chmod +x deploy.sh

# Ejecutar script de build
./deploy.sh

# Comprimir carpeta deploy
tar -czf portafolio.tar.gz deploy/
```

### Opción 2: Despliegue Manual

```bash
# 1. Construir aplicación
npm run build

# 2. La aplicación standalone estará en .next/standalone/
# 3. Copiar manualmente los archivos necesarios al servidor
```

## 📦 Transferir al Servidor

### Usando SCP (Linux/Mac):

```bash
scp portafolio.tar.gz usuario@servidor:/ruta/destino/
```

### Usando WinSCP (Windows):

- Usar WinSCP o FileZilla para transferir el archivo

## ⚙️ Configuración en el Servidor

### 1. Preparar el servidor

```bash
# Conectar al servidor
ssh usuario@servidor

# Ir al directorio de la aplicación
cd /ruta/destino

# Descomprimir (Linux)
tar -xzf portafolio.tar.gz
cd deploy

# O descomprimir (Windows)
# Usar 7-Zip o PowerShell para extraer
```

### 2. Configurar variables de entorno

```bash
# Copiar y editar archivo de entorno
cp .env.production.example .env.production

# Editar con tus valores
nano .env.production  # o vim, o notepad en Windows
```

Configuración mínima en `.env.production`:

```env
NEXT_PUBLIC_BASE_URL=https://tu-dominio.com
PORT=3000
NODE_ENV=production
```

### 3. Instalar PM2 (si no está instalado)

```bash
npm install -g pm2
```

### 4. Crear carpeta de logs

```bash
mkdir -p logs
```

### 5. Iniciar la aplicación

```bash
# Iniciar con PM2
pm2 start ecosystem.config.js

# Ver logs
pm2 logs portafolio

# Ver estado
pm2 status

# Reiniciar
pm2 restart portafolio

# Detener
pm2 stop portafolio
```

### 6. Configurar auto-inicio

```bash
# Generar script de inicio automático
pm2 startup

# Ejecutar el comando que PM2 te muestre

# Guardar la configuración actual
pm2 save
```

## 🌐 Configurar Nginx como Proxy Reverso (Recomendado)

### Instalación de Nginx

**Ubuntu/Debian:**

```bash
sudo apt update
sudo apt install nginx
```

**CentOS/RHEL:**

```bash
sudo yum install nginx
```

### Configuración de Nginx

Crear archivo de configuración: `/etc/nginx/sites-available/portafolio`

```nginx
server {
    listen 80;
    server_name tu-dominio.com www.tu-dominio.com;

    # Redirigir HTTP a HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name tu-dominio.com www.tu-dominio.com;

    # Certificados SSL (usar Let's Encrypt)
    ssl_certificate /etc/letsencrypt/live/tu-dominio.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/tu-dominio.com/privkey.pem;

    # Configuración SSL
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers on;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512;

    # Logs
    access_log /var/log/nginx/portafolio-access.log;
    error_log /var/log/nginx/portafolio-error.log;

    # Proxy a Next.js
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Cache para archivos estáticos
    location /_next/static {
        proxy_pass http://localhost:3000;
        proxy_cache_valid 60m;
        add_header Cache-Control "public, max-age=3600, immutable";
    }

    # Archivos públicos
    location /public {
        proxy_pass http://localhost:3000;
        proxy_cache_valid 60m;
    }
}
```

### Activar configuración y reiniciar Nginx

```bash
# Crear enlace simbólico
sudo ln -s /etc/nginx/sites-available/portafolio /etc/nginx/sites-enabled/

# Verificar configuración
sudo nginx -t

# Reiniciar Nginx
sudo systemctl restart nginx
```

### Obtener certificado SSL con Let's Encrypt

```bash
# Instalar Certbot
sudo apt install certbot python3-certbot-nginx

# Obtener certificado
sudo certbot --nginx -d tu-dominio.com -d www.tu-dominio.com

# El certificado se renovará automáticamente
```

## 🔧 Comandos Útiles de PM2

```bash
# Ver todas las aplicaciones
pm2 list

# Ver logs en tiempo real
pm2 logs portafolio --lines 100

# Monitorear recursos
pm2 monit

# Reiniciar después de cambios
pm2 restart portafolio

# Actualizar aplicación:
# 1. Detener PM2
pm2 stop portafolio

# 2. Respaldar versión actual
mv .next .next.backup

# 3. Copiar nueva versión
# ... transferir nuevos archivos ...

# 4. Reiniciar
pm2 start ecosystem.config.js

# Ver información detallada
pm2 info portafolio

# Eliminar proceso
pm2 delete portafolio
```

## 🔥 Firewall

Asegúrate de abrir los puertos necesarios:

```bash
# Ubuntu/Debian (UFW)
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable

# CentOS/RHEL (firewalld)
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --reload
```

## 📊 Monitoreo y Logs

### Ver logs de la aplicación

```bash
# Logs de PM2
pm2 logs portafolio

# Logs de Nginx
sudo tail -f /var/log/nginx/portafolio-access.log
sudo tail -f /var/log/nginx/portafolio-error.log

# Logs de la aplicación
tail -f logs/combined.log
```

### Monitoreo con PM2 Plus (opcional)

```bash
# Registrarse en https://pm2.io
pm2 link [secret-key] [public-key]
```

## 🔄 Actualización de la Aplicación

```bash
# 1. Construir nueva versión localmente
./deploy.sh  # o deploy.bat en Windows

# 2. Comprimir
tar -czf portafolio.tar.gz deploy/

# 3. Transferir al servidor
scp portafolio.tar.gz usuario@servidor:/ruta/destino/

# 4. En el servidor
cd /ruta/destino
pm2 stop portafolio
rm -rf deploy.old
mv deploy deploy.old
tar -xzf portafolio.tar.gz
cd deploy
pm2 start ecosystem.config.js
```

## ⚠️ Solución de Problemas

### La aplicación no inicia

```bash
# Verificar logs
pm2 logs portafolio --err

# Verificar variables de entorno
pm2 env portafolio

# Verificar puerto
netstat -tulpn | grep 3000
```

### Errores de permisos

```bash
# Dar permisos correctos
chmod -R 755 deploy/
```

### Puerto en uso

```bash
# Cambiar puerto en .env.production
PORT=3001

# O matar proceso en puerto 3000
sudo kill $(sudo lsof -t -i:3000)
```

## 📈 Optimizaciones

### 1. Compresión Gzip/Brotli en Nginx

Ya está habilitada en la configuración de Next.js con `compress: true`.

### 2. Cache de CDN

Si usas un CDN, configura reglas de cache para:

- `/_next/static/*` - Cache por 1 año
- `/public/*` - Cache según tipo de archivo

### 3. Balanceo de Carga

Para alta disponibilidad, usa PM2 en modo cluster (ya configurado en `ecosystem.config.js`):

```javascript
instances: "max", // Usa todos los CPUs
exec_mode: "cluster",
```

## 🔒 Seguridad

- ✅ Headers de seguridad configurados en `next.config.ts`
- ✅ SSL/TLS con certificado válido
- ✅ Firewall configurado
- ✅ Actualizaciones regulares del sistema
- ✅ Variables de entorno protegidas

## 📞 Soporte

Si encuentras problemas:

1. Verifica los logs: `pm2 logs portafolio`
2. Verifica el estado: `pm2 status`
3. Revisa la configuración de Nginx: `sudo nginx -t`

## 🎉 ¡Listo!

Tu aplicación ahora está corriendo en producción. Visita tu dominio para verificar que todo funciona correctamente.
