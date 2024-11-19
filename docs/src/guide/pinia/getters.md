# Getter

当 `state` 中的数据，需要经过处理后再使用时，可以使用 `getters` 配置。

可以通过 `defineStore()` 中的 `getters` 属性来定义它们。**推荐**使用箭头函数，并且它将接收 `state` 作为第一个参数

```ts
import {defineStore} from "pinia";

export const useCounterStore = defineStore('counter', {

    state: () => ({count: 0}),

    getters: {
        double: (state) => state.count * 2,
    },

})
```



## 访问getter

```ts
const store = useCounterStore()

store.double
```