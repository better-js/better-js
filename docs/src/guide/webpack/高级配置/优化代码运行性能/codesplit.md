# Code Split

## 为什么

打包代码时会将所有js文件打包到一个文件中，体积太大了。我们如果只要渲染首页，就应该只加载首页的js文件，其他文件不应该加载。

所以我们需要将打包生成的文件进行代码分割，生成多个js文件，渲染哪个页面就只加载某个js文件，这样加载的资源就少，速度就更快。

## 是什么

Code Split：代码分割，主要做了两件事：

分割文件：将打包生成的文件进行分割，生成多个js文件。
按需加载：需要哪个文件就加载哪个文件。

## 怎么用

代码分割实现方式有不同的方式，为了更加方便体现它们之间的差异，我们会分别创建新的文件来演示。

### 多入口打包

#### 文件目录

新建cs1文件夹，目录如下：

#### 安装依赖包

```shell
npm init -y
npm i webpack webpack-cli html-webpack-plugin -D
```



#### 新建文件

内容无关紧要，主要观察打包输出的结果

```js [app.js]
console.log('hello app');
```


```js [main.js]
console.log('hello main');
```

#### 配置

webpack.config.js配置

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    // 多入口
    main: './src/main.js',
    app: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    // [name]是webpack命名规则，使用chunk的name作为输出的文件名。
    // 什么是chunk？打包的资源就是chunk，输出叫bundle。
    // chunk的name是啥呢？ 比如： entry中xxx: "./src/xxx.js", name就是xxx。注意是前面的xxx，和文件名无关。
    // 为什么需要这样命名呢？如果还是之前写法main.js，那么打包生成两个js文件都会叫做main.js会发生覆盖。(实际上会直接报错的)
    filename: 'js/[name].js',
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: 'head'
    })
  ],
  mode: 'production'
}
```

#### 测试

执行

```shell
npx webpack
```


此时在 dist 目录我们能看到输出了两个 js 文件

#### 小结

配置了几个入口，至少输出几个 js 文件



### 提取重复代码

如果多入口文件中都引用了同一份代码，我们不希望这份代码被打包到两个文件中，因为会导致代码重复，体积更大。

我们需要提取多入口的重复代码，只打包生成一个js文件，其他文件引用它就好。

#### 修改文件

app.js
```js
import { sum } from "./math";

console.log("hello app");
console.log(sum(1, 2, 3, 4));
```



main.js

```js
import { sum } from "./math";

console.log("hello main");
console.log(sum(1, 2, 3, 4, 5));
```



math.js

```js
export const sum = (...args) => {
  return args.reduce((p, c) => p + c, 0);
};
```



#### 修改配置文件

webpack.config.js

```js
optimization: {
    // 代码分割配置
    splitChunks: {
      chunks: "all", // 对所有模块都进行分割
      // 以下是默认值
      // minSize: 20000, // 分割代码最小的大小
      // minRemainingSize: 0, // 类似于minSize，最后确保提取的文件大小不能为0
      // minChunks: 1, // 至少被引用的次数，满足条件才会代码分割
      // maxAsyncRequests: 30, // 按需加载时并行加载的文件的最大数量
      // maxInitialRequests: 30, // 入口js文件最大并行请求数量
      // enforceSizeThreshold: 50000, // 超过50kb一定会单独打包（此时会忽略minRemainingSize、maxAsyncRequests、maxInitialRequests）
      // cacheGroups: { // 组，哪些模块要打包到一个组
      //   defaultVendors: { // 组名
      //     test: /[\\/]node_modules[\\/]/, // 需要打包到一起的模块
      //     priority: -10, // 权重（越大越高）
      //     reuseExistingChunk: true, // 如果当前 chunk 包含已从主 bundle 中拆分出的模块，则它将被重用，而不是生成新的模块
      //   },
      //   default: { // 其他没有写的配置会使用上面的默认值
      //     minChunks: 2, // 这里的minChunks权重更大
      //     priority: -20,
      //     reuseExistingChunk: true,
      //   },
      // },
      // 修改配置
      cacheGroups: {
        // 组，哪些模块要打包到一个组
        // defaultVendors: { // 组名
        //   test: /[\\/]node_modules[\\/]/, // 需要打包到一起的模块
        //   priority: -10, // 权重（越大越高）
        //   reuseExistingChunk: true, // 如果当前 chunk 包含已从主 bundle 中拆分出的模块，则它将被重用，而不是生成新的模块
        // },
        default: {
          // 其他没有写的配置会使用上面的默认值
          minSize: 0, // 我们定义的文件体积太小了，所以要改打包的最小文件体积
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    }
  },
```





#### 测试

执行

```shell
npx webpack
```


此时我们会发现生成 3 个js文件，其中有一个就是提取的公共模块

### 按需加载，动态导入

设想有这么一种情况，页面中计算按钮，只有点击时才会去加载其调用的js完成操作，这就是按需加载，想要实现按需加载，动态导入模块，还需要额外配置

#### 修改文件

app.js

```js
console.log('hello app');
```



main.js

```js
console.log("hello main");
document.getElementById('btn').onclick = function () {
  // 动态导入，实现按需加载
  console.log('动态导入');
  // 即使只被引用一次，也会代码分割
  import('./math.js').then(({ sum }) => {
    console.log(sum(1, 2, 3, 4, 5));
  })
}
```


public/index.html

```html
<body>

  <h2>hello webpack cs1</h2>

  <button id="btn">计算</button>
</body>
```



#### 测试

运行指令

```shell
npx webpack
```


我们可以发现，一旦通过import动态导入语法导入模块，模块就被代码分割，同时也能按需加载了，只有点击计算按钮时，才会出发对应js的加载

### 单入口

开发时我们可能是单页面应用（SPA），只有一个入口（单入口）。那么我们需要这样配置：

```js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // 单入口
  entry: "./src/main.js",
  // 多入口
  // entry: {
  //   main: "./src/main.js",
  //   app: "./src/app.js",
  // },
  output: {
    path: path.resolve(__dirname, "./dist"),
    // [name]是webpack命名规则，使用chunk的name作为输出的文件名。
    // 什么是chunk？打包的资源就是chunk，输出出去叫bundle。
    // chunk的name是啥呢？ 比如： entry中xxx: "./src/xxx.js", name就是xxx。注意是前面的xxx，和文件名无关。
    // 为什么需要这样命名呢？如果还是之前写法main.js，那么打包生成两个js文件都会叫做main.js会发生覆盖。(实际上会直接报错的)
    filename: "js/[name].js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  mode: "production",
  optimization: {
    // 代码分割配置
    splitChunks: {
      chunks: "all", // 对所有模块都进行分割
      // 以下是默认值
      // minSize: 20000, // 分割代码最小的大小
      // minRemainingSize: 0, // 类似于minSize，最后确保提取的文件大小不能为0
      // minChunks: 1, // 至少被引用的次数，满足条件才会代码分割
      // maxAsyncRequests: 30, // 按需加载时并行加载的文件的最大数量
      // maxInitialRequests: 30, // 入口js文件最大并行请求数量
      // enforceSizeThreshold: 50000, // 超过50kb一定会单独打包（此时会忽略minRemainingSize、maxAsyncRequests、maxInitialRequests）
      // cacheGroups: { // 组，哪些模块要打包到一个组
      //   defaultVendors: { // 组名
      //     test: /[\\/]node_modules[\\/]/, // 需要打包到一起的模块
      //     priority: -10, // 权重（越大越高）
      //     reuseExistingChunk: true, // 如果当前 chunk 包含已从主 bundle 中拆分出的模块，则它将被重用，而不是生成新的模块
      //   },
      //   default: { // 其他没有写的配置会使用上面的默认值
      //     minChunks: 2, // 这里的minChunks权重更大
      //     priority: -20,
      //     reuseExistingChunk: true,
      //   },
      // },
  },
};
```







### 更新配置

最终我们会使用单入口+代码分割+动态导入方式来进行配置，更新之前的配置文件：

```js
optimization: {
  ...
  // 代码分割配置
  splitChunks: {
    chunks: "all", // 对所有模块都进行分割
    // 其他内容用默认配置即可
  },
},
```

### 给动态导入文件取名称

相信也注意到了，在打完包后dist/static/js下，js命名不直接，看起来也不优雅，下面就给其有意义的名称

#### 修改文件

main.js

```js
import sub from './js/sub'
import sum from './js/sum'
// 引入 Css 资源，Webpack才会对其打包
import './css/index.css'
// 引入less资源
import './less/index.less'
// 引入sass资源
import './sass/index.sass'
import './sass/index.scss'
// 引入styl资源 
import "./styl/index.styl";
// 引入icon-fonts
import './css/iconfont.css'

const result = sub(10, 5);
console.log(result);
// console.log(result.reduce());
console.log(sum(10, 5));

// 判断是否支持HMR功能
// if (module.hot) {
//   module.hot.accept('./js/sub.js')
//   module.hot.accept('./js/sum.js', function (sum) {
//     console.log('module.hot sum called');
//   })
// }

// 按需导入+取名
document.getElementById('btn').onclick = function () {
  // eslint会对动态导入语法报错，需要修改eslint配置文件
  // webpackChunkName: "math"：这是webpack动态导入模块命名的方式
  // "math"将来就会作为[name]的值显示
  import(/* webpackChunkName: "math" */ "./js/math.js").then(({ count }) => {
    console.log(count(9, 3));
  })
}
```





#### 统一命名配置

修改config/webpack.prod.js和webpack.dev.js

```js
output: {
  // 文件输出路径
  // __dirname nodejs变量，代表当前文件的文件夹目录
  path: path.resolve(__dirname, '../dist'),
  filename: "static/js/[name].js", // 入口文件打包输出资源命名方式
  chunkFilename: "static/js/[name].chunk.js", // 动态导入输出资源命名方式
  assetModuleFilename: "static/media/[name].[hash][ext]", // 图片、字体等资源命名方式（注意用hash）
  clean: true, // 自动将上次打包目录资源清空
},
...
module: {
  rules: [
    {
      oneOf: [
        ...
        {
          test: /\.(png|jpe?g|gif|webp|svg)$/,
          type: "asset",
          parser: {
            // 小于10kb的图片转base64
            // 优点：减少请求数量  缺点：体积会增大三分之一
            dataUrlCondition: {
              maxSize: 20 * 1024 // 20kb
            }
          },
          // generator: {
          //   // 将图片文件输出到 static/imgs 目录中
          //   // 将图片文件命名 [hash:8][ext][query]
          //   // [hash:8]: hash值取8位
          //   // [ext]: 使用之前的文件扩展名
          //   // [query]: 添加之前的query参数
          //   filename: "static/imgs/[hash:8][ext][query]",
          // }
        },
        {
          /**

   * 处理图标字体、媒体等资源
      "asset/resource" 相当于file-loader, 将文件转化成 Webpack 能识别的资源，其他不做处理
     type: "asset" 相当于url-loader, 将文件转化成 Webpack 能识别的资源，同时小于某个大小的资源会处理成 data URI 形式
                */
               test: /\.(ttf|woff2?|map4|map3|avi)$/,
               type: "asset/resource",
               // generator: {
               //   filename: "static/media/[hash:8][ext][query]",
               // },
             },
             ...
           ]
         }
       ]
     },
     ...
     plugins: [
       ...
       // 提取css成单独文件
       new MiniCssExtractPlugin({
         // 定义输出文件名和目录
         filename: "static/css/[name].css",
         chunkFilename: "static/css/[name].chunk.css",
       }),
       ...
     ],
```



#### 测试

执行指令

```shell
npx webpack
```

观察打包输出 js 文件名称
