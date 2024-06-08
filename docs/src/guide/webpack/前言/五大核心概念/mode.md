# 模式-mode

**mode**：主要有 `development` 和 `production` 两种模式，默认模式为 `production` 。

```js{13-14}
const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [],
  },
  plugins: [],
  // 模式: 开发模式development、生产模式production
  mode: "development",
};
```



## 开发模式介绍

开发模式顾名思义就是我们开发代码时使用的模式。

这个模式下主要做两件事：

1. 编译代码，使浏览器识别运行

   开发时，我们有样式资源、字体图标、图片资源等，webpack默认都不能处理这些资源，所以我们加载配置来编译这些资源。

2. 代码质量检测，树立代码规范

   提前检查代码的一些隐患，让代码运行时更加健壮

   提前检查代码规范和格式，统一团队编码风格，让代码更加优雅美观





## 生产模式介绍

生产模式是开发完代码，我们需要得到代码将来部署上线

这个模式下我们主要对代码进行优化，让其性能更好。

优化主要从两个角度出发：

- 优化代码运行性能
- 优化代码打包速度

### 生产模式准备

我们分别准备两个配置文件来放不同的配置，两者之间互不冲突

### 1 文件目录

```shell
.
├─ config # webpack配置文件目录
│  ├─ webpack.dev.js # 开发环境配置文件
│  └─ webpack.prod.js # 生产环境配置文件
├─ node_modules # 下载包存放地址
├─ public # 项目html文件
│  └─ index.html
├─ src # 项目源码目录
│  └─ ...
├─ .eslintrc.js # eslint配置文件
├─ bable.config.js # bable配置文件
└─ package.json # 包依赖管理配置文件
```



### 2 修改webpack.dev.js

```js
module.exports = {
  entry: './src/main.js',
  output: {
    path: undefined, // 开发模式无输出
    filename: 'js/main.js'
  },
  module: {
    rules: []
  },
  plugins: [],
  devServer: {
    	host: 'localhost', // 启动服务器域名
    	port: 3000, // 启动服务器端口号
    	open: true // 是否自动打开浏览器
  }
  mode: 'development'
}
```



### 3 修改webpack.prod.js

```js
const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/main.js',
    clean: true
  },
  module: {
    rules: []
  },
  plugins: [],
  mode: 'production'
}
```

### 4 配置运行指令

```shell
# 开发环境
npx webpack serve --config ./config/webpack.dev.js

# 生产环境
npx webpack --config ./config/webpack.prod.js
```

`package.json`

```json
{
  "scripts": {
    "start": "npm run dev"
    "dev": "webpack serve --config ./config/webpack.dev.js",
    "build": "webpack --config ./config/webpack.prod.js"
  }
}
```

