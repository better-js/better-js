# css兼容处理

::: code-group

```shell [下载依赖]
npm i postcss-loader postcss postcss-preset-env -D
```

```js {9-16} [webpack.config.js]
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const getStyleLoaders = (prePrecessor) => {
  return [
    MiniCssExtractPlugin.loader,
    "css-loader",
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          plugins: ["postcss-preset-env"],
        },
      },
    },
    prePrecessor,
  ].filter(Boolean);
};

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
        use: getStyleLoaders(),
      },
      {
        test: /\.less$/,
        use: getStyleLoaders("less-loader"),
      },
      {
        test: /\.s[ac]ss$/,
        use: getStyleLoaders("sass-loader"),
      },
      {
        test: /\.styl$/,
        use: getStyleLoaders("stylus-loader"),
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "style/main.css",
    }),
  ],
  mode: "development",
};
```

```shell [运行指令]
npm run build
```

:::


## 控制兼容性

我们可以在 `package.json` 文件中添加 [browserslist](https://browsersl.ist) 来控制样式的兼容性做到什么程度。

实际开发中我们一般不考虑旧版本浏览器，所以我们可以这样设置

```json
{
  "name": "webpack-demo",
  "version": "1.0.0",
  "description": "",
  "main": "./src/main.js",
  "scripts": {
    "start": "npm run dev",
    "dev": "webpack serve --config ./config/webpack.dev.js",
    "build": "webpack --config ./config/webpack.prod.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "css-loader": "^6.8.1",
    "html-webpack-plugin": "^5.5.3",
    "less": "^4.2.0",
    "less-loader": "^11.1.3",
    "mini-css-extract-plugin": "^2.7.6",
    "postcss": "^8.4.31",
    "postcss-loader": "^7.3.3",
    "postcss-preset-env": "^9.3.0",
    "sass": "^1.69.5",
    "sass-loader": "^13.3.2",
    "style-loader": "^3.3.3",
    "stylus": "^0.62.0",
    "stylus-loader": "^7.1.3",
    "webpack": "^5.89.0",
    "webpack-cli": "^5.1.4",
    "webpack-dev-server": "^4.15.1"
  },
  "browserslist": [
    "last 2 version",
    "> 1%",
    "not dead"
  ]
}
```




