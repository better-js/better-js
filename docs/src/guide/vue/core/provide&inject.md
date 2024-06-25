# provide 和 inject

概述：实现**祖孙组件**直接通信

具体使用：

* 在祖先组件中通过 `provide` 配置向后代组件提供数据
* 在后代组件中通过 `inject` 配置来声明接收数据



:::code-group

```vue [父组件]
<template>
  <h2>父组件</h2>
  <p>资产：{{ money }}</p>
  <hr/>
  <child-comp/>

</template>

<script lang="ts" name="ParentComp" setup>
import ChildComp from "@/components/ChildComp.vue";
import {ref, provide} from "vue";

let money = ref(10000)

function updateMoney(value: number) {
  money.value += value
}

// 提供数据
provide('moneyContext', {money, updateMoney})
</script>
```

```vue [子组件]
<template>
  <h2>子组件</h2>
  <p>子组件中不用编写任何东西，是不受到任何打扰的</p>
  <hr/>
  <posterity-comp/>
</template>

<script lang="ts" name="ChildComp" setup>
import PosterityComp from "@/components/PosterityComp.vue";
</script>
```

```vue [孙组件]
<template>
  <h2>后代组件</h2>
  <p>资产：{{ money }}</p>
  <button @click="updateMoney(6)">点我</button>
</template>

<script lang="ts" name="PosterityComp" setup>
// 注入数据
import {inject} from "vue";

let {money, updateMoney} = inject('moneyContext', {
  money: 0, 
  updateMoney: (x: number) => {}
})
</script>
```

:::



## provide

`provide()` 接受两个参数，且必须在组件的 `setup()` 阶段同步调用。

第一个参数是要注入的 key，可以是一个字符串或者一个 symbol

第二个参数是要注入的值。

```ts
provide('key', 传递的数据)
```



## inject

注入一个由祖先组件或整个应用 (通过 `app.provide()`) 提供的值。`inject()` 必须在组件的 `setup()` 阶段同步调用。

第一个参数是注入的 key。Vue 会遍历父组件链，通过匹配 key 来确定所提供的值。如果父组件链上多个组件对同一个 key 提供了值，那么离得更近的组件将会“覆盖”链上更远的组件所提供的值。如果没有能通过 key 匹配到值，`inject()` 将返回 `undefined`，除非提供了一个默认值。

第二个参数是可选的，即在没有匹配到 key 时使用的默认值。

第二个参数也可以是一个工厂函数，用来返回某些创建起来比较复杂的值。在这种情况下，你必须将 `true` 作为第三个参数传入，表明这个函数将作为工厂函数使用，而非值本身。

```ts
inject('key', 默认值)
```



## hasInjectionContext()

如果 `inject()` 可以在错误的地方 (例如 `setup()` 之外) 被调用而不触发警告，则返回 `true`。此方法适用于希望在内部使用 `inject()` 而不向用户发出警告的库。



