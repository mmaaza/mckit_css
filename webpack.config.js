const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/main.scss",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", // Adds CSS to the DOM by injecting a <style> tag
          "css-loader", // Translates CSS into CommonJS
          "sass-loader", // Compiles Sass to CSS
        ],
      },
    ],
  },
};
