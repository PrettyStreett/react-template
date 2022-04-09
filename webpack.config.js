const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const config = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',

    resolve: {
        extensions: ['.js'],
    },

    context: path.resolve(__dirname, "src"),
    
    entry: "./index.js",

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: '../public/index.html'
        })
    ],

    watch: process.env.NODE_ENV === 'production' ? false : true
}

module.exports = config
