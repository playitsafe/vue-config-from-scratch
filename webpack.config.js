module.exports = env => {
  env = env || {}

  return {
    // production, development
    // mode: 'none',
    entry: './src/main',
    // output: {
    //   path: path.resolve(__dirname, 'dist'),
    //   filename: 'bundle.js'
    // }
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: 'vue-loader'
        },
        {
          test: /\.css$/,
          //从右往左loader
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    resolve: {
      //默认扩展名可以省略
      extensions: ['.js', '.json', '.vue'],
      alias: {
        vue: 'vue/dist/vue.esm'
      }
    },
    ...env.development ? require('./config/webpack.dev') : require('./config/webpack.prod')
  }
}