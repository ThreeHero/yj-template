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
      pages: resolve('src/pages'),
      components: resolve('src/components'),
      config: resolve('src/config'),
      hooks: resolve('src/hooks'),
      layout: resolve('src/layout'),
      router: resolve('src/router'),
      style: resolve('src/assets/style'),
      utils: resolve('src/utils')
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
