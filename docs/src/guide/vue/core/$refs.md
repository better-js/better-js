# $refs

`$refs` 用于 **父传子**

值为对象，包含所有被`ref`属性标识的`DOM`元素或组件实例。

:::code-group

```vue {4,24-28} [父组件]
<template>
  <h2>父组件</h2>
  <button @click="change">修改子组件数据</button>
  <button @click="getAllComp($refs)">获取所有子组件实例对象</button>
  <hr/>
  <child-comp ref="cc"/>
  <brother-comp ref="bc"/>

</template>

<script lang="ts" name="ParentComp" setup>
import ChildComp from "@/components/ChildComp.vue";
import BrotherComp from "@/components/BrotherComp.vue";
import {ref} from "vue";

let cc = ref()
let bc = ref()

function change() {
  cc.value.num -= 1
  bc.value.num += 1
}

function getAllComp(refs:{[key:string]:any}) {
  for (let key in refs) {
  	console.log(refs[key])  
  }
}

</script>
```

```vue [子组件1]
<template>
  <h2>子组件</h2>
  {{ num }}
  <hr/>
</template>

<script lang="ts" name="ChildComp" setup>
import {ref} from "vue";

let num = ref(10)
defineExpose({num})
</script>
```

```vue [子组件2]
<template>
  <h2>兄弟组件</h2>
  {{ num}}
</template>

<script lang="ts" name="BrotherComp" setup>
import {ref} from "vue";

let num = ref(10)
defineExpose({num})
</script>
```

:::

