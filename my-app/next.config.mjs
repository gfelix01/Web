/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Ayuda a detectar problemas en desarrollo
  output: 'standalone', // Recomendado para despliegues en Vercel y Docker
  
  // Add Turbopack configuration
  experimental: {
    turbo: {
      // Turbopack-specific options can go here
    },
  },
};

export default nextConfig;
