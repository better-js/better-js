# vue中实现防止模板渲染时闪烁的方法

```vue
//斗篷语法
<style>
  [v-cloak]{
    display:none
  }
</style>

<元素 v-cloak>{{xxx}}</元素>
```

