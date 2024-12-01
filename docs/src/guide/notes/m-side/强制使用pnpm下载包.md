# 强制使用pnpm下载包

为了统一我们的包管理工具，我们需要强制让用户使用 `pnpm` 来安装依赖包

在根目录创建 `srcipts/preinstall.js` 文件，并添加下面的内容：

```js
// 检查 process.env.npm_execpath 是否包含 pnpm，如果不包含则输出警告并退出进程
if (!/pnpm/.test(process.env.npm_execpath || '')) {
    // 输出警告信息，提示用户当前仓库必须使用 pnpm 作为包管理器
    console.warn(
      `\u001b[33mThis repository must using pnpm as the package manager ` +
        ` for scripts to work properly.\u001b[39m\n`,
    )
    // 退出进程，并返回状态码 1，表示异常退出
    process.exit(1)
  }
  
```

配置命令

```json
{
  "scripts": {
    "preinstall": "node ./scripts/preinstall.js"
  }
}
```

当我们使用 npm 或 yarn 来安装包的时候，就会报错了。原理就是在 install 的时候会触发 `preinstall` 这个文件里面的代码
