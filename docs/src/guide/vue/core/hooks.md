# Hooks

什么是hook：本质是一个函数，把`setup`函数中使用的`Composition API`进行了封装，类似于`vue2.x`中的`mixin`。

自定义hook的优势：复用代码, 让`setup`中的逻辑更清楚易懂。

## 未使用自定义Hooks的代码

```vue
<template>
  <button @click="getDogs">获取狗狗图片</button>
  <br/>
  <img v-for="(dog,index) in dogLists" :key="index" :src="dog" alt=""/>
</template>

<script lang="ts" name="ParentComp" setup>
import axios from "axios";
import {reactive} from "vue";

let dogLists = reactive([])
const getDogs = async () => {
  let res = await axios.get("https://dog.ceo/api/breed/hound/afghan/images/random")
  dogLists.push(res?.data?.message)
};
</script>

<style>
img {
  height: 100px;
}
</style>
```



## 使用自定义Hooks后的代码

:::code-group

```vue {8,10} [App.vue]
<template>
  <button @click="getDogs">获取狗狗图片</button>
  <br/>
  <img v-for="(dog,index) in dogLists" :key="index" :src="dog" alt=""/>
</template>

<script lang="ts" name="ParentComp" setup>
import useDog from "@/hooks/useDog";

const {dogLists, getDogs} = useDog()
</script>

<style>
img {
  height: 100px;
}
</style>
```

```ts [useDog.ts]
import axios from "axios";
import {onMounted, reactive} from "vue";

export default function () {
    // 数据
    let dogLists = reactive([])
    // 方法
    const getDogs = async () => {
        let res = await axios.get("https://dog.ceo/api/breed/hound/afghan/images/random")
        dogLists.push(res?.data?.message)
    };
    onMounted(() => {
        getDogs()
    })
    // 向外部提供东西
    return {
        dogLists,
        getDogs
    }
}
```

:::
