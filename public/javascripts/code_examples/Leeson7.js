// All Lesson 7 - projects. I will create 4 folder called Lesson7 - projet name. Inside of this folders are files index.html with code and css


// I will try to create functions here from doc as well. I do not think we are going to use this function. But I did them anyway.
//For lesson 7, 8, 10 we have folders with projects

function console_to_page() {
    if (!console) {
        console = {};
    }
    let old = console.log;
    let logger = document.getElementById('log');
    console.log = function (message) {
        if (typeof message == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + '<br />';
        } else {
            logger.innerHTML += message + '<br />';
        }
    }
};

class Lesson7 {
    page9_10() {
        console_to_page()
        export const selectors = {
            barChart: document.getElementById("myChart").getContext("2d"),
        };
        import { Chart } from "chart.js";
        import { selectors } from "./selectors";

        export const BarChart = new Chart(selectors.barChart, {
            type: "bar",
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [
                    {
                        label: "# of Votes",
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            "rgba(255, 99, 132, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(255, 206, 86, 0.2)",
                            "rgba(75, 192, 192, 0.2)",
                            "rgba(153, 102, 255, 0.2)",
                            "rgba(255, 159, 64, 0.2)",
                        ],
                        borderColor: [
                            "rgba(255, 99, 132, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(255, 206, 86, 1)",
                            "rgba(75, 192, 192, 1)",
                            "rgba(153, 102, 255, 1)",
                            "rgba(255, 159, 64, 1)",
                        ],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                            },
                        },
                    ],
                },
            },
        });


    }

    page13() {
        console_to_page()
        const path = require("path");
        const HtmlWebpackPlugin = require("html-webpack-plugin");

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
            },
            plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
        };



    }

    page15() {
        console_to_page()
        const path = require("path");
        const HtmlWebpackPlugin = require("html-webpack-plugin");

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
            },
            module: {
                rules: [
                    {
                        test: /\.css$/,
                        use: ["style-loader", "css-loader"]
                    }
                ]
            },
            plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
        };


    }

    page16_17() {
        console_to_page()
        const path = require("path");
        const HtmlWebpackPlugin = require("html-webpack-plugin");
        const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
            },
            module: {
                rules: [
                    {
                        test: /\.css$/,
                        use: [MiniCssExtractPlugin.loader, "css-loader"]
                    }
                ]
            },
            plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" }), new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" })],
        };

        const path = require("path");
        const HtmlWebpackPlugin = require("html-webpack-plugin");
        const MiniCssExtractPlugin = require("mini-css-extract-plugin");
        const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
        const TerserPlugin = require("terser-webpack-plugin");

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
                    }
                ]
            },
            plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" }), new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" })],
        };
        const path = require("path");
        const HtmlWebpackPlugin = require("html-webpack-plugin");
        const MiniCssExtractPlugin = require("mini-css-extract-plugin");
        const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
        const TerserPlugin = require("terser-webpack-plugin");
        const { CleanWebpackPlugin } = require("clean-webpack-plugin");

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
                    }
                ]
            },
            plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" }), new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }), new CleanWebpackPlugin()]
        };



    }

    page18_19_20() {
        console_to_page()
        const path = require("path");
        const HtmlWebpackPlugin = require("html-webpack-plugin");
        const MiniCssExtractPlugin = require("mini-css-extract-plugin");
        const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
        const TerserPlugin = require("terser-webpack-plugin");
        const { CleanWebpackPlugin } = require("clean-webpack-plugin");

        module.exports = {
            entry: "./src/index.js",
            output: {
                filename: "[name].[contentHash].bundle.js",
                path: path.resolve(__dirname, "dist"),
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
                        test: /\.html$/,
                        use: ["html-loader"] //makes images to be required by webpack, BUT it doesn't say what should happen with assets found in html files
                    },
                    {
                        test: /\.(svg|png|jpg)$/, //here is specified, what should happend with assets found thanks to html-loader
                        use: { loader: "file-loader", options: { name: "[name].[hash].[ext]", outputPath: "imgs" } }
                    }
                ]
            },
            plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" }), new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }), new CleanWebpackPlugin()],
        };
        const path = require("path");
        const HtmlWebpackPlugin = require("html-webpack-plugin");
        const MiniCssExtractPlugin = require("mini-css-extract-plugin");
        const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
        const TerserPlugin = require("terser-webpack-plugin");
        const { CleanWebpackPlugin } = require("clean-webpack-plugin");

        module.exports = {
            entry: "./src/index.js",
            output: {
                filename: "[name].[contentHash].bundle.js",
                path: path.resolve(__dirname, "dist"),
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
                        test: /\.html$/,
                        use: ["html-loader"]
                    },
                    {
                        test: /\.(svg|png|jpg)$/,
                        use: { loader: "file-loader", options: { name: "[name].[hash].[ext]", outputPath: "imgs" } }
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



    }



}