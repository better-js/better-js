# CSS常见布局

## 圣杯布局 双飞燕布局 

- 最早淘宝使用

- 两侧盒子宽度固定，中间盒子自适应

  - 先写中间，再写两边

    ```html
    <div class="box">
    	<div class="cen">叩丁狼</div>
    	<div class="le">苏东旭</div>
    	<div class="ri">学前端</div>
    </div>
    ```

  - 中间宽度100%，所有盒子设置浮动

    ```css
    .cen {
      float: left;
    	width: 100%;
    	height: 300px;
    	padding-left: 200px;
    	padding-right: 200px;
    	box-sizing: border-box;
    }
    ```

  - 左边盒子 margin-left:-100%;

    ```css
    .le {
      float: left;
    	margin-left: -100%;
    	width: 200px;
    	height: 300px;
    	background-color: rgb(19, 235, 152);
    }
    ```

  - 右边盒子 margin-left:-自身宽度;

    ```css
    .ri {
      float: left;
    	margin-left: -200px;
    	width: 200px;
    	height: 300px;
    	background-color: rgb(44, 149, 229);
    }
    ```

  - 中间盒子 padding-left: 左边盒子宽度;padding-right:右边盒子宽度;box-sizing: border-box;



## 滑动门布局

- 布局结构

  ```html
  <li>
  	<a>
    	<span>内容</span>
    </a>
  </li>
  ```

- css设置

  - a相当于左边的门，设置背景图片和padding-left

    ```css
     li a {
    	display: block;
    	height: 35px;
    	line-height: 35px;
    	background: url(./images/left.png) no-repeat;
    	padding-left: 10px;
    }
    ```

  - span相当于右边的门，设置背景图片和padding-right（注意图片靠右显示）

    ```css
    li span {
    	display: block;
    	height: 35px;
    	background: url(./images/hdm.png) no-repeat right 0;
    	padding-right: 30px;
    }
    ```




## Grid

`Grid` 网格布局



### Grid布局和flex布局

flex布局和grad布局有实质的区别：

- flex布局是一维布局
  - flex布局一次只能处理一个维度上的元素布局，一行或一列。
- grid布局是二维布局
  - grid布局是将容器划分成了 `行` 和 `列`，产生了一个个的网格。



### 基本概念

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

### 容器属性

声明 `display: grid` 则该容器是一个块级元素

声明 `display: inline-grid` 则容器元素为行内元素

注意：设为网格布局以后，容器子元素（项目）的 `float`、`display: inline-block`、`display: table-cell`、`vertical-align`、`column-*`等设置都将失效。 





### 项目属性

```html

```

