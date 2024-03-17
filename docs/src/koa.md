# koa开发指南

## 一、项目初始化

```shell
# 1.npm初始化，生成packgae.json文件
npm init -y

# 2.git初始化，生成.git隐藏文件夹，git的本地仓库
git init

# 3.创建 .gitignore文件
node_modules

# 4.创建 README.md

# 5.提交到存储区
git add .

# 6.提交到本地仓库
git commit -m 'feat:xxx'
```

## 二、搭建项目

### 1.安装Koa框架

```js
npm install koa
```

### 2.编写最基础的app

创建 `src/main.js`

```js
// 导入Koa
const Koa = require("koa");
// 实例化对象
const app = new Koa();

app.use(async (ctx, next) => {
  ctx.body = "Hello world!";
});

// 监听
app.listen(3000, () => {
  console.log("server is running on http://localhost:3000");
});
```

### 3.测试

在终端，使用 `node src/main.js`

## 三、项目的基本优化

### 1.自动重启服务

安装nodemon工具

```shell
npm i nodemon -D
```

编写 `package.json` 脚本

```js
{
  "name": "koa-api",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon ./src/main.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "koa": "^2.14.2"
  }
}
```

执行 `npm run start` 



### 2.读取配置文件

安装dotenv工具

```shell
npm i dotenv
```

根目录下创建 `.env` 文件

```
APP_PORT = 3000
```

src下创建 `config/config.default.js`

```js
const dotenv = require('dotenv');

dotenv.config()
console.log(process.env.APP_PORT)

// process代表进程、env代表环境变量
module.exports = process.env
```

改写 `main.js` 文件

```js
const Koa = require("koa");

// 导入自定义模块
const { APP_PORT } = require("./config/config.default");

// 实例化对象
const app = new Koa();

app.use(async (ctx, next) => {
  ctx.body = "Hello world!";
});

// 监听
app.listen(APP_PORT, () => {
  console.log(`server is running on http://localhost:${APP_PORT}`);
});
```

## 四、添加路由

路由：根据不同的URL，调用对应的函数

### 1.安装koa-router

```shell
npm i koa-router
```

步骤：

- 导入包：`const Router = require("koa-router");`
- 实例化路由对象：`const router = new Router();`
- 编写路由：`router.get("/", (ctx, next) =>{ ctx.body = "Hello api!" });`
- 注册中间件：`app.use(router.routes())`



### 2.编写路由

创建 `src/router` 文件夹，编写 `user.route.js` 文件

```js
const Router = require("koa-router");

// prefix 配置前缀
const router = new Router({
  prefix: "/users",
});

// GET /users/
router.get("/", (ctx, next) => {
  ctx.body = "hello users";
});

// 导出router
module.exports = router;
```

### 3.改写 `main.js` 文件

```js
const Koa = require("koa");
// 导入自定义模块
const { APP_PORT } = require("./config/config.default");
const userRouter = require("./router/user.route");

// 实例化对象
const app = new Koa();

// 注册路由中间件
// use必须接收一个函数作为中间件
app.use(userRouter.routes()).use(userRouter.allowedMethods());

// 监听
app.listen(APP_PORT, () => {
  console.log(`server is running on http://localhost:${APP_PORT}`);
});
```



## 五、目录结构优化

### 1.将http服务和app业务拆分，降低耦合性

创建 `src/app/index.js` 

```js
// 导入Koa
const Koa = require("koa");

// 导入 userRouter 模块
const userRouter = require("../router/user.route");

// 实例化对象
const app = new Koa();

// 注册中间件
app.use(userRouter.routes()).use(userRouter.allowedMethods());

// 导出app
module.exports = app;
```

改写 `main.js` 文件

```js
// 导入自定义模块
const { APP_PORT } = require("./config/config.default");
const app = require("./app/index");

// 监听
app.listen(APP_PORT, () => {
  console.log(`server is running on http://localhost:${APP_PORT}`);
});
```

### 2.将路由和控制器拆分

::: tip

路由：解析URL，分发控制器对应的方法

控制器：处理不同的业务

:::

创建 `src/controller/user.controller.js`

```js
class UserController {
    // 注册接口
    async register(ctx,next) {
        ctx.body = '用户注册成功'
    }
}

// 导出 UserController对象
module.exports = new UserController()
```

改写 `user.route.js` 文件

```js
const Router = require("koa-router");

const { register } = require("../controller/user.controller");

// prefix 配置前缀
const router = new Router({
  prefix: "/users",
});

// 注册接口
router.post("/rigister", register);

// 导出router
module.exports = router;
```



## 六、解析body

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

## 七、操作数据库

[sequelize](https://www.sequelize.cn/) ORM数据库工具

ORM：对象关系映射

- 数据表映射一个类
- 数据表中的数据行（记录）对应一个对象
- 数据表字段对应对象的属性
- 数据表的操作对应对象的方法



### 1.安装sequelize和mysql2

```shell
npm i sequelize
npm i mysql2
```

### 2.改写 `.env`

```
APP_PORT = 3000
MYSQL_HOST = localhost
MYSQL_PORT = 3306
MYSQL_USER = root
MYSQL_PWD = rootroot
MYSQL_DB = shopping
```

### 3.创建 `src/db/sequelize.js`

```js
const { Sequelize } = require("sequelize");
const {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USER,
  MYSQL_PWD,
  MYSQL_DB,
} = require("../config/config.default");

const sequelize = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
  host: MYSQL_HOST,
  dialect: "mysql",
});

// 测试数据库连接是否正常
sequelize
  .authenticate()
  .then(() => {
    console.log("数据库连接成功");
  })
  .catch((err) => {
    console.log("数据库连接失败", err);
  });

module.exports = sequelize;
```



## 八、创建User模型

### 1.拆分Model层

sequelize主要通过Model对应数据表

创建 `src/model/user.model.js`

```js
const { DataTypes } = require("sequelize");
const sequelize = require("../db/sequelize");

const User = sequelize.define(
  "User", // 自动推断出表名为 users
  {
    // 在这里定义模型属性（对应表里的字段，id可以忽略，会被sequelize自动创建并管理）
    username: {
      type: DataTypes.STRING, // 字段类型
      allowNull: false, // 是否为空
      unique: true, // 是否唯一
      comment: "用户名,唯一", // 备注
    },
    password: {
      type: DataTypes.CHAR(64),
      allowNull: false,
      comment: "密码",
    },
    is_admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "是否为管理员，0:不是管理员（默认值），1:是管理员",
    },
  }
);

// 如果表已经存在，则将其首先删除
// User.sync({ force: true });

module.exports = User;
```

## 九、添加用户入库

### 1.改写 `user.service.js`

[操作数据库](https://www.sequelize.cn/core-concepts/model-querying-basics)

```js
const User = require("../model/user.model");
class UserService {
  async createUser(username, password) {
    // 操作数据库：插入数据
    const res = await User.create({ username, password });
    // 返回结果
    return res.dataValues;
  }
}

module.exports = new UserService();
```

### 2.改写 `user.controller.js`

```js
const { createUser } = require("../service/user.service");

class UserController {
  // 注册接口
  async register(ctx, next) {
    // 1.获取请求数据: ctx.request.body
    const { username, password } = ctx.request.body;

    // 2.操作数据库
    const res = await createUser(username, password);

    // 3.返回结果
    ctx.body = {
      code: 0,
      message: "用户注册成功",
      result: {
        id: res.id,
        username: res.username,
      },
    };
  }

  // 登录接口
  async login(ctx, next) {
    ctx.body = "用户登录成功";
  }
}

// 导出 UserController对象
module.exports = new UserController();
```

## 十、错误处理

在控制器中，对不同的错误进行处理，返回不同的错误提示，提高代码质量。

### 1.改写 `user.service.js` 

```js
const User = require("../model/user.model");
class UserService {
  async createUser(username, password) {
    // 操作数据库：插入数据
    const res = await User.create({ username, password });
    // 返回结果
    return res.dataValues;
  }
  async getUserInfo({ id, username, password, is_admin }) {
    const whereOpt = {};
    // 当id存在时，将其拷贝到 whereOpt中
    id && Object.assign(whereOpt, { id });
    username && Object.assign(whereOpt, { username });
    password && Object.assign(whereOpt, { password });
    is_admin && Object.assign(whereOpt, { is_admin });

    // 操作数据库：查询数据
    const res = await User.findOne({
      attributes: ["id", "username", "password", "is_admin"],
      where: whereOpt,
    });

    return res ? res.dataValues : null;
  }
}

module.exports = new UserService();
```

### 2.改写 `user.controller.js` 

```js
const { createUser, getUserInfo } = require("../service/user.service");

class UserController {
  // 注册接口
  async register(ctx, next) {
    // 1.获取请求数据: ctx.request.body
    const { username, password } = ctx.request.body;

    // 验证合法性：格式正确
    if (!username || !password) {
      console.error("用户名或密码为空", ctx.request.body); // 错误日志
      ctx.status = 400; // bad request
      ctx.body = {
        code: "10001", // 错误提示码：1:后台、00:user模块、01:错误编号
        message: "用户名或密码为空",
        result: "",
      };
      return;
    }

    // 验证合理性：用户若已存在则不能再注册
    if (getUserInfo({ username })) {
      ctx.status = 409; // Conflict 存在冲突
      ctx.body = {
        code: "10002",
        message: "用户已经存在",
        result: "",
      };
      return;
    }

    // 2.操作数据库
    const res = await createUser(username, password);

    // 3.返回结果
    ctx.body = {
      code: 0,
      message: "用户注册成功",
      result: {
        id: res.id,
        username: res.username,
      },
    };
  }

  // 登录接口
  async login(ctx, next) {
    ctx.body = "用户登录成功";
  }
}

// 导出 UserController对象
module.exports = new UserController();
```



## 十一、拆分中间件

### 1.创建 `src/middleware/user.middleware.js`

将 `user.controller.js` 中的校验逻辑抽离出来

```js
const { getUserInfo } = require("../service/user.service");

// 校验器
// 校验合法性：格式正确
const userValidator = async (ctx, next) => {
  const { username, password } = ctx.request.body;
  if (!username || !password) {
    console.error("用户名或密码为空", ctx.request.body); // 错误日志
    ctx.status = 400; // bad request
    ctx.body = {
      code: "10001", // 错误提示码：1:后台、00:user模块、01:错误编号
      message: "用户名或密码为空",
      result: "",
    };
    return;
  }
  await next();
};

// 验证合理性：用户若已存在则不能再注册
const userVarify = async (ctx, next) => {
  const { username } = ctx.request.body;
  if (getUserInfo({ username })) {
    ctx.status = 409; // Conflict 存在冲突
    ctx.body = {
      code: "10002",
      message: "用户已经存在",
      result: "",
    };
    return;
  }
   await next();
};

module.exports = {
  userValidator,
  userVarify,
};
```

### 2.改写 `user.route.js`

```js
const Router = require("koa-router");
const { register, login } = require("../controller/user.controller");
const { userValidator, userVarify } = require("../middleware/user.middleware");

// prefix 配置前缀
const router = new Router({
  prefix: "/users",
});

// 注册接口
router.post("/register", userValidator, userVarify, register);

// 登录接口
router.post("/login", login);

// 导出router
module.exports = router;
```



### 3.统一错误处理

1.创建 `src/constant/err.type.js` 文件，定义错误类型

```js
module.exports = {
  userFormateError: {
    code: "10001", // 错误提示码：1:后台、00:user模块、01:错误编号
    message: "用户名或密码为空",
    result: "",
  },
  userAlreadyExited: {
    code: "10002",
    message: "用户已经存在",
    result: "",
  },
  userRegisterError: {
    code: "10003",
    message: "用户注册错误",
    result: "",
  },
};
```

2.改写 `user.middleware.js` 和 `user.controller.js`

`ctx.app.emit('error', {}, ctx)`

```js
// user.middleware.js
const { getUserInfo } = require("../service/user.service");
const {
  userFormateError,
  userAlreadyExited,
  userRegisterError,
} = require("../constant/err.type");
// 校验器
// 校验合法性：格式正确
const userValidator = async (ctx, next) => {
  const { username, password } = ctx.request.body;
  if (!username || !password) {
    console.error("用户名或密码为空", ctx.request.body); // 错误日志
    ctx.app.emit("error", userFormateError, ctx);
    return;
  }
  await next();
};

// 验证合理性：用户若已存在则不能再注册
const userVarify = async (ctx, next) => {
  const { username } = ctx.request.body;
  
  try {
    const res = await getUserInfo({ username });
    if (res) {
      console.error("用户名已经存在", username);
      ctx.app.emit("error", userAlreadyExited, ctx);
      return;
    }
  } catch (error) {
    console.error("获取用户信息错误", error);
    ctx.app.emit("error", userRegisterError, ctx);
    return;
  }

  await next();
};

module.exports = {
  userValidator,
  userVarify,
};
```

```js
// user.controller.js
const { createUser } = require("../service/user.service");
const { userRegisterError } = require("../constant/err.type");
class UserController {
  // 注册接口
  async register(ctx, next) {
    // 1.获取请求数据: ctx.request.body
    const { username, password } = ctx.request.body;

    // 2.操作数据库
    try {
      const res = await createUser(username, password);
      // 3.返回结果
      ctx.body = {
        code: 0,
        message: "用户注册成功",
        result: {
          id: res.id,
          username: res.username,
        },
      };
    } catch (error) {
      console.log(error);
      ctx.app.emit("error", userRegisterError, ctx);
    }
  }

  // 登录接口
  async login(ctx, next) {
    ctx.body = "用户登录成功";
  }
}

// 导出 UserController对象
module.exports = new UserController();
```



3.创建 `src/app/errHandler.js`

```js
module.exports = (err, ctx) => {
  let status = 500;
  switch (err.code) {
    case "10001":
      status = 400;
      break;
    case "10002":
      status = 409;
      break;
    case "10003":
      status = 409;
      break;
    default:
      status = 500;
  }
  ctx.status = status;
  ctx.body = err;
};
```

4.改写 `index.js`

`app.on("error", errHandler);`

```js
// 导入Koa
const Koa = require("koa");
const { koaBody } = require("koa-body");
const errHandler = require("./errHandler");
// 导入 userRouter 模块
const userRouter = require("../router/user.route");

// 实例化对象
const app = new Koa();

// 注册中间件
app.use(koaBody());
app.use(userRouter.routes());

// 统一的错误处理
app.on("error", errHandler);
// 导出app
module.exports = app;
```



## 十二、密码加密

在将密码保存到数据之前，要对密码进行加密处理

### 1.安装bcryptjs

node服务端做加密一般使用bcryptjs

```shell
npm i bcryptjs
```

加盐加密

### 2.拆分中间件

改写 `user.middleware.js`

```js
const bcrypt = require("bcryptjs");
// user.middleware.js
const { getUserInfo } = require("../service/user.service");

const {
  userFormateError,
  userAlreadyExited,
  userRegisterError,
} = require("../constant/err.type");
// 校验器
// 校验合法性：格式正确
const userValidator = async (ctx, next) => {
  const { username, password } = ctx.request.body;
  if (!username || !password) {
    console.error("用户名或密码为空", ctx.request.body); // 错误日志
    ctx.app.emit("error", userFormateError, ctx);
    return;
  }
  await next();
};

// 验证合理性：用户若已存在则不能再注册
const userVarify = async (ctx, next) => {
  const { username } = ctx.request.body;

  try {
    const res = await getUserInfo({ username });
    if (res) {
      console.error("用户名已经存在", username);
      ctx.app.emit("error", userAlreadyExited, ctx);
      return;
    }
  } catch (error) {
    console.error("获取用户信息错误", error);
    ctx.app.emit("error", userRegisterError, ctx);
    return;
  }

  await next();
};

const cryptPassword = async (ctx, next) => {
  const { password } = ctx.request.body;
  // 加盐
  const salt = bcrypt.genSaltSync(10);
  // 加密
  // hash保存的是密文
  const hash = bcrypt.hashSync(password, salt);

  ctx.request.body.password = hash;
  await next();
};

module.exports = {
  userValidator,
  userVarify,
  cryptPassword,
};
```

### 3.使用中间件

改写 `user.route.js`

```js
const Router = require("koa-router");
const { register, login } = require("../controller/user.controller");
const {
  userValidator,
  userVarify,
  cryptPassword,
} = require("../middleware/user.middleware");

// prefix 配置前缀
const router = new Router({
  prefix: "/users",
});

// 注册接口
router.post("/register", userValidator, userVarify, cryptPassword, register);

// 登录接口
router.post("/login", login);

// 导出router
module.exports = router;
```



## 十三、登录认证

### 1.添加登录逻辑

改写 `user.route.js`

```js
// 登录接口
router.post("/login", userValidator, loginVarify, login);
```

### 2.设置中间件

改写 `user.middleware.js`

```js
const loginVarify = async (ctx, next) => {
  const { username, password } = ctx.request.body;
  // 1.判断这个用户是否存在，不存在报错
  try {
    const res = await getUserInfo({ username });
    if (!res) {
      console.error("用户名不存在", username);
      ctx.app.emit("error", userDoesNotExist, ctx);
      return;
    }
    // 2.密码是否匹配，不匹配报错
    if (!bcrypt.compareSync(password, res.password)) {
      ctx.app.emit("error", invalidPassword, ctx);
      return;
    }
  } catch (error) {
    console.error(error);
    ctx.app.emit("error", userLoginError, ctx);
    return;
  }
  await next();
};
```

改写 `err.type.js`

```js
module.exports = {
  userFormateError: {
    code: "10001", // 错误提示码：1:后台、00:user模块、01:错误编号
    message: "用户名或密码为空",
    result: "",
  },
  userAlreadyExited: {
    code: "10002",
    message: "用户已经存在",
    result: "",
  },
  userRegisterError: {
    code: "10003",
    message: "用户注册错误",
    result: "",
  },
  userDoesNotExist: {
    code: "10004",
    message: "用户不存在",
    result: "",
  },
  userLoginError: {
    code: "10005",
    message: "用户登录失败",
    result: "",
  },
  invalidPassword: {
    code: "10006",
    message: "密码不匹配",
    result: "",
  },
};
```

## 十四、用户的认证

登录成功后，给用户颁发一个令牌token，用户在以后的每一次请求中携带这个令牌

jwt：jsonwebtoken

- header：头部
- payload：载荷
- signature：签名

### 1.安装jsonwebtoken

```shell
npm i jsonwebtoken
```

### 2.颁发token

改写 `user.controller.js`

```js
// 导入jsonwebtoken
const jwt = require('jsonwebtoken');
const { createUser, getUserInfo } = require("../service/user.service");
const {JWT_SECRET} =require("../config/config.default")

// 登录接口
async login(ctx, next) {
  const { username, password } = ctx.request.body;
  // 1.获取用户信息（token的payload中，记录id、username、is_admin）
  try {
    // 剔除password，将id、username、is_admin存到res中
    const { password, ...res } = await getUserInfo({ username });
    ctx.body = {
      code: 0,
      message: "用户登录成功",
      result: {
        token: jwt.sign(res, JWT_SECRET, { expiresIn: "1d" }), // 载荷、私钥、有效期
      },
    };
  } catch (error) {
    console.error("用户登录失败", error);
  }
}
```

配置私钥

改写 `.env`

```
APP_PORT = 3000
MYSQL_HOST = localhost
MYSQL_PORT = 3306
MYSQL_USER = root
MYSQL_PWD = rootroot
MYSQL_DB = shopping
JWT_SECRET = shopping
```











## 项目梳理

```js
├─ src
│  ├─ app // 服务部分
│  │  └─ index.js
│  ├─ router // 路由转发
│  │  └─ user.route.js
│  ├─ middleware // 中间价
│  │  └─ user.middleware.js
│  ├─ controller // controller层
│  │  └─ user.controller.js
│  ├─ service // 操作数据库
│  │  └─ user.service.js
│  ├─ model // model层
│  │  └─ user.model.js
│  ├─ config
│  │  └─ config.default.js
│  ├─ constant // 常量
│  │  └─ err.type.js
│  ├─ db
│  │  └─ sequelize.js
│  └─ main.js
└─ 
```













## 资料库

[npm官网](https://www.npmjs.com/)

[github官网](https://github.com/)



单一职责原则