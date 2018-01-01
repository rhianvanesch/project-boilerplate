const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    secondary: "./src/js/secondary.js"
  },
  output: {
    filename: "assets/js/[name].bundle.js",
    path: path.join(__dirname, "dist")
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            "css-loader", // translates CSS into CommonJS
            "postcss-loader", // adds PostCSS processing
            "sass-loader" // compiles Sass to CSS
          ]
        })
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
  plugins: [new CleanWebpackPlugin("dist/assets"), new ExtractTextPlugin("assets/css/style.css")]
};
