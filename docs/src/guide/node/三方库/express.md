# Express框架

是Node.js官方推荐的唯一一个Web开发框架。

- 静态文件服务
- 路由控制
- 模版解析支持
- 动态视图
- 用户会话
- 错误控制器
- 插件支持

官网：http://www.expressjs.com.cn

express是一个基于内置核心http模块的，一个第三方的包，专注于web服务器的构建。



```js
//Express不是内置模块需要下载

// 1. 引入express模块
const express = require('express');

// 2. 创建应用
const app = express();

// 3. 设置静态资源路径
app.use(express.static('node_modules'));

// 4. 设置模版引擎
//ejs需要安装，ejs直接书写业务逻辑，注意注意：不能写注释，写注释直接报错
app.set('view engine','ejs');

// 5. 设置视图路径
app.set('views','./views');

// 6. 设置路由
app.get|post('/',(req,res)=>{
  console.log(req);
  res.send('hello world!')
  //加载视图:将第二个参数的变量data传递给当前的index.ejs
   res.render('index'，{变量:数组对象})
   res.end();
})

// 7. 设置监听端口
app.listen(3000,()=>{
  console.log('服务器在3000端口启动')
})
```



## 路由基础

```js
const express = require("express");

const app = express();

// 在根路由响应get请求
app.get("/", (req, res) => {
  res.send("Hello World");
});

// 在根路由响应post请求
app.post("/", (req, res) => {
  res.send("Got a Post request");
});

// 响应对/user路径的put请求
app.put("/user", (req, res) => {
  res.send("Got a Put request at /user");
});

// 响应对/user路径的delete请求
app.delete("/user", (req, res) => {
  res.send("Got a Delete request at /user");
});


app.listen(3000, () => {
  console.log("Server Running at http://localhost:3000/");
});

```



## 请求与响应

Express应用使用路由回调函数的参数：`request` 和 `response` 对象来处理请求和响应的数据。

Express不对node.js已有的特性进行二次抽象，只是在它之上扩展了web应用所需的基本功能

- 内部使用的还是http模块
- 请求对象继承自 `http.IncomingMessage`
- 响应对象继承自 `http.ServerResponse`

```js
app.get("/", (req, res) => {
  res.send("Hello World");
});
```

### 请求

req对象代表HTTP请求，并具有请求查询字符串，参数，正文，HTTP标头等的属性

```js
app.get("/", (req, res) => {
  console.log("请求路径:", req.url);
  console.log("请求方式:", req.method);
  console.log("请求头:", req.headers);
  console.log("请求参数:", req.query);
  res.send("Hello World");
});
```

### 响应

res

```

```











## Express中间件

```
body-parser：解析HTTP请求体
compression：压缩HTTP响应
cookie-parser：解析cookie数据
cors：处理跨域资源请求
morgan：HTTP请求日志记录
```





