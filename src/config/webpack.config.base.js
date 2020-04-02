const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../index.js')
  },
  output: {
    path: path.resolve(__dirname,"../../dist"),
    filename: '[name].hash.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js(x)$/,
        use: ["babel-loader"],
        exclude: /node_modules/
      },
       {
        test: /\.vue$/,
        use: ["vue-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }
      }
    ]
  },
  resolve: {
    modules: [path.resolve("node_modules")],
    extensions: [".js", ".vue", ".json"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html'),
      filename: "index.html",
      title: "my project"
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin()
  ]
};
