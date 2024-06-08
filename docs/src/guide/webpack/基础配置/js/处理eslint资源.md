# 处理ESLint资源

可组装的JavaScript和JSX检查工具

这句话的意思就是它是用来检测js和jsx语法的工具，可以配置各项功能

我们使用eslint，关键是写eslint配置文件，里面写上各种rules规则，将来运行eslint时就会以写的规则对代码进行检查。



## 1 配置文件

[ESLint](https://zh-hans.eslint.org/docs/latest/use/getting-started)的配置文件有很多种写法：

- `.eslintrc.*`，区别在于配置格式不一样
  - `.eslintrc`
  - `.eslintrc.js`
  - `.eslintrc.json`
- `eslint.config.js`
- `package.json` 中 **eslintConfig**

配置文件需位于根目录下，且只需要存在一个即可，ESLint会查找并自动读取它们。



### 规则的严重程度

你可以为一个规则指定三种可能的严重程度

- `"error"`（或 `2`） - 将问题视作错误。当使用 ESLint CLI 时，错误导致 CLI 以非零代码退出。
- `"warn"`（或 `1`） - 将问题视作警告。当使用 ESLint CLI 时，在不改变退出代码报告警告内容。如仅报告警告内容，则退出代码为 0。
- `"off"`（或 `0`） - 彻底关闭规则。

## 2 在webpack中使用

::: code-group

```shell [下载依赖]
npm i eslint eslint-webpack-plugin -D
```

```js [.eslintrc.js]
module.exports = {
  extends: ["eslint:recommended"],
  env: {
    node: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },
  rules: {
    semi: "error", // 开启分号规则校验
  },
};
```

```js {5,58-60} [webpack.config.js]
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



:::


## 3 vscode eslint插件

.eslintrc.js文件中设置只检查src目录下的文件，但是由于安装了 vscode ESLint插件，这个插件会检查打包输出的文件。

你可以在项目根目录下创建一个 `.eslintignore` 文件添加以下内容：

```
/dist/
```

这样，ESLint会忽略 `dist` 文件夹下的所有文件
