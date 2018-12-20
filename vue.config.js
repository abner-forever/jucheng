const path = require('path')

function resolve(url){
    return path.resolve(__dirname,url)
}

module.exports = {
    baseUrl : '/jucheng/',  
    devServer: {
        port: 8000,
        proxy :{
            '/jz': {
                target : 'https://m.juooo.com/',
                changeOrigin :true,
                pathRewrite : {
                    '^/jz' : ''
                }
            },
            '/mz': {
                target : 'https://m.maizuo.com/',
                changeOrigin :true,
                pathRewrite : {
                    '^/mz' : ''
                }
            }
        } 
    },
    chainWebpack (config){//配置快捷路径访问方式
        config.resolve
                .alias
                .set('@style',resolve('src/style'))
                .set('@libs',resolve('src/libs'))
                .set('@util',resolve('src/util'))
                .set('@components',resolve('src/components'))
    }
}