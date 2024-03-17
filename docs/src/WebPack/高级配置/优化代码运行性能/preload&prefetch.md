# Preload/Prefetch

## 为什么

我们前面已经做了代码分割，同时会使用import动态导入语法来进行代码按需加载（我们也叫懒加载，比如路由懒加载就是这样实现的）。

但是加载速度还不够好，比如：是用户点击按钮时才加载这个资源的，如果资源体积很大，那么用户会感觉到明显卡顿效果。

我们想在浏览器空闲时间，加载后续需要使用的资源。我们就需要用上Preload或Prefetch技术。

## 是什么

Preload：告诉浏览器立即加载资源
Prefetch：告诉浏览器在空闲时才开始加载资源
1.2.1 共同点：
都只会加载资源，并不执行
都有缓存
1.2.2 区别：
Preload加载优先级高，Prefetch加载优先级低
Preload只能加载当前页面需要使用的资源，Prefetch可以加载当前页面资源，也可以加载下一个页面需要使用的资源
1.2.3 问题
兼容性较差

我们可以去 Can I Use 网站查询API的兼容性问题

Preload相对于Prefetch兼容性好一点，如图



1.2.4 总结
当前页面优先级高的资源用Preload加载
下一个页面需要使用的资源用Prefetch加载

## 怎么用

1.3.1 安装依赖

```shell
npm i @vue/preload-webpack-plugin -D
```

1.3.2 配置
修改config/webpack.prod.js:

```js
const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin')
plugins: [
  // 配置预加载
  new PreloadWebpackPlugin({
    rel: 'preload',// preload兼容性更好
    as: 'script'
  })
],
```

1.3.3 测试
执行

```shell
npm run build
```



