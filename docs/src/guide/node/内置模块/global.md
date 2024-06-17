# global 

> 如何在 `Node.js` 中定义全局变量呢？

在 Node.js 中，global对象是一个全局命名空间对象，类似于浏览器中的 window 对象。因此，你可以给global对象添加属性来创建全局变量。

```js
// 创建一个全局变量name
global.name = "xiaosu";
require('./test.js'); // 这样就可以在test.js文件中获取name属性了
```

在浏览器中我们定义的全局变量都在 window，而Node.js在 global，不同的环境还需要判断，于是在 ECMAScript 2020 出现了一个 `globalThis` 全局变量，在 Node.js 环境会自动切换成 global，在浏览器环境自动切换 window。

```js
globalThis.name = "小苏";
console.log(window.name); // xiaosu
```



## Node.js内置全局变量

```js
// 获取当前模块的所在目录的绝对路径
console.log(__dirname);

// 获取当前模块（文件）的绝对路径（包括文件名和文件扩展名）
console.log(__filename);
```

