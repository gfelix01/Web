/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'], // Keep this if you want optimization for these formats
  },
  reactStrictMode: true,
};

export default nextConfig;

