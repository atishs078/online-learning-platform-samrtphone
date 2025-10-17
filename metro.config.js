const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig();
  return {
    ...defaultConfig,
    transformer: {
      babelTransformerPath: require.resolve("react-native-css-transformer"),
    },
    resolver: {
      assetExts: defaultConfig.resolver.assetExts.filter(ext => ext !== "css"),
      sourceExts: [...defaultConfig.resolver.sourceExts, "css"],
    },
  };
})();
