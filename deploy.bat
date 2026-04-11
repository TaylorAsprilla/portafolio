@echo off
REM Script de despliegue para Windows
REM Uso: deploy.bat

echo 🚀 Iniciando proceso de despliegue...

REM 1. Limpiar builds anteriores
echo 🧹 Limpiando builds anteriores...
if exist .next rmdir /s /q .next
if exist out rmdir /s /q out

REM 2. Instalar dependencias
echo 📦 Instalando dependencias...
call npm ci --production=false

REM 3. Ejecutar build
echo 🔨 Construyendo aplicación...
call npm run build

REM 4. Crear estructura de despliegue
echo 📁 Preparando archivos para despliegue...

REM Crear directorio de despliegue
if exist deploy rmdir /s /q deploy
mkdir deploy
cd deploy

REM Copiar archivos standalone
xcopy /E /I /Y ..\.next\standalone\* .

REM Copiar archivos estáticos
mkdir .next 2>nul
xcopy /E /I /Y ..\.next\static .next\static
xcopy /E /I /Y ..\public public

REM Copiar archivos de configuración
copy ..\ecosystem.config.js . >nul 2>&1
copy ..\.env.production .env >nul 2>&1

cd ..

echo.
echo ✅ Build completado!
echo.
echo 📋 Próximos pasos para desplegar en servidor:
echo 1. Comprimir la carpeta 'deploy' (usar 7-Zip o WinRAR)
echo 2. Transferir al servidor Windows
echo 3. En el servidor, instalar PM2: npm install -g pm2
echo 4. Crear carpeta de logs: mkdir logs
echo 5. Iniciar con PM2: pm2 start ecosystem.config.js
echo 6. Configurar PM2 para auto-inicio: pm2 startup
echo.
echo 🌐 La aplicación correrá en el puerto 3000
pause
