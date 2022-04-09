const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",

  resolve: {
    extensions: [".js"],
  },

  context: path.resolve(__dirname, "src"),

  entry: "./index.js",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "../public/index.html",
      inject: "body",
      hash: true,
    }),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    port: 8888,
    hot: true,
  },
};

module.exports = config;
