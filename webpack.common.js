const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const fs = require("fs");
const webpack = require("webpack");

function generateHtmlPlugins(templateDir) {
    const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
    return templateFiles.map((item) => {
        // Split names and extension
        const parts = item.split(".");
        const name = parts[0];
        const extension = parts[1];
        return new HtmlWebpackPlugin({
            filename: `${name}.html`,
            template: path.resolve(
                __dirname,
                `${templateDir}/${name}.${extension}`
            ),
        });
    });
}

// We will call the function like this:
const htmlPlugins = generateHtmlPlugins("./src/views");

module.exports = {
    mode: "development",
    devServer: {
        contentBase: "./dist",
        hot: true,
    },
    // entry: "./src/vendor/vendor.js",
    entry: {
        main: ["./src/vendor/App.js", "./src/scss/index.scss"],
    },
    output: {
        filename: "vendor/vendor.js",
        path: path.resolve(__dirname, "dist"),
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.twig$/,
                use: [
                    "raw-loader",
                    {
                        loader: "twig-html-loader",
                        options: {
                            data: {},
                        },
                    },
                ],
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {},
                    },
                    {
                        loader: "sass-loader",
                        options: {},
                    },
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
        }),
        new CopyPlugin({
            patterns: [
                { from: "src/assets", to: "assets" },
                { from: "src/js", to: "js" },
            ],
        }),
    ].concat(htmlPlugins),
};
