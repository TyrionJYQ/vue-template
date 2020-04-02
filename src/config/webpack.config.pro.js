const  {smart} = require('webpack-merge');
const  base = require('./webpack.config.base');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = smart(base, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ]
      },
      {
        test: /\.sty(lus)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'stylus-loader',
        ]
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ]
})
