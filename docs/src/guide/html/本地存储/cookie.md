# cookie

`cookie` 是一种状态保持技术。

网站中，**http请求是无状态的**。也就是第一次登录成功（发送请求），第二次请求服务器依然不知道是哪一个用户。这时候的cookie就是解决这个问题的。

第一次登录后，服务器返回cookie给浏览器，然后浏览器保存在本地，当该用户第二次请求，浏览器会自动把上次请求存储的cookie数据自动带上给服务器，服务器根据客户端cookie来判断当前是哪一个用户。

cookie存储有大小限制，不同浏览器不一样，一般是4kb，所以cookie只能存储小量数据。

cookie是在服务器生成，保存在浏览器的一小段文本信息。

```shell
# cookie
npm i js-cookie # js版
npm i @types/js-cookie	# ts版
```

```js
import Cookie from 'js-cookie'

// 设置
Cookie.set("key", value, { expires: 7 })

// 读取
Cookie.get('key')

// 删除
Cookie.remove('key')
```
