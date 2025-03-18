/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'], // Optimización para formatos modernos
    domains: ['example.com', 'another-domain.com'], // Agrega dominios permitidos
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // Tamaños responsivos
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Tamaños específicos
  },
  reactStrictMode: true,
};

export default nextConfig;

