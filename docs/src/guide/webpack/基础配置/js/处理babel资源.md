# babel

Babel是一个广泛使用的JavaScript编译器，主要用于将ES6语法编写的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其它环境中

## 1 配置文件

配置文件有多种写法

- `babel.config.*` ：新建文件，位于根目录
  - `babel.config.js`
  - `babel.config.json`
- `.babelrc.*` ：新建文件，位于根目录
  - `.babelrc`
  - `.babelrc.js`
  - `.babelrc.json`
- `package.json` ：不需要创建文件，在原有文件基础上写

babel会查看和自动读取它们，所以以上配置文件只需要存在一个即可

## 2 具体配置

以 `babel.config.js` 配置文件为例

```js
module.exports = {
  // 预设
  presets: []
}
```

预设：简单理解就是一组babel插件，扩展babel功能

- `@babel/preset-env` ：一个智能预设，允许您使用最新的JavaScript
- `@babel/preset-react` ：一个用来编译React JSX语法的预设
- `@babel/preset-typescript` ：一个用来编译 TypeScript语法的预设



## 3 在webpack中使用

::: code-group

```shell [下载依赖]
npm i babel-loader @babel/core @babel/preset-env -D
```

```js [babel.config.js]
module.exports = {
  presets: ["@babel/preset-env"],
};
```

```js {48-52} [webpack.config.js]
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");

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
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
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
    new CssMinimizerPlugin(),
    new ESLintWebpackPlugin({
      context: path.resolve(__dirname, "src"),
    }),
  ],
  mode: "development",
};
```

