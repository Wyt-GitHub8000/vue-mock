// 导入mock第三方模块
const Mock = require('mockjs')
let id = Mock.mock('@id')

// json中需要的数据格式
let obj = Mock.mock({
    id:'@id()',
    username:'@cname()',
    date:'@date()',
    avatar:"@image('10×10','red','#fff','avatar')",
    description:'@paragraph()',
    ip:'@ip()',
    email:'@email()'
})
console.log(obj)