const path = require('path');

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


    watch: process.env.NODE_ENV === 'production' ? false : true
}

module.exports = config
