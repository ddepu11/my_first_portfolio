const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'production',

  devtool: 'source-map',

  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../src/_redirects'),
          to: path.resolve(__dirname, '../build'),
        },
      ],
    }),
  ],

  output: {
    clean: true,
  },
};
