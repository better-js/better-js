# 输出-output

**output**：指示webpack打包完的文件输出到哪里去，以及如何命名等

```js{5-9}
const path = require("path");

module.exports = {
  entry: "./src/main.js",
  // 输出
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  }
}
```

