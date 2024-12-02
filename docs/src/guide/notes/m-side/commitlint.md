# Commitlint

[Commitlint](https://commitlint.js.org/) 是一个用于检查提交信息（commit message）的工具，确保提交信息符合特定的格式和约定。它常与 Husky 一起使用，以在提交代码之前自动验证提交信息的格式。

-----

**步骤 1：安装 Commitlint**

```bash
pnpm add --save-dev @commitlint/{cli,config-conventional}
```

-----

**步骤 2：配置 Commitlint**

创建 `commitlint.config.js` 配置文件，定义提交信息的规则：

```js
/**
 * 导出一个默认对象，该对象包含了 commitlint 的配置
 * 该配置继承自 @commitlint/config-conventional，并自定义了一些规则
 */
export default {
  // 继承自 @commitlint/config-conventional
  extends: ['@commitlint/config-conventional'],
  // 自定义规则
  rules: {
    // 允许的提交类型
    'type-enum': [
      2, // 规则的错误级别，2 表示错误
      'always', // 规则的应用时机
      [
        // 允许的提交类型列表
        'feat', // 提交新特性
        'fix', // 修复 bug
        'docs', // 文档更新
        'style', // 代码格式 (不影响代码运行的变动)，注意不是css修改
        'refactor', // 代码重构
        'perf', // 优化相关，比如性能优化
        'test', // 测试用例更新
        'chore', // 其它修改，比如构建过程或辅助工具的变动
        'revert', // 回滚到上一个版本
        'build', // 编译相关的修改，例如发布版本、对项目构建或依赖的改动
      ],
    ],
    // 提交类型的大小写
    'type-case': [0], // 0 表示关闭该规则
    // 提交类型是否允许为空
    'type-empty': [0], // 0 表示关闭该规则
    // 提交范围是否允许为空
    'scope-empty': [0], // 0 表示关闭该规则
    // 提交范围的大小写
    'scope-case': [0], // 0 表示关闭该规则
    // 提交主题是否允许以句号结尾
    'subject-full-stop': [0, 'never'], // 0 表示关闭该规则，'never' 表示不允许以句号结尾
    // 提交主题的大小写
    'subject-case': [0, 'never'], // 0 表示关闭该规则，'never' 表示不允许改变大小写
    // 提交头的最大长度
    'header-max-length': [0, 'always', 72], // 0 表示关闭该规则，'always' 表示总是检查，72 表示最大长度
  },
}
```

-----

**步骤 3：集成 Husky 和使用 Commitlint**

在 `package.json` 中配置 `scripts` 命令：

```json
{
  "scripts": {
    "commitlint": "commitlint --config commitlint.config.js -e -V"
  }
}
```

配置 Husky 钩子，以便在提交消息阶段自动运行 Commitlint：

```bash
npx husky add .husky/commit-msg
```

在生成的 `commit-msg` 文件中添加以下脚本：

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

pnpm commitlint
```

现在，当你提交代码时，Commitlint 将确保你的提交信息符合预定义的格式。例如，提交信息必须以特定的类型开头，如 `feat:`，并遵循一定的风格指南。
