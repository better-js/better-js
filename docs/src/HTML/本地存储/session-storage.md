# sessionStorage

`sessionStorage` 是会话存储，存储的内容会随着浏览器窗口的关闭而消失（关闭网页即会话结束）。

sessionStorage特点：

1. 暂时性存储，关闭窗口即清除数据。
2. 以字符串的形式存储数据。
3. 一般浏览器的存储大小是5MB，即5120KB。

```js
// 存数据
sessionStorage.setItem('key',value)
// 取数据
sessionStorage.getItem('key')
// 删除指定数据
sessionStorage.removeItem('key')
// 清空数据
seesionStorage.clear()
```


