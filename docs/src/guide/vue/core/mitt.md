# mitt

与消息订阅与发布（`pubsub`）功能类似，可以实现任意组件间通信。

:::code-group

```sh [1.安装]
npm install --save mitt
```

```ts [2.emitter.ts]
// 引入mitt
import mitt from 'mitt'

// 调用mitt
const emitter = mitt()

// 暴露
export default emitter
```

:::

## API

### all

拿到所有绑定事件

```ts
// 清除所有事件
emitter.all.clear()
```

### on

监听事件

```ts
// 监听某个事件
emitter.on('事件名', (e) => {
  console.log
}); 

// 监听所有事件
emitter.on('*', (type, e) => console.log(type, e) )
```



### off

解绑事件

```ts
// 解绑某个事件
emitter.off('事件名', (e) => {}); 
```



### emit

触发事件

```ts
// 触发某个事件
emitter.emit('事件名', { a: 'b' })
```



## 案例

> 提供数据的组件，在合适的时候触发事件
>
> 接收数据的组件：绑定事件、同时在销毁前解绑事

:::code-group

```vue [parent]
<template>
  <h2>父组件</h2>
  <hr/>
  <child-comp/>
  <hr/>
  <brother-comp/>
</template>

<script lang="ts" name="ParentComp" setup>
import ChildComp from "@/components/ChildComp.vue";
import BrotherComp from "@/components/BrotherComp.vue";

</script>
```

```vue [child]
<template>
  <h2>子组件</h2>
  <p>玩具：{{ toy }}</p>
  <button @click="emitter.emit('send-toy', toy)">玩具给兄弟</button>
</template>

<script lang="ts" name="ChildComp" setup>
import {ref} from 'vue'
import emitter from "@/utils/emitter";

let toy = ref('钢铁侠')
</script>
```

```vue [brother]
<template>
  <h2>兄弟组件</h2>
  <p>哥哥给的玩具：{{ toys }}</p>
</template>

<script lang="ts" name="BrotherComp" setup>
import emitter from "@/utils/emitter";

import {onUnmounted, ref} from "vue";

let toys = ref('')

emitter.on('send-toy', (value: string) => {
  toys.value = value
})

// 在组件卸载时解绑send-toy事件
onUnmounted(() => {
  emitter.off('send-toy')
})
</script>
```

:::
