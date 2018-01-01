const commonConfig = require("./webpack.common");
const webpackMerge = require("webpack-merge");

module.exports = env => {
  const envConfig = require(`./webpack.${env.env}.js`);
  return webpackMerge(commonConfig, envConfig);
};
