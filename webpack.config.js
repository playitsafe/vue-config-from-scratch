module.exports = env => {
  env = env || {}

  return {
    // production, development
    // mode: 'none',
    entry: './src/components/subcomp.js',
    // output: {
    //   path: path.resolve(__dirname, 'dist'),
    //   filename: 'bundle.js'
    // }
    ...env.development ? require('./config/webpack.dev') : require('./config/webpack.prod')
  }
}