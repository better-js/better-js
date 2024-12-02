# ESLint

[ESLint](https://eslint.org/) 是一个用于识别和报告 JavaScript 代码中的模式匹配问题的工具，它帮助开发者在开发过程中保持代码的一致性和质量。

-----

**步骤 1：安装 ESLint**

在项目目录下，运行以下命令初始化 ESLint 配置：

```bash
pnpm create @eslint/config@latest
```

-----

**步骤 2：集成 Prettier**

为了确保代码风格一致性，同时使用 ESLint 和 Prettier 可能会导致一些冲突，因为这两个工具在代码格式化方面有一些重叠的功能。以下是如何集成 Prettier 并解决潜在冲突的步骤：

**（1）安装 Prettier 集成插件**

安装 `eslint-config-prettier` 和 `eslint-plugin-prettier` 这两个插件，它们可以帮助你解决 ESLint 和 Prettier 之间的冲突。

- `eslint-config-prettier` 禁用所有与格式化相关的ESLint规则，只保留Prettier的格式化。
- `eslint-plugin-prettier` 将Prettier作为ESLint规则来运行，从而使Prettier的错误显示为ESLint错误。

```bash
pnpm add --save-dev eslint-plugin-prettier eslint-config-prettier
```

**（2）配置 ESLint 以集成 Prettier**

在你的 `eslint.config.js` 配置文件中，引入 `eslint-plugin-prettier` 插件。

```js
// 导入 eslint-plugin-prettier 插件
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
export default [
  // 其他扩展...
  eslintPluginPrettierRecommended // // 确保放在最后以覆盖其他配置
]
```

----

**步骤 3：创建 ESLint 忽略文件**

在项目根目录下创建 `.eslintignore` 文件，指定 ESLint 忽略的文件和文件夹：

```
node_modules
dist
```

----

**步骤 4：配置 npm 脚本**

在 `package.json` 文件中添加 ESLint 脚本命令：

```json
{
  "scripts": {
    "lint:eslint": "eslint src/**/*.{ts,vue} --cache --fix" // [!code focus]
  }
}
```

----

**步骤 5：运行 ESLint 检查命令**

配置完成后，运行以下命令检查代码，ESLint 将会应用 Prettier 的规则，并报告任何与 Prettier 冲突的样式问题。

```bash
pnpm lint:eslint
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
