# for..of

`for..of` 循环会首先向被访问对象请求一个迭代器对象，然后通过调用迭代器对象的 `next()` 方法来遍历所有返回值。



数组有内置的 `@@iterator` ，因此 `for..of` 可以直接应用在数组上。

`@@iterator` 本身并不是一个迭代器对象，而是一个返回迭代器对象的函数，这一点非常镜面并且非常重要。

使用 `Symbol.iterator` 来获取对象的 `@@iterator` 内部属性

使用内置的 `@@iterator` 手动遍历数组：

```js
const arr = [1, 2, 3];
const it = arr[Symbol.iterator]();
console.log(it.next()); // { value: 1, done: false }
console.log(it.next()); // { value: 2, done: false }
console.log(it.next()); // { value: 3, done: false }
console.log(it.next()); // { value: undefined, done: true }
```

- value：当前的遍历值

- done：是否还有可以遍历的值，false还有值，true已经遍历完。



和数组不同，普通对象没有内置的 `@@iterator`，所以无法自动完成 `for..of` 遍历。之所以要这样做，是为了避免影响未来的对象类型。

当然，你也可以给任何想遍历的对象定义 `@@iterator`，具体实现如下：

```js
const myObject = {
  a: 1,
  b: 2,
  c: 3,
};

Object.defineProperty(myObject, Symbol.iterator, {
  enumerable: false,
  writable: false,
  configurable: true,
  value: function () {
    let o = this;
    let idx = 0;
    let ks = Object.keys(o);
    return {
      next: function () {
        return {
          value: o[ks[idx++]],
          done: idx > ks.length,
        };
      },
    };
  },
});

// 手动遍历myObject
let it = myObject[Symbol.iterator]();
console.log(it.next()); // { value: 1, done: false }
console.log(it.next()); // { value: 2, done: false }
console.log(it.next()); // { value: 3, done: false }
console.log(it.next()); // { value: undefined, done: true }

// 用 for..of 遍历myObject
for (let v of myObject) {
  console.log(v);
}
```

