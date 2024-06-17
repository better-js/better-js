# package.json

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
  "name": "xiaosu",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "dependencies": {},
  "devDependencies": {},
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

## 字段含义简述

### name

项目名称，必须是唯一的字符串，通常采用小写字母和连字符的组合。



### version

```json
{
  "version": "1.0.0"
}
```

项目版本号，通常采用三段式结构，由三个数字组成：

- 第一段：主版本号（Major），一般用于重大的更新或改动。
- 第二段：次版本号（Minor），一般用于功能的更新。
- 第三段：修订号（Patch），一般用于错误的修复 fix bug。



### description

项目的简短描述。

### main

项目的主入口文件路径，通常是一个 JavaScript 文件。

### keywords

项目的关键字列表，方便他人搜索和发现该项目。

### author

项目作者的信息，包括姓名、邮箱、网址等。

### license

项目的许可证类型，可以是自定义的许可证类型或者常见的开源许可证（如 MIT、Apache 等）。

### dependencies

项目生产环境所需要的包的列表，这些包会在项目运行时自动安装。

比如 vue、md5等等

```shell
npm install [package]
npm install [package] --save
npm install [package] -S
```



### devDependencies

项目开发环境所需要的包的列表，这些包不会随项目一起发布，而是只在开发时使用。

比如 webpack、eslint、vite等等都属于开发依赖，因为生产环境不需要这些东西。

```shell
npm install [package] --save-dev
npm inatall [package] -D
```



### peerDependencies

项目的同级依赖，即项目所需要的模块被其他模块所依赖。给编写插件人员或者编写npm包的开发人员去使用的

### scripts

定义了一些脚本命令，比如启动项目、运行测试等。

- 通过 `npm run 脚本命令名` 执行脚本 

### repository

项目代码仓库的信息，包括类型、网址等。

### bugs

项目的 bug 报告地址。

### homepage

项目的官方网站地址或者文档地址。

