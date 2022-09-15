const defaultSourceExts =
  require('metro-config/src/defaults/defaults').sourceExts;
module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    sourceExts:
      process.env.MY_APP_MODE === 'mocked'
        ? ['mock.js', ...defaultSourceExts]
        : defaultSourceExts,
  },
};
