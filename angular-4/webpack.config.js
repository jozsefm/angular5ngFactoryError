let webpack = require('webpack')
let path = require('path')
let CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: {
        app : './src/client/client.ts',
       },
    output: {
        filename: '[name].v4.js',
        path: __dirname + '/dist',
        libraryTarget: 'umd',
        // set the following name if exporting to window
        library: 'app'
    },

    // Disable sourcemaps for webpack's output.
    devtool: 'hidden-source-map',

    resolve: {
        extensions: ['*', '.webpack.js', '.web.js', '.ts', '.js'],
        modules: ["node_modules", __dirname + "/src"]
    },

    target: "web",

    module: {
        loaders: [
            { test: /\.ts?$/, exclude: /node_modules/, loader: 'awesome-typescript-loader' },
            { test: /\.js$/,  exclude: [/node_modules/,  /aot/], enforce: 'pre', loader: 'source-map-loader' }
        ]
    },

    plugins: [
        new CopyWebpackPlugin([
            {from: './dist', to: '../../angular-js/app'}
        ],{})
    ]
};