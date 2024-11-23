# ref

> 接受一个内部值，返回一个响应式的、可更改的 ref 对象，此对象只有一个指向其内部值的属性 `.value`

:::tip ref

```js
import {ref} from 'vue'

// 语法: let 变量名 = ref(初始值)
// 对于 let count = ref(0) 来说，count不是响应式的，count.value是响应式的。
let count = ref(0)
// JS中操作数据需要 .value，但模板中不需要 .value，直接使用即可。
console.log(count.value) // 0
```

作用：定义**基本类型**、**对象类型**的响应式数据。

返回值：一个 `RefImpl` 的实例对象，简称 `ref对象` 或 `ref`，`ref` 对象的 `value` **属性是响应式的**。

:::



## 使用场景

### 1 创建基本类型的响应式数据

```vue
<template>
  <!-- 在 template 中使用时无需加 .value -->
  <div>{{ num }}</div>
  <button @click="increment">增加</button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
let num = ref(10)

// 用ref包裹的变量，在js中调用的时候，需要使用 .value 才能获取和修改值
const increment = () => {
  num.value++
}
</script>
```

ref也可以将引用类型变成响应式的，但是麻烦，不推荐；

如果将一个对象赋值给 ref，那么这个对象将通过 `reactive()` 转为具有深层次响应式的对象。

```vue
<template>
  <div>{{ obj.num }}</div>
  <button @click="increment">增加</button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
// ref 让引用数据类型变成响应式
let obj = ref({
  num: 10
})

const increment = () => {
  obj.value.num++
}
</script>
```



### 2 获取DOM元素

:::tip

作用：用于注册模版引用

- 用在普通DOM标签上，获取的是DOM节点

- 用在组件标签上，获取的是组件实例对象

:::

#### （1）用于普通DOM标签

在模板中通过 **`ref = "xxx"`** 绑定DOM元素，在setup中通过 **`let xxx = ref()`** 来获取。

注意只有当 **`变量名`** 和 **`标签上ref的属性值`** 保持一致时，才可以获取绑定的DOM元素，打印DOM元素时需要使用 **`变量名.value`**。

```vue
<template>
  <div ref="box">我是DOM元素</div>
</template>

<script lang="ts" setup>
import {ref, nextTick, onMounted} from 'vue'

// 当变量名和标签中ref的属性值一一对应时，就可以获取该DOM元素
let box = ref()

// 通过nextTick 组件更新完毕后执行
nextTick(() => {
  console.log('nextTick', box.value) // <div>我是DOM元素</div>
  console.log('nextTick', box.value.textContent) // 我是DOM元素
})

// setup里还没有dom，得通过onMounted操作dom
onMounted(() => console.log('onMounted', box.value))
</script>
```

#### （2）用于组件标签

```vue

```





## 源码剖析

