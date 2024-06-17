# http

使用 http 模块 搭建服务器

```js
//1.引入http模块
const http = require('http');

//2.使用http模块搭建一个http服务器
let server = http.createServer((req,res)=>{
    //req:请求报文，所有和请求有关的都在req中
    //res:响应报文，所有和响应有关的都在res中
    
    //获取请求方式
    let method = req.method;
    //获取请求路径（端口号后面的）
    let reqUrl = req.url；
    console.log('this is server');
    //告诉客户端，服务端的响应结束了
  	//设置响应体
    res.write("<h1>this is server title </h1>")
    res.end());
})

//3.设置监听端口
server.listen(8090);

//简写
let http = require('http');
http.createServer((req,res)=>{
    res.end('Hello World')        
}).listen(3000)
```

