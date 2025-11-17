/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Ignora errores de ESLint durante el build en producción
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ignora errores de TypeScript durante el build (si los hay)
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
