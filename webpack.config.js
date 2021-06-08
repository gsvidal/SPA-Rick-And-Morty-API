const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  entry: ["regenerator-runtime", "core-js", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      }
    ]
  },
  resolve: {
    extensions:  [".js"],
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        inject: true,
        template: "./public/index.html",
        filename: "./index.html"
      }
    )
  ]
  //Creating a new port
  //devServer: {
  //   port: 6969,
  //   open: true
  // }
}