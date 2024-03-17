# Cache

## 为什么

每次打包时js文件都要经过Eslint检查和 Babel编译，速度比较慢。

我们可以缓存之前的Eslint检查和Babel编译结果，这样第二次打包时速度就会更快了。

## 是什么

对Eslint检查和Babel编译结果进行缓存。

## 怎么用

修改 `webpack.dev.js` 和 `webpack.prod.js` ，如下：

```js
{
  test: /\.js$/,
  // exclude: /node_modules/, // 排除node_modules代码不编译
  include: path.resolve(__dirname, '../src'),
  loader: "babel-loader",
  options: {
    cacheDirectory: true,// 开启babel编译缓存
    cacheCompression: false // 缓存文件不要压缩
  }
},
...
new ESLintWebpackPlugin({
  // 指定检查文件的根目录
  context: path.resolve(__dirname, '../src'),
  exclude: 'node_modules',// 默认值
  cache: true, // 开启缓存
  cacheLocation: path.resolve(__dirname, '../node_modules/.cache/.eslintcache') // 缓存目录
}),
```

