const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: false,
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  configureWebpack: {
    // plugins: [
    //   new BundleAnalyzerPlugin()
    // ],
    devtool: 'eval-source-map',
    target: 'web'
  }
})
