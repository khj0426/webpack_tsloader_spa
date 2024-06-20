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
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
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

  devServer: {
    historyApiFallback: true,
    compress: true,
    hot: true,
    port: 8088,
  },

  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),

    new webpack.HotModuleReplacementPlugin(),
  ],
};
