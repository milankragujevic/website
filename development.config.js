'use strict';
var path = require("path");
var autoprefixer = require('autoprefixer');

module.exports = {
    devtool: 'eval',
    devServer: {
        path: path.resolve(__dirname, "app/src"),
        noInfo: false
    },
    entry: {
        app: [path.resolve(__dirname, 'app/src/app.js')]
    },
    resolve: {
        root: [path.join(__dirname, "app/src/bower_components")]
    },
    output: {
        path: path.resolve(__dirname, "app/src/"),
        filename: 'app.min.js'
    },
    module: {
        loaders: [
            {
                test: /[\/\\]node_modules[\/\\]some-module[\/\\]index\.js$/,
                loader: "imports?define=>false"
            },
            {test: /\.jsx?$/, loader: 'jsx-loader?insertPragma=React.DOM&harmony'},
            {
                test: /\.scss$/,
                loader: "style!css!autoprefixer-loader?{browsers:['last 2 versions', 'ie >= 9', 'and_chr >= 2.3']}!sass"
            },
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}, // inline base64 URLs for <=8k images, direct URLs for the rest
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
        ]
    },
    postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
};