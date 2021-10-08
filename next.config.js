// /* eslint-disable @typescript-eslint/no-var-requires */
// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable @typescript-eslint/explicit-function-return-type */
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const repositoryName = 'nextjs-githubpages-template';
const nextConfig = {
  webpack: (config, options) => {
    return config;
  },
  reactStrictMode: true,
  assetPrefix: process.env.GITHUB_ACTIONS ? `/${repositoryName}` : '',
  basePath: process.env.GITHUB_ACTIONS ? `/${repositoryName}` : '',
  publicRuntimeConfig: {
    assetPrefix: process.env.GITHUB_ACTIONS ? `/${repositoryName}` : '',
  },
  trailingSlash: true,
  eslint: {
    // ESLint managed on the workspace level
    ignoreDuringBuilds: true,
  },
  images: {
    disableStaticImages: true,
  },
};

const config = withPlugins(
  [
    [
      optimizedImages,
      {
        optimizeImages: false,
      },
    ],
  ],
  nextConfig
);

module.exports = config;
