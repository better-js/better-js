# watch

:::tip 小提示

作用：侦听数据的变化（和Vue2中的watch作用一致）

特点：`watch()` 默认是懒侦听的，即仅在侦听源发生变化时才执行回调函数。

语法：`watch(sources, callback, options)`

|      | 参数     | 参数描述                     | 值                                                           |
| ---- | -------- | ---------------------------- | ------------------------------------------------------------ |
| 1    | sources  | 侦听器的**源**               | 一个 ref<br />一个响应式对象<br />一个函数，返回一个值<br />由以上类型的值组成的数组 |
| 2    | callback | 在发生变化时要调用的回调函数 | 这个回调函数接受三个参数：新值、旧值，以及一个用于注册副作用清理的回调函数。 |
| 3    | options  | 一个对象（可选的参数）       | **`immediate`** ：在侦听器创建时立即触发回调。第一次调用时旧值是 `undefined`。<br /> **`deep`**：如果源是对象，强制深度遍历，以便在深层级变更时触发回调。<br /> **`flush`**：调整回调函数的刷新时机。<br /> **`onTrack / onTrigger`**：调试侦听器的依赖。 <br />**`once`**：只运行一次回调，在第一次回调运行后，侦听程序自动停止。 |

:::

## 1 侦听ref定义的数据

### 基本类型

侦听 `ref` 定义的【基本类型】数据：直接写数据名即可，侦听的是其 `value` 值的改变

```vue {13-19}
<template>
  <div>
    {{ num }}
    <button @click="add">增加</button>
  </div>
</template>

<script lang="ts" setup>
import {ref, watch} from 'vue'

let num = ref(0)

let stopWatch = watch(num, (value, oldValue) => {
  console.log(value, oldValue)
  // 当value等于10时停止侦听
  if (value === 10) {
    stopWatch()
  }
})

function add() {
  num.value += 1
}
</script>
```

### 对象类型

侦听 `ref` 定义的【对象类型】数据：直接写数据名，侦听的是对象的地址值，若想侦听对象内部的数据，要手动开启深度侦听

:::danger 注意

若修改的是 `ref` 定义的对象中的属性，newValue和oldValue都是新值，因为它们是同一个对象

若修改整个 `ref` 定义的对象，newValue是新值，oldValue是旧值，因为不是同一个对象了

:::

```vue
<template>
  <div>
    <p>{{ person.name }}</p>
    <p>{{ person.age }}</p>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改</button>
  </div>
</template>

<script lang="ts" setup>
import {ref, watch} from 'vue'

let person = ref({
  name: '钢铁侠',
  age: 30
})

watch(person, (value, oldValue) => {
  console.log(value, oldValue)
}, {deep: true, immediate: true})

function changeName() {
  person.value.name += '~'
}

function changeAge() {
  person.value.age += 1
}

function changePerson() {
  person.value = {
    name: '美国队长',
    age: 30
  }
}
</script>
```



## 2 侦听一个响应式对象

侦听 `reactive` 定义的【对象类型】数据，默认开启了深度侦听，并且该深度侦听无法关闭。

注意：newValue和oldValue都是新值，因为它们是同一个对象

```vue
<template>
  <div>
    <p>{{ person.name }}</p>
    <p>{{ person.age }}</p>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改</button>
  </div>
</template>

<script lang="ts" setup>
import {reactive, watch} from 'vue'

let person = reactive({
  name: '钢铁侠',
  age: 30
})

watch(person, (value, oldValue) => {
  console.log(value, oldValue)
})

function changeName() {
  person.name += '~'
}

function changeAge() {
  person.age += 1
}

function changePerson() {
  Object.assign(person, {
    name: '美国队长',
    age: 30
  })
}
</script>
```

## 3 一个函数，返回一个值

侦听 ref 或 reactive 定义的【对象类型】数据中的某个属性

1. 若该属性值是基本类型，需要写成函数形式

2. 若该属性值是对象类型，可直接写，也可写成函数形式，建议写成函数形式
   - 侦听的是地址值，如需侦听对象内部，需要手动开启深度侦听

```vue
<template>
  <div>
    <p>{{ person.name.familyName }}</p>
    <p>{{ person.age }}</p>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改</button>
  </div>
</template>

<script lang="ts" setup>
import {reactive, watch} from 'vue'

let person = reactive({
  name: {
    familyName: 'Stark',
    firstName: 'Tony'
  },
  age: 30
})
// 侦听响应式对象中的某个属性，且该属性是基本类型，要写成函数式
watch(() => person.age, (value, oldValue) => {
  console.log(value, oldValue)
})
// 侦听响应式对象中的某个属性，且该属性是对象类型，可以直接写，也可以写成函数式，更推荐写成函数

watch(person.name, (value, oldValue) => {
  console.log('只侦听属性值，更改地址值后不再继续侦听', value, oldValue)
})

watch(() => person.name, (value, oldValue) => {
  console.log('只侦听地址值', value, oldValue)
})
  
watch(() => person.name, (value, oldValue) => {
  console.log('同时侦听属性值和地址值', value, oldValue)
}, {deep: true})


function changeName() {
  person.name.familyName += '~'
}

function changeAge() {
  person.age += 1
}

function changePerson() {
  Object.assign(person, {
    name: {
      familyName: 'Rogers',
      firstName: 'Steve'
    },
    age: 30
  })
}
</script>
```

## 4 由以上类型的值组成的数组

```vue
<template>
  <div>
    <p>{{ person.name.familyName }}</p>
    <p>{{ person.age }}</p>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改</button>
  </div>
</template>

<script lang="ts" setup>
import {reactive, watch} from 'vue'

let person = reactive({
  name: {
    familyName: 'Stark',
    firstName: 'Tony'
  },
  age: 30
})

watch([person, () => person.name], (value, oldValue) => {
  console.log(value, oldValue)
})


function changeName() {
  person.name.familyName += '~'
}

function changeAge() {
  person.age += 1
}

function changePerson() {
  Object.assign(person, {
    name: {
      familyName: 'Rogers',
      firstName: 'Steve'
    },
    age: 30
  })
}
</script>
```

