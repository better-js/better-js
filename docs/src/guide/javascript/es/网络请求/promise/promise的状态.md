# Promise的状态

实例对象中的一个属性 `PromiseState`

```
Promise {<pending>}
▸[[Prototype]]: Promise
 [[PromiseState]]: "pending"
 [[PromiseResult]]: undefined
```

一个 `Promise` 必然处于以下几种状态之一：

- ***待定（pending）***：初始状态，既没有被兑现，也没有被拒绝。
- ***已兑现（fulfilled）***：意味着操作成功完成。
- ***已拒绝（rejected）***：意味着操作失败。

```js
new Promise((resolve,reject)=>{
  resolve(); // pending变为fulfilled
  // or
  reject(); // pending变为rejected
})
.then(onFulfilled, onRejected)
.catch(onRejected);
```

- 执行内部 `resove()` ：pending变为fulfilled

- 执行内部 `reject()` ：pending变为rejected

> 只有这两种，且一个Promise对象只能改变一次（要么成功，要么失败）
>
> 无论变为成功还是失败，都会有一个结果数据
>
> 成功结果数据一般称为value，失败的结果数据一般称为reason


