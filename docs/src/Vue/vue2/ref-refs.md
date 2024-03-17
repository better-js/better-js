# ref和$refs

Vue中获取页面里的某个元素（标签或组件），可以给它绑定ref属性，然后通过 `this.$refs.ref值` 获取元素身上的内容为自己所用。

```vue
<template>
  <div>
    <p ref="op">努力努力再努力</p>
    <button @click="btn">按钮</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    btn() {
      console.dir(this.$refs.op);
    },
  },
};
</script>

<style lang="less" scoped></style>
```

