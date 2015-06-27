// var path = require('path');
// var webpack = require("webpack");

module.exports = {
    entry: "./client/app/app.js",
    output: {
        path: __dirname + '/client',
        filename: "bundle.js"
    },
    devtool: 'sourcemap',
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel'
        },
        {
          test: /\.html?$/,
          loader: 'raw'
        },
        {
          test: /\.styl$/,
          loader: 'style!css!stylus'
        },
        {
          test: /\.css$/,
          loader: 'css'
        }
      ]
    },

    // resolve: {
    //     root: [path.join(__dirname, "bower_components")]
    // },
    // plugins: [
    //     new webpack.ResolverPlugin(
    //         new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
    //     )
    // ],

    stylus: {
      use: [require('jeet')()]
    }
};
