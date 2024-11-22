## 移动web

- pc端
  - html + css  
  - 浮动+div 
  - 单位px

- 移动端
  - html + less 
  - 弹性布局 
  - 单位 rem



### 移动端基础

#### 1. 浏览器现状

- pc端常见浏览器
  - Chrome浏览器、火狐浏览器等等。
- 移动端浏览器
  - QQ浏览器、UC浏览器、百度手机浏览器等等。

移动端浏览器都是根据 `Webkit` 修改过来的内核。

**总结**：兼容移动端主流浏览器，处理Webkit内核浏览器即可。



#### 2. 手机屏幕现状

- 移动端设备屏幕尺寸非常多，碎片化严重。
- 作为开发者无需关注这些分辨率，因为我们常用的尺寸单位是px。
- https://material.io/devices/



### 视口

**视口（viewport）**就是浏览器显示页面内容的屏幕区域。视口可以分为布局视口、视觉视口和**理想视口**。



#### 1. 布局视口（layout viewport）

- 一般移动设备的浏览器都默认设置了一个布局视口，用于解决早期的PC端页面在手机上显示的问题。
- iOS, Android基本都将这个视口分辨率设置为 980px，所以PC上的网页大多都能在手机上呈现，只不过元素看上去很小，一般默认可以通过手动缩放网页。



#### 2.  视觉视口（visual viewport）

- 字面意思，它是用户正在看到的网站的区域。注意：是网站的区域。
- 我们可以通过缩放去操作视觉视口，但不会影响布局视口，布局视口仍保持原来的宽度。



#### 3. 理想视口（ideal viewport）

- 为了使网站在移动端有最理想的浏览和阅读宽度而设定。
- 理想视口，对设备来讲，是最理想的视口尺寸。
- 需要手动添写meta视口标签通知浏览器操作。
- meta视口标签的主要目的：布局视口的宽度应该与理想视口的宽度一致，简单理解就是设备有多宽，我们布局的视口就多宽。



#### 4.  meta视口标签

```text
<meta name="viewport" content="width=device-width, user-scalable=no, 
initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
```

| 属性          | 解释说明                                             |
| ------------- | ---------------------------------------------------- |
| width         | 宽度设置的是viewport宽度，可以设置device-width特殊值 |
| user-scalable | 用户是否可以缩放，yes或no（1或0）                    |
| initial-scale | 初始缩放比，大于0的数字                              |
| maximum-scale | 最大缩放比，大于0的数字                              |
| minimum-scale | 最小缩放比，大于0的数字                              |



#### 5. 标准的viewport设置

- 视口宽度和设备保持一致
- 不允许用户自行缩放
- 视口的默认缩放比例1.0
- 最大允许的缩放比例1.0
- 最小允许的缩放比例1.0



### 二倍图

#### 1. 物理像素&物理像素比

- 物理像素点指的是屏幕显示的最小颗粒，是物理真实存在的。这是厂商在出厂时就设置好了,比如苹果6\7\8 是 750* 1334。
- 我们开发时候的1px 不是一定等于1个物理像素的。
- PC端页面，1个px 等于1个物理像素的，但是移动端就不尽相同。
- 一个px能显示的物理像素点的个数，称为物理像素比或屏幕像素比。
- PC端 和 早前的手机屏幕 / 普通手机屏幕: 1CSS像素 = 1 物理像素的。
- Retina（视网膜屏幕）是一种显示技术，可以将把更多的物理像素点压缩至一块屏幕里，从而达到更高的分辨率，并提高屏幕显示的细腻程度。



#### 2. 多倍图

- 对于一张 50px * 50px 的图片,在手机 Retina 屏中打开，按照刚才的物理像素比会放大倍数，这样会造成图片模糊。
- 在标准的viewport设置中，使用倍图来提高图片质量，解决在高清设备中的模糊问题。比如：开发中我们需要一个50\*50像素的图片，那么就可以放一个100\*100的图片，手动缩小为50\*50像素。
- 通常使用二倍图， 因为iPhone 6\7\8 的影响，但是现在还存在3倍图4倍图的情况，这个看实际开发公司需求。
- 背景图片 注意缩放问题



#### 3.  背景缩放 background-size

```text
background-size: 背景图片宽度 背景图片高度;

宽度单位：长度|百分比|cover|contain;
cover：等比例拉伸，要完全覆盖盒子，可能背景图像显示不全。
contain：等比例拉伸，当宽度或者高度铺满盒子就不再进行拉伸了，可能有部分空白区域。
```



切图神器：cutterman



#### 4. 二倍精灵图做法

- 在firework里面把精灵图等比例缩放为原来的一半
- 之后根据大小 测量坐标
- 注意代码里面background-size也要写：精灵图原来宽度的一半



### 移动端技术解决方案

#### 1. 移动端浏览器

移动端浏览器基本以 webkit 内核为主，因此我们就考虑webkit兼容性问题。

我们可以放心使用 H5 标签和 CSS3 样式。

同时我们浏览器的私有前缀我们只需要考虑添加 webkit 即可



#### 2. CSS初始化 normalize.css

移动端 CSS 初始化推荐使用 normalize.css/

- Normalize.css：保护了有价值的默认值
- Normalize.css：修复了浏览器的bug
- Normalize.css：是模块化的
- Normalize.css：拥有详细的文档

官网地址： http://necolas.github.io/normalize.css/



#### 3. CSS3盒子模型 box-sizing

- 传统模式宽度计算：盒子的宽度 = CSS中设置的width + border + padding 
- CSS3盒子模型： 盒子的宽度 = CSS中设置的宽度width 里面包含了 border 和 padding 
- 也就是说，我们的CSS3中的盒子模型， padding 和 border 不会撑大盒子了

```text
/*CSS3盒子模型*/
box-sizing: border-box;

/*传统盒子模型*/
box-sizing: content-box;
```

- 移动端可以全部CSS3 盒子模型
- PC端如果完全需要兼容，我们就用传统模式，如果不考虑兼容性，我们就选择 CSS3 盒子模型



#### 4. 特殊样式

```css
/*CSS3盒子模型*/
box-sizing: border-box;
-webkit-box-sizing: border-box;

/*点击高亮我们需要清除清除 设置为transparent 完成透明*/
-webkit-tap-highlight-color: transparent;
 
/*在移动端浏览器默认的外观在iOS上加上这个属性才能给按钮和输入框自定义样式*/
-webkit-appearance: none;
 
/*禁用长按页面时的弹出菜单*/
img,a { -webkit-touch-callout: none; }
```







### 移动端常见布局

#### 移动端技术选型

- 单独制作移动端页面（主流）
  - 流式布局（百分比布局）
  - flex弹性布局（强烈推荐）
  - less+rem+媒体查询布局
  - 混合布局
- 响应式页面兼容移动端（其次）
  - 媒体查询
  - bootstarp



##### 1. 流式布局

- 流式布局，就是百分比布局，也称**非固定像素布局**。 
- 通过盒子的宽度设置成百分比来根据屏幕的宽度来进行伸缩，不受固定像素的限制，内容向两侧填充。 
- 流式布局方式是移动web开发使用的比较常见的布局方式。



- max-width 最大宽度 （max-height 最大高度）
- min-width 最小宽度 （min-height 最小高度）



##### 2. flex布局

1. 传统布局与flex布局

- 传统布局
  - 兼容性好
  - 布局繁琐
  - 局限性，不能在移动端很好的布局
- flex布局
  - 操作方便，布局极为简单，移动端应用很广泛
  - PC端浏览器支持情况较差
  - IE 11或更低版本，不支持或仅部分支持

建议：

PC端页面布局，使用传统布局

移动端或者不考虑兼容性问题的PC端页面布局，我们还是使用flex弹性布局。

flex布局后不分行内元素和块元素，都是有大小的



2. 布局原理

flex 是 flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性，任何一个容器都可以指定为 flex 布局。

- 当我们为父盒子设为 flex 布局以后，子元素的 float、clear 和 vertical-align 属性将失效。
- 伸缩布局 = 弹性布局 = 伸缩盒布局 = 弹性盒布局 = flex布局

采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。

```html
<div>
  <span></span>
  <span></span>
  <span></span>
</div>

div 就是 flex父容器。 
span 就是 子容器flex项目
子容器可以横向排列也可以纵向排列

```

总结flex布局原理：就是通过**给父盒子添加flex属性，来控制子盒子的位置和排列方式**。



3. flex布局父项常见属性

（1）常见父项属性

- flex-direction：设置主轴的方向

- justify-content：设置主轴上的子元素排列方式
- flex-wrap：设置子元素是否换行
- align-content：设置侧轴上的子元素的排列方式（多行）
- align-items：设置侧轴上的子元素排列方式（单行）
- flex-flow：复合属性，相当于同时设置了 flex-direction 和 flex-wrap



（2）flex-direction设置主轴的方向

- 主轴与侧轴

在 flex 布局中，是分为主轴和侧轴两个方向，同样的叫法有：行和列、x 轴和y 轴 

默认主轴方向就是 x 轴方向，水平向右

默认侧轴方向就是 y 轴方向，水平向下

- 属性值

flex-direction 属性决定主轴的方向（即项目的排列方向）
注意： 主轴和侧轴是会变化的，就看 flex-direction 设置谁为主轴，剩下的就是侧轴。而我们的子元素是跟着主轴来排列的

| 属性值                         | 说明               |
| ------------------------------ | ------------------ |
| **flex-direction: row **       | **默认值从左到右** |
| flex-direction: row-reverse    | 从右到左           |
| **flex-direction: column**     | **从上到下**       |
| flex-direction: column-reverse | 从下到上           |



（3）justify-content 设置主轴上的子元素排列方式

justify-content 属性定义了项目在主轴上的对齐方式

**注意： 使用这个属性之前一定要确定好主轴是哪个**

| 属性值                             | 说明                                            |
| ---------------------------------- | ----------------------------------------------- |
| **justify-content: flex-start**    | **默认值 从头部开始 如果主轴是x轴，则从左到右** |
| justify-content: flex-end          | 从尾部开始排列                                  |
| **justify-content: center**        | **在主轴居中对齐（如果主轴是x轴则 水平居中）**  |
| **justify-content: space-around**  | **平分剩余空间**                                |
| **justify-content: space-between** | **先两边贴边 再平分剩余空间（重要）**           |



（4）flex-wrap 设置子元素是否换行
默认情况下，项目都排在一条线（又称”轴线”）上。flex-wrap属性定义，flex布局中默认是不换行的。 

| 属性值              | 说明           |
| ------------------- | -------------- |
| flex-wrap: nowrap   | 默认值，不换行 |
| **flex-wrap: wrap** | **换行**       |



（5）align-items 设置侧轴上的子元素排列方式（单行 ）
该属性是控制子项在侧轴（默认是y轴）上的排列方式 在子项为单项（单行）的时候使用

| 属性值                  | 说明                     |
| ----------------------- | ------------------------ |
| align-items: flex-start | 从上到下                 |
| align-items: flex-end   | 从下到上                 |
| align-items: center     | 挤在一起居中（垂直居中） |
| align-items: stretch    | 拉伸 （默认值 ）         |



（6）align-content 设置侧轴上的子元素的排列方式（多行）
设置子项在侧轴上的排列方式 并且只能用于子项出现 **换行** 的情况（多行），在单行下是没有效果的。 

| 属性值                       | 说明                                   |
| ---------------------------- | -------------------------------------- |
| align-content: flex-start    | 默认值在侧轴的头部开始排列             |
| align-content: flex-end      | 在侧轴的尾部开始排列                   |
| align-content: center        | 在侧轴中间显示                         |
| align-content: space-around  | 子项在侧轴平分剩余空间                 |
| align-content: space-between | 子项在侧轴先分布在两头，再平分剩余空间 |
| align-content: stretch       | 设置子项元素高度平分父元素高度         |

align-content 和 align-items 区别

- align-items 适用于单行情况下， 只有上对齐、下对齐、居中和 拉伸
- align-content 适应于换行（多行）的情况下（单行情况下无效）， 可以设置 上对齐、 下对齐、居中、拉伸以及平均分配剩余空间等属性值。
- 总结就是单行找 align-items 多行找 align-content

（7）flex-flow
flex-flow 属性是 flex-direction 和 flex-wrap 属性的复合属性

```css
例如：
flex-flow: row wrap;
flex-flow: column wrap;
```



4. flex布局子项常见属性

- flex 属性

flex 属性定义子项目分配**剩余空间**，用flex来表示占多少**份数**。

```css
.item {
	flex: <number>; /* default 0 */ 
}
```



- align-self 控制子项自己在侧轴上的排列方式

align-self 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖 `align-items` 属性。

默认值为 auto，表示继承父元素的 align-items 属性，如果没有父元素，则等同于 stretch。

```css
span:nth-child(2) {
	/* 设置自己在侧轴上的排列方式 */
	align-self: flex-end;
}
```



- order 属性定义项目的排列顺序

数值越小，排列越靠前，默认为0。

注意：和 z-index 不一样。

```css
.item {
	order: <number>;
}
```



#### rem适配布局

页面布局文字能否随着屏幕大小变化而变化？

流式布局和flex布局主要针对于宽度布局，那高度如何设置？

怎么样让屏幕发生变化的时候元素高度和宽度等比例缩放？

##### 1. rem 基础

rem 单位

rem (root em)是一个相对单位，类似于em，em是父元素字体大小。

不同的是**rem**的基准是相对于html元素的**字体大小**。

比如，根元素（html）设置font-size=12px; 非根元素设置width:2rem; 则换成px表示就是24px。

rem的优势：父元素文字大小可能不一致， 但是整个页面只有一个html，可以通过修改html里面的文字大小来很好地控制整个页面的元素大小。

```css
/* 根html 为 12px */
html {
	font-size: 12px;
}
/* 此时 div 的字体大小就是 24px */
div {
	font-size: 2rem;
}
```



##### 2. 媒体查询

（1）什么是媒体查询

媒体查询（Media Query）是CSS3新语法。

- 使用 @media 查询，可以针对不同的媒体类型定义不同的样式
- @media 可以针对不同的屏幕尺寸设置不同的样式
- 当你重置浏览器大小的过程中，页面也会根据浏览器的宽度和高度重新渲染页面
- 目前针对很多苹果手机、Android手机，平板等设备都用得到多媒体查询



（2）语法规范

```css
@media mediatype and|not|only (media feature) {
	CSS-Code;
}
```

- 用 @media 开头 注意@符号

- mediatype 媒体类型

  将不同的终端设备划分成不同的类型，称为媒体类型。

| 值         | 解释说明                               |
| ---------- | -------------------------------------- |
| all        | 用于所有设备                           |
| print      | 用于打印机和打印预览                   |
| **screen** | **用于电脑屏幕，平板电脑，智能手机等** |



- 关键字 and not only

  关键字将媒体类型或多个媒体特性连接到一起做为媒体查询的条件。

  - and：可以将多个媒体特性连接到一起，相当于“和”的意思。
  - not：排除某个媒体类型，相当于“非”的意思，可以省略。
  - only：指定某个特定的媒体类型，可以省略。
    - 注意以上关键词不区分大小写，书写时两侧加空格



- media feature 媒体特性 必须有小括号包含。

  每种媒体类型都具体各自不同的特性，根据不同媒体类型的媒体特性设置不同的展示风格。我们暂且了解三个。

  注意他们要加小括号包含	

| 值          | 解释说明                           |
| ----------- | ---------------------------------- |
| width       | 定义输出设备中页面可见区域的宽度   |
| min-width   | 定义输出设备中页面最小可见区域宽度 |
| max-width   | 定义输出设备中页面最大可见区域宽度 |
| orientation | landscape横屏、portraait竖屏       |



```css
/*定义媒体类型为屏幕显示，并且将媒体特性设置为：页面最大可见区域宽度。*/
/*媒体查询可以根据不同的屏幕尺寸改变不同的样式*/
/*max-width:300px 意思是：数值小于等于300，最大为300*/
/*min-width:300px 意思是：数值大于等于300，最小为300*/
@media screen and (max-width: 300px){ 
  body {
    background-color: pink;
  }
}
@media screen and (max-width: 500px){
  body {
    background-color: purple;
  }
}
```

 

注意： 为了防止混乱，媒体查询我们要按照从小到大或者从大到小的顺序来写，但是我们最喜欢的还是**从小到大来写，这样代码更简洁**。



（3）媒体查询+rem实现元素动态大小变化

rem单位是跟着html来走的，有了rem页面元素可以设置不同大小尺寸

媒体查询可以根据不同设备宽度来修改样式

媒体查询+rem 就可以实现不同设备宽度，实现页面元素大小的动态变化



（4）引入资源（理解）

当样式比较繁多的时候，我们可以针对不同的媒体使用不同 stylesheets（样式表）。
原理，就是直接在link中判断设备的尺寸，然后引用不同的css文件。

- 语法规范

```css
<link rel="stylesheet" media="mediatype and|not|only (media feature)" href="mystylesheet.css">
```

- 示例

```css
<link rel="stylesheet" href="styleA.css" media="screen and (min-width: 400px)">
```



##### 3. Less 基础

less 是 预处理语言

​		是css的进阶版

less is more



- less的引用

  - 第一步 引入less文件 在rel里面添加 /less

  - 第二步 引入less的js包
    - 注意：以上两个步骤不可以改变顺序

- 注释

  - 单行 //         不支持编译到css
  - 多行 /**/     支持编译到css



- 声明变量
  - 变量 可以变化的量、存储数据的容器
  - @开头
  - 变量命名：见名知意





（1）维护 css 的弊端

CSS 是一门非程序式语言，没有变量、函数、SCOPE（作用域）等概念。

- CSS 需要书写大量看似没有逻辑的代码，**CSS 冗余度是比较高的**。
- 不方便维护及扩展，不利于复用。
- **CSS 没有很好的计算能力**
- 非前端开发工程师来讲，往往会因为缺少 CSS 编写经验而很难写出组织良好且易于维护的 CSS 代码项目。



（2）Less 介绍

Less （Leaner Style Sheets 的缩写） 是一门 CSS 扩展语言，也成为CSS预处理器。

做为 CSS 的一种形式的扩展，它并没有减少 CSS 的功能，而是在现有的 CSS 语法上，为CSS加入程序式语言的特性。

它在 CSS 的语法基础之上，引入了变量，Mixin（混入），运算以及函数等功能，大大简化了 CSS 的编写，并且降低了 CSS 的维护成本，就像它的名称所说的那样，Less 可以让我们用更少的代码做更多的事情。

Less中文网址： http://lesscss.cn/

常见的CSS预处理器：Sass、Less、Stylus

一句话：**Less 是一门 CSS 预处理语言，它扩展了CSS的动态特性**。



（3）Less 安装（注意如果使用vscode无需安装less） 

- 安装nodejs，可选择版本(8.0)，网址：http://nodejs.cn/download/
- 检查是否安装成功，使用cmd命令（win10 是 window +r 打开 运行输入cmd） --- 输入“ node –v ”查看版本即可
- 基于nodejs在线安装Less，使用cmd命令“ npm install -g less ”即可
- 检查是否安装成功，使用cmd命令“ lessc -v ”查看版本即可



（4）Less 基础

我们首先新建一个后缀名为less的文件， 在这个less文件里面书写less语句。

- Less 变量

变量是指没有固定的值，可以改变的。因为我们CSS中的一些颜色和数值等经常使用。

```less
@变量名:值;

变量命名规范：
	必须有@为前缀
	不能包含特殊字符
	不能以数字开头
	大小写敏感

例如：
@color: pink;
@font14: 14px;
body {
  background-color: @color;
  font-size: @font14;
}
div {
  background-color: @color;
  font-size: @font14;
}

注意：变量要先定义，后使用。
```



- Less 编译

本质上，Less 包含一套自定义的语法及一个解析器，用户根据这些语法定义自己的样式规则，这些规则最终会通过解析器，编译生成对应的 CSS 文件。

所以，我们需要把我们的 less文件，编译生成为css文件，这样我们的html页面才能使用。



vscode Less插件：Easy LESS 插件用来把less文件编译为css文件，只要保存一下Less文件，会自动生成CSS文件。



- Less 嵌套

Less嵌套 子元素的样式直接写到父元素里面就好了。

```less
//CSS后代选择器写法
#header .logo{
  width: 300px;
}

//Less 嵌套写法
#header {
  .logo {
    width: 300px;
	}
}
```

​	如果遇见（交集|伪类|伪元素选择器）

​		内层选择器的前面没有 & 符号，则它被解析为父选择器的后代；

​		如果有 & 符号，它就被解析为父元素自身或父元素的伪类。

```less
//CSS伪类选择器写法
div a:hover{
  color: red;
}

//Less 嵌套写法
div{
  a{
    &:hover{
      color:red;
    }
  }
}
```



- Less 运算

**任何数字、颜色或者变量都可以参与运算**。就是Less提供了加（+）、减（-）、乘（*）、除（/）算术运算。

```less
/*Less 里面写*/
@witdh: 10px + 5;
div {
	border: @witdh solid red;
}
/*生成的css*/
div {
 border: 15px solid red;
}
/*Less 甚至还可以这样 */
width: (@width + 5) * 2;

//calc()
```

注意：

​	▸ 乘号（*）和除号（/）的写法
​	▸ **运算符中间左右有个空格隔开 1px + 5**（变量名问题，没有空格，`-` 会被识别为变量名）
​	▸ 对于两个不同的单位的值之间的运算，运算结果的值取**第一个值的单位**
​	▸ 如果两个值之间只有一个值有单位，则运算结果就取该单位



- Less函数

```css
.fun(@w,@h){
    width: @w;
    height: @h;
}

div{
   .fun(200px,200px)
}
```





##### 4. rem适配方案

让一些不能等比自适应的元素，达到当设备尺寸发生改变的时候，等比例适配当前设备。

使用媒体查询根据不同设备按比例设置html的字体大小，然后页面元素使用rem做尺寸单位，当html字体大小变化，元素尺寸也会发生改变，从而达到等比缩放的适配。

- rem实际开发适配方案
  - 按照设计稿与设备宽度的比例，动态计算并设置html根标签的font-size大小；（媒体查询）
  - CSS中，设计稿元素的宽、高、相对位置等取值，按照同等比例换算为rem为单位的值。
- rem适配方案技术使用（市场主流）
  - 技术方案1
    - less
    - 媒体查询
    - rem
  - 技术方案2（推荐）
    - flexible.js
    - rem
- rem + 媒体查询 + less技术
  - 设计稿常见尺寸宽度
    - 一般情况下，我们以一套或两套效果图适应大部分的屏幕，放弃极端屏或对其优雅降级，牺牲一些效果。
    - 现在基本以750px为准
  - 动态设置html标签font-size大小
    - html里面的文字大小 = 设计稿的屏幕尺寸 / 划分份数
    - 页面元素的rem值 = 页面元素在设计稿的px值 / html里面的文字大小



### 响应式布局

#### 1. 响应式开发

（1）响应式开发的原理

就是使用**媒体查询**针对不同宽度的设备进行布局和样式的设置，从而适配不同设备的目的。

| 设备划分                 | 尺寸区间           |
| ------------------------ | ------------------ |
| 超小屏幕（手机）         | < 768px            |
| 小屏设备（平板）         | >= 768px ~ <992px  |
| 中等设备（桌面显示器）   | >= 992px ~ <1200px |
| 宽屏设备（大桌面显示器） | >= 1200px          |



（2）响应式布局容器

响应式需要一个父级做为布局容器，来配合子级元素来实现变化效果。

原理就是在不同屏幕下，通过媒体查询来改变这个布局容器的大小，再改变里面子元素的排列方式和大小，从而实现不同屏幕下，看到不同的页面布局和样式变化。

平时我们的响应式尺寸划分

- 超小屏幕（手机、小于768px）：设置宽度为100%
- 小屏幕（平板、大于等于768px）：设置宽度为750px
- 中等屏幕（桌面显示器，大于等于992px）：宽度设置为970px
- 大屏幕（大桌面显示器，大于等于1200px）：宽度设置为1170px

```css
/*CSS样式*/
.container {
	height: 150px;
	margin: 0 auto;
}

/*超小屏幕下 小于768 布局容器修改为100%*/
@media screen and (max-width:768px) {
	.container {
		width: 100%;
		background-color: blue;
	}
}

/*小屏幕下 大于等于768 布局容器修改为750*/
@media screen and (min-width:768px) {
	.container {
		width: 750px;
		background-color: red;
	}
}

/*中等屏幕下 大于等于992 布局容器修改为970*/
@media screen and (min-width:992px) {
	.container {
		width: 970px;
		background-color: purple;
	}
}

/*大屏幕下 大于等于1200 布局容器修改为1170*/
@media screen and (min-width:1200px) {
	.container {
		width: 1170px;
		background-color: green;
	}
}
```

```html
<!-- html -->
<!-- 响应式开发里面，首先需要一个布局容器 -->
<div class="container">
  
</div>
```



#### 2. Bootstrap前端开发框架

（1）Bootstrap简介

Bootstrap来自Twitter（推特），是目前最受欢迎的前端框架。Bootstrap是基于html、css和javascript的，它简单灵活，**使得web开发更加快捷**。

- 中文官网：http://www.bootcss.com
- 官网：http://getbootstrap.com

**框架**：顾名思义就是一套架构，它有一套比较完整的网页功能解决方案，而且控制权在框架本身，有预制样式库、组件和插件。使用者要按照框架所规定的某种规范进行开发。

- 优点
  - 标准化的html+css编码规范
  - 提供了一套简洁、直观、强悍的组件
  - 有自己的生态圈，不断的更新迭代
  - 让开发更简单，提高了开发的效率
- 版本
  - 2.x.x：停止维护，兼容性好，代码不够简洁，功能不够完善。
  - 3.x.x：目前使用最多，稳定，但是放弃了IE6-IE7。对IE8支持，但是界面效果不好，偏向于开发响应式布局、移动设备优先的WEB项目。
  - 4.x.x：最新版，目前还不是很流行。



（2）Bootstrap使用

- 使用四部曲
  - 创建文件夹结构
    - 📁 bootscrap
    - 📁 css
    - 📁 images
    - index.html
  - 创建html骨架结构
  - 引入相关样式文件
  - 书写内容

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <!-- 要求当前网页使用IE浏览器最高版本的内核来渲染 -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- 视口设置：视口的宽度和设备一致，默认缩放比例和pc端一致，用户不能自行缩放-->
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <title>Bootstrap 101 Template</title>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="css/bootstrap.min.css">

		<!-- 解决IE9以下浏览器对html5新增标签的不识别，并导致CSS不起作用的问题 -->
    <script src="js/html5shiv.min.js"></script>
    <!-- 解决IE9以下浏览器对CSS3 媒体查询（media queries）的不识别 -->
    <script src="js/respond.min.js"></script>
  </head>
  <body>
    <h1>你好，世界！</h1>

    <!-- jQuery (Bootstrap 的所有 JavaScript 插件都依赖 jQuery，所以必须放在前边) -->
    <script src="js/jquery.min.js"></script>
    <!-- 加载 Bootstrap 的所有 JavaScript 插件。你也可以根据需要只加载单个插件。 -->
    <script src="js/bootstrap.min.js"></script>
  </body>
</html>
```



（3）布局容器

Bootstrap需要为页面内容和栅格系统包裹一个 `.container` 容器，Bootstarp预先定义好这个类，叫 `.container` 。

Bootstrap提供了两个容器的类，分别是`container` 和 `container-fluid` 。

- container类
  - 响应式布局的容器 固定宽度
  - 大屏（>= 1200px）宽度定为1170px
  - 中屏（>= 992px）宽度定为970px
  - 小屏（>= 768px）宽度定为750px
  - 超小屏（100%）

```html
<!-- 引入类名就自动调用-->
<div class="container">
  小苏同学
</div>
```

- container-fluid类
  - 流式布局容器 百分百宽度
  - 占据全部视口（viewport）的容器
  - 适合于单独做移动开发



#### 3. Bootstrap栅格系统

（1）栅格系统简介

栅格系统英文名为 “grid systems”，也有人翻译为 “网格系统”，它是指将页面布局划分为等宽的列，然后通过列数的定义来模块化页面布局。

Bootstrap提供了一套响应式、移动设备优先的流式栅格系统，随着屏幕或视口（viewport）尺寸的增加，系统会自动分为12列。

Bootscrap里面container宽度是固定的，但是不同屏幕下，container的宽度不同，我们再把container划分为12等份。



（2）栅格选项参数

栅格系统用于通过一系列的行（row）与列（column）的组合来创建页面布局，你的内容就可以放入这些创建好的布局中。

|                       | 超小屏幕（手机）<768px | 小屏设备（平板）>=768px | 中等屏幕（桌面显示器）>=992px | 宽屏设备（大桌面显示器）>=1200px |
| --------------------- | ---------------------- | ----------------------- | ----------------------------- | -------------------------------- |
| .container   最大宽度 | 100%                   | 750px                   | 970px                         | 1170px                           |
| 类前缀                | .col-xs-               | .col-sm-                | .col-md-                      | .col-lg-                         |

- 行（row）必须放到 `container` 布局容器里
- 我们实现列的平均划分，需要给列添加**类前缀**
- xs-extra small：超小； sm-small：小； md-medium：中等； lg-large：大；
- **列**> 12，多余的**列**所在的元素将被作为一个整体另起一行排列
- 每一列默认有左右15像素的 padding
- 可以同时为一列指定多个设备的类名，以便划分不同份数 例如 class="col-md-4 col-sm-6"
- 按照不同屏幕划分为1~12 等份，row可以去掉 `container` 左右15像素的padding

```html
<!-- 宽屏一行显示4个，中屏一行显示3个，小屏一行显示2个，超小屏一行显示一个 -->
<div class="container">
	<div class="row">
		<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">1</div>
		<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">2</div>
		<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">3</div>
		<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">4</div>
	</div>       
</div>
```



（3）列嵌套

栅格系统内置的栅格系统将内容再次嵌套。简单理解就是一个列内再分成若干份小列。我们可以通过添加一个新的 `.row` 元素和一系列 `.col-sm-*` 元素到已经存在的 `.col-sm-*` 元素内。

```html
<!-- 列嵌套最好加一个行row，这样可以取消父元素的padding值而且高度自动和父级一样高-->
<div class="box col-lg-4">
	<div class="row">
		<div class="col-lg-6">小列</div>
		<div class="col-lg-6">小列</div>
	</div>
</div>
```



（4）列偏移

使用 `.col-md-offset-*` 类可以将列向右侧偏移。这些类实际是通过使用 * 选择器为当前元素增加了左侧的边距（margin）。

```html
<div class="container">
	<div class="row">
		<div class="box col-md-4">1</div>
		<div class="box col-md-4 col-md-offset-4">2</div>
	</div>
</div>
```



![image-20220504132726693](/Users/suxingxing/Desktop/苏东旭/images/html/mw-001.png)



（5）列排序

通过使用 `.col-md-push-*` 和 `.col-md-pull-*` 类就可以很容易的改变列（column）的顺序。

- `.col-md-push-*` 是推，向右
- `.col-md-pull-*` 是拉，向左

```html
<!-- 初始排序 -->
<div class="container">
	<div class="row">
		<div class="col-md-4">左侧</div>
		<div class="col-md-8">右侧</div>
	</div>
  <!-- 列排序后 -->
	<div class="row">
		<div class="col-md-4 col-md-push-8">左侧-push</div>
		<div class="col-md-8 col-md-pull-4">右侧-pull</div>
	</div>
</div>
```



![image-20220504134018426](/Users/suxingxing/Desktop/苏东旭/images/html/mw-002.png)



（6）响应式工具

为了加快对移动设备友好的页面开发工作，利用媒体查询功能，并使用这些工具类可以方便的针对不同设备展示或隐藏页面内容。

| 类名       | 超小屏 | 小屏 | 中屏 | 大屏 |
| ---------- | ------ | ---- | ---- | ---- |
| .hidden-xs | 隐藏   | 可见 | 可见 | 可见 |
| .hidden-sm | 可见   | 隐藏 | 可见 | 可见 |
| .hidden-md | 可见   | 可见 | 隐藏 | 可见 |
| .hidden-lg | 可见   | 可见 | 可见 | 隐藏 |

与之相反的，是visible-xs、visible-sm、visible-md、visible-lg是显示某个页面内容。

| 类名        | 超小屏 | 小屏 | 中屏 | 大屏 |
| ----------- | ------ | ---- | ---- | ---- |
| .visible-xs | 可见   | 隐藏 | 隐藏 | 隐藏 |
| .visible-sm | 隐藏   | 可见 | 隐藏 | 隐藏 |
| .visible-md | 隐藏   | 隐藏 | 可见 | 隐藏 |
| .visible-lg | 隐藏   | 隐藏 | 隐藏 | 可见 |

Bootstrap 其他（按钮、表单、表格） 请参考Bootstrap 文档。



































