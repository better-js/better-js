# Preload 脚本

预加载（preload）脚本是运行在渲染进程中的，但是它是在**网页内容加载之间**执行的 ，这意味着它具有比普通渲染器代码更高的权限，可以访问 Node.js 的API，同时又可以与网页内容进行安全的交互。

简单说：它是 Node.js 和 Web API 的桥梁，Preload脚本可以安全地将部分 Node.js 功能暴露给网页，从而减少安全风险。

```js
const { BrowserWindow } = require('electron')
// 预加载脚本可以在 BrowserWindow 构造方法中的 webPreferences 选项里被附加到主进程。
const win = new BrowserWindow({
  webPreferences: {
    preload: 'path/to/preload.js'
  }
})
```



## 使用方法

（1）在项目根目录下创建预加载脚本 `preload.js`﻿，内容如下：

```js
const { contextBridge } = require("electron")

// 暴露数据给渲染进程
contextBridge.exposeInMainWorld("myAPI", {
	name: "dancy",
	age: 28,
})
```

（2）在主线程中引入 `preload.js﻿`

```js {9-11}
const { app, BrowserWindow } = require("electron")
const path = require("node:path")

const createWindow = () => {
	const win = new BrowserWindow({
		width: 300,
		height: 200,
		autoHideMenuBar: true,
		webPreferences: {
			preload: path.resolve(__dirname, "./preload.js"),
		},
	})

	win.loadFile("./pages/index.html")
}

app.on("ready", () => {
	createWindow()

	app.on("activate", () => {
		if (BrowserWindow.getAllWindows().length === 0) createWindow()
	})
})

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") app.quit()
})
```

（3）在 `pages/index.html` 页面中编写对应按钮，并创建专门编写网页脚本的 `pages/renderer.js﻿`，随后引入。

:::code-group

```html [index.html]
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta
			http-equiv="Content-Security-Policy"
			content="default-src 'self'; script-src 'self'"
		/>
		<title>Hello World!</title>
	</head>
	<body>
		<button id="btn">获取用户信息</button>
		<script
			type="text/javascript"
			src="./renderer.js"
		></script>
	</body>
</html>
```

```js [renderer.js]
btn.addEventListener("click", () => {
	console.log(myAPI)
	document.body.innerHTML += `<h2>${myAPI.name}今年${myAPI.age}了</h2>`
})
```

:::
