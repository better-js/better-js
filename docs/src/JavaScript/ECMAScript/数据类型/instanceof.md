# instanceof

`instanceof` 运算符用于检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上。

也可以理解为是否为某个对象的实例，`typeof` 不能区分数组，但 `instanceof` 则可以。



## 值类型与对象

下面是使用字面量与对象方法创建字符串，返回的是不同类型。

```js
let name1 = "xiaosutongxue";
let name2 = new String("xstx");
console.log(typeof name1, typeof name2); //string object
```

只有对象才有方法使用，但在`JS`中也可以使用值类型调用方法，因为它会在执行时将值类型转为对象。

```js
let name1 = "xiaosutongxue";
let name2 = new String("xstx");
console.log(name1.length); //13
console.log(name2.length); //4
```
