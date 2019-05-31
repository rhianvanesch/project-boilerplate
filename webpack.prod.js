const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

const prodConfig = {
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCSSExtractPlugin.loader, // Extract CSS to file
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
              name: "[name].[md5:hash:base64:8].[ext]",
              outputPath: "/assets/images/"
            }
          },
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 75
              },
              optipng: {
                enabled: false
              },
              pngquant: {
                quality: "65-90",
                speed: 8
              },
              gifsicle: {
                interlaced: false
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: "assets/css/style.[hash].css"
    })
  ]
};

module.exports = prodConfig;
