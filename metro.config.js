const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
const { withNativeWind } = require("nativewind/metro");

const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;

const config = {
  transformer: {
    babelTransformerPath: require.resolve("react-native-css-transformer"),
  },
  resolver: {
    assetExts: assetExts.filter((ext) => ext !== "css"),
    sourceExts: [...sourceExts, "css", "jsx", "js", "ts", "tsx"],
  },
};

module.exports = withNativeWind(mergeConfig(defaultConfig, config), {
  input: "./global.css",
});
