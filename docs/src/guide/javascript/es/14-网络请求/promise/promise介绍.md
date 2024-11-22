# Promise介绍

抽象表达：Promise是 `ES6` 引入的进行异步编程的新解决方案（旧的是纯回调的形式）。

具体表达：

- 从语法上来说：Promise就是一个构造函数，可以进行对象的实例化。

  ```js
  const p = new Promise((resolve, reject) => {});
  ```

- 从功能上来说：Promise对象用来封装一个异步操作并可以获取其成功/失败的结果值。

  ```js
  const p = new Promise((resolve, reject) => {
    // 封装异步操作
    setTimeout(() => {
      const time = Date.now();
      if (time % 2 === 0) {
        resolve(time); // 成功
      } else {
        reject(time); // 失败
      }
    }, 2000);
  });
  
  p.then(
    (value) => {
      console.log("获取成功的值：", value);
    },
    (reason) => {
      console.log("获取失败的值：", reason);
    }
  );
  ```

> Promise支持链式调用，可以解决回调地狱问题。


