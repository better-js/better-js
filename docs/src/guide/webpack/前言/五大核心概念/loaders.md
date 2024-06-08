# 加载器-loaders

**loader**：webpack本身只能处理js、json两种文件类型，若需要处理其它资源则需要借助loader才能解析

```js{9-12}
const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
  // 加载器
  module: {
    rules: []
  }
}
```



`test` ：只检测 xxx 文件

`use` ：使用loader处理，可以指定多个loader

`loader` ：只能使用一个loader

注意：loader执行顺序从右至左、从下至上。

可以理解为，loader的执行顺序是从数组的最后一个开始，依次向前执行。这种从右至左、从下至上的执行顺序也被称为管道（pipeline）

需要注意的是，每一个loader都会接收上一个loader处理后的结果，然后进行进一步的处理，最后的结果将被webpack接收，用于生成最终的打包文件。
