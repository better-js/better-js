# PWA

## 为什么

开发Web App项目，项目一旦处于网络离线情况，就没法访问了。

我们希望给项目提供离线体验。

## 是什么

渐进式网络应用程序(progressive web application - PWA)：是一种可以提供类似于native app(原生应用程序) 体验的Web App的技术。

其中最重要的是，在离线(offline)时应用程序能够继续运行功能。

内部是通过Service Workers技术实现的。

## 怎么用

4.3.1 安装依赖

```shell
npm i workbox-webpack-plugin -D
```

4.3.2 配置文件
修改config/webpack.prod.js

```js
const WorkboxPlugin = require('workbox-webpack-plugin')
plugins: [
	// 配置pwa
    new WorkboxPlugin.GenerateSW({
      // 这些选项帮助快速启用 ServiceWorkers
      // 不允许遗留任何“旧的” ServiceWorkers
      clientsClaim: true,
      skipWaiting: true,
    })
]
```

4.3.3 修改main.js

```js
// pwa
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
```

4.3.4 测试
运行指令

```shell
npm run build
```



此时如果直接通过VSCode访问打包后页面，在浏览器控制台会发现SW registration failed。

因为我们打开的访问路径是：http://127.0.0.1:5500/dist/index.html，此时页面会去请求service-worker.js文件，请求路径是：http://127.0.0.1:5500/service-worker.js，这样找不到会 404。

实际service-worker.js文件路径是：http://127.0.0.1:5500/dist/service-worker.js

4.3.5 解决路径问题
安装依赖

```shell
npm i serve -g
serve是用来启动开发服务器来部署代码查看效果的
```

运行指令

```shell
serve dist
此时通过serve启动的服务器我们service-worker就能注册成功了
```
