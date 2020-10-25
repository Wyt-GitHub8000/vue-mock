/*  处理devServe转接
 *  过来的网络请求
 *  并且模拟后台暴漏出数据接口(函数)*/

// 导入各种模块依赖
const fs = require('fs');
const path = require('path');
const Mock = require('mockjs');
const JSON5 = require('json5');

//读取json文件
function getJsonFile(filepath) {
    //读取指定的json文件
    var json = fs.readFileSync(path.join(__dirname,'./userInfo.json5'),'utf-8');
    //解析并返回
    return JSON5.parse(json)
}

//导出函数

    module.exports = function (app) {
        if(process.env.MOCK == 'true'){//加入if判断当后端接口写好是，我们不必大量更改我们的代码中的mock代码
            //监听app对象路由的get请求
            app.get('/user/userInfo',function (rep,res) {
                var json = getJsonFile('./userInfo.json5');
                // 按照所给的json模板生成随机数据，并且以json格式封装方便在网络中传输
                res.json(Mock.mock(json));
            });
        }
    }

