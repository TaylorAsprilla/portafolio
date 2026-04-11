# 🚀 Despliegue Rápido - Servidor On-Premise

## Pasos Rápidos

### 1️⃣ Preparar Build (Local)

**En Windows:**

```bash
npm run deploy:windows
```

**En Linux/Mac:**

```bash
chmod +x deploy.sh
npm run deploy:linux
```

### 2️⃣ Comprimir

**Windows (PowerShell):**

```powershell
Compress-Archive -Path .\deploy -DestinationPath portafolio.zip
```

**Linux/Mac:**

```bash
tar -czf portafolio.tar.gz deploy/
```

### 3️⃣ Transferir al Servidor

```bash
scp portafolio.tar.gz usuario@servidor:/ruta/
```

### 4️⃣ Configurar en Servidor

```bash
# Descomprimir
tar -xzf portafolio.tar.gz
cd deploy

# Configurar variables
cp .env.production.example .env.production
nano .env.production  # Editar NEXT_PUBLIC_BASE_URL y PORT

# Crear carpeta logs
mkdir -p logs

# Instalar PM2 (si no está instalado)
npm install -g pm2

# Iniciar aplicación
pm2 start ecosystem.config.js

# Auto-inicio en reinicio del servidor
pm2 startup
pm2 save
```

### 5️⃣ Verificar

```bash
# Ver estado
pm2 status

# Ver logs
pm2 logs portafolio
```

---

## 📖 Documentación Completa

Para guía detallada con Nginx, SSL, seguridad, monitoreo y troubleshooting, consulta:

👉 **[DEPLOYMENT.md](DEPLOYMENT.md)**

---

## ⚙️ Archivos de Configuración

- `next.config.ts` - Configuración de Next.js con output standalone
- `ecosystem.config.js` - Configuración de PM2 para producción
- `.env.production.example` - Variables de entorno de ejemplo
- `deploy.sh` / `deploy.bat` - Scripts de build automatizado
- `DEPLOYMENT.md` - Guía completa de despliegue

---

## 🔧 Requisitos del Servidor

- Node.js >= 18.0.0
- npm o yarn
- PM2 (gestor de procesos)
- Nginx (opcional, recomendado como proxy reverso)

---

## 📞 Comandos PM2 Útiles

```bash
pm2 list              # Ver todas las apps
pm2 logs portafolio   # Ver logs
pm2 restart portafolio # Reiniciar
pm2 stop portafolio   # Detener
pm2 monit             # Monitor de recursos
```

---

¡Tu portafolio estará corriendo en el puerto 3000! 🎉
