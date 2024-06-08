# 处理css资源

样式资源有css、less、sass、scss、styl等

webpack本身不能识别样式资源，所以我们需要借助Loader来帮助webpack解析样式资源

注意：要想webpack打包资源，必须引入该资源。

**`css-loader`** ：负责将css文件编译成webpack能识别的模块

**`style-loader`** ：会动态创建一个 **style** 标签，里面放置webpack中css模块内容

此时样式就会以 **style** 标签的形式在页面上生效


::: code-group

```shell [下载依赖]
npm i css-loader style-loader -D
```

```js{13-16} [配置webpack.config.js]
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
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
  ],
  mode: "development",
};
```

```css [index.css]
.box {
  width: 100px;
  height: 100px;
  background-color: pink;
}
```

``` js [main.js]
import "./styles/css/index.css";
```

```html [index.html]
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>webpack-处理css资源</title>
  </head>
  <body>
    <div class="box"></div>
  </body>
</html>
```

```shell [运行指令]
npx webpack
```

:::



