# stylelint

[Stylelint](https://stylelint.io/)是一个强大的现代 CSS 样式检查工具，用于在 CSS、SCSS、Sass、Less和其它样式语言中识别和报告代码中的语法错误与不合理的写法。它帮助开发者维护一致的代码风格，提高代码质量。



## 安装

```bash
pnpm add --save-dev stylelint
pnpm add --save-dev stylelint-config-standard-scss
pnpm add --save-dev stylelint-config-html
pnpm add --save-dev stylelint-config-recommended-vue

pnpm add --save-dev stylelint-config-recess-order
pnpm add --save-dev stylelint-config-prettier
pnpm add --save-dev
pnpm add --save-dev

stylelint-config-standard
stylelint-config-standard-scss


stylelint-scss
stylelint-order
stylelint-config-standard

stylelint-config-recommended-scss
stylelint-config-standard-vue

pnpm add --save-dev postcss postcss-scss postcss-html
```



1. **stylelint**：

   - 一个强大的现代 CSS 代码质量工具，用于确保 CSS/SCSS/Less 代码风格一致性。

2. **stylelint-config-prettier**：

   - Stylelint 的配置包，集成 Prettier 规则，确保与 Prettier 代码风格一致。

3. **stylelint-config-recess-order**：

   - Stylelint 的配置包，用于强制执行属性的特定排序。

4. **stylelint-config-recommended-scss**：

   - Stylelint 的推荐 SCSS 规则集。

5. **stylelint-config-standard-vue**：

   - Stylelint 的 Vue 配置，适用于 Vue 单文件组件中的样式。

6. **stylelint-scss**：

   - Stylelint 的插件，用于识别和处理 SCSS 语法。

7. **stylelint-order**：

   - Stylelint 的插件，用于强制执行 CSS 属性的顺序。

   

## 配置

`.stylelintrc.json` 配置文件

```json
{
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-html/vue",
    "stylelint-config-standard-scss",
    "stylelint-config-recommended-vue/scss",
    "stylelint-config-recess-order",
    "stylelint-config-prettier"
  ],
  "overrides": [
    {
      "files": ["**/*.(scss|css|vue|html)"],
      "customSyntax": "postcss-scss"
    },
    {
      "files": ["**/*.(html|vue)"],
      "customSyntax": "postcss-html"
    }
  ],
  "ignoreFiles": [
    "**/*.js",
    "**/*.jsx",
    "**/*.tsx",
    "**/*.ts",
    "**/*.json",
    "**/*.md",
    "**/*.yaml"
  ],
  "rules": {
    "value-keyword-case": null,
    "no-descending-specificity": null,
    "function-url-quotes": "always",
    "no-empty-source": null,
    "selector-class-pattern": null,
    "property-no-unknown": null,
    "block-opening-brace-space-before": "always",
    "value-no-vendor-prefix": null,
    "property-no-vendor-prefix": null,
    "selector-pseudo-class-no-unknown": [
      true,
      {
        "ignorePseudoClasses": ["global", "v-deep", "deep"]
      }
    ]
  }
}
```

`.stylelintignore` 忽略文件

```
node_modules
public
dist
```



## 使用

`package.json` 新增运行脚本

```json
{
  "scripts": {
    "lint:style": "stylelint src/**/*.{css,scss,vue} --cache --fix",
  },
}
```

运行脚本

```bash
pnpm run lint:style
```

