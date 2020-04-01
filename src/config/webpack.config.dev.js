const  {smart} = require('webpack-merge');
const  base = require('./webpack.config.base');
console.log(JSON.stringify(smart(base, {
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  devServer: {
    port: 8181,
    progress: true, 
    publicPath: './dist',
  }
})))
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
          'postcss-loader'
        ]
      }
    ]
  },
  devServer: {
    port: 8181,
    progress: true, 
    publicPath: './dist',
  }
})
