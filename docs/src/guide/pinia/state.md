# State

在 Pinia 中，state 被定义为一个返回初始状态的函数。这使得 Pinia 可以同时支持服务端和客户端。

```ts
import {defineStore} from "pinia";

export const useCounterStore = defineStore('counter', {
    // 为了完整类型推理，推荐使用箭头函数
    state: () => {
        return {
            count: 0
        }
    },
})
```



## 访问state

```ts
const store = useCounterStore()
// 访问
store.count++
```



## 重置state

:::danger 注意

- 在定义 `store` 时如果使用的是**Options对象**：在 `$reset()` 内部，会调用 `state()` 函数来创建一个新的状态对象，并用它替换当前状态。

- 如果使用的是**Setup函数**则需要自己创建 `$reset()` 方法实现对 `state` 的状态重置。

:::

:::code-group

```ts [Options对象版]
const store = useCounterStore()
// 重置
store.$reset()
```

```ts [Setup函数版]
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)

  function $reset() {
    count.value = 0
  }

  return { count, $reset }
})
```

:::

## 变更state

变更state的方式有三种：

1. 直接修改
2. 调用 `$patch` 方法
3. 调用 `action` 修改

:::code-group

```ts [1.直接修改]
const store = useCounterStore()
store.count++
```

```ts [2.$patch]
const store = useCounterStore()
// 补丁对象
store.$patch({
  count: store.count + 1,
})
// 函数:适用于复杂场景，如集合的修改
store.$patch((state) => {
  state.count++
})
```

```ts [3.action]
const store = useCounterStore()
store.increment()
```

:::



## 替换state

你**不能完全替换掉** store 的 state，因为那样会破坏其响应性。但是，你可以 *patch* 它。

```ts
const store = useCounterStore()
store.$patch({ count: 24 })
```



## 订阅state

可以通过 store 的 `$subscribe()` 方法侦听 state 及其变化。

```ts
const store = useCounterStore()

store.$subscribe((mutation, state) => {
  console.log(mutation, state)
})
```

