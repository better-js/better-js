# nextTick

在挂载阶段之前，我们是获取不到DOM节点及其节点上的数据的，如果我们想要在挂载阶段之前的函数中获取挂载后的数据，就需要使用$nextTick

$nextTick有两种基本使用方法：

```vue
<template>
  <div>
    <p ref="op">这是p标签</p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    // 这里并不会立即执行，等到mounted渲染完毕之后再调用
    // 写法一
    this.$nextTick(() => {
      console.log(this.$refs.op);
    });
    // 写法二
    this.$nextTick().then(() => {
      console.log(this.$refs.op);
    });
  },
};
</script>
```

