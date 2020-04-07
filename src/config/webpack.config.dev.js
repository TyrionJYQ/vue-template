const { smart } = require("webpack-merge");
const base = require("./webpack.config.base");
const webpack = require("webpack");
module.exports = smart(base, {
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.sty(lus)$/,
        use: ["style-loader", "css-loader", "postcss-loader", "stylus-loader"]
      }
    ]
  },
  devServer: {
    port: 8181,
    progress: true
    // publicPath: './dist',
  },
  plugins: [
    new webpack.DefinePlugin({
      ENV: JSON.stringify("development"), //字符串
    })
  ]
});
