const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = (envVars) => {
  const { env } = envVars;

  const fileToUse = require(`./webpack.${env}.js`);

  const mergedFile = merge(common, fileToUse);

  return mergedFile;
};
