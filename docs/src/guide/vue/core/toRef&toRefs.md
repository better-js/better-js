# toRef() 和 toRefs()

:::tip

**作用**：将一个**响应式对象**（`reactive` 包裹的对象）中的每一个属性，转为 `ref` 对象

`toRef` 和 `toRefs` 功能一致，但是 `toRefs` 可以批量转换

:::



如果我们从一个响应式对象身上解构某个属性时，解构出来的属性不是响应式的

```js
let person = reactive({
	name: 'dancy',
	age: 18
})

// 这里的name和age不是响应式的
let { name, age } = person

// 找到一个响应式对象，读出它的属性
let name = person.name
let age = person.age
```





## toRef()

```vue
<template>
  <div>
    <p>obj.num: {{ obj.num }}</p>
    <p>obj.num: {{ numRef }}</p>
  </div>
  <button @click="add">reactive增加</button>
  <button @click="increment">toRefs增加</button>
</template>

<script lang="ts" setup>
import {reactive, toRef} from 'vue'
// 引用类型响应式
let obj = reactive({
  num: 18,
})
// 解构引用类型，实现独立响应式
let numRef = toRef(obj, 'num')

const add = () => {
  // reactive变量修改
  obj.num++
}
const increment = () => {
  // toRefs变量修改
  numRef.value++
}
</script>
```



## toRefs()

将一个响应式对象转换为一个普通对象，这个普通对象的每个属性都是指向源对象相应属性的 ref。每个单独的 ref 都是使用 `toRef()` 创建的。

`toRefs` 在调用时只会为源对象上可以枚举的属性创建 ref。如果要为可能还不存在的属性创建 ref，请改用 `toRef`。

```vue
<template>
  <div>
    <p>obj.num: {{ obj.num }}</p>
    <p>num: {{ num }}</p>
  </div>
  <div>
    <p>obj.age: {{ obj.age }}</p>
    <p>age: {{ age }}</p>
  </div>
  <button @click="add">reactive增加</button>
  <button @click="increment">toRefs增加</button>
</template>

<script lang="ts" setup>
import {reactive, toRefs} from 'vue'
// 引用类型响应式
let obj = reactive({
  num: 18,
  age: 20
})
// 解构引用类型，实现独立响应式
let {num, age} = toRefs(obj)
const add = () => {
  // reactive变量修改
  obj.num++
  obj.age++
}
const increment = () => {
  // toRefs变量修改
  num.value++
  age.value++
}
</script>
```

