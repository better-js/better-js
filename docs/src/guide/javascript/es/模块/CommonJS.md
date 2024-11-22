# CommonJS规范

在 CommonJS 标准中，导出数据有两种方式：

- 第一种方式：`module.exports = value`
- 第二种方式：`exports.name = value`



注意点：

1. 每个模块内部的：`this`、`exports`、`module.exports` 在初始化时，都指向**同一个**空对象，该空对象就是当前模块导出的数据。

   ![image-20240810114816856](/Users/dongxu/Library/Application Support/typora-user-images/image-20240810114816856.png)

2. 无论如何修改导出对象，最终导出的都是 `module.exports` 的值

3. 





```js
// 导出
exports.name = name

module.exports = {
  name
}

// 导入
const a = require('./a.js')
```

