# v-html

设置元素的 `innerHTML`

```jsx
<template>
  <div>
    <div v-html="link"></div>
  </div>
</template>

<script>
export default {
  name: "XiaoSu",
  components: {},
  data() {
    return {
      link: `<a href="https://codemydreams.github.io">小苏同学的博客</a>`,
    };
  },
};
</script>
```













