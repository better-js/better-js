# 传送门

Teleport传送门，可以把内部标签，通过to属性传到任意标签里面的底部

注意：to属性内写的是css选择器

```html
<!-- 原html结构 -->
<div id="app">
  <div class="father">
    <div class="son"></div>
  </div>
</div>
<!-- 通过Teleport传送之后的html结构 -->
<div id="app">
  <div class="father"></div>
  <div class="son"></div>
</div>
```

代码案例：

```vue
<template>
  <div class="father">
    <Teleport to="#app">
      <div class="son"></div>
    </Teleport>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.father {
  width: 500px;
  height: 500px;
  background-color: orange;
  position: relative;
}
.son {
  width: 100%;
  height: 300px;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
}
</style>
```

