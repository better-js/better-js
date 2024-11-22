## Map

对象的key只能是字符串格式

```js
let obj = {
  "1": "css",
  1: "js", // 这里的 1 会被转成字符串 '1'
};
console.log(obj); // { '1': 'js' }

// 如果想把对象obj做为key
let dx = {
  [obj]: "dancy",
};
console.log(dx); // { '[object Object]': 'dancy' }
console.log(dx["[object Object]"]); // dancy
console.log(dx[obj.toString()]); // dancy
```

Map类型可以把对象、函数、字符串、数值作为键名

::: code-group

```js
let map = new Map();
map.set("str", "string");
map.set(true, "boolean");
map.set(function () {}, "function");
map.set({}, 'object')
map.set(1, "number");
console.log(map); // {'str' => 'string', true => 'boolean', ƒ => 'function', {…} => 'object', 1 => 'number'}
```

```js
let map = new Map([
  ["str", "string"],
  [true, "boolean"],
]);
map
  .set(function () {}, "function")
  .set({}, "object")
  .set(1, "number");
console.log(map); // {'str' => 'string', true => 'boolean', ƒ => 'function', {…} => 'object', 1 => 'number'}
```

:::

### Map类型的增删改查

::: code-group

```js {3} [增]
//  set() 方法会向 Map 对象添加或更新一个指定的键值对。
let map = new Map();
map.set("str", "string");
console.log(map); // {'str' => 'string'}
```


```js {3,11} [删]
// delete() 方法从该 map 中删除指定键的元素。
let map = new Map([["str", "string"]]);
console.log(map.delete("str")); // true
console.log(map); // {}

// clear() 方法会移除该 map 中的所有元素。
let map = new Map([
  ["str", "string"],
  [true, "boolean"],
]);
console.log(map.clear()); // undefined
console.log(map); // {}
```


```js {2} [改]
// 新增同名元素实现修改操作
let map = new Map([["str", "string"]]);
map.set("str", "ss");
console.log(map.get("str")); // ss
```


```js {3} [查]
// get() 方法返回该 map 中的指定元素
let map = new Map([["str", "string"]]);
console.log(map.get("str")); // string
```


```js {3} [判断某个元素是否存在]
// has() 方法返回一个布尔值，指示具有指定键的元素是否存在。
let map = new Map([["str", "string"]]);
console.log(map.has("str")); // true
```


:::

### 遍历Map类型数据

::: code-group

```js {9} [获取所有键]
// keys() 方法返回一个新的 map 迭代器 对象，该对象包含了此 map 中每个元素的键，按插入顺序排列。
let map = new Map([
  ["str", "string"],
  [true, "boolean"],
  [function () {}, "function"],
  [{}, "object"],
  [1, "number"],
]);

console.log(map.keys()); // { 'str', true, [Function (anonymous)], {}, 1 }
```



```js {9} [获取所有值]
// values() 方法返回一个新的 map 迭代器对象，该对象包含此 map 中每个元素的值，按插入顺序排列。
let map = new Map([
  ["str", "string"],
  [true, "boolean"],
  [function () {}, "function"],
  [{}, "object"],
  [1, "number"],
]);

console.log(map.values()); //  { 'string', 'boolean', 'function', 'object', 'number' }
```



```js [获取所有键值对]
// entries() 方法返回一个新的 map 迭代器 (en-US)对象，该对象包含了此 map 中的每个元素的 [key, value] 对，按插入顺序排列。
let map = new Map([
  ["str", "string"],
  [true, "boolean"],
  [function () {}, "function"],
  [{}, "object"],
  [1, "number"],
]);

console.log(map.entries()); // { [ 'str', 'string' ], [ true, 'boolean' ], [ [Function (anonymous)], 'function' ], [ {}, 'object' ], [ 1, 'number' ] }
```



```js [for...of...循环]
// for...of...
let map = new Map([
  ["str", "string"],
  [true, "boolean"],
  [function () {}, "function"],
  [{}, "object"],
  [1, "number"],
]);

for (let key of map.keys()) {
  console.log(key);
}

for (let key of map.values()) {
  console.log(key);
}

for (let [key, value] of map.entries()) {
  console.log(key, value);
}
```



```js [forEach循环]
// forEach() 方法按插入顺序对该 map 中的每个键/值对执行一次提供的函数。
let map = new Map([
  ["str", "string"],
  [true, "boolean"],
  [function () {}, "function"],
  [{}, "object"],
  [1, "number"],
]);

map.forEach((value, key) => {
  console.log(key, value);
});
```



:::



### Map类型转换操作

```js
let map = new Map([
  ["str", "string"],
  [true, "boolean"],
  [function () {}, "function"],
  [{}, "object"],
  [1, "number"],
]);

// 数据还原
console.log([...map]);
console.log([...map.entries()]);
// 转数组
console.log(...map);
// 转换键
console.log([...map.keys()]);
// 转换值
console.log([...map.values()]);

// 获取值为 'boolean' 的数据
const newArr = [...map].filter(([key, value]) => value === "boolean");
console.log(...new Map(newArr).values())
```

### Map管理DOM节点

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Map</title>
  </head>

  <body>
    <div name="html">hello html</div>
    <div name="css">hello css</div>
    <div name="javascript">hello javascript</div>
    <script>
      let map = new Map();
      document.querySelectorAll("div").forEach((item) => {
        map.set(item, {
          content: item.getAttribute("name"),
        });
      });
      map.forEach((config, ele) => {
        console.log(config);
        ele.addEventListener("click", function () {
          alert(config.content);
        });
      });
    </script>
  </body>
</html>
```

### 使用Map类型控制网站表单提交

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Map</title>
  </head>

  <body>
    <form action="" onsubmit="return post()">
      接受协议:
      <input type="checkbox" name="agreement" error="请接受协议" />
      我是学生:
      <input type="checkbox" name="student" error="网站只对学生开放" />
      <input type="submit" />
    </form>
    <script>
      function post() {
        let map = new Map();
        let inputs = document.querySelectorAll("[error]");
        inputs.forEach((item) => {
          map.set(item, {
            error: item.getAttribute("error"),
            status: item.checked,
          });
        });
        return [...map].every(([ele, config]) => {
          config.status || alert(config.error);
          return config.status;
        });
      }
    </script>
  </body>
</html>
```

