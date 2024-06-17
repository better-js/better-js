# isRef()

检查某个值是否为 ref，返回的结果为一个布尔值

```vue
<template>
  <div>{{ name }}今年{{ age }}岁了</div>
</template>

<script lang="ts" setup>
import {ref, isRef} from 'vue'

let name = ref('dancy')
let age = 18

console.log(isRef(name)) // true
console.log(isRef(age)) // false
</script>
```

