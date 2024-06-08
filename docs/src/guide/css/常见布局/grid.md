# Grid

`Grid` 网格布局



## Grid布局和flex布局

flex布局和grad布局有实质的区别：

- flex布局是一维布局
  - flex布局一次只能处理一个维度上的元素布局，一行或一列。
- grid布局是二维布局
  - grid布局是将容器划分成了 `行` 和 `列`，产生了一个个的网格。



## 基本概念

|           |      |
| --------- | ---- |
| container | 容器 |
| items     | 项目 |
| row       | 行   |
| column    | 列   |
| gap       | 间距 |
| area      | 区域 |
| content   | 内容 |

Grid布局属性可以分为两大类：容器属性和项目属性

## 容器属性

声明 `display: grid` 则该容器是一个块级元素

声明 `display: inline-grid` 则容器元素为行内元素

注意：设为网格布局以后，容器子元素（项目）的 `float`、`display: inline-block`、`display: table-cell`、`vertical-align`、`column-*`等设置都将失效。 





## 项目属性

```html
```

