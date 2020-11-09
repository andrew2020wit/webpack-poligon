const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  context: path.resolve(__dirname, "src"),
  entry: { main: "./index.js", analytics: "./analytics.js" },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    // default extensions
    extensions: [".js", ".json"],
    alias: { "@styles": path.resolve(__dirname, "src/styles/") },
  },
  plugins: [
    new HTMLWebpackPlugin({ template: "./index.html" }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.(png|jpeg|svg|gif)$/, use: ["file-loader"] },
      { test: /\.(ttf|woff|woff2|eot)$/, use: ["file-loader"] },
    ],
  },
};
