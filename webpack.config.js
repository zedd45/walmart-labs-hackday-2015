var webpack = require("webpack");

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
          loader: 'css!autoprefixer?browsers=last 2 versions'
        },
        {
            test: /annyang\.js$/,
            // annyang needs the window context to detect which speech recog. to use
            loader: "script?this=window"
        }
      ]
    },

    plugins: [
      new webpack.DefinePlugin({
        __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
      }),
    ],

    stylus: {
      use: [require('jeet')()]
    }
};
