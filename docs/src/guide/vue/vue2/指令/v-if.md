# v-if

## v-if

条件渲染，根据表达式真假，通过控制DOM元素的创建和移除，来实现显示隐藏

当和v-for一起使用时，v-for的优先级更高

场景：要么显示、要么隐藏，不频繁切换的场景

```jsx
<span v-if="flag"></span>
```



## v-else

辅助v-if进行判断渲染

为 v-if 或 v-else-if 添加 else 块，所以前一兄弟元素必须有 v-if 或 v-else-if

```jsx
<div v-if="type === 'A'">
  A
</div>
<div v-else>
  B
</div>
```



## v-else-if

辅助v-if进行判断渲染

表示 v-if 的 else if 块，所以前一兄弟元素必须有 v-if 或 v-else-if

```jsx
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else>
  C
</div>
```













