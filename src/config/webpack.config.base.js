const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

const isDev = process.env.NODE_ENV !== "production";

module.exports = {
  entry: {
    app: path.resolve(__dirname, "../index.js")
  },
  output: {
    path: path.resolve(__dirname, "../../dist"),
    filename: "js/[name].hash.bundle.js"
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
          loader: "url-loader",
          options: {
            limit: 8192,
            outputPath: (url, resourcePath, context) => {
              console.log(url, resourcePath, context);
              if (isDev) {
                return `images/${url}`;
              }
              return `imgs/${url}`
            },
            esModule: false
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
      template: path.resolve(__dirname, "../index.html"),
      filename: "index.html",
      title: "my project"
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin()
  ]
};
