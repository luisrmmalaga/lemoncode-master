import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default {
    // entry: ["./src/index.js", "./src/mystyles.css"],
    entry: {
        app: "./src/index.js",
        // appStyles: "./src/mystyles.css",
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
                exclude: /node_modules/,
                use: [/*"style-loader"*/MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
    devServer: {
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
            scriptLoading: "blocking",
            hash: true,
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[chunkhash].css",
        }),
    ],
}