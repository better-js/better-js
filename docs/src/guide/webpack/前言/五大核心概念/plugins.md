# 插件-plugins

**plugins**：扩展webpack的功能，任何loader不能完成的事，都可以通过plugins完成

```js
const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
  module: {
    rules: []
  },
  // 插件
  plugins: []
}
```

