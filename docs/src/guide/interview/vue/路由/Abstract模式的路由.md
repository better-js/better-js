# Abstract模式的路由

Vue中的路由模式：

- hash
  - 带#号
- history
  - 会出现404
- abstract
  - 做前端项目不会用到
  - 不依赖于浏览器浏览历史的虚拟管理后端
  - 在一些服务端环境，像Weex环境只支持abstract，这种模式不依赖于浏览器

vue-router自身会对环境进行校验，判断有没有浏览器的API，判断是不是运行在浏览器上。

如果不是就直接进入到 abstract 模式



浏览器默认的路由模式：hash

在移动端原生的环境使用的就是abstract模式
