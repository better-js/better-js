# Undefined类型

Undefined类型只有一个值，就是特殊值 `undefined`。

**当使用 `var` 或 `let` 声明了变量但没有初始化时，就相当于给变量赋予了 `undefined` 值。**

```js
var message
console.log(message === undefined) // true

let msg
console.log(msg === undefined) // true
```

增加这个特殊值的目的就是为了正式明确空对象指针（null）和未初始化变量的区别。



注意：

1. 对未声明的变量，只能执行一个有用的操作，就是对它调用 `typeof`。在对未初始化的变量调用 `typeof` 时，返回的结果是 `undefined`，但对未声明的变量调用它时，返回的结果还是 `undefined`。

   ```js
   let message;
   console.log(typeof message); // undefined
   console.log(typeof age); // undefined
   ```

2. `undefined` 在数值类型环境中会被当作 `NaN` 来对待，而布尔类型环境中会被当作 `false`。

   ```js
   console.log(Number(undefined)); // NaN
   console.log(Boolean(undefined)); // false
   ```

   

使用场景：

- 定义变量未给值就是 `undefined`
- 开发中经常声明一个变量，等待传送过来的数据，如果检测变量是 `undefined` 就说明没有值传递过来	
