const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  context: path.resolve(__dirname, "src"),
  entry: { main: "./index.js", analytics: "./analytics.js" },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HTMLWebpackPlugin({ template: "./index.html" }),
    new CleanWebpackPlugin(),
  ],
  module: { rules: [{ test: /\.css$/, use: ["style-loader", "css-loader"] }] },
};
