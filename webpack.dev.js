const devConfig = {
  mode: "development",
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", // Inline CSS in <head>
          "css-loader", // translates CSS into CommonJS
          "postcss-loader", // adds PostCSS processing
          "sass-loader" // compiles Sass to CSS
        ]
      },
      {
        test: /\.(png|svg|jpe?g|gif|webp)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "/assets/images/"
            }
          }
        ]
      }
    ]
  }
};

module.exports = devConfig;
