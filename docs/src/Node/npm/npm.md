# npm

[npm](https://www.npmjs.com/)（全称 Node Package Manager）是 Node.js的包管理工具，它是一个基于命令行的工具，用于帮助开发者在自己的项目中安装、升级、移除和管理依赖项。

## package.json

`package.json` 是 Node.js 项目的配置文件，它记录了该项目的相关信息和依赖。

当使用 `npm init` 命令初始化一个新的 Node.js 项目时，会自动生成一个 package.json 文件。

```shell
# 根据提示初始化一个新的 Node.js 项目
npm init

# 自动使用默认值初始化一个新的 Node.js 项目
npm init -y
```

在 `package.json` 中有一些重要的字段：

```json
{
  // 项目名称
  "name": "learn",
  // 项目的版本号
  "version": "1.0.0",
  // 项目的简短描述
  "description": "",
  // 项目的入口文件
  "main": "index.js",
  // 定义一系列可以从命令行运行的脚本命令
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  // 运行时依赖（生产环境）
  "dependencies": {},
  // 开发时依赖
  "devDependencies": {},
  // 关键字
  "keywords": [],
  // 作者
  "author": "",
  // 项目的开源许可证
  "license": "ISC"
}
```

### version 版本

```json
{
  "version": "1.0.0"
}
```

版本号通常由三个数字组成：

三段式结构：

- 第一段：主版本号（Major），一般用于重大的更新或改动。
- 第二段：次版本号（Minor），一般用于功能的更新。
- 第三段：修订号（Patch），一般用于错误的修复。

### devDependencies 开发时依赖

比如 webpack、eslint、vite等等都属于开发依赖，因为生产环境不需要这些东西。

```shell
npm install [package] --save-dev
npm inatall [package] -D
```



### dependencide 运行时依赖

比如 vue、md5等等

```shell
npm install [package]
npm install [package] --save
npm install [package] -S
```



## 常用npm命令

```shell
# 查看 npm 的配置信息
npm config list

# 安装模块化会在目录中声明一个node_modules的目录，所有安装的模块都会在这里；默认安装的是最新版本
npm install [package]
npm i [package]

# 安装指定版本的模块
npm install [package]@[version]

# 更新模块
npm update [package]

# 卸载模块
npm uninstall [package]  

# 全局安装
npm instatll -g [package]

# 全局更新
npm update -g [package]

# 全局卸载
npm uninstall -g [package]


# 查看当前npm默认源
npm get registry

# 切换国内淘宝镜像源
npm config set registry https://registry.npm.taobao.org
```

