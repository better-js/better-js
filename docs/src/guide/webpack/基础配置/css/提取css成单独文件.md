# 提取css成单独文件

css文件目前被打包到js文件中，当js文件加载时，会加载成一个 `style` 标签来生成样式。

这样对网站来说，会出现闪屏现象，用户体验不好。

我们应该是单独的css文件，通过 `link` 标签加载性能才好。

::: code-group

```shell [下载依赖]
npm i mini-css-extract-plugin -D
```

```js {7,44-46} [webpack.config.js]
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const getStyleLoaders = (prePrecessor) => {
  return [
    MiniCssExtractPlugin.loader,
    "css-loader",
    prePrecessor
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
npx webpack
```

:::

