'use strict'
module.exports = {
  publicPath: './',
  productionSourceMap: false,
  css: {
    sourceMap: false,
  },
  devServer: {
    port: "4396",//代理端口
    open: false,
    proxy: {
      [process.env.VUE_APP_BASE_API]: {//代理api
        target: process.env.VUE_APP_DEV_API,//服务器api地址
        changeOrigin: true,//是否跨域
        ws: true, // proxy websockets
        pathRewrite: {//重写路径 
          ['^'+process.env.VUE_APP_BASE_API]: process.env.VUE_APP_PREFIX
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