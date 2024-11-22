# 处理less资源
`less-loader` ：负责将less文件编译成css文件


::: code-group

```shell [下载依赖]
npm i less less-loader -D
```

```js {17-20} [webpack.config.js]
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
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
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

```less [index.less]
.box {
  width: 100px;
  height: 100px;
  background-color: orange;
}
```

```js [main.js]
import "./styles/less/index.less";
```

```html [index.html]
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>webpack-处理less资源</title>
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



