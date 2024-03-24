# Promise



[Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)对象用于表示一个异步操作的最终完成（或失败）及其结果值。

### 准备

#### 1.区别实例对象与函数对象

实例对象：new 构造函数产生的对象称为实例对象，简称为对象。

函数对象：将函数作为对象使用时，简称为函数对象

```js
function Fn(){
  // 我是函数
}
Fn.bind({}); // Fn是函数对象
const fn = new Fn(); // Fn是构造函数 fn是实例对象
```

> 速记：括号左边是函数，点的左边是对象。

#### 2.两种类型的回调函数

什么是回调函数？

**回调函数是你写一个函数，让预先写好的系统来调用。你调用系统的函数，是直调。让系统调用你的函数，就是回调。**

回调函数满足的三个条件：

- 你定义的
- 你没有调用
- 但它自己执行了



##### 同步回调

理解：立即执行，完全执行完了才结束，不会放入回调队列中

例子：数组遍历相关的回调、Promise的excutor函数

```js
const arr = [1, 3, 5, 7, 9];
// 遍历回调 => 同步回调函数
arr.forEach(item => {
  console.log(item);
})
console.log('forEach()之后');
```



##### 异步回调

理解：不会立即执行，会放入回调队列中将来执行。

例子：定时器回调、ajax回调、Promise的成功失败回调

```js
setTimeout(() => {
  console.log("timeout callback");
}, 0);
console.log("setTimeout()之后");
```

#### 3.js的error处理

##### 错误类型

| 错误类型       | 解释                       | message                                                      |
| -------------- | -------------------------- | ------------------------------------------------------------ |
| Error          | 所有错误的父类型           |                                                              |
| ReferenceError | 引用的变量不存在           | Uncaught ReferenceError：xxx is not defined<br/>（未捕获的引用错误：xxx 是未被定义的） |
| TypeError      | 数据类型不正确的错误       | Uncaught TypeError：Cannot read property 'xxx' of undefined<br>（未捕获的类型错误：你不能在undefined上去读取xxx属性） |
| RangeError     | 数据值不在其所允许的范围内 | Uncaught RangeError：Maximum call stack size exceeded<br>（未捕获的范围错误：超过最大调用堆栈大小） |
| SyntaxError    | 语法错误                   | Uncaught SyntaxError：Unexpected string<br>（未捕获的语法错误：意想不到的字符串） |

##### 错误处理

捕获错误 `try...catch`

```js
try {
  	let a;
    console.log(a.xxx);
} catch (error) {
    console.dir(error);
}
console.log('出错之后');
```

抛出错误 `throw error`

```js
// 抛出错误
function something() {
  if (Date.now() % 2 === 1) {
    console.log("当前时间为奇数");
  } else {
    throw new Error("当前时间为偶数");
  }
}

// 捕获错误
try {
  something();
} catch (error) {
  alert(error.message);
}
```



##### 错误对象

```js
try {
    console.log(a);
} catch (error) {
  	// message属性：错误相关信息
    console.log(error.message);
  	// stack属性：函数调用栈记录信息
  	console.log(error.stack);
}
```



### Promise的理解和使用

#### 1.Promise是什么？

##### 理解

抽象表达：Promise是JS中进行异步编程的新的解决方案。（旧的是纯回调的形式）

具体表达：

- 从语法上来说：Promise是一个构造函数。
- 从功能上来说：Promise对象用来封装一个异步操作并可以获取其结果。

##### promise的状态改变

一个 `Promise` 必然处于以下几种状态之一：

- *待定（pending）*：初始状态，既没有被兑现，也没有被拒绝。
- *已兑现（fulfilled）*：意味着操作成功完成。
- *已拒绝（rejected）*：意味着操作失败。



- pending变为resolved（执行内部resove() ）

- pending变为rejected（执行内部reject() ）

> 只有这两种，且一个Promise对象只能改变一次（要么成功，要么失败）
>
> 无论变为成功还是失败，都会有一个结果数据
>
> 成功结果数据一般称为value，失败的结果数据一般称为reason

##### promise的基本流程

1. 创建一个Promise对象，初始状态为 `pending`
2. 执行异步操作
   - 成功了，执行resolve()，一旦执行了该函数，Promise状态就会变为 `fulfilled`，然后走`.then()`，每一个 `.then()` 方法还会返回一个新生成的 promise 对象，这个对象可被用作链式调用。
   - 失败了，执行reject()，一旦执行了该函数，Promise状态就会变为 `rejected`，然后走.catch()，catch会返回新的Promise对象。

> .then()可以处理成功或失败，.catch()只能处理失败

##### promise的基本使用

```js
new Promise((resolve,reject)=>{
  resolve();
  reject();
})
.then(onFulfilled, onRejected)
.catch(onRejected);
```

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



#### 2.为什么要用Promise？

##### (1) 指定回调函数的方式更加灵活

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

  

##### (2) 支持链式调用，可以解决回调地狱问题

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



#### 3.如何使用Promise？

##### API

1 Promise构造函数：Promise(excutor){}

excutor函数：执行器 (resolve,reject) => {}

resolve函数：内部定义成功时调用的函数 value => {}

reject函数：内部定义失败时调用的函数 reason => {}

> excutor会在Promise内部立即同步回调，异步操作在执行器中执行

2 Promise.prototype.then方法：(onResolved, onRejected) => {}

onResolved函数：成功的回调函数	(value) => {}

onRejected函数：失败的回调函数	(reason) => {}

> 指定用于得到成功value的成功回调和用于得到失败reason的失败回调，返回一个新的promise实例对象

3 Promise.prototype.catch方法：(onRejected) => {}

onRejected函数：失败的回调函数	(reason) => {}

> then()的语法糖，相当于：then(undefined, onRejected)

4 Promise.resolve方法：(value) => {}

value：成功的数据或Promise对象

> 返回一个成功/失败的promise对象

5 Promise.reject方法：(reason) => {}

reason:失败的原因

> 返回一个失败的promise对象

6 Promise.all方法：(promises) => {}

promises：包含n个promise的数组

> 返回一个新的promise，只有所有的promise都成功才成功，只要有一个失败就直接失败
>
> 返回一个数组，跟数组先后顺序保持一致

7 Promise.race方法：(promises) => {}

promises：包含n个promise的数组

> 返回一个新的promise，第一个**完成**的promise的结果状态就是最终的结果状态



```js
new Promise((resolve,reject) => {
  
})
.then(onResolved, onRejected)
.catch(onRejected)
```

##### 关键问题

1. 如何改变promise的状态？

resolve(value)：如果当前是pending就会变为fulfilled

reject(reason)：如果当前是pending就会变为rejected

throw new Error() 抛出异常：如果当前是pending就会变为rejected



2. 一个promise指定多个成功/失败回调函数，都会调用吗？

当promise改变为对应状态时都会调用

```js
const p = new Promise((resolve,reject) => {
  throw 3; // 抛出异常,promise变为rejected状态,reason为抛出的3
})
p.then(value => {}, reason => { console.log('reason1', reason)})
p.then(value => {}, reason => { console.log('reason2', reason)})
```



3.改变promise状态和指定回调函数谁先谁后？

- 都有可能，正常情况下是先指定回调再改变状态，但也可以先改状态再指定回调

  ```js
  // 先指定回调再改变状态
  new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(1); // 后改变的状态（同时指定数据），异步执行回调函数
    }, 1000)
  }).then( // 先指定回调函数，保存当前指定的回调函数，后面才有机会调用
    value=>{},
    reason=>{}
  )
  
  // 先改状态再指定回调
  // 方式1：在执行器中直接调用reslove()/reject()
  new Promise((resolve,reject)=>{
  	resolve(1); // 先改变的状态（同时指定数据）
  }).then( // 后指定回调函数，异步执行回调函数
    value=>{},
    reason=>{}
  )
  
  // 方式2：延迟更长时间才能调用then()
  const p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(1); // 先改变的状态（同时指定数据）
    }, 1000)
  })
  setTimeout(()=>{
    p.then( // 后指定回调函数，异步执行回调函数
      value=>{},
      reason=>{}
    )
  }, 1100)
  ```

- 如何先改状态再指定回调？

  - 在执行器中直接调用reslove()/reject()
  - 延迟更长时间才能调用then()

- 什么时候才能得到数据？

  - 如果先指定的回调，那当状态发生改变时，回调函数就会调用，得到数据
  - 如果先改变的状态，那当指定回调时，回调函数就会调用，得到数据

4.promise.then()返回的新promise的结果状态由什么决定？

- 简单表达
  - 由then()指定的回调函数执行的结果决定

- 详细表达
  - 如果抛出异常，新promise变为rejected，reason为抛出的异常
  - 如果返回的是非promise的任意值，新promise变为resolved，value为返回的值
  - 如果返回的是另一个新promise，此promise的结果就会成为新promise的结果

```js
new Promise((resolve,reject)=>{
	resolve(1);
}).then( 
  value=>{
    console.log('onResolved1', value); // 1
  },
  reason=>{
    console.log('onRejected1', reason);
  }
).then( 
  value=>{
    console.log('onResolved2', value); // undefined
  },
  reason=>{
    console.log('onRejected2', reason);
  }
)
```

