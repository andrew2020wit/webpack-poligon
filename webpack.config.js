const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const copyWebpackPlugin = require("copy-webpack-plugin");

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
  optimization: { splitChunks: { chunks: "all" } },
  plugins: [
    new HTMLWebpackPlugin({ template: "./index.html" }),
    new CleanWebpackPlugin(),
    new copyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/assets/favicon.ico"),
          to: path.resolve(__dirname, "dist"),
        },
      ],
    }),
  ],
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.(png|jpeg|svg|gif)$/, use: ["file-loader"] },
      { test: /\.(ttf|woff|woff2|eot)$/, use: ["file-loader"] },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000,
  },
};
