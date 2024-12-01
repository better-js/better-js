# Prettier

[Prettier](https://prettier.io/) 是一款流行的代码格式化工具，旨在通过强制一致的代码风格来提高代码的可读性和可维护性。它支持多种编程语言，包括 JavaScript、TypeScript、HTML、CSS等。

> ESLint 保证 JavaScript 代码质量，Prettier 保证代码美观

## 安装

```bash
pnpm add --save-dev --save-exact prettier
```



## 配置

`.prettierrc.json` 配置文件

> 注意：json文件中不能有注释，这里的注释只是为了了解每个配置的含义

```json
{
	// 定义配置文件的 JSON 模式，用于验证配置文件的正确性
	"$schema": "https://json.schemastore.org/prettierrc",
	// 禁用行尾分号
	"semi": false,
	// 使用单引号代替双引号
	"singleQuote": true,
	// 设置每行代码的最大字符数为 100
	"printWidth": 100
}
```

`.prettierignore` 忽略文件

```
# 忽略构建输出目录
dist
build

# 忽略 node_modules 目录
node_modules

# 忽略环境配置文件
.env
.env.local
.env.*.local

# 忽略特定文件类型
*.log
*.md
*.html

# 忽略特定文件夹
public

# 忽略特定配置文件
package-lock.json
yarn.lock
```



## 使用

`package.json` 新增运行脚本

```json
{
  "scripts": {
    "format": "prettier --write \"./**/*.{html,css,ts,js,json,md}\""
  },
}
```

运行脚本

```bash
pnpm run format
```



## 集成 ESLint 和 Prettier

（1）安装

`eslint-plugin-prettier` 和 `eslint-config-prettier` 是两个用于集成 ESLint 和 Prettier 的工具。

- `eslint-plugin-prettier`：这个插件将 Prettier 作为 ESLint 的规则来运行。
- `eslint-config-prettier`：这个配置文件关闭了所有与 Prettier 冲突的 ESLint 规则。

```bash
pnpm add --save-dev eslint-plugin-prettier eslint-config-prettier
```

（2）配置 `eslint.config.js`

```json
// 导入 eslint-plugin-prettier 插件
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default [
  eslintPluginPrettierRecommended
]
```

