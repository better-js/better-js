# Object

## 静态方法

### Object.assign()

> ES6、浅复制

`Object.assign()` 方法的第一个参数是目标对象，之后还可以跟一个或多个源对象。它会遍历一个或多个源对象的所有可枚举的自有键并把它们复制（使用=操作符）到目标对象，最后返回目标对象。

```js
const myObject = {
  a: 2,
  b: [1, 2, 3],
};
let newObject = Object.assign({}, myObject);
newObject.b.push(4);
console.log(myObject.b); // [ 1, 2, 3, 4 ]
console.log(newObject.b); // [ 1, 2, 3, 4 ]
console.log(myObject === newObject); // false
console.log(myObject.b === newObject.b); // true
```

由于 `Object.assign()` 就是使用 `=` 操作符来赋值，所以源对象的一些特性（比如 weitable）不会被复制到目标对象



### Object.create()

> ES5
>
> 创建一个对象并把这个对象的 `[[prototype]]` 关联到指定对象。

```js
const anotherObject = {
  a: 2,
};

// 创建一个关联到 anotherObject 的对象
// 现在 myObject 的 [[prototype]] 关联到 anotherObject
const myObject = Object.create(anotherObject);

// 显然myObject.a并不存在，但是尽管如此，属性访问仍然成功地在 anotherObject 中找到了值2。但是如果anotherObject中也找不到a并且[[prototype]] 不为空的话，就会继续查找下去。这个过程会持续到找到匹配的属性名或者查找完 整条[[prototype]链。最终找不到就会返回undefined
console.log(myObject.a); // 2
```



Object.defineProperties()
Object.defineProperty()
Object.entries()

### Object.freeze()

> 冻结

Object.fromEntries()

### Object.getOwnPropertyDescriptor()

> 获取对象中某个属性的属性描述符



### Object.getOwnPropertyDescriptors()

> 获取对象中所有属性的属性描述符



### Object.getOwnPropertyNames()

> 会返回一个数组，包含所有属性，无论它们是否可枚举。不包含原型链



Object.getOwnPropertySymbols()
Object.getPrototypeOf()
Object.groupBy()
Object.hasOwn()
Object.is()
Object.isExtensible()
Object.isFrozen()
Object.isSealed()

### Object.keys()

> 会返回一个数组，包含所有可枚举属性。不包含原型链。

### Object.preventExtensions()

> 禁止扩展



### Object.seal()

> 密封

### Object.setPrototypeOf()

> 修改对象的 `[[prototype]]` 关联



Object.values()

## 实例方法

### Object.prototype.hasOwnProperty()

> `hasOwnProperty()` 只会检查属性是否在当前对象中，不会检查[[prototype]]链。



Object.prototype.isPrototypeOf()

### Object.prototype.propertyIsEnumerable()

> `propertyIsEnumerable()` 会检查给定的属性名是否直接存在于对象中（而不是在原型链上）并且满足 `enumerable: true`



Object.prototype.toLocaleString()
Object.prototype.toString()
Object.prototype.valueOf()



## 实例属性

Object.prototype.constructor
