# Husky

[Husky](https://typicode.github.io/husky/) 是一个非常有用的工具，它允许我们在 Git 的生命周期中设置钩子（hooks），以便在代码提交（commit）或推送（push）之前自动执行一些脚本或命令。这可以帮助我们确保代码在提交到版本控制系统之前符合一定的标准，比如代码风格和代码质量。

为了确保所有开发者都遵循代码格式化规范，我们可以利用 Husky 设置一个 `pre-commit` 钩子，这样每当开发者提交代码时，都会自动触发代码格式化。

----

**步骤 1：安装 Husky**

在项目中安装 Husky：

```bash
pnpm add --save-dev husky
```
----

**步骤 2：初始化 Husky**

```bash
# 创建一个 .husky 目录并设置默认的 pre-commit 钩子
npx husky-init
```

-----

**步骤 3：安装和配置 lint-staged**

lint-staged 是一个在 Git 暂存文件上运行 linters 的工具，与 Husky 结合使用，可以只对暂存区的文件运行 lint。

通常我们会结合 `lint-staged` 使用 `husky`，以便只对暂存区的文件运行 lint。

安装 `lint-staged`

```bash
pnpm add -D lint-staged
```

在 `package.json` 中配置 lint-staged：

```json
{
  "lint-staged": {
    "*.{ts,vue}": "eslint --fix"
  }
}
```

更新 `pre-commit` 钩子以使用 lint-staged：

```bash
pnpm husky add .husky/pre-commit "npx lint-staged"
```

-----

**步骤 4：使用 Husky 自动格式化代码**

为了确保所有开发者遵循代码格式化规范，我们可以设置 Husky 的 `pre-commit` 钩子来自动格式化代码：

```bash
pnpm husky add .husky/pre-commit "pnpm run format"
```

:::details 添加新钩子

如果你想添加其它类型的钩子，比如 `pre-push`，可以使用 Husky 命令：

```bash
pnpm husky add ./husky/pre-push "pnpm run lint"
```

:::

