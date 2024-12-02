# 强制使用 pnpm 作为包管理工具

为了确保项目中依赖管理的一致性，我们将强制要求使用 `pnpm` 作为项目的包管理工具。以下是如何设置以确保所有用户在安装依赖时使用 `pnpm`。

----

**步骤 1：创建预安装脚本**

在项目根目录下创建一个 `scripts` 文件夹，在 `scripts` 文件夹内创建一个名为 `preinstall.js` 的文件，并添加以下内容：

```js
// 检查 process.env.npm_execpath 是否包含 pnpm，如果不包含则输出警告并退出进程
if (!/pnpm/.test(process.env.npm_execpath || "")) {
	// 输出警告信息，提示用户当前仓库必须使用 pnpm 作为包管理器
	console.warn(
		`\u001b[33m This repository must using pnpm as the package manager for scripts to work properly.\u001b[39m\n`
	)
	// 退出进程，并返回状态码 1，表示异常退出
	process.exit(1)
}
```

这段脚本检查当前环境中的包管理工具是否为 `pnpm`，如果不是，则输出警告信息并退出进程。

------

**步骤 2：配置 npm 脚本**

在 `package.json` 文件中，添加一个 `preinstall` 脚本，该脚本将在安装依赖之前执行 `preinstall.js` 脚本：

```json
{
  "scripts": {
    "preinstall": "node ./scripts/preinstall.js" // [!code focus]
  }
}
```

通过这种方式，当用户尝试使用 `npm` 或 `yarn` 安装依赖时，`preinstall` 脚本将被触发，并提示错误信息，强制用户使用 `pnpm` 来安装依赖。
