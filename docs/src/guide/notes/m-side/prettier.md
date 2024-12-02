# Prettier

[Prettier](https://prettier.io/) 是一款流行的代码格式化工具，旨在通过强制一致的代码风格来提高代码的可读性和可维护性。它支持多种编程语言，包括 JavaScript、TypeScript、HTML、CSS等。

> ESLint 保证 JavaScript 代码质量，Prettier 保证代码美观

-----

**步骤 1：安装 Prettier**

在项目目录下，运行以下命令安装 Prettier 作为开发依赖：

```bash
pnpm add --save-dev --save-exact prettier
```

-----

**步骤 2：创建 Prettier 配置文件**

在项目根目录创建 `.prettierrc.json` 文件，定义 Prettier 的格式化规则：

`.prettierrc.json` 配置文件

```json
{
  "useTabs": false,
  "tabWidth": 2,
  "printWidth": 80,
  "singleQuote": true,
  "trailingComma": "none",
  "semi": false
}
```

-----

**步骤 3：创建 Prettier 忽略文件**

创建 `.prettierignore` 文件，指定 Prettier 忽略的文件和文件夹：

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

------

**步骤 4：配置 npm 脚本**

在 `package.json` 文件中添加格式化脚本命令：

```json
{
  "scripts": {
    "format": "prettier --write \"./**/*.{html,css,ts,js,json,md,vue}\"" // [!code focus]
  },
}
```

----

**步骤 5：运行格式化命令**

使用以下命令格式化项目中的文件：

```bash
pnpm format
```
