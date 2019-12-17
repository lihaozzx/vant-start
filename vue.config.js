'use strict'
module.exports = {
  publicPath: './',
  assetsDir: 'static',
  productionSourceMap: false,
  css: {
    sourceMap: false,
  },
  devServer: {
    port: "4396",
    open: false,
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_DEV_API,
        changeOrigin: true,
        ws: true,
        pathRewrite: {//重写路径
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('eslint')
      .use('eslint-loader')
      .loader('eslint-loader')
      .tap(options => {
        options.fix = true
        return options
      })
  }
}