const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    secondary: "./src/js/secondary.js"
  },
  output: {
    filename: "assets/js/[name].bundle.js",
    path: path.join(__dirname, "dist") // eslint-disable-line
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "/assets/fonts/"
            }
          }
        ]
      }
    ]
  },
  plugins: [new CleanWebpackPlugin("dist/assets")]
};
