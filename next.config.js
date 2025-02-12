const path = require("path");

const defaultConfig = {};

const nextConfig = {
  /* config options here */
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    config.resolve.modules.push(path.resolve("./"));
    // Important: return the modified config
    const plugins = [];
    return plugins.reduce((acc, plugin) => plugin(acc), {
      ...defaultConfig,
      ...config,
    });
  },
};

module.exports = nextConfig;
