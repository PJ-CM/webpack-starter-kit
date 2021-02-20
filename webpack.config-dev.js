const { merge } = require("webpack-merge"),
  commonConfig = require("./webpack.config-common");

module.exports = merge(commonConfig, {
  mode: "development",
  // -> Configuración adecuada para DESARROLLO
  devtool: "inline-source-map",
  devServer: {
    port: 9009,
    hotOnly: true,
    hot: true
  }
});
