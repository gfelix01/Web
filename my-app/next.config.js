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
  // ...existing code...
};
