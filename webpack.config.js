module.exports = {
    entry: "./client/app/app.js",
    output: {
        path: __dirname + '/client',
        filename: "bundle.js"
    },
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
    }
};
