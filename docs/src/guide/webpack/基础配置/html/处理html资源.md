# 处理html资源

::: code-group

```shell [1.下载依赖]
npm i html-webpack-plugin -D
```

```js {17-19} [2.配置webpack.config.js]
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/main.js",
    clean: true,
  },
  module: {
    rules: [],
  },
  plugins: [
    // 设置模版：以 public/index.html 文件创建新的html文件
    // 新的html文件特点：1. DOM结构跟原来一致 2.会自动引入打包资源
    new HtmlWebpackPlugin({ // [!code focus]
      template: path.resolve(__dirname, "public/index.html"), // [!code focus]
    }), // [!code focus]
  ],
  mode: "development",
};
```

```html {9-10} [3.修改index.html]
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>webpack-处理html资源</title>
  </head>
  <body>
    <script src="../dist/main.js"></script> // [!code --]
  </body>
</html>
```

```shell [4.运行指令]
# 默认打包webpack.config.js
npx webpack
```

:::



