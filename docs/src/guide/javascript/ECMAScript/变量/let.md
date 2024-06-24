# let

声明一个块作用域的局部变量，可选初始化一个值

用 `var` 或 `let` 语句声明的变量，如果没有赋初始值，则其值为 `undefined` 。因此，你可以使用 `undefined` 来判断一个变量是否已赋值。

::: tip

1. let声明的范围是块作用域
2. let声明的变量不会在作用域中被提升
3. let不允许在同一个块作用域内重复定义同一个变量

:::



ES6新增了 let 命令，用于声明变量。let跟var的作用差不多，但有着非常重要的区别。

**let声明的范围是块作用域，而var声明的范围是函数作用域。**

与 var 的区别在于 let声明的变量只在 let命令所在的代码块内有效。

块作用域是函数作用域的子集，



## 不存在变量提升

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

## 暂时性死区

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

## 全局声明

与var关键字不同，使用let在全局作用域中声明的变量不会成为window对象的属性（var声明的变量则会）

```js
var name = "abc";
console.log(window.name); // "abc"
let age = 18;
console.log(window.age); // undefined
```

不过，let 声明仍然是在全局作用域中发生的，相应变量会在页面的生命周期内延续。因此，为了避免SyntaxError，必须确保页面不会重复声明同一个变量



## 条件声明

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



## let不允许重复声明

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



## for循环中的let声明

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



