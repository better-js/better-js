# Promise的值

实例对象中的另一个属性 `PromiseResult`，存储的是异步任务 `成功/失败` 的结果。

```
Promise {<pending>}
▸[[Prototype]]: Promise
 [[PromiseState]]: "pending"
 [[PromiseResult]]: undefined
```

只有 `resove()` 或 `reject()` 可以对其赋值。

```js
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    const time = Date.now();
    if (time % 2 === 0) {
      resolve(time); // 将 time 赋值给 PromiseResult
    } else {
      reject(time); // 将 time 赋值给 PromiseResult
    }
  }, 1000);
});
```
