/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'], // Mantén esto si quieres optimización para estos formatos
  },
  reactStrictMode: true,
};

export default nextConfig;

