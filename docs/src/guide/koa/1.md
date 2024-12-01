# 解析body

### 1.安装koa-body

```shell
npm i koa-body
```

### 2.改写 `app/index.js` 文件

导入koa-body并注册中间件

```js
const Koa = require("koa");
// 1.导入koa-body
const koaBody = require("koa-body");

const userRouter = require("../router/user.route");

const app = new Koa();

app.use(koaBody()); // 2.注册中间件
app.use(userRouter.routes()).use(userRouter.allowedMethods());

module.exports = app;
```

### 3.创建 `src/service/user.service.js` 文件

service主要是用来操作数据库的

```js
class UserService {
  async createUser(username, password) {
    // todo: 写入数据库
    return "写入数据库成功";
  }
}

module.exports = new UserService();
```

### 4.改写 `user.controller.js`

主要做三件事：

- 解析请求参数
- 操作数据库
- 返回结果 

```js
// 1.导入createUser
const { createUser } = require("../service/user.service");

class UserController {
  // 注册接口
  async register(ctx, next) {
    // 2.获取请求数据: ctx.request.body
    const { username, password } = ctx.request.body;

    // 3.操作数据库
    const res = await createUser(username, password);

    // 4.返回结果
    ctx.body = res;
  }
}

// 导出UserController对象
module.exports = new UserController();
```

## 
