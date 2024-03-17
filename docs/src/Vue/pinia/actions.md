# Action

Action 相当于组件中的 method。它们可以通过 `defineStore()` 中的 `actions` 属性来定义，**并且它们也是定义业务逻辑的完美选择。**

```ts
import {defineStore} from "pinia";

export const useCounterStore = defineStore('counter', {

    state: () => ({count: 0}),

    actions: {
        increment() {
            this.count++
        },
    },
})
```

类似 getter，action 也可通过 `this` 访问**整个 store 实例**，并支持**完整的类型标注(以及自动补全)**。**不同的是，`action` 可以是异步的**，你可以在它们里面 `await` 调用任何 API，以及其他 action！



## 访问action

```ts
const store = useCounterStore()

store.increment()
```





## 订阅action