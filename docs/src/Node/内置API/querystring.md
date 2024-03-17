# querystring

**使用解析查询字符串模块 ==> 就是把查询字符串转换成对象格式**

```js
//引入querystring模块
const qs = require('querystring')

let param = qs.parse(要解析的字符串)

//username=admin&pass=123123  =>  {usernme:admin,pass:123123}  
```



