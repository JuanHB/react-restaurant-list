const webpack = require('webpack');
const DotEnv = require('dotenv-webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHardDiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      'src' : path.resolve(__dirname, './src')
    }
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      template: './src/index.html'
    }),
    new HtmlWebpackHardDiskPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new DotEnv(),
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
    https: true,
    historyApiFallback: true,
  },
};