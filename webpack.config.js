const path = require('path');

const webpackConfig = {
  entry: path.resolve(__dirname, './client/src/index.jsx'),
  output: {
    path: path.resolve(__dirname, './client/public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'inline-source-map',
  node: {
    net: 'empty',
    dns: 'empty'
  }
};

webpackConfig.module.rules.push({
  test: /\.js[x]?$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  options: { presets: ['es2015', 'react']},
});

webpackConfig.module.rules.push({
  test: /\.(css)$/,
  loaders: ['style-loader', 'css-loader?url=false']
});

webpackConfig.module.rules.push({
  test: /\.(png|jpg|gif|jpeg)$/,
  loader: 'file-loader',
  options: {}  
});

webpackConfig.module.rules.push({
  test: /\.svg$/,
  use: [{
    loader: 'babel-loader'
  }, {
    loader: 'react-svg-loader'
  }]
});

module.exports = webpackConfig;