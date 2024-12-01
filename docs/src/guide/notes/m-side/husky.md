# Husky

[Husky](https://typicode.github.io/husky/) 是一个用于在 Git 生命周期中添加钩子的工具，帮助开发者在提交代码之前执行特定的脚本或命令。它常用于在提交或推送代码之前运行代码检查、测试或格式化等任务，以确保代码质量。

Lint-Staged 是一个用于在 Git 暂存文件上运行 linters 的工具。它通过在提交之前只检查和修复那些被暂存的文件，提高了代码检查和格式化的效果。通常与 Husky 一起使用，以便在提交代码之前自动运行代码质量检查。

在上面我们已经集成好了我们的代码校验工具，但是需要每次手动的去执行命令去格式化我们的代码。如果有人没有格式化就提交了远程仓库中，那这个规范就没什么用，所以我们需要强制开发人员按照代码规范来提交。

要做到这个事情就需要利用 husky 在代码提交之前触发 git hook，然后执行 `pnpm run format` 来自定格式化我们的代码。





Husky 是一个非常有用的工具，它允许我们在 Git 的生命周期中设置钩子（hooks），以便在代码提交（commit）或推送（push）之前自动执行一些脚本或命令。这可以帮助我们确保代码在提交到版本控制系统之前符合一定的标准，比如代码风格和代码质量。

为了确保所有开发者都遵循代码格式化规范，我们可以利用 Husky 设置一个 pre-commit 钩子，这样每当开发者提交代码时，都会自动触发代码格式化。以下是如何设置 Husky 来自动格式化代码的步骤：



## 安装

（1）安装 `husky`

```bash
pnpm add --save-dev husky
```

（2）初始化 `husky`

```bash
# 创建一个 .husky 目录以及设置一个默认的 pre-commit 钩子
npx husky-init
```



## 配置

通常我们会结合 `lint-staged` 使用 `husky`，以便只对暂存区的文件运行 lint。

首先安装 `lint-staged`

```bash
pnpm add -D lint-staged
```

然后在 `package.json` 中配置：

```json
{
  "lint-staged": {
    "*.js": "eslint --fix",
    "*.vue": "eslint --fix"
  }
}
```

更新 `pre-commit` 钩子以使用 `lint-staged`：

```bash
pnpm husky add .husky/pre-commit "npx lint-staged"
```



## 使用

### 添加新钩子

如果你想添加其它类型的钩子，比如 `pre-push`，可以使用 Husky 命令：

```bash
pnpm husky add ./husky/pre-push "pnpm run lint"
```

