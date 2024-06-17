# reactive

::: tip 

**作用**：定义一个响应式对象

**语法**：`let 响应式对象 = reactive(源对象)`

**返回值**：一个 `Proxy` 的实例对象，简称：响应式对象

reactive 定义的响应式数据是 `深层次` 的

:::

## reactive 创建对象类型的响应式数据

```vue
<template>
  <div>{{ obj.age }}</div>
  <button @click="increment">增加</button>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
let obj = reactive({
  age: 18
})
const increment = () => {
  obj.age++
}
</script>
```

只有用ref包裹的内容允许修改整体，如果用reactive包裹的内容，只能修改里面的某个元素，不能修改整体

```vue
<template>
  <div>{{ obj.age }}</div>
  <button @click="update">修改</button>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
let obj = reactive({
  age: 18
})
const update = () => {
  Object.assign(obj, {age:20})
}
</script>
```



小案例

```vue
<template>
  <input type="checkbox" v-model="checkAll" />全选/全不选
  <ul>
    <li v-for="(item, index) in list" :key="index">
      <input type="checkbox" v-model="checklist[index]" /> {{ item }}
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { reactive, toRefs, computed } from 'vue'

const data = reactive({
  list: ['钢铁侠', '蜘蛛侠', '美国队长', '绿巨人', '黑寡妇'],
  checklist: [true, false, false, true, true]
})
const { list, checklist } = toRefs(data)

const checkAll = computed({
  get() {
    console.log('get')
    return !data.checklist.includes(false)
  },
  set(val) {
    console.log('set', val)
    data.checklist = data.list.map((item) => val)
  }
})
</script>
```



## ref对比reactive

|          | ref                            | reactive                                                     |
| -------- | ------------------------------ | ------------------------------------------------------------ |
| 数据定义 | 基本类型数据<br />对象类型数据 | 对象类型数据                                                 |
| 使用     | ref创建的变量必须使用 `.value` | reactive重新分配一个新对象，会失去响应式（可以使用 `Object.assign()` 去整体替换） |

若需要一个基本类型的响应式数据，必须使用 `ref`

若需要一个响应式对象，层级不深，`ref`、`reactive` 都可以

若需要一个响应式对象，且层级较深，推荐使用 `reactive`



### 扩展

vscode中可以使用 `volar` 插件自动添加 `.value`

<img src="/images/vue3/自动补充value.png" alt="自动补充value" style="zoom:50%;border-radius:20px" />
