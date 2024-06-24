# Promise的基本流程

1. 创建一个Promise对象，初始状态为 `pending`
2. 执行异步操作
   - 成功了，执行resolve()，一旦执行了该函数，Promise状态就会变为 `fulfilled`，然后走`.then()`，每一个 `.then()` 方法还会返回一个新生成的 promise 对象，这个对象可被用作链式调用。
   - 失败了，执行reject()，一旦执行了该函数，Promise状态就会变为 `rejected`，然后走.catch()，catch会返回新的Promise对象。

> .then()可以处理成功或失败，.catch()只能处理失败

```js
// 1.创建一个新的Promise对象
const myPromise = new Promise((resolve, reject) => { // 执行器函数excutor
  // 2.执行异步操作任务
  // 2.1 如果成功了，执行resolve(value);
  // 2.2 如果失败了，执行reject(reason);
  setTimeout(() => {
    const time = Date.now();
    // 如果当前时间为偶数代表成功，奇数则代表失败
    if (time % 2 === 0) {
      resolve(time);
    } else {
      reject(time);
    }
  }, 1000);
});

myPromise.then(
  (value) => { // 接收成功的value数据  onFulfilled
    console.log('成功的数据：',value);
  },
  (reason) => { // 接收失败的reason数据  onRejected
    console.log('失败的数据：', reason);
  }
);
```


