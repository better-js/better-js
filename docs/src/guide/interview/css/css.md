## 简述Chrome盒模型与IE盒模型的区别（掌握）

- 盒模型就是元素在浏览器页面中的占位大小，由内而外分别是 `content` `padding` `border` `margin`

- 谷歌盒模型内容的大小等于`content` 的大小，所以它在页面中的占位大小为 `内容大小` + `padding` + `border` + `margin`

- IE盒模型内容的大小等于`content` + `padding` + `border` 的大小，所以它在页面中的占位大小为 `内容大小` + `margin` 





## BFC（掌握）

BFC全称  `Block Formatting Context` ，中文为 “块级格式化上下文” ，它是指一个隔离的独立容器，容器内部元素的渲染不会影响外部。

触发BFC的条件：

- float不为none
- position为absolute、fixed
- overflow不为visible
- display为inline-block、table-cell、table-caption、flex、flow-root等

开启BFC后可以用来清除浮动、防止外边距合并以及外边距塌陷





## 什么是弹性布局？（掌握）

为父元素设置 `display:flex;` 即可开启弹性布局，弹性布局可以改变内部子元素的布局方式，为布局提供较大的灵活性。

当父元素开启弹性布局后，子元素的 `float`、`clear`、`vertical-align` 属性将失效。

可以使用flex的各种属性让盒子到自己想要的位置





## html5有哪些新特性？（掌握）

- 语义化的标签 如：header、nav、aside等
- 媒体标签 如audio、video
- Canvas绘图

- SVG绘图
- 地理定位
- Web Worker
- Web Storage
  - sessionStorage 会话存储
  - localStorage 本地离线存储
- Web Socket
  - Web Socket协议是基于TCP的一种新的网络协议，它可以实现浏览器与服务器的全双工通信。





## CSS3有哪些新特性（掌握）

- 圆角属性 border-radius
- 盒子阴影 box-shadow
- 文本阴影 text-shadow
- 盒子自减属性 box-sizing
- 过渡 transition
- 变换 transform
  - translate 位移
  - scale 缩放
  - rotate 旋转
- 媒体查询 @media
- 渐变 linear-gradient
- 背景图大小 background-size
- 弹性布局 flex
- 动画 animation





## 如何让一个盒子在页面垂直水平居中（掌握）

- 定位 + margin:auto
- 定位 + 位移
- 定位 + margin-top + margin-left
- 弹性布局





## 前端性能优化方案（掌握）

- 减少DOM操作
- 部署前，图片压缩，代码压缩
- 优化js代码结构，减少冗余代码
- 减少http请求
- 使用内容分发cdn加速
- 使用静态资源存储
- 图片延时加载





## 介绍一下你对浏览器内核的理解？（掌握）

浏览器内核分为渲染引擎 和 JS引擎

渲染引擎就是负责将页面进行输出到显示器上

js引擎主要负责解析和执行js脚本，实现网页动态的效果





## 如何实现响应式布局

方案一：vw/vh

方案二：使用CSS3 媒体查询@media，根据媒体查询设置不同分辨率下的css样式，来适配不同的屏幕

方案三：UI框架

方案四：flex弹性布局





## css画三角形

```css
/* 设置1个盒子 */
div {
  /* 将盒子宽高设为0 */
	width: 0;
  height: 0;
  /* 为盒子设置边框，并将颜色设置为transparent */
  border: 30px solid transparent;
  /* 单独为想要的三角形设置颜色 */
  border-bottom-color: pink;
  /* 照顾低版本浏览器的兼容性 */
  font-size: 0;  
  line-height: 0;
}
```



## 过渡和动画的区别是什么

`transition` 动画可以在一定时间内实现元素的初始状态到结束状态的一种过渡效果，但是功能有限，只能用于制作一些简单的动画效果，如图片的放大、旋转、位移等。

`animation` 动画也称之为关键帧动画，可以制作类似于Flash的动画效果，通过关键帧控制动画的每一步，更为精确，从而制作的动画更加复杂



## BFC

```
block formatting contexts即块级格式化上下文，具有BFC特性的元素可以简单理解看作是一个容器，或者是一个区域，在这个容器里面的子元素布局上是不会影响容器外面的元素的
```



## BFC的规则及作用

```
1.计算BFC元素高度时，浮动元素也参与计算
2.属于同一个BFC的两个相邻的盒子垂直的margin值会发生重叠
3.BFC就是页面中一个独立的容器，容器内的子元素是不会影响容器外面的元素的
利用BFC可以避免margin的合并或者是塌陷的问题，还可以用来清除浮动
```





## flex布局了解么

```

```



## flex实现一个垂直居中怎么做呀





## CSS水平垂直居中



## 斑马线的效果





## \<div abc="123">\</div>,想让div变成黑色

```css
div[abc="123"]{
	background-color:"#000"
}
```





## 回流和重绘



## js动画和css动画
