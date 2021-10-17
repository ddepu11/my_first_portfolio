const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'development',

  devtool: 'eval-cheap-module-source-map',

  devServer: {
    static: path.resolve(__dirname, '../build'),
    port: 3000,
    historyApiFallback: true,
    hot: true,
  },

  plugins: [new ReactRefreshWebpackPlugin(), new BundleAnalyzerPlugin()].filter(
    Boolean
  ),
};
