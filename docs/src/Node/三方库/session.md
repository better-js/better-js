# Session

特点：

1.session数据保存在服务器端

2.session是以键和值的形式进行存储

3.session依赖于cookie，每个session信息对应的客户端的标识保存在cookie中

```js
//express-session
//1.引入session模块
const session = require('express-session');

//2.注册session
app.use(session({
    secret:'sudongxu',//secret属性的值可以为任意字符串，负责进行加密
    resave:false,    //固定写法，强制保存
    saveUninitialized:true    //固定写法，保存未初始化
}))

//3.设置session
req.session.自定义属性 = 值

//4.获取session
req.session.自定义属性

//5.清空session
req.session.destroy()
```

