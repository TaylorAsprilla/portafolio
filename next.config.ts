import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuración para exportación estática (hosting compartido)
  output: "export",

  // Desactivar optimización de imágenes para hosting estático
  images: {
    unoptimized: true,
  },

  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },

  // Trailing slash para compatibilidad con servidores estáticos
  trailingSlash: true,
};

export default nextConfig;
