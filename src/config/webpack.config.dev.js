const  {smart} = require('webpack-merge');
const  base = require('./webpack.config.base');
module.exports = smart(base, {
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ]
      },
      {
        test: /\.sty(lus)$/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader',
        ]
      }
    ]
  },
  devServer: {
    port: 8181,
    progress: true, 
    // publicPath: './dist',
  }
})
