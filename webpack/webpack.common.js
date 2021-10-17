const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: 'web',

  entry: path.resolve(__dirname, '../src/index.tsx'),

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/index.html'),
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css|scss$/i,
        exclude: /\node_modules/,
        use: ['style-loader', 'css-loader'],
      },

      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        exclude: /node_modules/,
        type: 'asset/resource',
      },
    ],
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../build'),
    assetModuleFilename: 'images/[hash][ext][query]',
    publicPath: '/',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
