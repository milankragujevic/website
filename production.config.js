'use strict';
var path = require("path");
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
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
        root: [path.join(__dirname, "app/src/bower_components"), path.join(__dirname, "node_modules")]
    },
    output: {
        path: path.resolve(__dirname, "./dist/"),
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
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                exclude: /node_modules/,
                loaders: ['url?limit=10240&name=img/[name].[ext]', 'img?minimize']
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff"
            },
            {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"}
        ]
    },
    imagemin: {
        gifsicle: {interlaced: false},
        jpegtran: {
            progressive: true,
            arithmetic: false
        },
        optipng: {optimizationLevel: 5},
        pngquant: {
            floyd: 0.5,
            speed: 2
        },
        svgo: {
            plugins: [
                {removeTitle: true},
                {convertPathData: false}
            ]
        }
    },
    postcss: [autoprefixer({browsers: ['last 2 versions']})],
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            mangle: true
        })
    ]
};