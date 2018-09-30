const merge = require('webpack-merge');
const common = require('./webpack.config.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: 'react-restaurant-list/bundle.[hash:8].js'
  },
});