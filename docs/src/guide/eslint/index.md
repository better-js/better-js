# ESLint

ESLint是代码规范插件

```shell
vite-plugin-eslint
```



## 概要

https://eslint.org/

eslint是ECMAScript/JavaScript语法规则和代码风格检查工具，可以用来保证写出语法正确、风格统一的代码。

eslint完全可配置，它的目标是提供一个插件化的JavaScript代码检测工具，这意味着你可以关闭每个规则，只能使用基本语法或者混合并匹配捆绑的规则和自定义规则，使eslint完美的适用于当前项目。



## 好处

保证团队协作开发时，编写出来的代码风格保持一致。例如：

- 函数名和括号之间要有一个空格

- js中的字符串，统一使用单引号表示
- 一行代码结束加不加分号
- 不允许出现 >= 2个的连续空行
- import必须放到文件的最上面
- 文件结尾要留一行空行
- 对象的末尾不要多余的逗号

官网：https://zh-hans.eslint.org/

源码：https://github.com/eslint/eslint



# 第一个ESLint项目

前提条件：内置 SSL 支持的 [Node.js](https://nodejs.org/en/) 版本（`^12.22.0`、`^14.17.0` 或 `>=16.0.0`），如果你使用的是官方 Node.js 发行版，那么已经内置了 SSL 支持。

## 1.创建一个空项目，初始化为node项目

```shell
# 初始化为node项目
npm init -y
```

## 2.配置eslint

你可以使用该命令安装并配置 ESLint：

```shell

# 配置eslint项目
npm init @eslint/config

# 1.你想如何使用ESLint？
? How would you like to use ESLint? … 
  To check syntax only # 只检查语法
❯ To check syntax and find problems # 检查语法并查找问题
  To check syntax, find problems, and enforce code style # 检查语法，发现问题，强制代码风格
  
# 2.你的项目使用什么类型的模块?
? What type of modules does your project use? … 
❯ JavaScript modules (import/export)
  CommonJS (require/exports)
  None of these
  
# 3.你的项目使用哪个框架?
? Which framework does your project use? … 
❯ React
  Vue.js
  None of these

# 4.你的项目使用TypeScript吗?
? Does your project use TypeScript? › No / Yes

# 5.你的代码在哪里运行?
? Where does your code run? …  (Press <space> to select, <a> to toggle all, <i> to invert selection)
✔ Browser
✔ Node

# 6.你希望你的配置文件是什么格式?
? What format do you want your config file to be in? … 
❯ JavaScript
  YAML
  JSON

# 7.您想现在安装它们吗?
? Would you like to install them now? › No / Yes

# 8.你想使用哪个包管理器?
? Which package manager do you want to use? … 
❯ npm
  yarn
  pnpm
```

然后会生成一个 `.eslintrc.js` 文件

```js
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-essential"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "vue"
    ],
    "rules": {
    }
}
```

## 3.创建index.js文件

新建一个index.js文件，并书写一段错误的代码

```js
// 将i++错误书写为i--
for(let i=0; i<100; i--){}
```

## 4.使用eslint检查

```shell
npx eslint index.js
```

