# emit

::: tip

**子组件**：（1）契机：一个点击事件；（2）先声明emit，`const emit = defineEmits<{ (e: string, v: 传递的数据的类型): void }>()`；（3）然后在方法内通过 `emit('自定义事件名','数据')` 传递数据；

**父组件**：子组件标签绑定自定义事件，自定义事件触发的方法的形参就是子组件传递的数据；

注意：和 `defineProps` 一样， `defineEmits` 也无需引入就可以自动地在 `<script setup>` 中可用。

:::

:::code-group

```vue [子组件]
<template>
  <h2>子组件</h2>
  <button @click="send">发送</button>
</template>

<script lang="ts" name="ChildComp" setup>
const emit = defineEmits<{ (e: string, v: string): void }>()

let send = () => {
  emit('ChildData', 'child data')
}
</script>
```

```vue [父组件]
<template>
  <h2>父组件</h2>
  <hr/>
  <child-comp @childData="getChildData"/>
</template>

<script lang="ts" name="ParentComp" setup>
import ChildComp from "@/components/ChildComp.vue";

const getChildData = (value) => {
  console.log(value)
}
</script>
```

:::

```vue
/* 子组件 */
<template>
  <h2>子组件</h2>
  <button @click="send">发送</button>
</template>

<script lang="ts" setup>
// 范型指定emit的参数
const emit = defineEmits<{ (e: string, v: string): void }>()

const send = () => {
  // 自定义事件名，发送的内容
  emit('receive', '小苏同学')
}
</script>

/* 父组件 */
<template>
  <h2>父组件</h2>
  <hr />
  <Child @receive="getChildData"></Child>
</template>

<script lang="ts" setup>
import Child from './ChildView.vue'

// 自定义事件方法的形参就是子组件传递的数据
const getChildData = (v: string) => {
  console.log(v)
}
</script>
```
