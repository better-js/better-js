# v-bind

html标签中的属性默认是不能解析变量的（默认不能写vue语法），我们需要解决这个问题就需要进行**属性绑定**，属性绑定是单向的，即数据流向视图。

缩写：`:`

## 动态设置html的标签属性

```jsx
<img v-bind:src="url"></img>
```

## 操作 class

```jsx
// 对象：键就是类名，值是布尔值。如果值为true则有这个类，反之则无
<div class="box" :class="{box1: bool, box2: flag}"></div>
 
// 数组：数组中所有的类都会添加到标签上，本质上就是一个class列表
<div :class:"[box, box1, box2]"></div>

// 三元写法
<div :class="bool ? 'active':''}"></div>
```

## 操作 style

```jsx
// 对象写法
<div :style="{width, height}"></div>
```











