# stylelint【】

[Stylelint](https://stylelint.io/)是一个强大的现代 CSS 样式检查工具，用于在 CSS、SCSS、Sass、Less和其它样式语言中识别和报告代码中的语法错误与不合理的写法。它帮助开发者维护一致的代码风格，提高代码质量。

----

**步骤 1：安装 Stylelint**

```bash
pnpm add --save-dev stylelint stylelint-order
```

----

**步骤 2：创建 Stylelint 配置文件**

在项目根目录下创建 `.stylelintrc.json` 配置文件

```json

```

-----

步骤 3：创建 Stylelint 忽略文件

在项目根目录下创建 `.stylelintignore` 文件，指定 Stylelint 忽略的文件和文件夹：

```
node_modules
public
dist
```

------

**步骤 4：添加 Stylelint 脚本**

在 `package.json` 中添加 Stylelint 脚本命令：

```json
{
  "scripts": {
    "lint:css": "stylelint src/**/*.{css,scss,vue} --cache --fix",
  },
}
```

-----

**步骤 5：运行 Stylelint**

现在，你可以运行以下命令来检查 CSS 文件：

```bash
pnpm lint:css
```

