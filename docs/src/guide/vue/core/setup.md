# setup语法糖

`setup` 是 Vue 3 中的核心，作为 Composition API 的入口，它允许我们将组件的数据、方法、计算属性和监视器等集中管理。

特点

- `setup` 函数返回的对象直接在模板中可用。
- `setup` 中 `this` 是 `undefined`。
- `setup` 函数在 `beforeCreate` 之前调用，优先于所有生命周期钩子。

## 基本 `setup`

返回对象时，对象中的属性和方法可以直接在模板中使用。

返回函数时，可以自定义渲染内容。

:::code-group

```vue [返回值为对象]
<template>
  <p>{{ name }}</p>
  <p>{{ num }}</p>
  <button @click="increment">增加</button>
</template>

<script lang="ts">
import {
  defineComponent,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref
} from 'vue'

// 所有内容都需要写在setup函数中
export default defineComponent({
  setup() {
    // 生命周期
    console.log('我是setup函数')
    
    onBeforeMount(() => {
      console.log('onBeforeMount')
    })

    onMounted(() => {
      console.log('onMounted')
    })

    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
    })

    onUpdated(() => {
      console.log('onUpdated')
    })

    onBeforeUnmount(() => {
      console.log('onBeforeUnmount')
    })

    onUnmounted(() => {
      console.log('onUnmounted')
    })

    // 普通变量
    let name = 'dongxu'
    
    // 响应式变量: ref让基本数据类型变成响应式数据，script内部使用时需要用.value
    let num = ref(0)
    
    // 方法
    const increment = () => {
      num.value++
    }
    
    // 变量和方法需要return出去才能在template中使用
    return {
      name,
      num,
      increment
    }
  }
})
</script>
```

```vue [返回值为函数]
<script lang='ts'>
export default {
  setup() {
    return () => 'Hello Vue3'
  }
}
</script>
```

:::

## setup语法糖

`<script setup>` 是 setup 函数的语法糖，允许我们直接在 `<script>` 标签中编写组件逻辑而无须导出。

```vue
<template>
  <div>{{ num }}</div>
  <button @click="increment">增加</button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

let num = ref(10)
const increment = () => {
  num.value += 1
}
</script>
```



## setup 与 Options API

- Options API 中可以访问 `setup` 中的属性和方法。
- `setup` 中不能访问 Options API 的配置。
- 冲突时，`setup` 优先。

```vue {17}
<template>
  <h2>Options API</h2>
  <p> {{ a }} </p>
  <p> {{ b }} </p>
  <h2>Composition API</h2>
  <p> {{ x }}</p>
</template>
<script lang="ts">
export default {
  name: 'App',
  data() {
    return {
      a: 'aaa',
      b: this.x,
    }
  },
  setup() {
    const x = 'ccc'

    return {
      x,
    }
  }
}
</script>
```

















