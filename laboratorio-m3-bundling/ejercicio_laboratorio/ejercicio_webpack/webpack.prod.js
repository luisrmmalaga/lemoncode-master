import Dotenv from "dotenv-webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { merge } from "webpack-merge";
import common from "./webpack.common.js";

export default merge(common, {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[chunkhash].css",
      chunkFilename: "[id].css",
    }),
    new Dotenv({
      path: "./prod.env",
    }),
  ],
});
