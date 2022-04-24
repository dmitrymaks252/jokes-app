import path from "path";
import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const config: Configuration = {
  mode: "production",
  entry: "./src/index.tsx",
  output: {
    assetModuleFilename: "assets/[hash][ext][query]",
    path: path.resolve(__dirname, "build"),
    filename: "[name].[contenthash].js",
    publicPath: "",
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        exclude: /\.module\.scss/
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.module\.scss/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                auto: true,
                localIdentName: "[hash:base64]"
              }
            }
          },
          {
            loader: "sass-loader"
          }
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css"
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      favicon: "src/assets/favicon.png",
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
    }),
    new CleanWebpackPlugin(),
  ],
};

export default config;