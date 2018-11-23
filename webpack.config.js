const path = require('path');

const env = process.env.NODE_ENV || 'development';

module.exports = {
  mode: env,
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'main.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            plugins: ['@babel/plugin-transform-react-jsx', { pragma: 'preact.h' }],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, ''),
    historyApiFallback: true,
  },
};
