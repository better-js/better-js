# npm run

## npm run 的原理

```json
{
  "scripts": {
    "vite": "vite"
  }
}
```

当你在命令行中使用 `npm run vite` 命令时，这是在执行npm的一个脚本命令。

这个命令会查找你的项目根目录下的 `package json` 文件中的 `scripts` 字段，然后执行你指定的脚本。原理步骤如下：

- 首先，npm会在当前工作目录中查找 `package.json` 文件，如果找不到，它会向上级目录继续查找，直到找到为止。
  - 在 `package.json` 文件中，npm 会找到 `scripts` 字段，然后在这个字段的值（一个对象）中查找你指定的脚本 `vite`。
    - 如果找到了你指定的脚本 `vite`，npm会执行这个脚本。这个脚本是一个shell命令。
      - 在执行脚本的过程中，npm会先从当前项目的 `node_modules/.bin` 目录下去查找可执行命令 `vite`
      - 如果没找到就去全局的 `node_modules` 去找可执行命令 `vite`
        - 全局是通过 `npm i -g <package_name>` 安装的

      - 如果还没找到就去环境变量查找
      - 再找不到就进行报错


## npm的生命周期

在npm生命周期脚本中， `pre` 和 `post` 命名是固定前缀，它们用于指定在特定脚本之前（pre）或之后（post）执行的脚本。这些前缀不是自定义的，而是npm预定义的，不能改变，用于主动触发与生命周期事件关联的脚本。

这种模式适用于所有自定义的脚本命令。所以如果你有一个名为 `su` 的脚本，你可以定义 `presu` 和 `postsu` 来在 `su` 执行前后运行脚本。

```json
{
  "scripts": {
    "predev": "node pre.js",
    "dev": "node index.js",
    "postdev": "node post.js"
  }
}
```

执行 `npm run dev` 命令的时候 `predev` 会自动执行，他的生命周期是在dev之前执行，然后执行dev命令，再然后执行postdev。
