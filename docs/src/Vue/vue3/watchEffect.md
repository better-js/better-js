# watchEffect

立即运行一个函数，同时响应式地追踪其依赖，并在依赖更改时重新执行。返回值是一个用来停止该副作用的函数。

1. 不需要手动传入任何参数，能监听页面中所有数据的改变

2. 在页面加载的时候，优先调用一次
3. 无法获取到原值，只能得到变化后的值
4. 在里面用到谁，就自动监听谁

```vue
<template>
  <div>num: {{ num }}</div>
  <div>age: {{ obj.age }}</div>
  <button @click="increment">增加</button>
</template>

<script lang="ts" setup>
import {ref, reactive, watchEffect} from 'vue'

let num = ref(10)
let obj = reactive({
  age: 10
})

// 不需要手动传入任何参数，在里面用到谁，就自动监听谁
watchEffect(() => {
  console.log('num', num.value) // 11
  console.log('age', obj.age) // 11
})

const increment = () => {
  num.value++
  obj.age++
}
</script>
```



## watch对比watchEffect

1. 都能监听响应式数据的变化，不同的是监听数据变化的方式不同
2. watch：要明确指出监视的内容
3. watchEffect：不用明确指出监视的数据（函数中用到哪些属性，那就监视哪些属性）
