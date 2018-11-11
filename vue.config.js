const path = require('path')

function resolve(url){
    return path.resolve(__dirname,url)
}

module.exports = {
    devServer: {
        port: 8000,
        proxy :{
            '/jz': {
                target : 'https://m.juooo.com/',
                changeOrigin :true,
                pathRewrite : {
                    '^/jz' : ''
                }
            }
        } 
    },
    chainWebpack (config){
        config.resolve
                .alias
                .set('@style',resolve('src/style'))
                .set('@libs',resolve('src/libs'))
                .set('@util',resolve('src/util'))
                .set('@components',resolve('src/components'))
    }
}