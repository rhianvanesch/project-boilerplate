const prodConfig = {
  devtool: "source-map",
  module: {
    loaders: [
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
  }
};

module.exports = prodConfig;
