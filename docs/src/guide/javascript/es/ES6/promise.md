# Promise

## Promise出现的目的

Promise是一种异步编程的解决方案，它由社区最早提出和实现，ES6将其写进了语言标准，统一了用法，原生提供了Promise对象

功能：避免了回调地狱，把异步代码改成调用起来像同步代码。（异步代码同步化）

所谓 `Promise` ，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise是一个对象，从它可以获取异步操作的消息。Promise提供了统一的API，各种操作可以用同样的方法进行处理。

一个Promise对象有以下几种状态：

- pending：初始状态，既不是成功，也不是失败状态。
- fulfilled：意味着操作成功完成。
- rejected：意味着操作失败。

Promise对象有以下两个特点：

（1）对象的状态不受外界影响。`Promise` 对象代表一个异步操作，有三种状态：`pending`（进行中）、`fulfilled`（已成功）和 `rejected`（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是`Promise` 这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法更改。

（2）一旦状态改变，就不会再变，任何时候都可以得到这个结果。`Promise`对象的状态改变，只有两种可能：从`pending` 变为 `fulfilled` 和从 `pending` 变为 `rejected`。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就被称为resolved（已定型）。如果改变已经发生了，你再对 `Promise` 对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。 



> #### 什么是回调地狱？
>
> ajax本质是同步的，它的success是异步的（ajax本身是个函数，success函数作为其参数，回调）
>
> ajax 请求和响应需要时间，受网络，响应内容大小等等一些环境的影响，同步执行去发起多个ajax请求，就会导致最终获取响应的顺序不可控
>
> 回调地狱的目的就是控制响应的顺序，在第一个ajax请求成功的回调中发起第二个ajax请求，在第二个ajax请求成功的回调中发起第三个ajax请求....，以此实现请求的按序响应。
>
> 每个成功的回调不可能只用来发起下一个ajax请求，还有对当前请求结果的一些操作，这可能就是若干行代码。在这种回调地狱里编写代码就太难受了，来回找书写代码的位置，太头疼了。
>
> Promise的出现就是为了解决这个问题，异步代码同步化



## Promise的基本语法

Promise是一个内置构造函数。内置构造函数主要就是用来创建对象的。

> ##### new Promise( (resolve,reject)=>{} )
>
> 首先`new Promise()` ，形参是一个回调函数，回调函数有两个参数，分别是：`resolve`、`reject`，这两个参数也是函数。

`Promise` 承诺	`resolve` 坚定信念	`reject` 拒绝	`pending` 悬而未决的	`fulfilled` 满足了	`rejected` 拒绝

### Promise的三个状态和两个特点

```js
var p = new Promise((resolve,reject)=>{
  // 默认状态 --- pending
  // 成功状态 --- fulfilled
  resolve()	// pending ==> fulfilled
  // 失败状态 --- rejected
  reject()	// pending ==> rejected
})


/*
三个状态：
  默认一进来Promise是pending状态
  当第一个回调resolve被调用时，状态由pending转为fulfilled
  如果说第二个回调reject被调用，状态则由pending转为rejected
两个特点：
  特点1：状态不受外部影响
  特点2：状态一但发生改变，将不再变化（不存在后面覆盖前面一说，就是resolve在前，那就是成功状态，不会受后面reject的影响而改变，反之亦是如此）
*/
```

### 基本语法

Promise内部不做任何数据处理，交给then和catch

`.then() ` 方法处理成功的回调 --- 也就是resolve打包的数据

`.catch()` 方法处理失败的回调 --- 也就是catch打包的数据

```js
// 假设 flag 是ajax的返回状态
let flag = true;  
let p=new Promise((resolve,reject)=>{
    if(flag){
        resolve('成功返回的数据');//pending-->fulfilled  异步操作成功的回调函数
    }else{
        reject('失败抛出的异常'); //pending-->reject     异步操作失败的回调函数
    }
})

p.then(data => {						//在外面调用then处理成功的逻辑
    console.log(data);			//fulfilled  
}).catch(err=>{							//在外面调用catch处理失败的逻辑
    console.log(err);				//reject
})
// then方法会在异步成功后调用，catch方法会在异步失败后调用
```



## Promise同步异步？

```js
let p = new Promise((resolve,reject)=>{
  if (true) {
    resolve();
  } else {
    reject();
  }
  console.log('Promise')
})
p.then(data=>{
  console.log('then')
})
console.log('全局')

/*
执行顺序
  Promise
  全局
  then
*/
```

> ##### Promise本身是同步的，`.then` 和  `.catch` 是异步的



## Promise中then的链式调用

1、第一个then执行完会执行第二个then

2、then里面的函数的返回值，会被下一个then的形参接收

3、如果返回的是一个promise对象，下一个then的形参接收到的不是这个promise对象，而是这个promise对象内部调用resolve时候的实际参数



## Promise解决回调地狱

```js
let p1 = new Promise((resolve, reject) => {
  $.ajax({
    url: "接口地址",
    type: "GET",
    success(res) {
      resolve(res);
    }
  });
});
let p2 = new Promise((resolve, reject) => {
  $.ajax({
    url: "接口地址",
    type: "GET",
    success(res) {
      resolve(res);
    }
  });
});
let p3 = new Promise((resolve, reject) => {
  $.ajax({
    url: "接口地址",
    type: "GET",
    success(res) {
      resolve(res);
    }
  });
});

// then链式调用解决回调地狱，将异步代码同步化，看起来像同步的，then是异步的
p1.then((data) => {
  console.log(data);
  return p2;
}).then((data)=>{
  console.log(data);
  return p3;
}).then((data)=>{
  console.log(data);
});
/*
	then链式调用的特点
	1. 第一个then执行完会执行第二个then
	2. then里面的函数的返回值，会被下一个then的形参接收
	3. 如果返回的是一个promise对象，下一个then的形参接收到的不是这个promise对象，而是这个promise对象内部调用resolve时候的实际参数
*/
```

## Promise解决多重请求的函数封装

```js
function getPromiseObj(url,method){
  return new Promise((resolve,reject)=>{
    $.ajax({
      url:'请求路径'+url,
      type:method,
      success(res){
        resolve(res)
      }
    })
  })
}

let p1 = getPromiseObj('/index/index','GET')
p1.then(data=>{
  console.log(data)
})

```

## Promise的all()方法和race()方法的使用

### all()方法

`Promise.all([多个Promise对象])`

统一处理多个异步程序，类似 `&&` 的关系（一失败就失败，全成功才成功）

> #####  特点：
>
> 1. 如果多个异步程序都是成功状态，p的状态就是成功的，多个异步程序的成功结果会打包成一个数组统一返回
>
> 2. 但凡发现一个失败，最快得到失败结果的直接返回

```js
let p1 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("p1");
  }, 2000);
});
let p2 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("p2");
  }, 1000);
});

let p = Promise.all([p1, p2]);
p.then((data) => {
  console.log(data); // (2) ['p1', 'p2']
});
```

### race()方法

`Promise.race([多个Promise对象])`

> ##### 特点：
>
> 谁快返回谁，跟成功失败没关系

```js
let p1 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("p1");
  }, 2000);
});
let p2 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("p2");
  }, 1000);
});

let p = Promise.race([p1, p2]);
p.then((data) => {
  console.log(data); // p2
});
```



## async/await的用法

> then链式调用解决回调地狱，将异步代码改成看起来像同步代码（方便维护）
>
> 链式调用是同步的，但是底层的 `.then` 是异步的，所以说看起来像同步代码，实际还是异步代码

`async` `await` 一组关键字，真正实现异步代码同步化

`async` 用来修饰函数的，表示这是一个异步函数

`await` 在异步函数中使用，表示同步代码（将异步程序变成同步代码），`await` 后面的异步执行完毕才会执行后续的同步代码



```js
let p1 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("p1");
  }, 2000);
});
let p2 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("p2");
  }, 1000);
});

async function getRes() {
  await p1.then((data) => console.log(data));
  await p2.then((data) => console.log(data));
  console.log("我是同步代码");
}
getRes();

/*
	打印结果
		p1
		p2
		我是同步代码	
*/
```









