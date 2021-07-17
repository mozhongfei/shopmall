/* eslint-disable prettier/prettier */
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },

  productionSourceMap: false,
  lintOnSave:false,//这里禁止使用eslint-loader
  // publicPath: './',
}
  
  