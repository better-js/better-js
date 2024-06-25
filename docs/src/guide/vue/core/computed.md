# computed()

:::tip

作用：根据已有数据计算出新数据（和vue2中的computed作用一致）

有缓存

:::

## 只读取不修改

语法：`let 变量 = computed(getter函数)`

接受一个 getter 函数，返回一个只读的响应式 `ref` 对象。该 ref 通过 `.value` 暴露 getter 函数的返回值。

```vue
<template>
  <div>
    姓：<input type="text" v-model="familyName"/> <br/>
    名：<input type="text" v-model="firstName"/> <br/>
    全名：<span>{{ fullName }}</span>
  </div>
</template>

<script lang="ts" setup>
import {computed, ref} from 'vue'

let familyName = ref('')
let firstName = ref('')

let fullName = computed(() => {
  return familyName.value + '-' + firstName.value
})
console.log(fullName) // ComputedRefImpl
</script>
```

## 可读可写

语法：`let 变量 = computed({get:()=>{},set:()=>{}})`

它也可以接受一个带有 `get` 和 `set` 函数的对象来创建一个可写的 ref 对象。

```vue
<template>
  <div>
    姓：<input type="text" v-model="familyName"/> <br/>
    名：<input type="text" v-model="firstName"/> <br/>
    全名：<span>{{ fullName }}</span> <br/>
    <button @click="update">修改</button>
  </div>
</template>

<script lang="ts" setup>
import {computed, ref} from 'vue'

let familyName = ref('')
let firstName = ref('')

let fullName = computed({
  get: () => {
    // 获取值的时候会执行
    return familyName.value + '-' + firstName.value
  },
  set: (val) => {
    // 修改值的时候会执行
    const [family, first] = val.split('-')
    familyName.value = family
    firstName.value = first
  }
})

function update() {
  // 修改fullName的值
  fullName.value = 'su-xingxing'
}
</script>
```



> #### v-model能双向绑定给Vuex中数据么？
>
> 首先 `v-model` 专门绑定给普通的变量，而普通变量是无法操作Vuex的，但是可以绑定给一个计算属性，由计算属性的 `get` 和 `set` 去操作Vuex

