module.exports = {
    devServer:{
        before:require('./mock/index.js') //拦截请求，将请求转接mock模拟后台服务器
    }
}