# Node.js介绍

## 概述

1. Node.js 不是一门语言也不是框架，它只是基于 Google V8 引擎的 JavaScript 运行时环境。
2. Node.js 是构建在 V8 引擎之上的，V8引擎是由 C/C++ 编写的，因此我们的 JavaScript 代码需要由 C/C++ 转化后再执行。
3. Node.js 使用异步 I/O 和事件驱动的设计理念，可以高效地处理大量并发请求，提供了非阻塞式 I/O 接口和事件循环机制，使得开发人员可以编写高性能、可扩展的应用程序，异步I/O最终都是由 `libuv` 事件循环库去实现的。
4. Node.js使用 [npm](https://www.npmjs.com) 作为包管理工具类似于 python 的 pip，或者是 Java 的Maven，目前 npm 拥有上百万个模块。 
5. **Node.js适合干一些IO密集型应用**，不适合CPU密集型应用，Node.js IO依靠 libuv 有很强的处理能力，而CPU因为 Node.js 单线程原因，容易造成CPU占用率高，如果非要做CPU密集型应用，可以使用C++插件编写 或者Node.js 提供的`cluster`。(CPU密集型指的是图像的处理 或者音频处理需要大量数据结构 + 算法)



## 应用场景

- 前端
  - Vue、React、Angular
- 后端
  - serverLess
  - web应用：express、koa、Nest.js
  - RPC服务：gRPC
- 桌面端
  - electron
- 移动端
  - hybrid
  - React Native

- 前端
  - Vue Angular React nuxtjs nextjs
- 后端
  - serverLess
  - web应用 epxress Nestjs koa
  - RPC 服务 gRPC
  - 爬虫 Puppeteer cheerio
  - BFF层 网关层
  - 及时性应用socket.io
- 桌前端
  - electron
  - tauri
  - NWjs
- 移动端
  - weex
  - ionic
  - hybrid
  - React Native
- 基建端
  - webpack、vite、rollup、gulp
  - less、scss、PostCSS
  - babel、swc
  - inquire、command、shelljs
- 嵌入式
  - Ruff js
- 单元测试
  - jest、vitest、e2e
- CICD
  - Jenkins、docker、Husky、miniprogram-ci
- 反向代理
  - http-proxy、Any-proxy



| 站点            | 地址                      |
| --------------- | ------------------------- |
| Node.js官网     | https://nodejs.org        |
| Node.js Github  | https://github.com/nodejs |
| Node.js中文文档 | https://www.nodeapp.cn/   |
| npm地址         | https://www.npmjs.com/    |
| npm文档         | https://docs.npmjs.com/   |

