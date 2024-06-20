const webpack = require('webpack');
const path = require('path');
const { isProduction } = require('./@types/helper/index');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: isProduction() ? 'production' : 'development',
  devtool: isProduction() ? 'hidden-source-map' : 'eval',
  //entry:
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  //loader config
  module: {
    rules: [],
    exclude: /node_modules/,
    use: ['ts-loader'],
  },

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
};
