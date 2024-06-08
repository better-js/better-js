# HotModuleReplacement

## 为什么

在开发时，我们修改其中一个模块代码，Webpack默认会将所有模块重新打包编译，速度很慢。

我们需要做到修改某个模块代码，就只有这个模块代码重新打包编译，其他模块不变，这样速度就会有很大的提升。

## 是什么

HotModuleReplacement（HMR/热模块替换）：在程序运行中，替换、添加或删除模块，而无需重新加载整个页面（所有模块全部重新打包编译会导致页面重新刷新）



## 怎么用

### 基本配置

在 `webpack.dev.js` 文件中配置：

```js
//开发服务器
devServer: {
  host: '127.0.0.1', // 域名
  port: '3000', // 端口
  open: true, // 是否自动打开浏览器
  hot: true,// 开启HMR功能(只能用于开发环境，生产环境不需要)
},
```


此时css样式经过style-loader处理，已经具备HMR功能了，但是js还不支持的

### JS配置

在main.js中，开启HMR

```js
// 判断是否支持HMR功能
if (module.hot) {
  module.hot.accept('./js/sub.js')
  module.hot.accept('./js/sum.js', function (sum) {
    console.log('module.hot sum called');
  })
}上面这样写会很麻烦，有多少个js就要配置多少个，所以实际开发我们会使用其他loader来解决。
```

比如：vue-loader 和 react-hot-loader

