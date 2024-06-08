# 处理sass或scss资源


**`sass-loader`** ：负责将sass文件编译成css文件

**`sass`** ：sass-loader依赖sass进行编译

注意：sass和scss文件都适用sass-loader


::: code-group

```shell [下载依赖]
npm i sass sass-loader -D
```

```js {21-24} [webpack.confog.js]
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
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
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

```sass [index.sass]
.box1 
  width: 100px
  height: 100px
  background-color: pink
```

```scss [index.scss]
.box2 {
  width: 100px;
  height: 100px;
  background-color: orange;
}
```

```js [main.js]
import "./styles/sass/index.sass";
import "./sass/index.scss";
```

```html [index.html]
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>webpack-处理sass资源</title>
  </head>
  <body>
    <div class="box1"></div>
    <div class="box2"></div>
  </body>
</html>
```

```shell [运行指令]
npx webpack
```

:::




