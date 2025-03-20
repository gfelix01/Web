module.exports = {
  // ...existing code...
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'shuamakeup.comm', // Replace with your domain
        pathname: '/**',
      },
    ],
  },
  // Remove the deprecated "images.domains" configuration
  // ...existing code...
};
