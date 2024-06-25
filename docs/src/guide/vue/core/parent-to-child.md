# props

::: tip

**父组件**：自定义属性发送；

**子组件**：`defineProps` 接收；

注意：`defineProps` 在使用的时候无需引入，就可以自动地在 `<script setup>` 中可用。

:::



:::code-group

```vue [父组件]
<template>
  <h2>父组件</h2>
  <hr/>
  <child-comp :msg="msg"/>
</template>

<script lang="ts" name="ParentComp" setup>
import ChildComp from "@/components/ChildComp.vue";
import {ref} from 'vue'

let msg = ref('Parent Data')
</script>
```

```vue [子组件]
<template>
  <h2>子组件</h2>
  <p> {{ msg }} </p> // [!code error]
  <p> {{ props.msg }} </p> // [!code warning]
</template>

<script lang="ts" name="ChildComp" setup>
let props = defineProps(['msg']) // [!code error]
let props = defineProps({ // [!code warning]
  msg: { // [!code warning]
    type: String, // [!code warning]
    default: '' // [!code warning]
  } // [!code warning]
}) // [!code warning]

console.log('ChildComp', props) // proxy(object) 

// 在script中也可以使用父组件传递过来的数据
console.log('ParentData', props.msg)
</script>
```

:::
