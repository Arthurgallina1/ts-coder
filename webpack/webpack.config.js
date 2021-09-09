const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development', // production
  entry: './src/index.ts', // a partir dele encontra todos outros
  devServer: { 
    static: {
      directory: path.join(__dirname, 'dist')
    },
    port: 9000,
    hot: true
  },
  output: {
    //arquivo de saida e local
    filename: 'app.js',
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'public' } // já cola na dist
      ]
    })
  ],
  resolve: {
    //qual extensao (ts, js ... )
    extensions: ['.ts', '.js']
  },
  module: {
    //irá aplicar essas regras nos filtros de arquivos
    rules: [
      {
        test: /\.ts$/, //qlqr arquivo .ts
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
}
