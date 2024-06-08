# 入口-entry

**entry**：指示webpack从哪个文件开始打包

```js{3,8-11}
// 单入口：entry是一个字符串
module.exports = {
  entry: "./src/main.js"
}

// 多入口：entry是一个对象
module.exports = {
  entry: {
    app: "./src/app.js",
    demo: "./src/demo.js"
  }
}
```



