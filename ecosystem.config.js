// Configuración de PM2 para despliegue on-premise
module.exports = {
  apps: [
    {
      name: "portafolio",
      script: "./server.js",
      cwd: "./.next/standalone",
      instances: "max", // Utiliza todos los CPUs disponibles
      exec_mode: "cluster",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
      error_file: "./logs/error.log",
      out_file: "./logs/out.log",
      log_file: "./logs/combined.log",
      time: true,
      max_memory_restart: "1G",
      // Configuración de auto-restart
      watch: false,
      autorestart: true,
      max_restarts: 10,
      min_uptime: "10s",
    },
  ],
};
