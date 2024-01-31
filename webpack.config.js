const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
   mode: isDevelopment ? 'development' : 'production',
   entry: './src/index.tsx',
   devServer: {
      historyApiFallback: true,
      hot: true,
      port: 3000
   },
   target: 'web',
   output: {
      clean: true,
      filename: 'bundle.[hash].js',
      path: path.resolve(__dirname, 'build')
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './src/public/index.html'
      }),
      isDevelopment && new webpack.HotModuleReplacementPlugin(),
      isDevelopment && new ReactRefreshWebpackPlugin()
   ],
   resolve: {
      modules: [__dirname, 'src', 'node_modules'],
      extensions: ['*', '.js', '.jsx', '.tsx', '.ts']
   },
   module: {
      rules: [
         {
            test: /\.ts$|tsx/,
            exclude: /node_modules/,
            loader: require.resolve('babel-loader'),
            options: {
               plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean)
            }
         },
         {
            test: /\.s[ac]ss$/i,
            use: ['style-loader', 'css-loader', 'sass-loader']
         },
         {
            test: /\.png|svg|jpg|gif$/,
            use: ['file-loader']
         }
      ]
   }
}
