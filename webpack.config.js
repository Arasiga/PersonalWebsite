var webpack = require('webpack');
module.exports = {
  entry: [
    './src/app.js'
  ],
  sripts: {
    "build": "./node_modules/webpack/bin/webpack.js -p",
    "start": "./node_modules/webpack-dev-server/bin/webpack-dev-server.js --hot --progress --colors --inline"
  },
  output: {
    path: __dirname,
    // publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
