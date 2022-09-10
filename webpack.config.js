const path = require('path')
const HtmlWebpackPlugin = require ('html-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
},
  devServer: {
    allowedHosts: ['.compute-1.amazonaws.com', 'compute-1.amazonaws.co']
  },
  plugins: [
      new HtmlWebpackPlugin({
      template: './src/index.html'
  })
  ],

  module: {
    rules: [
            {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
        presets: ['@babel/preset-env', '@babel/preset-react']
     }
    }
   },
                  {
                                  test: /\.(png|svg|jpg|jpeg|gif|mp4)$/,
                                  type: 'asset/resource',
                },
  ]
 }
}