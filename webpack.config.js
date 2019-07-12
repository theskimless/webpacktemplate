const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  var isProduction = argv.mode === "production";
  if(isProduction) {

  }
  console.log("MODE: " + isProduction);
  
  return config;
}

const PATHS = {
  dist: path.resolve(__dirname, "dist"),
  src: path.resolve(__dirname, "src")
}

var config = {
  context: PATHS.src,

  entry: {
    app: "./index.js"
  },

  output: {
    path: PATHS.dist,
    filename: "js/[name].js"
  },

  devServer: {
    contentBase: PATHS.dist,
    port: 8081,
    overlay: true
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: { presets: ["@babel/preset-env"] }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/index.html`,
      filename: "index.html"
    })
  ]
}