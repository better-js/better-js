# $parent

`$parent` 用于 **子传父**

值为对象，当前组件的父组件实例对象。

:::code-group

```vue [父组件]
<template>
  <h2>父组件</h2>
  <p>{{ num }}</p>
  <hr/>
  <child-comp/>

</template>

<script lang="ts" name="ParentComp" setup>
import ChildComp from "@/components/ChildComp.vue";
import {ref} from "vue";

let num = ref(10)
defineExpose({num})
</script>
```

```vue {3,8-10} [子组件]
<template>
  <h2>子组件</h2>
  <button @click="change($parent)">修改父组件数据</button>
  <hr/>
</template>

<script lang="ts" name="ChildComp" setup>
function change(parent) {
  parent.num -= 1
}
</script>
```

:::
