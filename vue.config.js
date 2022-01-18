//配置取别名
module.exports ={
configureWebpack: {
    resolve: {
        alias: {
            // '@' : 'src' 默认配置的
            'assets': '@/assets',
            'common': '@/common',
            'components': '@/components',
            'network': '@/network',
            'views': '@/views',
        }
    }
}
}
