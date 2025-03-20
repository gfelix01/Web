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
  experimental: {
    workerThreads: false, // Disable worker threads to reduce memory overhead
    cpus: 1, // Limit CPU usage to avoid overloading
  },
  // ...existing code...
};
