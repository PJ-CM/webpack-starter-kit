const HtmlWebpackPlugin = require("html-webpack-plugin"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  CssMinimizerPlugin = require("css-minimizer-webpack-plugin"),
  // ASÍ NO
  // CleanWebpackPlugin = require("clean-webpack-plugin")
  // ASÍ Si
  // { CleanWebpackPlugin } = require("clean-webpack-plugin"),
  { VueLoaderPlugin } = require("vue-loader");

const path = require("path");

module.exports = {
  // output: {
  //   path: path.resolve(__dirname, "dist"),
  // },
  //---------------------------------------------------------
  entry: {
    js: "./src/index.js",
    vanilla: "./src/aloha_vanilla.js",
    react: "./src/aloha_react.js",
    vue: "./src/aloha_vue.js",
    ts: "./src/aloha_ts.js",
    todo: "./src/to_do.js"
  },
  output: {
    // Si el directorio de salida es el predeterminado ("./dist"),
    // no es necesario especificar este parámetro de configuración.
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // Para evitar mensaje de advertencia del CleanWebpackPlugin
    // path: path.resolve(__dirname, "dist"),
    //---------------------------------------------------------
    // Con esta propiedad de la versión 5.20.0+, ya no es necesario
    // el CleanWebpackPlugin para una limpieza básica
    clean: true,
    filename: "[name].[chunkhash].js"
  },
  module: {
    rules: [
      {
        // test: /\.js$/,
        // ------------------------------
        // test: /\.(js|jsx)$/,
        // o
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: {
          loader: "vue-loader"
        }
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader"
      },
      {
        // test: /\.(css|scss)$/,
        // o
        test: /.s?css$/,
        use: [
          // "style-loader",
          //// MiniCssExtractPlugin.loader,
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "/"
            }
          },
          // "css-loader?minimize&sourceMap",
          // "sass-loader?outputStyle=compressed&sourceMap",
          // "sass-loader?sourceMap=true",
          "css-loader?sourceMap",
          // "postcss-loader?sourceMap",
          { loader: "postcss-loader", options: { sourceMap: true } },
          "resolve-url-loader",
          { loader: "sass-loader", options: { sourceMap: true } }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp)$/i,
        use: [
          "file-loader?name=assets/[name].[ext]",
          // "image-webpack-loader?bypassOnDebug",
          {
            loader: "image-webpack-loader",
            options: { bypassOnDebug: true }
          }
        ]
      },
      {
        test: /\.(ttf|eof|woff2?|mp4|mp3|txt|xml|pdf)$/i,
        use: ["file-loader?name=assets/[name].[ext]"]
        // use: {
        //   loader: "file-loader",
        //   options: {
        //     name: "[name].[ext]",
        //     outputPath: "assets",
        //     publicPath: "assets",
        //   },
        // },
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        sourceMap: true
      })
    ]
  },
  plugins: [
    // ASÍ NO
    // new CleanWebpackPlugin(["dist/**/*.*"]),
    // ASÍ Si
    // new CleanWebpackPlugin({
    //   // cleanOnceBeforeBuildPatterns: ["dist/**/*.*"],
    //   cleanOnceBeforeBuildPatterns: [path.join(__dirname, "dist/**/*")]
    // }),
    //new CleanWebpackPlugin(),
    //---------------------------------------------------------
    // Con el output.clean de la versión 5.20.0+, ya no es necesario
    // el CleanWebpackPlugin para una limpieza básica
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new HtmlWebpackPlugin({
      // Esta referencia
      // template: "./src/template.html",
      // es lo mismo que esta otra
      template: path.resolve(__dirname, "src", "template.html"),
      filename: "./index.html",
      hash: true,
      chunks: ["js"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      filename: "./aloha-vanilla.html",
      hash: true,
      chunks: ["vanilla"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      filename: "./aloha-react.html",
      hash: true,
      chunks: ["react"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      filename: "./aloha-vue.html",
      hash: true,
      chunks: ["vue"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      filename: "./aloha-ts.html",
      hash: true,
      chunks: ["ts"]
    }),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      filename: "./to-do.html",
      hash: true,
      chunks: ["todo"]
    })
  ],
  // -> Configuración adecuada para DESARROLLO
  // devtool: "inline-source-map",
  // -> Configuración adecuada para PRODUCCIÓN - Debug de Errores
  // devtool: "source-map",
  // -> Configuración adecuada para PRODUCCIÓN - Debug de Errores
  // Omitir la línea de Opción directamente o establecerla a FALSE
  devtool: false,
  devServer: {
    port: 9009,
    hotOnly: true,
    hot: true
  }
};
