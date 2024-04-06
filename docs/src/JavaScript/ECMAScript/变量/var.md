# var

:::tip

1. var声明的范围是函数作用域
2. var声明的变量存在变量提升
3. var可以重复定义一个变量
4. for循环中使用var来声明迭代变量会存在全局变量污染

:::

## var声明作用域

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

## var声明提升

提升（hoist）：把所有变量声明都拉到函数作用域的顶部。

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

## var允许重复声明

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

## for循环中的var声明

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





