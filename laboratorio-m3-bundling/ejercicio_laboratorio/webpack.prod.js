import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { merge } from "webpack-merge";
import common from "./webpack.common.js";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default merge(common, {
  context: path.resolve(__dirname, "src"),
  entry: {
    app: "./index.js",
  },
  output: {
    filename: "[name].[chunkhash].bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
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
