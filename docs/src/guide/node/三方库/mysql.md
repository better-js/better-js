# mysql

## 数据库的使用

```js
const http = require('http');
//引入mysql模块
const mysql = require('mysql');
//配置数据库
let connection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'rootroot',
    database:'数据库名'
})
//连接数据库
connection.connect()

let server = http.createServer((req,res)=>{
    let url = req.url;
    if(url == '/路径' && req.method == 'GET'){
        let sql = 'sql语句';
        connection.query(sql,(error,results)=>{
            //query(参数1,参数2)
            //参数1:sql语句
            //参数2:回调函数 ==> error错误信息，results返回结果
            if(!error){
                console.log(results);
                res.end()            
            }        
        })    
    }
})

server.listen(8090)
```

## 数据库预解析

防止sql注入

```js
const http = require('http');
//引入mysql模块
const mysql = require('mysql');
//配置数据库
let connection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'rootroot',
    database:'数据库名'
})
//连接数据库
connection.connect()

let server = http.createServer((req,res)=>{
    let url = req.url;
    if(url == '/路径' && req.method == 'GET'){
        //准备sql
        let sql = 'select * from sql where id = ?';
        //绑定值【必须是数组!!!】
        let val = [10];
        //返回预处理
        let newSql = mysql.format(sql,val);
        
        connection.query(newSql,(error,results)=>{
            if(!error){
                ////affectedRows: 1, 受影响行数
                console.log(results);
                res.end()            
            }        
        })    
    }
})

server.listen(8090)
```

