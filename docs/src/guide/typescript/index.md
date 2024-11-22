# TS简介
> TypeScript is JavaScript with syntax for types.
>
> TypeScript是带有类型语法的JavaScript



TypeScript是静态类型检查器

- 在不运行代码的情况下检查其中的错误称为**静态检查**

- 根据被操作的值的种类来确定是什么错误和什么不是错误，这称为**静态类型检查**

官网：https://www.typescriptlang.org/zh/







## 环境搭建

### 安装TS

```bash
# 全局安装，安装的包可以在命令行中作为全局命令使用。
npm install typescript -g
# 查看版本
tsc --version


# 本地安装，并将包记录到 package.json 文件的 devDependencies 字段中
npm install typescript --save-dev
# 查看版本
npx tsc --version
```



### TS项目初始化

```bash
# 初始化 ts 的配置文件
tsc -init

# 
tsc

# 监听
tsc --watch
```

### 编译当前项目文件夹的ts文件到指定的目录下

```shell
tsc -p tsconfig.json
```

### 开启服务，监听编译当前项目文件夹的ts文件到指定的目录下

```shell
tsc -p tsconfig.json --watch
```



### 直接运行ts代码

（1）我们在使用 ts 的时候，需要将 ts 编写的代码转换成 js 再运行。

```bash
tsc test.ts
```

（2）通过VSCode插件来实现代码的运行，比较适合临时测试的方式。

VSCode 安装 `Code Runner` 插件，如果是 js 文件，内部会直接采用 `node + 文件名` 来执行此文件；如果是 ts 文件，需要通过 `ts-node` 直接来执行，所以还需要在全局安装 `ts-node` 。

```bash
npm install ts-node -g
```

（3）通过构建工具将代码转换为 js 再去运行。

安装依赖

```bash
npm install rollup typescript rollup-plugin-typescript2 @rollup/plugin-node-resolve -D
```

修改 package.json

```json
{
  "type": "module",
  "scripts": {
    "build": "rollup -c -w"
  }
}
```

修改 tsconfig.json

```json
{
  "module": "ESNext",
  "sourceMap": true,
}
```

根目录下新建 `rollup.config.js` 文件

```js
import typescript from "rollup-plugin-typescript2"
import { nodeResolve } from "@rollup/plugin-node-resolve"
import path from "node:path"
import { fileURLToPath } from "node:url"

// 当前文件的绝对路径
const _filename = fileURLToPath(import.meta.url)
// 当前文件所在的文件夹目录（绝对路径）
const _dirname = path.dirname(_filename)

export default {
	input: "src/index.ts", // 项目入口
	output: {
		file: path.resolve(_dirname, "dist/bundle.js"),
		format: "iife",
        sourcemap: true
	},
	plugins: [
		nodeResolve({
			extensions: [".js", ".ts"],
		}),
		typescript({
			tsconfig: path.resolve(_dirname, "tsconfig.json"),
		}),
	],
}
```

