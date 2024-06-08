# localStorage

`localStorage` 是本地存储，存储的内容在关闭浏览器后再次点开网页时依然存在，需要手动清除才会消失（手动清除的方法有两种：1.调用API清除；2.直接在开发者工具中清除浏览器缓存）。

localStorage特点：

1. 永久性存储，可手动删除。
2. 以字符串的形式存储数据。
3. 一般浏览器的存储大小是5MB，即5120KB。

```js
// 存数据
localStorage.setItem('key',value)
// 取数据
localStorage.getItem('key')
// 删除指定数据
localStorage.removeItem('key')
// 清空数据
localStorage.clear()
```



注意：只能存储字符串类型的数据，存取对象格式的数据时，需要使用 `JSON.stringify()` 和 `JSON.parse()` 进行转换

```js
let obj = {
  name:"xiaosutongxue",
  age:27
}

// 存储对象格式的数据需要使用JSON.stringify()
localStorage.setItem('obj',JSON.stringify(obj))
// 获取数据需要使用JSON.parse()
JSON.parse(localStorage.getItem('obj'))
```


