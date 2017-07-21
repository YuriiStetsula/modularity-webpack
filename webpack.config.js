const webpack = require("webpack")
const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const config = {
    entry: "./src/js/main.js",
    output: {
        path : path.resolve(__dirname,"build"),
        filename: "bundle.js",
        publicPath: "build/"
    },
    module: {
        rules: [
            {
                exclude: /(node_modules)/,
                use:"babel-loader",
                test: /\.js$/
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader","postcss-loader","sass-loader"]
                })
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: "file-loader",
                options:{
                    name: '[path][name].[hash].[ext]'
                } 
            },
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new webpack.optimize.UglifyJsPlugin({
		minimize: true,
        compress: true,
	    output: {
        comments: false,
        beautify: false
    }
	})
    ]
}


module.exports = config