# $attrs 

1. `$attrs`用于实现**当前组件的父组件**，向**当前组件的子组件**通信（**祖→孙**）。

2. 具体说明：`$attrs`是一个对象，包含所有父组件传入的标签属性。

   >  注意：`$attrs`会自动排除`props`中声明的属性(可以认为声明过的 `props` 被子组件自己“消费”了)



:::code-group

```vue [父组件]
<template>
  <h2>父组件</h2>
  <hr/>
  <child-comp :a="a" :b="b" :c="c" :d="d" v-bind="{x:100,y:200}" :updateA="updateA"/>

</template>

<script lang="ts" name="ParentComp" setup>
import ChildComp from "@/components/ChildComp.vue";
import {ref} from "vue";

let a = ref(1)
let b = ref(2)
let c = ref(3)
let d = ref(4)

function updateA(value) {
  a.value = value
}

</script>
```

```vue [子组件]
<template>
  <h2>子组件</h2>
  <hr/>
  <posterity-comp v-bind="$attrs"/>
</template>

<script lang="ts" name="ChildComp" setup>
import PosterityComp from "@/components/PosterityComp.vue";
</script>
```

```vue [后代组件]
<template>
  <h2>后代组件</h2>
  <h4>a：{{ a }}</h4>
  <h4>b：{{ b }}</h4>
  <h4>c：{{ c }}</h4>
  <h4>d：{{ d }}</h4>
  <h4>x：{{ x }}</h4>
  <h4>y：{{ y }}</h4>
  <button @click="updateA(666)">点我更新A</button>
</template>

<script lang="ts" name="PosterityComp" setup>
defineProps(['a', 'b', 'c', 'd', 'x', 'y', 'updateA'])
</script>
```

:::
