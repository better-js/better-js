# 第一个electron程序

（1）初始化项目

执行 `npm init -y` 进行项目初始化

```bash [终端]
npm init
```

（2）安装 electron 作为开发依赖

```bash
npm install electron -D
```

（3）填写好 `package.json` 中的必要信息及启动命令

> 为了后续能顺利打包，`author` 和 `description` 必填。

```json {4,6,9,11} [package.json]
{
  "name": "learn_electron",
  "version": "1.0.0",
  "main": "main.js",
  "scripts": {
    "start": "electron ."
  },
  "keywords": [],
  "author": "dancy",
  "license": "ISC",
  "description": "this is a electron demo",
  "devDependencies": {
    "electron": "^33.2.0"
  }
}
```

（4）新增页面文件

在项目根目录下创建 `index.html` 文件

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Security-Policy" content="default-src: 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:;"/>
    <title>Hello Electron!</title>
  </head>
  <body>
    <h1>这是一个electron应用!</h1>
  </body>
</html>
```

（5）配置入口文件

在项目根目录下创建 `main.js` 文件，`main.js` 运行在应用的主进程上，无法访问 Web 相关API，主要负责：控制生命周期、显示界面、控制渲染进程等其他操作。

```js
const { app, BrowserWindow } = require("electron")

// 创建一个新的浏览器窗口
const createWindow = () => {
	// 创建了一个新的 BrowserWindow 实例，并设置了窗口的宽度和高度。
	const win = new BrowserWindow({
		width: 800,
		height: 600,
	})

	// 加载指定的文件到新创建的窗口中，这个文件通常是应用的主页面。
	win.loadFile("index.html")
}

// 当主进程准备就绪时创建窗口
app.on("ready", () => {
	createWindow()

	// 当应用的窗口被激活时，会触发 activate 事件。
	app.on("activate", () => {
		// 如果没有其他窗口打开，则重新创建一个窗口。
		if (BrowserWindow.getAllWindows().length === 0) createWindow()
	})
})

// 当所有窗口都被关闭时
app.on("window-all-closed", () => {
	// 如果当前运行的平台不是 macOS，则调用 app.quit() 方法来退出应用。
	// 在 macOS 平台上，即使所有窗口都被关闭，应用也不会退出，而是保持在后台运行
	// 这是因为 macOS 用户通常期望应用在关闭所有窗口后仍能保持运行状态，以便随时重新打开窗口。
	// 而在其他平台上，如 Windows 和 Linux，通常会在所有窗口关闭后退出应用。
	if (process.platform !== "darwin") app.quit()
})

```

（6）启动应用查看效果

```bash
npm run start
```
