const path = require('path')
const common = require('./webpack.common.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPreconnectPlugin = require('html-webpack-preconnect-plugin')
const merge = require('webpack-merge')
const TerserJSPlugin = require('terser-webpack-plugin')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')

module.exports = merge.smart(common, {
  mode: 'production',
  optimization: {
    moduleIds: 'hashed',
    minimizer: [
      new TerserJSPlugin({
        terserOptions: {
          safari10: true
        }
      })
    ],
    runtimeChunk: 'multiple',
    splitChunks: {
      cacheGroups: {
        styles: {
          test: /\.css$/,
          name: 'styles',
          chunks: 'all',
          enforce: true
        },
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  output: {
    path: path.resolve(__dirname, 'public')
  },
  plugins: [
    new HtmlWebpackPlugin({
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      },
      preconnect: [
        'https://vars.hotjar.com',
        'https://static.hotjar.com',
        'https://script.hotjar.com',
        'https://www.googletagmanager.com',
        'https://storage.googleapis.com',
        'https://www.google-analytics.com'
      ],
      template: path.resolve(__dirname, 'template/index.html')
    }),
    new HtmlWebpackPreconnectPlugin(),
    new WorkboxWebpackPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      swDest: 'sw.js'
    })
  ]
})
