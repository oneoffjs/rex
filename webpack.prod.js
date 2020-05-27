const path = require('path')
const common = require('./webpack.common.js')
const merge = require('webpack-merge')
const paths = require('./paths')

const { GenerateSW } = require('workbox-webpack-plugin')
const SitemapPlugin = require('sitemap-webpack-plugin').default

module.exports = merge.smart(common, {
  mode: 'production',
  plugins: [
    new GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    }),
    new SitemapPlugin('https://jrmod.net', paths)
  ],
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        styles: {
          test: /\.css$/,
          name: 'styles',
          chunks: 'all',
          enforce: true,
        },
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
})
