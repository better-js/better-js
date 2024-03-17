# Socket

```js
//环境搭建
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server)

app.use(express.static('node_modules'));
app.set('view engine','ejs');
app.set('views','./views');
app.get('/',(req,res)=>{
    res.render('xxx页面')
    res.end()
})
server.listen(端口号)

//服务器端
//连接socket服务器
io.on('connection',function(socket){    //形参是一个对象，该对象有两个函数
    //服务器端发送给客户端的信息
    socket.emit('频道号',{要发送的信息});
    //服务器端接收客户端的信息
    socket.on('频道号',function(res){
        //广播
        socket.broadcast.emit('频道号',res)                        
    })
})

//客户端
引入文件
<script src="/socket.io/socket.io.js">

//使用
let socket = io.connect('/')
//客户端发送给服务器端的信息
socket.emit('频道号',{要发送的信息})
//客户端接收服务器端的信息
socket.on('频道号',function(res){})
```

