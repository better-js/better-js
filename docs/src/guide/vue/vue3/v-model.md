# v-model

v-model既能父传子，又能子传父

## v-model本质

```vue
<!-- 使用v-model指令 -->
<input type="text" v-model="val" />

<!-- v-model的本质是下面这行代码 -->
<input
 type="text"
 :value="val"
 @input="val = $event.target.value"
/>
```



## v-model用在组件标签上

:::code-group

```vue {3-8} [父组件]
<template>
  <h2>父组件</h2>
  <child-comp v-model="data"/> 
  <!-- v-model的本质是下面这行代码 -->
  <child-comp 
	:modelValue="data" 
	@update:modelValue="data = $event" 
  /> 

  <!-- modelValue的名也是可以更换，例如改成abc --> // [!code warning]
  <child-comp v-model:abc="data"/> // [!code warning]
  <child-comp // [!code warning]
	:abc="data" // [!code warning]
	@update:abc="data = $event" // [!code warning]
  /> // [!code warning]
</template>

<script lang="ts" name="ParentComp" setup>
import ChildComp from "@/components/ChildComp.vue";
import {ref} from "vue";
let data = ref('123')
</script>
```

```vue {7-11,21-22} [子组件]
<template>
  <h2>子组件</h2>
  <!--
    1.将接收的value值赋给input元素的value属性，目的是：为了呈现数据
    2.给input元素绑定原生input事件，触发input事件时，进而触发update:model-value事件
  -->
  <input 
	type="text" 
	:value="modelValue" 
	@input="emit('update:model-value', $event.target.value)" 
  /> 

  <input // [!code warning]
	type="text" // [!code warning]
	:value="abc" // [!code warning]
	@input="emit('update:abc', $event.target.value)" // [!code warning]
  /> // [!code warning]
</template>

<script lang="ts" name="ChildComp" setup>
defineProps(['modelValue']) 
const emit = defineEmits(['update:model-value']) 

defineProps(['abc']) // [!code warning]
const emit = defineEmits(['update:abc']) // [!code warning]
</script>
```

:::



## $event 到底是啥？啥时候能 .target

> 对于原生事件，`$event` 就是事件对象，能 `.target`
>
> 对于自定义事件，`$event` 就是触发事件时所传递的数据，不能 `.target`
