# Network Cache

## 为什么

将来开发时我们对静态资源会使用缓存来优化，这样浏览器第二次请求资源就能读取缓存了，速度很快。

但是这样的话就会有一个问题, 因为前后输出的文件名是一样的，都叫main.js，一旦将来发布新版本，因为文件名没有变化导致浏览器会直接读取缓存，不会加载新资源，项目也就没法更新了。

所以我们从文件名入手，确保更新前后文件名不一样，这样就可以做缓存了。

## 是什么

它们都会生成一个唯一的 hash 值。

fullhash（webpack4 是 hash）：每次修改任何一个文件，所有文件名的hash值都将改变。所以一旦修改了任何一个文件，整个项目的文件缓存都将失效
chunkhash：根据不同的入口文件(Entry)进行依赖文件解析、构建对应的chunk，生成对应的哈希值。我们 js和css是同一个引入，会共享一个hash值
contenthash：根据文件内容生成hash值，只有文件内容变化了，hash值才会变化。所有文件hash值是独享且不同的

## 怎么用

修改config/webpack.prod.js和config/webpack.dev.js

```js
output: {
  // 文件输出路径
  // __dirname nodejs变量，代表当前文件的文件夹目录
  path: path.resolve(__dirname, '../dist'),
  // [contenthash:8]使用contenthash，取8位长度
  filename: "static/js/[name].[contenthash:8].js", // 入口文件打包输出资源命名方式
  chunkFilename: "static/js/[name].[contenthash:8].chunk.js", // 动态导入输出资源命名方式
  assetModuleFilename: "static/media/[name].[hash][ext]", // 图片、字体等资源命名方式（注意用hash）
  clean: true, // 自动将上次打包目录资源清空
},
plugins: [
	// 提取css成单独文件
    new MiniCssExtractPlugin({
      // 定义输出文件名和目录
      filename: "static/css/[name].[contenthash:8].css",
      chunkFilename: "static/css/[name].[contenthash:8].chunk.css",
    }),
]
```


执行

```shell
npx webpack
```


结果如下：


2.3.1 问题
当我们修改math.js文件再重新打包的时候，因为contenthash原因，math.js文件hash值发生了变化（这是正常的）。

但是main.js文件的hash值也发生了变化，这会导致main.js的缓存失效。

明明我们只修改math.js, 为什么main.js也会变身变化呢？

2.3.2 原因
更新前：math.xxx.js ⇒ main.js引用的math.xxx.js
更新后：math.yyy.js ⇒ main.js引用的math.yyy.js, 文件名发生了变化，间接导致main.js也发生了变化
2.3.3 解决
将hash值单独保管在一个runtime文件中。

我们最终输出三个文件：main、math、runtime。当math文件发送变化，变化的是math和runtime文件，main不变。

runtime文件只保存文件的hash值和它们与文件关系，整个文件体积就比较小，所以变化重新请求的代价也小。

修改config/webpack.prod.js文件：

```js
optimization: {
	// 提取runtime文件
    runtimeChunk: {
      name: (entrypoint) => `runtime~${entrypoint.name}`, // runtime文件命名规则
    },
}
```




运行npm run build，查看结果：

这样就解决了引用文件名变化导致缓存失效的问题了。


