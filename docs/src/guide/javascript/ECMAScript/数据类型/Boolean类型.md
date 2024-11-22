# Boolean类型

表示肯定或否定时在计算机中对应的是布尔类型数据，Boolean类型有两个字面值 `true` 和 `false`，表示肯定的数据用 true（真），表示否定的数据用 false（假）。

虽然布尔值只有两个，但所有的其他类型的值都有相应布尔值的等价形式。（要将一个其他类型的值转换为布尔值，可以调用 `Boolean()` 转型函数， `Boolean()` 转型函数可以在任意类型的数据上调用，而且始终返回一个布尔值）

```js
let message = "codebetter";
console.log(Boolean(message)); // true
```



不同类型与布尔值之间的转换规则：

| 数据类型  | 转换为true的值         | 转换为false的值  |
| --------- | ---------------------- | ---------------- |
| Boolean   | true                   | false            |
| String    | 非空字符串             | `""`（空字符串） |
| Number    | 非零数值（包括无穷值） | 0、NaN           |
| Object    | 任意对象               | null             |
| Undefined | N/A（不存在）          | undefined        |



注意：

1. 布尔值字面量 `true` 和 `false` 是区分大小写的。
2. 布尔类型在控制台输出 **<font color="blue">蓝色</font>**。
3. 布尔值很少是直接赋值得到的，都是从结果中得到，主要利用布尔值进行判断。
4. 像 `if` 等流程控制语句会自动执行**其他类型值到布尔值**的转换。











