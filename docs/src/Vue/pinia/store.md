# 定义Store

 Store 是用 `defineStore()` 定义的

`defineStore(id, options|storeSetup)`

它的第一个参数要求是一个**独一无二的**名字

它的第二个参数可接受两类值：Setup 函数或 Option 对象。

## 定义Store

:::code-group

```ts {8-9,11-12,14-17} [Setup函数版]
import {defineStore} from "pinia";
import {ref, computed} from "vue";

// 与 Vue 组合式 API 的 setup 函数 相似
// 我们可以传入一个函数，该函数定义了一些响应式属性和方法，并且返回一个带有我们想暴露出去的属性和方法的对象。
export const useCounterStore = defineStore('counter', () => {
  
    // ref() 就是 state 属性
    const count = ref(0)

    // computed() 就是 getters
    const doubleCount = computed(() => count.value * 2)

    // function() 就是 actions
    function increment() {
        count.value++
    }

    return {count, doubleCount, increment}
})
```

```ts {7-8,10-13,15-20} [Options对象版]
import {defineStore} from "pinia";

// 与 Vue 的选项式 API 类似
// 我们也可以传入一个带有 state、actions 与 getters 属性的 Option 对象
export const useCounterStore = defineStore('counter', {
  
    // store 的数据 (data)
    state: () => ({count: 0}),
  
    // store 的计算属性 (computed)
    getters: {
        double: (state) => state.count * 2,
    },
  
    // store 的方法 (methods)
    actions: {
        increment() {
            this.count++
        },
    },
})
```

:::



## 使用Store

一旦 store 被实例化，你可以直接访问在 store 的 `state`、`getters` 和 `actions` 中定义的任何属性。

`store` 是一个用 `reactive` 包装的对象，这意味着不需要在 getters 后面写 `.value`

```vue
<template>
  <p>{{ store.count }} * 2 = {{ store.double }}</p>
  <button @click="add">加</button>
</template>

<script lang="ts" name="App" setup>
import {useCounterStore} from '@/stores/counter'

const store = useCounterStore()

function add() {
  store.increment() // action
  console.log(store.count) // state
  console.log(store.double) // getter
}
</script>
```

`state` 和 `getters` 不能直接从 store 中解构，为了从 store 中提取属性时保持其响应性，你需要使用 `storeToRefs()`，它将为每一个响应式属性创建引用。

```vue {7,11,16-17}
<template>
  <p>{{ count }} * 2 = {{ double }}</p>
  <button @click="add">加</button>
</template>

<script lang="ts" name="App" setup>
import {storeToRefs} from 'pinia'
import {useCounterStore} from '@/stores/counter'

const store = useCounterStore()
const {count, double} = storeToRefs(store)
const {increment} = store

function add() {
  increment()
  console.log(count.value)
  console.log(double.value)
}
</script>
```

