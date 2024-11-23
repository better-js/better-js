# unref()

如果参数是 ref，则返回内部值，否则返回参数本身。

这是 `val = isRef(val) ? val.value : val` 计算的一个语法糖。

```vue
<template>
  <div>{{ name }}今年{{ age }}岁了</div>
</template>

<script lang="ts" setup>
import {ref, unref} from 'vue'

let name = ref('dancy')
let age = 18

console.log(unref(name)) // dancy
console.log(unref(age)) // 18

</script>
```

