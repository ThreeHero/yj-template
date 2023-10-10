const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)

const CracoLessPlugin = require('craco-less')

module.exports = {
  devServer: {
    port: 9010
  },
  webpack: {
    alias: {
      '@': resolve('src'),
      pages: resolve('src/pages')
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        cssLoaderOptions: {
          modules: { localIdentName: '[local]_[hash:base64:5]' }
        }
      }
    }
  ]
}
