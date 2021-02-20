const { merge } = require("webpack-merge"),
  commonConfig = require("./webpack.config-common");

module.exports = merge(commonConfig, {
  mode: "production",
  // -> Configuración adecuada para PRODUCCIÓN - Debug de Errores
  // devtool: "source-map",
  // -> Configuración adecuada para PRODUCCIÓN - Debug de Errores
  // Omitir la Opción directamente
  devtool: false,
  // Si no se fuera a probar la compilación de PRODUCCIÓN con el
  // servidor de desarrollo, este bloque podría omitirse
  devServer: {
    port: 9009,
    hotOnly: true,
    hot: true
  }
});
