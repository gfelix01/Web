/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Ayuda a detectar problemas en desarrollo
  swcMinify: true, // Optimiza el código para mejor rendimiento
  output: 'standalone', // Recomendado para despliegues en Vercel y Docker
};

export default nextConfig;
