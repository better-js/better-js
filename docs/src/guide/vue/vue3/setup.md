# setup语法糖

`setup`是`Vue3`中一个新的配置项，值是一个函数，它是 `Composition API` **“表演的舞台**_**”**_，组件中所用到的：数据、方法、计算属性、监视......等等，均配置在`setup`中。

特点如下：

- `setup`函数返回的对象中的内容，可直接在模板中使用。
- `setup`中访问`this`是`undefined`。
- `setup`函数会在`beforeCreate`之前调用，它是“领先”所有钩子执行的。

## setup

若返回一个**对象**：则对象中的：属性、方法等，在模板中均可以直接使用

```vue
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

若返回一个**函数**：则可以自定义渲染内容

```vue
<script lang='ts'>
export default {
  setup() {
    return () => 'Hello Vue3'
  }
}
</script>
```



## setup语法糖

> `setup`函数有一个语法糖 `<script setup>`，这个语法糖可以让我们直接在 `<script>` 标签中编写组件逻辑（变量、事件、watch、computed、生命周期...）而无需显示地定义 `setup` 函数。

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

- `Vue2` 的配置（`data`、`methos`......）中**可以访问到** `setup`中的属性、方法。
- 但在`setup`中**不能访问到**`Vue2`的配置（`data`、`methos`......）。
- 如果与`Vue2`冲突，则`setup`优先。

```vue {17}
<template>
  <h2>Options API</h2>
  <p> {{ a }} </p>
  <p> {{ b }} </p>
  <p> {{ c }} </p>
  <h2>Composition API</h2>
  <p> {{ x }}</p>
  <p> {{ y }}</p>
</template>
<script>
export default {
  name:'App',
  data() {
    return {
      a: 'aaa',
      b: 18,
      c: this.x
    }
  },
  methods: {},
  setup() {
    let x = 'ccc'
    let y = 20

    return {
      x,
      y
    }
  }

}
</script>
```



## setup如何指定组件名字

::: code-group

```sh [安装插件]
npm i vite-plugin-vue-setup-extend -D
```

```ts {5,11} [vite.config.ts]
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueSetupExtend  from 'vite-plugin-vue-setup-extend'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueSetupExtend()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
```

```vue {4} [使用]
<template>
  <p> {{ name }} </p>
</template>
<script lang="ts" setup name="MyApp">
let name = 'my-app'
</script>
```

:::

















