# core-js

## 为什么

过去我们使用babel对js代码进行了兼容性处理，其中使用@babel/preset-env智能预设来处理兼容性问题。

它能将ES6的一些语法进行编译转换，比如箭头函数、点点点运算符等。但是如果是async函数、promise对象、数组的一些方法（includes）等，它没办法处理。

所以此时我们 js代码仍然存在兼容性问题，一旦遇到低版本浏览器会直接报错，所以我们想要将 js兼容性问题彻底解决

## 是什么

core-js是专门用来做ES6以及以上API 的polyfill。

polyfill翻译过来叫做垫片/补丁，就是用社区上提供的一段代码，让我们在不兼容某些新特性的浏览器上，使用该新特性

## 怎么用

3.3.1 修改代码
修改main.js，添加promise

```js
// 添加Promise代码
const promise = Promise.resolve()
promise.then(() => {
  console.log('hello promise');
})
```

3.3.2 配置eslint
安装依赖：

```shell
npm i @babel/eslint-parser -D
```


修改.eslintrc.js

```js


module.exports = {
	...
	parser: "@babel/eslint-parser", // 支持最新的最终 ECMAScript 标准
	...
}
```

3.3.3 测试
运行

```shell
npm run build
```


此时观察打包输出的js文件，我们发现Promise语法并没有编译转换，所以我们需要使用core-js来进行polyfill。

3.3.4 使用core-js
安装依赖：

```shell
npm i core-js
```


3.3.4.1 手动全部引入
修改main.js，引入core-js

```js
import "core-js";
```


这样引入会将所有兼容性代码全部引入，体积太大了，我们只想引入promise的polyfill

3.3.4.2 手动按需引入
修改main.js，引入core-js

```js
import "core-js/es/promise";
```


只引入打包promise的polyfill，打包体积更小。但是将来如果还想使用其他语法，还需要手动引入库很麻烦。

3.3.4.3 自动按需引入
修改babel.config.js

```js
presets: [
  [
    "@babel/preset-env",
    // 按需加载core-js的polyfill
    { useBuiltIns: "usage", corejs: { version: "3", proposals: true } },
  ],
],
```


此时就会自动根据我们代码中使用的语法，来按需加载相应的polyfill了。

