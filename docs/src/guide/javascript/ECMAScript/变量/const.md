# const

声明一个块作用域的只读常量

::: tip

1. const声明的范围是块作用域
2. const也不允许重复声明
3. 声明时必须初始化
4. 不能在for循环中用const来声明迭代变量，因为迭代变量会自增。

:::



const 声明一个只读常量，常量不可以通过重新赋值改变其值，也不可以在代码运行时重新声明。它必须被初始化为某个值，且一旦初始化，常量的值就不能改变（引用类型其值可变，因为引用类型绑定的是内存地址），这就意味值，const一旦声明常量，就必须立即初始化，不能留到以后赋值。

```js
const PI = 3.1415;
PI = 3; // TypeError: Assignment to constant variable.

const FOO; // SyntaxError: Missing initializer in const declaration
```

const的作用域与let命令相同：只在声明所在的块级作用域内有效

const命令声明的常量也不会提升，同样存在暂时性死区，只能在声明后使用。

在同一作用域中，不能使用与变量名或函数名相同的名字来命名常量。



## 本质

const实际上保证的并不是变量的值不得改动，而是变量指向的那个内存地址不得改动。

基本数据类型 ==> 栈内存

引用数据类型 ==> 堆内存

- 对于简单类型的数据（数字、字符串、布尔值），值就保存在变量指向的内存地址中，因此等同于常量

- 对于引用类型的数据（数组、对象），变量指向的内存地址保存的是一个指针，const只能保证这个指针是固定的，至于它指向的数据结构是不是可变的，这完全不能控制。

```js
const foo = {};
// 为foo添加一个属性，可以成功
foo.prop = 123; 
console.log(foo); // { prop: 123 }

// 将foo指向另一个对象，就会报错
foo = {}; // TypeError: Assignment to constant variable.
```

如果真想将对象冻结，应该使用 `Object.freeze()`

```js
// 常规模式下，添加属性不起作用
const foo = Object.freeze({});
foo.prop = 123; 
console.log(foo); // {}

// 严格模式下，添加属性将报错
'use strict'
const foo = Object.freeze({});
foo.prop = 123; // TypeError: Cannot add property prop, object is not extensible
```

除了将对象本身冻结外，对象的属性也应该冻结

```js
var constantize = (obj) => {
  Object.freeze(obj);
  Object.keys(obj).forEach((key, i) => {
    if (typeof obj[key] === "object") {
      constantize(obj[key]);
    }
  });
};
```



> 为了区分变量，常量通常首字母大写，或者全部大写
>
> const Data = 10;	const DATA = 10;
>
> const也是模块化中引入模块的一个关键字，作为模块导入可以用小写
>
> const express = require('express')



