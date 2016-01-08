module.exports =  {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.vue$/, loader: 'vue' }
    ],
  },
  devtool: '#source-map',
  babel: {
    presets: ['es2015', 'stage-3'],
    plugins: ['transform-runtime'],
  },
}
