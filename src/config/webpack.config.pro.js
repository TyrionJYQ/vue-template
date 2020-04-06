const path = require("path");
const webpack = require("webpack");
const { smart } = require("webpack-merge");
const base = require("./webpack.config.base");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");

module.exports = smart(base, {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
      },
      {
        test: /\.sty(lus)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false
            }
          },

          "css-loader",
          "postcss-loader",
          "stylus-loader"
        ]
      }
    ]
  },
  optimization: {
    minimizer: [new TerserJSPlugin(), new OptimizeCSSAssetsPlugin({})]
  },
  plugins: [
    new webpack.DefinePlugin({
      ENV: JSON.stringify("production") //字符串
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash:5].css",
      chunkFilename: "css/[id].[hash:5].css"
    })
  ]
});
