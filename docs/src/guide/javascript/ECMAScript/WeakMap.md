## WeakMap

WeakMap中的键只能是引用类型（对象、数组）

```js
let arr = [];
let map = new WeakMap();
// set
map.set(arr, "array");
// get
console.log(map.get(arr)); // array
// has
console.log(map.has(arr)); // true
// delete
console.log(map.delete(arr)); // true
console.log(map); // {}
```



https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap

