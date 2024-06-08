# Cookie

```js
//cookie需要手动安装    'cookie-parser'
//1.引入cookie
const cookie = require('cookie-parser');
//2.应用cookie
app.use(cookie())    //cookie('dssfsdadasda')  可以设置签名密钥（3的第三个参数要设置是否签名）
                     //使用签名的cookie通过  req.signedCookies 获取
//3.设置cookie
res.cookie('cookie名','要存储的数据',{maxAge:xxxxx})
    //第一个参数：cookie名称
    //第二个参数：cookie值
    //第三个参数：cookie的配置选项
        //domain 域名
        //path 路径
        //expires 过期时间
        //maxAge 有效时间
        //httpOnly 只能由web服务器访问
        //secure 是否与https一起使用
        //signed 是否签名
//4.获取cookie
req.cookies.cookie名
//5.删除cookie
res.clearCookie('cookie名')
```

