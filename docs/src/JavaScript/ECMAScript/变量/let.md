# 变量

在 JavaScript 中，使用变量来作为值的符号名，变量的名字又叫做标识符。

标识符，就是**变量**、**函数**、**属性**或者**函数参数**的名称。

一个 JavaScript 标识符必须以**字母**、**数字**、**下划线(_)**、**美元符($)**组成，且**不能数字开头**，建议使用**小驼峰**的格式命名，如 `myBlog`。

1. ECMAScript中的一切都**严格区分大小写**，如 Age 和 age 是不同的变量。

2. ECMAScript中的语句以分号结尾，虽然分号可写可不写（换行符会被识别成结束符），但为了养成良好的编码习惯，还是建议书写。



## 声明

JavaScript 有三种声明方式

1. `var` ：声明一个局部或全局变量，可选初始化一个值
2. `let` ：声明一个块作用域的局部变量，可选初始化一个值
3. `const` ：声明一个块作用域的只读常量

用 `var` 或 `let` 语句声明的变量，如果没有赋初始值，则其值为 `undefined` 。因此，你可以使用 `undefined` 来判断一个变量是否已赋值。

### var

#### var声明作用域

var声明的范围是函数作用域

::: details 使用var在一个函数内部定义一个变量，就意味着该变量将在函数退出时被销毁。

```js
function test() {
  var message = "hi"; // 局部变量
}
test();
console.log(message); // ReferenceError: message is not defined
```

:::

::: details 在函数内定义变量时省略var关键字，可以创建一个全局变量。

注意：在严格模式下，将报错ReferenceError

```js
function test() {
  message = "hi"; // 全局变量
}
test();
console.log(message); // hi
```

:::

#### var声明提升

::: details var声明的变量存在变量提升，可以先使用再声明

```js
function foo() {
  console.log(myName); // undefined
  var myName = "dongxu";
}

foo();
```

因为ECMAScript运行时把它看成等价于如下代码：

```js
function foo() {
  var myName;
  console.log(myName); // undefined
  myName = "dongxu";
}

foo();
```

:::

#### var允许重复声明

::: details var可以重复定义一个变量，后面的会覆盖前面的

```js
function foo() {
  var age = 16;
  var age = 17;
  var age = 18;
  console.log(age); // 18
}

foo();
```

:::

#### for循环中的var声明

::: details for循环中使用var来声明迭代变量会存在全局变量污染

```js
// var
var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 10
```

:::

### let

::: tip

1. let声明的范围是块作用域
2. let声明的变量不会在作用域中被提升
3. let不允许在同一个块作用域内重复定义同一个变量

:::



ES6新增了 let 命令，用于声明变量。let跟var的作用差不多，但有着非常重要的区别。

**let声明的范围是块作用域，而var声明的范围是函数作用域。**

与 var 的区别在于 let声明的变量只在 let命令所在的代码块内有效。

块作用域是函数作用域的子集，



#### 不存在变量提升

var命令存在变量提升，即变量在声明之前使用，值为undefined。

用let声明的变量不会在作用域中被提升，所以一定要先声明再使用，否则便会报错。

```js
// name会被提升
console.log(name); // undefined
var name = 'dancy';

// age不会被提升
console.log(age); // ReferenceError: Cannot access 'age' before initialization
let age = 26;
```

#### 暂时性死区

只要在块级作用域内存在let命令，它所声明的变量就“绑定”(binding)这个区域，不再受外部影响。

暂时性死区的本质：只要进入当前作用域，所要使用的变量就已经存在，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。

```js
var temp = 123;
if (true) {
  temp = "abc"; // ReferenceError: Cannot access 'temp' before initialization
  let temp;
}
```

ES6明确规定，如果区块中存在 let 和 const 命令，则这个区块对这些命令声明的变量从一开始就形成封闭作用域，只要在声明之前使用这些变量，就会报错。

总之，在代码块内，使用let命令声明变量之前，该变量都是不可用的，这在语法上称为暂时性死区（temporal dead zone）

```js
if (true) {
  // TDZ开始
  temp = "abc"; // ReferenceError
  console.log(temp); // ReferenceError
  let temp; // TDZ结束
  console.log(temp); // undefined
}
```

#### 全局声明

与var关键字不同，使用let在全局作用域中声明的变量不会成为window对象的属性（var声明的变量则会）

```js
var name = "abc";
console.log(window.name); // "abc"
let age = 18;
console.log(window.age); // undefined
```

不过，let 声明仍然是在全局作用域中发生的，相应变量会在页面的生命周期内延续。因此，为了避免SyntaxError，必须确保页面不会重复声明同一个变量



#### 条件声明

```js
// 初次声明 name和age 属性
var name = "dongxu";
let age = 27;
```

在使用 var 声明变量时，由于声明会被提升，JavaScript引擎会自动将多余的声明在作用域顶部合并为一个声明。

因为 let 的作用域是块，所以不可能检查前面是否已经使用 let 声明过同名变量，同时它不存在变量提升，所以也就不可能在没有声明的情况下声明它。 

```js
// 假设脚本不确定页面中是否已经声明了同名变量，那它可以假设还没有声明过
var name = "dongdong"; // 使用var来重复声明：这里没问题，因为可以被作为一个提升声明来处理，不需要检查之前是否声明过同名变量
let age = 30; // 使用let来重复声明：此时如果age之前声明过，这里会报错
```

使用try/catch 语句或 typeof 操作符也不能解决，因为条件块中 let 声明的作用域仅限于该块

```javascript
// 假设脚本不确定页面中是否已经声明了同名变量，那它可以假设还没有声明过
if (typeof name === "undefined") {
  let name; // name被限制在if {} 块的作用域内
}
name = "Matt"; // 因此这个赋值形同全局赋值
try {
  console.log(age); // 如果age没有声明过，则会报错
} catch (error) {
  let age;
} 
// age被限制在catch {}块的作用域内，因此这个赋值形同全局赋值
age = 26; 

```

**所以，对于 let 这个新的ES6声明关键字，不能依赖条件声明关键字**

**注意：不能使用 let 进行条件式声明是一件好事，因为条件声明是一种反模式，它让程序变得更难理解。**



#### let不允许重复声明

let不允许在相同作用域内重复声明同一个变量

```js
// 报错，同一作用域下，不能重复声明同一个变量
function foo() {
  let temp = 2;
  let temp = 1;
}

// 报错，这两个关键字声明的并不是不同类型的变量，它们只是指出变量在相关作用域如何存在。
function foo() {
  let temp = 2;
  var temp = 1;
}

// 报错，不能在函数内部重新声明参数
function foo(temp) {
  let temp;
}
```



#### for循环中的let声明

在let出现之前，for循环定义的迭代变量会渗透到循环体外部

```js
// var
for (var i = 0; i < 5; i++) {
  
}
console.log(i); // 5
```

使用let之后，这个问题就消失了，因为迭代变量的作用域仅限于for循环块内部。

```js
// let
// 用let定义的i只能在for循环的内部去使用，for循环结束，变量被回收掉
for (let i = 0; i < 5; i++) {
  
}
console.log(i); // ReferenceError: i is not defined
```

之所以会这样，是因为在退出循环时，迭代变量保存的是导致循环退出的值：5。

```js
// var
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 0); // 5 5 5 5 5
}
```

使用let声明迭代变量时，JavaScript引擎在后台会为每个迭代循环声明一个新的迭代变量。每个setTimeout引用的都是不同的变量实例，所以console.log输出的是循环执行过程中每个迭代变量的值。

```js
// let 
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 0); // 0 1 2 3 4
}
```



### const

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



#### 本质

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





## 变量作用域

在函数之外声明的变量，叫做 **全局变量**，因为它可被当前文档中的任何其他代码所访问。

在函数内部声明的变量，叫做 **局部变量**，因为它只能在当前函数的内部访问。

ES6之后 JavaScript 中增加了 **块级作用域**，语句块中声明的变量将成为语句块所在函数（或全局作用域）的局部变量。



## 变量提升

JavaScript 变量的另一个不同寻常的地方是，你可以先使用变量稍后再声明变量而不会引发异常，这一概念称为变量提升。

由于存在变量提升，一个函数中所有的`var`语句应尽可能地放在接近函数顶部的地方。这个习惯将大大提升代码的清晰度。

在 ECMAScript 6 中，`let` 和 `const` 同样**会被提升**变量到代码块的顶部但是不会被赋予初始值。在变量声明之前引用这个变量，将抛出引用错误（ReferenceError）。这个变量将从代码块一开始的时候就处在一个“暂时性死区”，直到这个变量被声明为止。



## 函数提升

对于函数来说，只有函数声明会被提升到顶部，而函数表达式不会被提升。

```js
// 函数声明
foo(); // "bar"

function foo() {
  console.log("bar");
}

// 函数表达式
baz(); // 类型错误：baz 不是一个函数

var baz = function () {
  console.log("bar2");
};
```



**js在执行之前，会有js解析引擎(V8)，先把代码解析一遍**

- 把变量的声明和函数的声明提升到当前作用域的最前端

- 变量的赋值和函数的调用还是保留在原来的位置

::: code-group

```js [demo1]
var a = 10
function fn(){
  console.log(a)
}
fn()

// 预解析
var a
function fn(){
  console.log(a)
}
a = 10
fn()

// 输出
10
```

```js [demo2]
var a = 10
function fn(){
  var a = 20
  console.log(a)
}
fn()

// 预解析
var a
function fn(){
  var a
  a = 20
  console.log(a)
}
a = 10
fn()

// 输出
20
```

```js [demo3]
var a = 10
function fn(){
  console.log(a)
  var a = 20
}
fn()

// 预解析
var a
function fn(){
  var a
  console.log(a)
  a = 20
}
a = 10
fn()

// 输出
undefined
```

```js [demo4]
fn()
var a = 10
function fn(){
  console.log(a)
  a = 20
}
console.log(a)

// 预解析
var a
function fn(){
  console.log(a)
  a = 20
}
fn()
a = 10
console.log(a)

// 输出
undefined 
10
```

```js [demo5]
f1()
console.log(c)
console.log(b)
console.log(a)
function f1(){
  var a = b = c = 9
  console.log(a)
	console.log(b)
	console.log(c)
}

// 预解析
function f1(){
  var a
  a = 9
  b = 9
  c = 9
  console.log(a)
	console.log(b)
	console.log(c)
}
f1()
console.log(c)
console.log(b)
console.log(a)

// 输出
9
9
9
9
9
未定义 not defined
```

:::



## 小结

**ECMAScript变量是松散类型的**，变量可以用来保存任何类型的数据，它的本质就是程序在内存中申请的一块用来存放数据的小空间。

在ECMAScript中有3个关键字可以用来声明变量：**var**、**let**、**const**。其中，var可以在ECMAScript的任意版本中使用，而let和const只能在ECMAScript6及以后的版本中才能使用。



### 声明变量的几种方式

- var
- function
- let
- const
- class
- import



### 最佳实践

不使用var，const优先，let次之。



