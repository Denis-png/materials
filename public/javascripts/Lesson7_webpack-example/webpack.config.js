const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); //takes care of the old builds - deletes them and lets only the newest file in the dist folder 

module.exports = {
  entry: "./src/index.js",
  output: {
   filename: "[name].[contentHash].bundle.js",
    path: path.resolve(__dirname, "dist"), //needs to be an absolute path
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test:/\.html$/,
        use: ["html-loader"] //makes images to be required by webpack, BUT it doesn't say what should happen with assets found in html files
      },
      {
        test: /\.(svg|png|jpg)$/, //here we specify, what should happend with assets found thanks to html-loader
        use: {loader: "file-loader", options: {name:"[name].[hash].[ext]", outputPath:"imgs"}}
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      } 
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" }), new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }), new CleanWebpackPlugin()], 
};
