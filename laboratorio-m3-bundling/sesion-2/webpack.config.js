import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import url from "url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default {
    context: path.resolve(__dirname, "src"),
    // entry: ["./src/index.js", "./src/mystyles.css"],
    entry: {
        app: "./index.js",
        // appStyles: "./src/mystyles.css",
        vendorStyles: ["../node_modules/bootstrap/dist/css/bootstrap.css"],
    },
    output: {
        filename: "[name].[chunkhash].bundle.js",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                // exclude: /node_modules/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader,"css-loader","sass-loader"],
            },
            {
                test: /\.(png|jpg)$/,
                type: "asset/resource",
            },
            {
                test: /\.html$/,
                loader: "html-loader",
            }
        ],
    },
    devServer: {
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: "index.html",
            scriptLoading: "blocking",
            hash: true,
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[chunkhash].css",
        }),
    ],
}