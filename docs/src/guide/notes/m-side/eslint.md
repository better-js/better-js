# ESLint

[ESLint](https://eslint.org/) 是一个用于识别和报告 JavaScript 代码中的模式匹配问题的工具，它帮助开发者在开发过程中保持代码的一致性和质量。



## 安装

```bash
pnpm create @eslint/config@latest
```



## 配置

`eslint.config.js` 配置文件

```js
// 导入全局变量定义
import globals from "globals"
// 导入 @eslint/js 插件
import pluginJs from "@eslint/js"
// 导入 typescript-eslint 插件
import tseslint from "typescript-eslint"
// 导入 eslint-plugin-vue 插件
import pluginVue from "eslint-plugin-vue"

/** @type {import('eslint').Linter.Config[]} */
export default [
	// 匹配所有以.js、.mjs、.cjs、.ts、.vue 结尾的文件
	{ files: ["**/*.{js,mjs,cjs,ts,vue}"] },
	// 配置全局变量，这里使用了 globals 库中的 browser 环境变量
	{ languageOptions: { globals: globals.browser } },
	// 使用 @eslint/js 插件的 recommended 配置
	pluginJs.configs.recommended,
	// 使用 typescript-eslint 插件的 recommended 配置
	...tseslint.configs.recommended,
	// 使用 eslint-plugin-vue 插件的 flat/essential 配置
	...pluginVue.configs["flat/essential"],
	{
		// 仅匹配.vue 文件
		files: ["**/*.vue"],
		// 配置解析器选项，使用 typescript-eslint 解析器
		languageOptions: { parserOptions: { parser: tseslint.parser } },
	},
	{
		/**
		 * "off" or 0 - 关闭规则
		 * "warn" or 1 - 打开规则作为警告 (不影响代码执行)
		 * "error" or 2 - 打开规则作为一个错误 (代码不能执行，界面报错)
		 */
		rules: {
			"no-var": "error", // 禁止使用var声明变量
			"no-unused-vars": "error", // 禁止定义未使用的变量
			"no-undef": "error", // 禁止使用未定义的变量
		},
	},
]
```

`.eslintignore` 忽略文件

```
dist
node_modules
```



## 使用

`package.json` 新增运行脚本

```json
{
  "scripts": {
    "lint:eslint": "eslint src/**/*.{ts,vue} --cache --fix"
  }
}
```

运行脚本

```bash
pnpm run lint:eslint
```



## rules

:::details 检测潜在错误的规则

```
array-callback-return
constructor-super
for-direction
getter-return
no-async-promise-executor
no-await-in-loop
no-class-assign
no-compare-neg-zero
no-cond-assign
no-const-assign
no-constant-binary-expression
no-constant-condition
no-constructor-return
no-control-regex
no-debugger
no-dupe-args
no-dupe-class-members
no-dupe-else-if
no-dupe-keys
no-duplicate-case
no-duplicate-imports
no-empty-character-class
no-empty-pattern
no-ex-assign
no-fallthrough
no-func-assign
no-import-assign
no-inner-declarations
no-invalid-regexp
no-irregular-whitespace
no-loss-of-precision
no-misleading-character-class
no-new-native-nonconstructor
no-obj-calls
no-promise-executor-return
no-prototype-builtins
no-self-assign
no-self-compare
no-setter-return
no-sparse-arrays
no-template-curly-in-string
no-this-before-super
no-undef
no-unexpected-multiline
no-unmodified-loop-condition
no-unreachable
no-unreachable-loop
no-unsafe-finally
no-unsafe-negation
no-unsafe-optional-chaining
no-unused-private-class-members
no-unused-vars
no-use-before-define
no-useless-assignment
no-useless-backreference
require-atomic-updates
use-isnan
valid-typeof
```

:::

:::details 建议

```
accessor-pairs
arrow-body-style
block-scoped-var
camelcase
capitalized-comments
class-methods-use-this
complexity
consistent-return
consistent-this
curly
default-case
default-case-last
default-param-last
dot-notation
eqeqeq
func-name-matching
func-names
func-style
grouped-accessor-pairs
guard-for-in
id-denylist
id-length
id-match
init-declarations
logical-assignment-operators
max-classes-per-file
max-depth
max-lines
max-lines-per-function
max-nested-callbacks
max-params
max-statements
new-cap
no-alert
no-array-constructor
no-bitwise
no-caller
no-case-declarations
no-console
no-continue
no-delete-var
no-div-regex
no-else-return
no-empty
no-empty-function
no-empty-static-block
no-eq-null
no-eval
no-extend-native
no-extra-bind
no-extra-boolean-cast
no-extra-label
no-global-assign
no-implicit-coercion
no-implicit-globals
no-implied-eval
no-inline-comments
no-invalid-this
no-iterator
no-label-var
no-labels
no-lone-blocks
no-lonely-if
no-loop-func
no-magic-numbers
no-multi-assign
no-multi-str
no-negated-condition
no-nested-ternary
no-new
no-new-func
no-new-wrappers
no-nonoctal-decimal-escape
no-object-constructor
no-octal
no-octal-escape
no-param-reassign
no-plusplus
no-proto
no-redeclare
no-regex-spaces
no-restricted-exports
no-restricted-globals
no-restricted-imports
no-restricted-properties
no-restricted-syntax
no-return-assign
no-script-url
no-sequences
no-shadow
no-shadow-restricted-names
no-ternary
no-throw-literal
no-undef-init
no-undefined
no-underscore-dangle
no-unneeded-ternary
no-unused-expressions
no-unused-labels
no-useless-call
no-useless-catch
no-useless-computed-key
no-useless-concat
no-useless-constructor
no-useless-escape
no-useless-rename
no-useless-return
no-var
no-void
no-warning-comments
no-with
object-shorthand
one-var
operator-assignment
prefer-arrow-callback
prefer-const
prefer-destructuring
prefer-exponentiation-operator
prefer-named-capture-group
prefer-numeric-literals
prefer-object-has-own
prefer-object-spread
prefer-promise-reject-errors
prefer-regex-literals
prefer-rest-params
prefer-spread
prefer-template
radix
require-await
require-unicode-regexp
require-yield
sort-imports
sort-keys
sort-vars
strict
symbol-description
vars-on-top
yoda
```

:::
