const path = require("path");

const rules = [
  {
    exclude: /node_modules/,
    test: /\.tsx?$/,
    enforce: "pre",
    loader: "eslint-loader",
  },
  {
    exclude: /node_modules/,
    test: /\.tsx?$/,
    loader: "ts-loader",
  },
];

module.exports = {
  entry: {
    "js/background": path.resolve(__dirname, "../src/background.ts"),
    "js/content-script": path.resolve(__dirname, "../src/content-script.ts"),
    "js/options": path.resolve(__dirname, "../src/options.tsx"),
    "js/popup": path.resolve(__dirname, "../src/popup.tsx"),
  },

  module: {
    rules,
  },

  output: {
    filename: "[name].js",
    path: path.join(__dirname, "../app"),
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  }
};