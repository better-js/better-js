# Thead

## 为什么

当项目越来越庞大时，打包速度越来越慢，甚至于需要一个下午才能打包出来代码，这个速度是比较慢的。

我们想要继续提升打包速度，其实就是要提升js的打包速度，因为其他文件都比较少。

而对js文件处理主要就是eslint、babel、Terser三个工具，所以我们要提升它们的运行速度。

我们可以开启多进程同时处理js文件，这样速度就比之前的单进程打包更快了。

## 是什么

多进程打包：开启电脑的多个进程同时干一件事，速度更快。

需要注意：请仅在特别耗时的操作中使用，因为每个进程启动就有大约为600ms左右开销。

## 怎么用

我们启动进程的数量就是我们 CPU 的核数。

如何获取 CPU 的核数，因为每个电脑都不一样。

### 获取CPU核数

修改config/webpack.dev.js和config/webpack.prod.js

```js
// nodejs核心模块，直接使用
const os = require("os");
// cpu核数
const threads = os.cpus().length;
```

### 安装依赖

```shell
npm i thread-loader -D
```

### 使用

修改webpack.prod.js

```js
// nodejs核心模块
const os = require('os')
...
const TerserPlugin = require("terser-webpack-plugin");
// cpu核数
const threads = os.cpus().length
...
{
  test: /\.js$/,
  // exclude: /node_modules/, // 排除node_modules代码不编译
  include: path.resolve(__dirname, '../src'),
  use: [
    {
      loader: 'thread-loader',//开启多进程
      options: {
        workers: threads //数量
      }
    },
    {
      loader: "babel-loader",
      options: {
        cacheDirectory: true,// 开启babel编译缓存
        cacheCompression: false // 缓存文件不要压缩
      }
    }
  ]
},
...
new ESLintWebpackPlugin({
  // 指定检查文件的根目录
  context: path.resolve(__dirname, '../src'),
  exclude: 'node_modules',// 默认值
  cache: true, // 开启缓存
  cacheLocation: path.resolve(__dirname, '../node_modules/.cache/.eslintcache'), // 缓存目录
  threads,//开启多进程
}),
...
// 配置多进程
new TerserPlugin({
  parallel: threads // 开启多进程
})
```


在配置中有css压缩等，借用optimization优化配置

```js
optimization: {
  minimize: true,
  minimizer: [
    // css压缩
    new CssMinimizerPlugin(),
    // 当生产模式会默认开启TerserPlugin，但是我们需要进行其他配置，就要重新写了
    new TerserPlugin({
      parallel: threads // 开启多进程
    })
  ]
}
```



我们目前打包的内容都很少，所以因为启动进程开销原因，使用多进程打包可能让我们打包时间变得很长。

