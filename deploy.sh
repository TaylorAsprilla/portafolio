#!/bin/bash

# Script de despliegue para servidor on-premise
# Uso: ./deploy.sh

echo "🚀 Iniciando proceso de despliegue..."

# 1. Limpiar builds anteriores
echo "🧹 Limpiando builds anteriores..."
rm -rf .next
rm -rf out

# 2. Instalar dependencias
echo "📦 Instalando dependencias..."
npm ci --production=false

# 3. Ejecutar build
echo "🔨 Construyendo aplicación..."
npm run build

# 4. Crear estructura de despliegue
echo "📁 Preparando archivos para despliegue..."

# Crear directorio de despliegue
mkdir -p deploy
cd deploy

# Copiar archivos standalone
cp -r ../.next/standalone/* .

# Copiar archivos estáticos
mkdir -p .next
cp -r ../.next/static .next/
cp -r ../public .

# Copiar archivos de configuración
cp ../ecosystem.config.js .
cp ../.env.production .env 2>/dev/null || echo "No se encontró .env.production"

echo "✅ Build completado!"
echo ""
echo "📋 Próximos pasos para desplegar en servidor:"
echo "1. Comprimir la carpeta 'deploy': tar -czf portafolio.tar.gz deploy/"
echo "2. Transferir al servidor: scp portafolio.tar.gz usuario@servidor:/ruta/destino/"
echo "3. En el servidor, descomprimir: tar -xzf portafolio.tar.gz"
echo "4. Instalar PM2 globalmente: npm install -g pm2"
echo "5. Crear carpeta de logs: mkdir -p logs"
echo "6. Iniciar con PM2: pm2 start ecosystem.config.js"
echo "7. Configurar PM2 para auto-inicio: pm2 startup && pm2 save"
echo ""
echo "🌐 La aplicación correrá en el puerto 3000"
