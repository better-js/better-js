# 用vue实现样式绑定

```vue
<!-- 第一种绑定class -->
<div :class="['classA', 'classB']"></div>

<!-- 第二种绑定class -->
<div :class="{'classA': true, 'classB' : false}"></div>

<!-- 第一种绑定style -->
<div :style="{fontSize: '16px', color: 'red'}"></div>

<!-- 第二种绑定style -->
<div :style="[{fontSize: '16px', color: 'red'}]"></div>
```

