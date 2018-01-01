const devConfig = {
  devtool: "eval-source-map",
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
          }
        ]
      }
    ]
  }
};

module.exports = devConfig;
