# v-show

根据表达式真假，动态切换元素css的display属性，实现控制元素的显示隐藏

- 表达式为真时，display的属性值为block
- 表达式为假时，display的属性值为none

适用场景：频繁切换显示隐藏的场景

```jsx
<span v-show="true">展示</span>
<span v-show="false">隐藏</span>
```









