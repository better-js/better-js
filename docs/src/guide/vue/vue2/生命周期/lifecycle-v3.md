# 生命周期

## 概念

Vue组件实例在创建时要经历一系列的初始化步骤，在此过程中 Vue会在合适的时机，调用特定的函数，从而让开发者有机会在特定阶段运行自己的代码，这些特定的函数统称为：生命周期钩子

## 规律

生命周期整体分为四个阶段，分别是：创建、挂载、更新、销毁，每个阶段都有两个钩子，一前一后。



| Vue2          | Vue3            |                             |
| ------------- | --------------- | --------------------------- |
| beforeCreate  | setup           | 创建前                      |
| created       | setup           | 创建完毕                    |
| beforeMount   | onBeforeMount   | 挂载前                      |
| mounted       | onMounted       | 挂载完毕                    |
| beforeUpdate  | onBeforeUpdate  | 更新前                      |
| updated       | onUpdated       | 更新完毕                    |
| beforeDestroy | onBeforeUnmount | Vue2销毁前 / Vue3卸载前     |
| destroyed     | onUnmounted     | Vue2销毁完毕 / Vue3卸载完毕 |

在 `onMounted` 获取DOM元素，或通过nextTick



## Vue2

Vue2的生命周期

> 创建阶段：`beforeCreate`、`created`
>
> 挂载阶段：`beforeMount`、`mounted`
>
> 更新阶段：`beforeUpdate`、`updated`
>
> 销毁阶段：`beforeDestroy`、`destroyed`

:::code-group

```vue [父组件]
<template>
  <div>
    <Child v-if="isShow" />
    <button @click="changeChild">销毁子组件</button>
  </div>
</template>

<script>
import Child from "./components/Child.vue";
export default {
  name: "ParentComp",
  components: {
    Child,
  },
  data() {
    return {
      isShow: true
    }
  },
  methods: {
    changeChild() {
      this.isShow = !this.isShow
    }
  },
  beforeCreate() {
    console.log("父组件-创建前");
  },
  created() {
    console.log("父组件-创建完毕");
  },
  beforeMount() {
    console.log("父组件-挂载前");
  },
  mounted() {
    console.log("父组件-挂载完毕");
  },
  beforeUpdate() {
    console.log("父组件-更新前");
  },
  updated() {
    console.log("父组件-更新完毕");
  },
  beforeDestroy() {
    console.log("父组件-销毁前");
  },
  destroyed() {
    console.log("父组件-销毁完毕");
  }
};
</script>
```

```vue [子组件]
<template>
    <div>{{ name }}</div>
</template>
<script>
export default {
    name: 'ChildComp',
    data() {
        return {
            name: 'MyChild'
        }
    },
    beforeCreate() {
        console.log("子组件-创建前");
    },
    created() {
        console.log("子组件-创建完毕");
    },
    beforeMount() {
        console.log("子组件-挂载前");
    },
    mounted() {
        console.log("子组件-挂载完毕");
    },
    beforeUpdate() {
        console.log("子组件-更新前");
    },
    updated() {
        console.log("子组件-更新完毕");
    },
    beforeDestroy() {
        console.log("子组件-销毁前");
    },
    destroyed() {
        console.log("子组件-销毁完毕");
    }
}
</script>
```

:::





## Vue3

Vue3的生命周期

> 创建阶段：`setup`
>
> 挂载阶段：`onBeforeMount`、**`onMounted`**
>
> 更新阶段：`onBeforeUpdate`、**`onUpdated`**
>
> 卸载阶段：**`onBeforeUnmount`**、`onUnmounted`

:::code-group

```vue [父组件]
<template>
  <h2>父组件</h2>
  <hr/>
  <child-comp v-if="isShow"/>
  <button @click="changeChild">销毁子组件</button>
</template>

<script lang="ts" name="ParentComp" setup>
import ChildComp from "@/components/ChildComp.vue";
import {ref, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated} from "vue";

let isShow = ref(true)

function changeChild() {
  isShow.value = !isShow.value
}

console.log('父组件-setup')
onBeforeMount(() => {
  console.log('父组件-挂载前')
})
onMounted(() => {
  console.log('父组件-挂载完毕')
})
onBeforeUpdate(() => {
  console.log('父组件-更新前')
})
onUpdated(() => {
  console.log('父组件-更新完毕')
})
onBeforeUnmount(() => {
  console.log('父组件-卸载前')
})
onUnmounted(() => {
  console.log('父组件-卸载完毕')
})
</script>
```

```vue [子组件]
<template>
  <h2>子组件</h2>
</template>

<script lang="ts" name="ChildComp" setup>
import {onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated} from "vue";

console.log('子组件-setup')
onBeforeMount(() => {
  console.log('子组件-挂载前')
})
onMounted(() => {
  console.log('子组件-挂载完毕')
})
onBeforeUpdate(() => {
  console.log('子组件-更新前')
})
onUpdated(() => {
  console.log('子组件-更新完毕')
})
onBeforeUnmount(() => {
  console.log('子组件-卸载前')
})
onUnmounted(() => {
  console.log('子组件-卸载完毕')
})
</script>
```

:::
