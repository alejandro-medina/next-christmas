const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 8080
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'public/index.html'
  })],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  }
}