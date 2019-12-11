const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    mode:'production',
    entry: "./src/index.js",
    output: {
        filename:"main.[contentHash].js",
        path: path.resolve(__dirname,"dist")
    },
    optimization : {
        minimizer : [new OptimizeCssAssetsPlugin(), new TerserPlugin()]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: '[name].[contentHash].css'}),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
        template: './src/template.html',
        minify : {
            removeAttributeQuotes: true,
            collapseWhitespace: true,
            removeComments: true
        }
    })],
    module : {
        rules:[
            {
                test:/\.css$/,
                use: [MiniCssExtractPlugin.loader,'css-loader']
            }
        ]
    }
}



