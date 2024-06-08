# Include/Exclude

## 为什么

开发时我们需要使用第三方的库或插件，所有文件都下载到node_modules中了，而这些文件是不需要编译可以直接使用的。

所以我们在对js文件处理时，要排除node_modules下面的文件。

## 是什么

include：包含，只处理xxx文件

exclude：排除，除了xxx文件以外其他文件都处理
需要注意的是include和exclude只能二选一

## 怎么用

修改 `webpack.dev.js` 和 `webpack.prod.js` ，如下：

```js
{
  test: /\.js$/,
  // exclude: /node_modules/, // 排除node_modules代码不编译
  include: path.resolve(__dirname, '../src'),
  loader: "babel-loader",
},
...
new ESLintWebpackPlugin({
  // 指定检查文件的根目录
  context: path.resolve(__dirname, '../src'),
  exclude: 'node_modules'// 默认值
}),
```


