# url模块

解析路径中的参数

```js
//引入url模块
const url = require('url');

//url模块的parse()方法可以解析请求路径中的参数【写在服务器的箭头函数中】
let server = http.createServer((req,res)=>{
    let param = url.parse('请求路径',布尔类型);
    let 变量 = param.query.属性名;                          
})

/*
  参数
    请求路径：req.url
    布尔类型:true    解析后的结果中query就是对象格式
            false   解析后的结果中query就是字符串格式
*/
```

