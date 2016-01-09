module.exports =  {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  resolve: {
    modulesDirectories: ['node_modules']
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.md$/, loader: 'html!markdown-highlight' }
    ],
  },
  devtool: '#source-map',
  babel: {
    presets: ['es2015', 'stage-3'],
    plugins: ['transform-runtime'],
  },
  devServer: {
    historyApiFallback: true,
  },
}
