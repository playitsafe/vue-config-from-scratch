// const htmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  mode: 'development',
  output: {
    // 不需压缩
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html'
    }),
    new VueLoaderPlugin()
  ]
}