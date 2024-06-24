# 为什么要用Promise

## 1 指定回调函数的方式更加灵活

- 旧的：必须在启动异步任务前指定

  ```js
  // 成功的回调函数
  function successCallBack(result) {
    console.log("成功：", result);
  }
  // 失败的回调函数
  function errorCallBack(error) {
  	console.log("失败：", error);
  }
  
  // createFileAsync函数内部会执行异步任务
  // 必须先指定成功和失败的回调，然后才会启动函数内部的异步任务
  createFileAsync(params, successCallBack, errorCallBack)
  ```

  

- Promise：启动异步任务 => 返回Promise对象 => 给Promise对象绑定回调函数（甚至可以在异步任务结束后指定）。

  ```js
  const myPromise = createFileAsync(params);
  setTimeout(()=>{
    myPromise.then(successCallBack, errorCallBack)
  }, 3000)
  ```

  

## 2 支持链式调用，可以解决回调地狱问题

- 回调地狱

  - 回调函数嵌套调用，外部回调函数异步执行的结果是嵌套的回调函数执行的条件

    ```js
    // 回调地狱
    // 编码方式：从左到右
    First((firstResult)=>{
      Second(firstResult, (secondResult)=>{
        Third(secondResult, (thirdResult)=>{
          console.log('最终的结果是：', thirdResult)
        }, failureCallBack)
      }, failureCallBack)
    }, failureCallBack)
    
    // Promise链式操作解决回调地狱
    // 编码方式：从上到下
    // 异常传透
    First.then((firstResult)=>{
      return Second(firstResult)
    }).then((secondResult)=>{
      return Third(secondResult)
    }).then((thirdResult)=>{
      console.log('最终的结果是：', thirdResult)
    }).catch(failureCallBack)
    
    // async/await:回调地狱终极解决方案
    async function request() {
      try {
        const firstResult = await First();
        const secondResult = await Second(firstResult);
        const thirdResult = await Third(secondResult);
        console.log('最终的结果是：', thirdResult)
      } catch(error) {
        failureCallBack(error);
      }
    }
    ```

    

- 回调地狱的缺点
  - 不便于阅读/不便于异常处理

- 解决方案
  - Promise链式调用

- 终极解决方案
  - async/await
