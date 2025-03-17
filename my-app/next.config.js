/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  
  // Add Turbopack configuration
  experimental: {
    turbo: {
      // Turbopack-specific options can go here
      // See: https://nextjs.org/docs/app/api-reference/next-config-js/turbo
    },
  },

  // This webpack config will only be used when NOT using Turbopack
  webpack: (config, { isServer }) => {
    // Keep model split chunks small for better memory usage
    config.optimization.splitChunks = {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 20000,
      maxSize: 50000,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // Get the name of the package
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            // Return a name for the chunk
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    };

    // Reduce memory usage
    config.optimization.minimizer = config.optimization.minimizer.map(
      minimizer => {
        if (minimizer.constructor.name === 'TerserPlugin') {
          return {
            ...minimizer,
            options: {
              ...minimizer.options,
              terserOptions: {
                ...minimizer.options.terserOptions,
                // Reduce memory usage for terser
                parallel: 2,
                keep_classnames: true,
                keep_fnames: true,
              },
            },
          };
        }
        return minimizer;
      }
    );
    
    return config;
  },
}

module.exports = nextConfig;
