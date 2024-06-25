# 插槽

插槽：当好几个父组件引入同一个子组件的时候，希望每次引入都有不同的变化

## 匿名插槽

::: tip

**子组件**：定义 `<slot></slot>` 插槽占位

**父组件**：利用 `<slot>自定义内容</slot>` 替换 子组件的插槽占位

:::

```vue
/* 父组件 */
<template>
  <h2>父组件</h2>
  <hr />
  <Child>
    <slot>我是Child的匿名插槽</slot>
  </Child>
</template>

<script lang="ts" setup>
import Child from './ChildView.vue'
</script>

/* 子组件 */
<template>
  <div>我是子组件</div>
  <slot></slot>
</template>
```

## 具名插槽

::: tip

**子组件**：定义 `<slot name="xx"></slot>` 插槽占位；

**父组件**：调用 `<template v-slot:xx>自定义内容</template>` 替换子组件插槽占位；

注意：Vue3中 `v-slot:` 可以简写成 `#` ，即 `v-slot:xx` 可以简写成 `#xx`

:::

```vue
/* 父组件 */
<template>
  <Child>
    <template v-slot:aa>我是Child的具名插槽aa</template>
    <template #bb>我是Child的具名插槽bb</template>
  </Child>
</template>

<script lang="ts" setup>
import Child from './ChildView.vue'
</script>

/* 子组件 */
<template>
  <div>子组件</div>
  <slot name="aa"></slot>
  <hr />
  <slot name="bb"></slot>
</template>
```

## 插槽传值

::: tip

**子组件**：通过 `<slot name="插槽名" :自定义属性="子组件数据"></slot>` 传值；

**父组件**：通过 `<template #插槽名="scope"></template>` ，在 `template` 内通过 `scope.自定义属性` 获取值；

:::

```vue
/* 父组件 */
<template>
  <Child>
    <template v-slot:aa="scope">
      <ul>
        <li>{{ scope.msg }}</li>
        <li>{{ scope.title }}</li>
      </ul>
    </template>
  </Child>
</template>

<script lang="ts" setup>
import Child from './ChildView.vue'
</script>

/* 子组件 */
<template>
  <div>子组件</div>
  <slot name="aa" :msg="msg" :title="title"></slot>
</template>

<script lang="ts" setup>
let msg = '我是子组件的数据',
  title = '子组件的具名插槽aa'
</script>
```

