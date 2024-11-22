Web API是浏览器提供的一套操作**浏览器功能**和**页面元素**的**API**（BOM和DOM）

### 1.1 作用和分类

- 作用: 就是使用 JS 去操作 html 和浏览器
- 分类：DOM (文档对象模型)、BOM（浏览器对象模型）

### 1.2 什么是DOM

- DOM（Document Object Model——文档对象模型）是用来呈现以及与任意 HTML 或 XML文档交互的API
- 白话文：DOM是浏览器提供的一套专门用来操作网页内容的功能
- DOM作用：开发网页内容特效和实现用户交互

### 1.3 DOM树

- DOM树是什么
  - 将 HTML 文档以树状结构直观的表现出来，我们称之为文档树或 DOM 树
  - 描述网页内容关系的名词
  - 作用：
    - 文档树直观的体现了标签与标签之间的关系

### 1.4 DOM对象（重要）

- DOM对象：浏览器根据html标签生成的 JS对象

  - 所有的标签属性都可以在这个对象上面找到
  - 修改这个对象的属性会自动映射到标签身上

- DOM的核心思想

  - 把网页内容当做对象来处理

- document 对象

  - 是 DOM 里提供的一个对象

    - 所以它提供的属性和方法都是用来访问和操作网页内容的

      ```javascript
      例：document.write()
      ```

    - 网页所有内容都在document里面

我们在DOM里面里面通常就是做这样的三件事

- 获取DOM元素
- 注册事件
- 实现效果

## 【1】获取元素





### 

## [#](https://friday-js.github.io/guide/nodes/javascript/DOM/DOM.html#【4】元素样式)【4】元素样式

### [#](https://friday-js.github.io/guide/nodes/javascript/DOM/DOM.html#获取样式)获取样式

### [#](https://friday-js.github.io/guide/nodes/javascript/DOM/DOM.html#style)style

通过 style 属性操作CSS----------产生的是行内样式，css权重比较高

```html
对象.style.样式属性 = 值
```

- 注意：

  - 修改样式通过style属性引出
  - 如果属性有-连接符，需要转换为小驼峰命名法
  - 赋值的时候，有单位的不要忘记加css单位
  - 当对body赋值时，document.body.style.xxxx ，因为body全局就一个，可以直接使用

- 举例说明：

  ```html
  <div id="box" style="background-color: red;width: 300px;height: 100px; margin-top: 50px;"</div>
  
  
  <script>
  	let box = document.querySelector('.box')
  	box.style.backgroundColor = 'red'
  	box.style.width = '300px'
    box.style.height = '100px'
  	box.style.marginTop = '50px'
  </script>
  ```

### [#](https://friday-js.github.io/guide/nodes/javascript/DOM/DOM.html#classname)className

- 通过类名(className) 操作CSS

  如果修改的样式比较多，直接通过style属性修改比较繁琐，我们可以通过借助于css类名的形式。

  ```javascript
  元素.className = '类名'
  ```

  - 注意：
    - 由于class是关键字, 所以使用className去代替
    - className是使用新值换旧值, 如果需要添加一个类,需要保留之前的类名，可以采用多类名的方式。
  - 使用className的好处是可以同时修改多个样式。
  - 使用className的注意事项是直接使用className赋值会覆盖以前的类名。

### [#](https://friday-js.github.io/guide/nodes/javascript/DOM/DOM.html#classlist)classList

- 通过 classList 操作类控制CSS

  为了解决className 容易覆盖以前的类名，我们可以通过classList方式追加和删除类名

  ```javascript
  //追加一个类
  		元素.classList.add('类名')
  //删除一个类
  		元素.classList.remove('类名')
  //切换一个类
  		元素.classList.toggle('类名')
  ```

  - className和classList的区别
    - className会覆盖以前的类名
    - classList是追加和删除不影响以前类名

#### [#](https://friday-js.github.io/guide/nodes/javascript/DOM/DOM.html#_4-3-设置-修改表单元素属性)4.3 设置/修改表单元素属性

- 表单很多情况，也需要修改属性，比如点击眼睛，可以看到密码，本质是把表单类型转换为文本框

- 正常的有属性有取值的，跟其他的标签属性没有任何区别

  ```javascript
  //获取:
  DOM对象.属性名
  
  //设置:
  DOM对象.属性名 = 新值
  
  //例如:
  input.value = '用户名'
  input.type = 'password'
  
  value 用于获取和设置表单元素的内容
  type 用于获取和设置input标签的类型
  ```

- 表单属性中添加就有效果，移除就没有效果，一律使用布尔值表示

  - 如果为true 代表添加了该属性
  - 如果是false 代表移除了该属性
  - 比如：
    - disabled 表单是否禁用 （input）
    - checked 按钮是否选中（单选框、复选框）
    - selected 选项是否选中（下拉列表）

### [#](https://friday-js.github.io/guide/nodes/javascript/DOM/DOM.html#自定义属性)自定义属性

## [#](https://friday-js.github.io/guide/nodes/javascript/DOM/DOM.html#定时器-间歇函数)定时器-间歇函数

- 网页中经常会需要一种功能：每隔一段时间需要自动执行一段代码，不需要我们手动去触发。
- 例如：网页中的倒计时
- 要实现这种需求，需要定时器函数
- 定时器函数有两种，一种是间歇函数，另一种是延时函数。

#### [#](https://friday-js.github.io/guide/nodes/javascript/DOM/DOM.html#_5-1-开启定时器)5.1 开启定时器

```javascript
setInterval(函数,间隔时间)
```

- 作用：

  - 每隔一段时间调用这个函数，间隔时间单位是毫秒，函数一旦开始永不停歇，除非强行停止计时器。

- 举例说明：

  ```javascript
  function repeat(){
  	console.log('前端程序员，就是头发多')
  }
  
  setInterval(repeat,1000)
  ```

  - 注意：
    - 调用的函数名字不需要加括号
    - 定时器返回的是一个id数字

#### [#](https://friday-js.github.io/guide/nodes/javascript/DOM/DOM.html#_5-2-关闭定时器)5.2 关闭定时器

```javascript
let 变量名 = setInterval(函数，间隔时间)
clearInterval(变量名)
```

- 注意：
  - 函数名字不需要加括号
  - 定时器返回的是一个id数字
  - 一般不会刚创建就停止，而是满足一定条件再停止。

## [#](https://friday-js.github.io/guide/nodes/javascript/DOM/DOM.html#事件)事件

#### [#](https://friday-js.github.io/guide/nodes/javascript/DOM/DOM.html#_1-事件)1. 事件

##### [#](https://friday-js.github.io/guide/nodes/javascript/DOM/DOM.html#_1-1-事件)1.1 事件

- 什么是事件？

  - js使我们有能力创建动态页面，而事件是可以被js侦测到的行为
  - 事件是在编程时系统内发生的动作或者发生的事情
  - 比如：用户在网页上单击一个按钮

- 什么是事件监听？

  - 就是让程序检测是否有事件产生，一旦有事件触发，就立即调用一个函数做出响应，也称为注册事件

- 语法：

  ```javascript
  元素.addEventListener('事件',要执行的函数)
  ```

- 事件监听三要素：

  - **事件源**：哪个dom元素被事件触发了，要获取dom元素（谁触发了）
  - **事件类型**：用什么方式触发，比如鼠标单击 click、鼠标经过 mouseover 等（用什么方式触发，点击还是鼠标经过等）
  - **事件处理程序**：要做什么事（要做什么事情）

- 举例说明：

  ```javascript
  //获取按钮元素
  let btn = document.querySelector('button')
  //事件监听
  btn.addEventListener('click',function(){
  	alert('按钮被点击了')
  })
  ```

  - 注意：
    - 事件类型要加引号，并且全小写
    - 函数是点击之后再去执行，每次点击都会执行一次

##### [#](https://friday-js.github.io/guide/nodes/javascript/DOM/DOM.html#_1-2-事件监听版本)1.2 事件监听版本

- DOM L0
  - 事件源.on事件 = function() { }
- DOM L2
  - 事件源.addEventListener(事件, 事件处理函数)
- 发展史：
  - DOM L0：是 DOM 的发展的第一个版本； L：level
  - DOM L1：DOM级别1 于1998年10月1日成为W3C推荐标准
  - DOM L2：使用addEventListener注册事件
  - DOM L3： DOM3级事件模块在DOM2级事件的基础上重新定义了这些事件，也添加了一些新事件类型。

##### [#](https://friday-js.github.io/guide/nodes/javascript/DOM/DOM.html#_1-3-事件类型)1.3 事件类型

- 鼠标事件：鼠标触发
  - click 鼠标点击
  - mouseenter 鼠标经过
  - mouseleave 鼠标离开
  - contextmenu 鼠标右键
- 焦点事件：表单获得光标
  - focus 获得焦点
  - blur 失去焦点
- 键盘事件：键盘触发
  - keydown 键盘按下触发
  - keyup 键盘抬起触发
- 文本事件：表单输入触发
  - input 用户输入事件

#### [#](https://friday-js.github.io/guide/nodes/javascript/DOM/DOM.html#_2-高阶函数)2. 高阶函数

##### [#](https://friday-js.github.io/guide/nodes/javascript/DOM/DOM.html#_2-1-高阶函数)2.1 高阶函数

- **高阶函数**可以被简单理解为函数的高级应用，JavaScript中函数可以被当成【值】来对待，基于这个特性实现函数的高级应用。
  - 【值】就是 JavaScript 中的数据，如数值、字符串、布尔、对象等。
- 函数表达式和普通函数并无本质上的区别：
  - 普通函数的声明与调用无顺序限制，推荐做法先声明再调用
  - 函数表达式必须要先声明再调用

##### [#](https://friday-js.github.io/guide/nodes/javascript/DOM/DOM.html#_2-2-回调函数)2.2 回调函数

- 如果将函数 A 做为参数传递给函数 B 时，我们称函数 A 为回调函数

  - 简单理解： 把一个函数当做参数来传递给另外一个函数的时候，这个函数就是回调函数
  - 回调函数本质还是函数，只不过把它当成参数使用
  - 使用匿名函数做为回调函数比较常见

- 常见的使用场景：计时器和事件监听

  ```javascript
  //计时器
  function fn(){
  	console.log('我是回调函数…')
  }
  //fn传递给setInterval，fn就是回调函数
  setInterval(fn,1000)
  ```

  

#### [#](https://friday-js.github.io/guide/nodes/javascript/DOM/DOM.html#_3-环境变量)3. 环境变量

- 环境对象指的是函数内部特殊的变量this，它代表着当前函数运行时所处的环境，this指事件函数的调用者。
- 作用：
  - 弄清楚this的指向，可以让我们代码更简洁
- 函数的调用方式不同，this 指代的对象也不同
- **谁调用，this 就是谁**。是判断 this 指向的粗略规则
- 直接调用函数，其实相当于是 window.函数，所以 this 指代 window

#### [#](https://friday-js.github.io/guide/nodes/javascript/DOM/DOM.html#_4-排他思想)4. 排他思想

- 当前元素为A状态，其他元素为B状态
- 使用：
  - 干掉所有人
    - 使用for循环
  - 复活他自己
    - 通过this或者下标找到自己或者对应的元素

## [#](https://friday-js.github.io/guide/nodes/javascript/DOM/DOM.html#节点操作)节点操作

为什么学节点操作

获取元素通常使用的两种方式：

- 利用DOM提供的方法获取元素
  - document.getElementById()
  - document.getElementsByTagName()
  - document.querySelector()等
  - 缺点：逻辑性不强、繁琐
- 利用节点层级关系获取元素
  - 利用父元素、子元素、兄弟元素获取元素
  - 逻辑性强，但是兼容性差

什么是节点？

网页中的所有内容都是节点（标签、属性、文本、注释等），在DOM中，节点使用node来表示。

HTML DOM树中的所有节点均可通过 Javascript 进行访问，所有HTML元素（节点）均可被修改，也可以创建或删除。

节点概述

一般地，节点至少拥有nodeType（节点类型）、nodeName（节点名称）和nodeValue（节点值）这三个基本属性

- 元素节点 nodeType 为 1
- 属性节点 nodeType 为 2
- 文本节点 nodeType 为 3（文本节点包含数字、空格、换行等）

在实际开发中，节点操作主要操作的是元素节点

| 节点node         | nodeType | nodeName           | nodeValue                         |
| ---------------- | -------- | ------------------ | --------------------------------- |
| **元素节点**     | 1        | 标签名（大写）     | null                              |
| **属性节点**     | 2        | 属性名             | 属性值                            |
| **文本节点**     | 3        | #text              | 文本内容                          |
| CDATA节点        | 4        | #cdata-section     | CDATA区域内容                     |
| 实体引用名称节点 | 5        | 引用名称           | null                              |
| 实体名称节点     | 6        | 实体名称           | null                              |
| 处理指令节点     | 7        | target             | entire content cluding the target |
| **注释节点**     | 8        | #comment           | 注释内容                          |
| **文档节点**     | 9        | #document          | null                              |
| 文档类型节点     | 10       | doctype的名称      | null                              |
| 文档片段节点     | 11       | #document-fragment | null                              |
| DTD声明节点      | 12       | 符号名称           | null                              |

```text
节点的属性:(可以使用标签--元素.出来,可以使用属性节点.出来,文本节点.点出来)
nodeType:节点的类型
nodeName:节点的名字
nodeValue:节点的值
```

### [#](https://friday-js.github.io/guide/nodes/javascript/DOM/DOM.html#查找节点)查找节点

- 节点关系：
  - 父节点
  - 子节点
  - 兄弟节点

#### [#](https://friday-js.github.io/guide/nodes/javascript/DOM/DOM.html#查找父节点-属性)查找父节点（属性）

- node.parentNode 获取某节点的父级节点
  - 返回**最近一级**的父节点（亲爸爸） 如果找不到返回为null
  - 通过子元素找父元素：子元素.**parentNode**
- node.**parentElement** 获取某节点的父级元素(标签)
  - 由于一个元素只有一个父元素，所以两者达到的效果相同，但其实是不同的，具体参照查找子节点。

#### [#](https://friday-js.github.io/guide/nodes/javascript/DOM/DOM.html#查找子节点-属性)查找子节点（属性）

- parentNode.**childNodes** 获取某父节点的子节点【标准】

  - 获得所有子节点、包括文本节点（空格、换行）、注释节点等

  - 是一个即时更新的集合

    ```js
    let ul = document.querySelector('ul')
    for(let i = 0;i < ul.childNodes.length;i++){
      if(ul.childNodes[i].nodeType == 1){
      	//1 是元素节点
        console.log(ul.childNodes[i])
      }
    }
    ```

- parentNode.**children** 获取某父节点的子元素(标签) 【非标准，实际开发的写法】（重点）

  - 仅获得所有元素节点
  - 返回的还是一个伪数组
    - 获取第一个元素 `parentNode.children[0]`
    - 获取最后一个元素 `parentNode.children[parentNode.children.length - 1]`
  - 通过父元素查找子元素：父元素.children

- parentNode.firstChild

  - firstChild返回第一个**子节点**，找不到则返回null。同样也是包含所有的节点（文本节点、元素节点）

- parentNode.lastChild

  - lastChild返回最后一个**子节点**，找不到则返回null。同样也是包含所有的节点（文本节点、元素节点）

- **parentNode.firstElementChild** 【 有兼容性问题，ieE9以上才支持 】

  - 返回第一个子元素节点，找不到则返回null

- **parentNode.lastElementChild** 【 有兼容性问题，ieE9以上才支持 】

  - 返回最后一个子元素节点，找不到则返回null

#### [#](https://friday-js.github.io/guide/nodes/javascript/DOM/DOM.html#查找兄弟节点)查找兄弟节点

- 下一个兄弟元素节点 【 有兼容性问题，ieE9以上才支持 】

  - **node.nextElementSibling**
  - 返回当前元素的下一个兄弟节点，找不到则返回null

- 上一个兄弟元素节点 【 有兼容性问题，ieE9以上才支持 】

  - **node.previousElementSibling**

  - 返回当前元素的上一个兄弟节点，找不到则返回null

  - 解决方案（封装一个兼容性函数）

    ```javascript
    function getNextElementSibling(element){
      let el = element;
      while(el = el.nextSibling){
        if(el.nodeType === 1){
          return el;
        }
      }
      return null;
    }
    ```

#### [#](https://friday-js.github.io/guide/nodes/javascript/DOM/DOM.html#查找属性节点)查找属性节点：

- node.**getAttributeNode**("name")

  ```html
  <div name='su'>苏东旭</div>
  
  let dv = document.querySelector('div')
  console.log(dv.getAttributeNode('name'))   //name="su"
  ```

### [#](https://friday-js.github.io/guide/nodes/javascript/DOM/DOM.html#增加节点)增加节点

- 很多情况下，我们需要在页面中增加元素
  - 比如，点击发布按钮，可以新增一条信息
- 一般情况下，我们新增节点，按照如下操作：
  - 创建一个新的节点
  - 把创建的新的节点放入到指定的元素内部

#### [#](https://friday-js.github.io/guide/nodes/javascript/DOM/DOM.html#创建节点)创建节点

- 即创造出一个新的网页元素，再添加到网页内，一般先创建节点，然后插入节点

- 创建元素节点方法：

  ```javascript
  document.createElement('标签名')
  ```

#### [#](https://friday-js.github.io/guide/nodes/javascript/DOM/DOM.html#追加节点)追加节点

- 要想在界面看到，还得插入到某个父元素中

- 插入到父元素的最后一个子元素:

  - 父元素.appendChild(子元素)

    ```js
    ul.appendChild(li)
    ```

- 插入到父元素中某个子元素的前面

  - 父元素.insertBefore(子元素,在哪个元素前面)

    ```js
    ul.insertBefore(li,ul.children[1])
    ```

#### [#](https://friday-js.github.io/guide/nodes/javascript/DOM/DOM.html#克隆节点)克隆节点

```javascript
元素.cloneNode(布尔值)
```

- 特殊情况下，我们新增节点，按照如下操作：
  - 复制一个原有的节点
  - 把复制的节点放入到指定的元素内部
- cloneNode会克隆出一个跟原标签一样的元素，括号内传入布尔值
  - 若为true，则代表克隆时会包含后代节点一起克隆
  - 若为false，则代表克隆时不包含后代节点
  - 默认为false

#### [#](https://friday-js.github.io/guide/nodes/javascript/DOM/DOM.html#删除节点)删除节点

```javascript
父元素.removeChild(要删除的元素)
```

- 若一个节点在页面中已不需要时，可以删除它
- 在 JavaScript 原生DOM操作中，要删除元素必须通过父元素删除
- 注：
  - 如不存在父子关系则删除不成功
  - 删除节点和隐藏节点（display:none） 有区别的： 隐藏节点还是存在的，但是删除，则从html中删除节点

#### [#](https://friday-js.github.io/guide/nodes/javascript/DOM/DOM.html#替换节点)替换节点

```js
parentNode.replaceChild(新节点,当前节点)
```

- 用新节点替换当前节点

## [#](https://friday-js.github.io/guide/nodes/javascript/DOM/DOM.html#事件高级)事件高级

#### [#](https://friday-js.github.io/guide/nodes/javascript/DOM/DOM.html#_1-事件对象)1. 事件对象

- 获取事件对象

  - 事件对象是什么

    - 也是个对象，这个对象里有事件触发时的相关信息
    - 例如：鼠标点击事件中，事件对象就存了鼠标点在哪个位置等信息

  - 如何获取

    - 在事件绑定的回调函数的第一个参数就是事件对象

    - 一般命名为event、ev、e 事件对象

    - 例如：

      ```javascript
      元素.addEventListener('click', function(e){
        var e=e || window.event // 兼容IE8
      })	
      ```

  - 部分常用属性

    - type
      - 获取当前的事件类型
    - clientX/clientY
      - 以浏览器显示窗口左上顶角为原点，定位(x,y)坐标
    - offsetX/offsetY
      - 以当前事件的目标对象左上角为原点，定位(x,,y)坐标
    - pageX/pageY
      - 以document对象（即文本窗口）左上角为原点，定位(x,y)坐标
    - target
      - 返回触发此事件的元素（事件的目标节点）
    - key
      - 用户按下的键盘键的值
      - 现在不提倡使用keyCode

#### [#](https://friday-js.github.io/guide/nodes/javascript/DOM/DOM.html#_2-事件流)2. 事件流

##### [#](https://friday-js.github.io/guide/nodes/javascript/DOM/DOM.html#_2-1-事件流和两个阶段说明)2.1 事件流和两个阶段说明

- 事件流指的是事件完整执行过程中的流动路径
- 说明：假设页面里有个div，当触发事件时，会经历两个阶段，分别是捕获阶段、冒泡阶段
- 简单来说：捕获阶段是 从父到子 冒泡阶段是从子到父

##### [#](https://friday-js.github.io/guide/nodes/javascript/DOM/DOM.html#_2-2-事件捕获和事件冒泡)2.2 事件捕获和事件冒泡

- 事件捕获概念：

  - 从DOM的根元素开始去执行对应的事件 (从外到里)

- 事件捕获需要写对应代码才能看到效果

  ```javascript
  DOM.addEventListener(事件类型, 事件处理函数, 是否使用捕获机制)
  ```

  - 说明：
    - addEventListener第三个参数传入true代表是捕获阶段触发（很少使用）
    - 若传入false代表冒泡阶段触发，默认就是false
    - 若是用 L0 事件监听，则只有冒泡阶段，没有捕获

- 事件冒泡概念：

  - 当一个元素的事件被触发时，同样的事件将会在该元素的所有祖先元素中依次被触发。这一过程被称为事件冒泡。
  - 简单理解：当一个元素触发事件后，会依次向上调用所有父级元素的同名事件
  - 事件冒泡是默认存在的

##### [#](https://friday-js.github.io/guide/nodes/javascript/DOM/DOM.html#_2-3-阻止事件流动)2.3 阻止事件流动

- 因为默认就有冒泡模式的存在，所以容易导致事件影响到父级元素

- 若想把事件就限制在当前元素内，就需要阻止事件流动

- 阻止事件流动需要拿到事件对象

- 语法：

  ```javascript
  e.stopPropagation();//停止传播，不再派发事件，符合w3c标准，谷歌和火狐支持 IE8不支持
  e.cancelBubble=true;//确定取消冒泡，IE特有 居然没兼容
  ```

- 例如：

  ```javascript
  btn.addEventListener('click', function(e){
  	alert('小苏同学')
  	e. stopPropagation()
  })
  ```

- 此方法可以阻断事件流动传播，不光在冒泡阶段有效，捕获阶段也有效

- 鼠标经过事件：

  - mouseover 和 mouseout 会有冒泡效果
  - mouseenter 和 mouseleave 没有冒泡效果(推荐)

##### [#](https://friday-js.github.io/guide/nodes/javascript/DOM/DOM.html#_2-4-阻止默认行为)2.4 阻止默认行为

- 比如链接点击不跳转，表单域的跳转

- 语法：

  ```javascript
  //三种方法
  return  false
  e.preventDefault()//阻止默认 符合w3c标准 只有IE8不支持
  e.returnValue=false;//阻止默认行为 IE特有 火狐不支持(亲测支持)
  ```

- 两种注册事件的区别：

  - 传统on注册（L0）

    - 同一个对象，后面注册的事件会覆盖前面注册(同一个事件)
    - 直接使用null覆盖就可以实现事件的解绑
    - 都是冒泡阶段执行的

  - 事件监听注册（L2）

    - 语法:

      ```javascript
      addEventListener(事件类型, 事件处理函数, 是否使用捕获) 
      ```

    - 后面注册的事件不会覆盖前面注册的事件(同一个事件)

    - 可以通过第三个参数去确定是在冒泡或者捕获阶段执行

    - 必须使用removeEventListener(事件类型, 事件处理函数, 获取捕获或者冒泡阶段)

    - 匿名函数无法被解绑

#### [#](https://friday-js.github.io/guide/nodes/javascript/DOM/DOM.html#_3-事件委托)3. 事件委托

- 事件委托是利用事件流的特征解决一些开发需求的知识技巧

- 又叫事件代理，原理就是利用事件冒泡的特点：当子元素的事件发生时，父元素的同名事件也会发生——指定一个事件处理程序，就可以管理某一类型的所有事件。

- 总结：

  - 优点：给父级元素加事件（可以提高性能）

    - 不用给列表的每一个元素绑定事件，只需要绑定父元素就可以处理所有子元素的事件，优化性能。

  - 原理：事件委托其实是利用事件冒泡的特点

  - 实现：事件对象.target 可以获得真正触发事件的元素

    ```js
    ul.onclick = function(e){
      //获取触发冒泡事件的点击者（事件源）
      console.log(e.target)
    }
    ```

## [#](https://friday-js.github.io/guide/nodes/javascript/DOM/DOM.html#网页特效)网页特效

### [#](https://friday-js.github.io/guide/nodes/javascript/DOM/DOM.html#滚动事件)滚动事件

- 当页面进行滚动时触发的事件，滚动1像素即可触发。

- 为什么要学？

  - 很多网页需要检测用户把页面滚动到某个区域后做一些处理， 比如固定导航栏，比如返回顶部

- 事件名：scroll

- 监听整个页面滚动：

  ```javascript
  //页面滚动事件
  window.addEventListener('scroll', function(){
  })
  
  //给 window 或 document 添加 scroll 事件
  ```

- 监听某个元素的内部滚动直接给某个元素加即可

### [#](https://friday-js.github.io/guide/nodes/javascript/DOM/DOM.html#加载事件)加载事件

- 加载外部资源（如图片、外联CSS和JavaScript等）加载完毕时触发的事件

- 为什么要学？

  - 有些时候需要等页面资源全部处理完了做一些事情
  - 老代码喜欢把 script 写在 head 中，这时候直接找 dom 元素找不到
  - 有了load事件，script可以写在任何位置，该事件等页面所有资源加载完毕再执行。

- 事件名：load

- 监听页面所有资源加载完毕：

  ```javascript
  //给 window 添加 load 事件
  window.addEventListener('load', function(){
  })
  ```

- 注意：不光可以监听整个页面资源加载完毕，也可以针对某个资源绑定load事件

- 当初始的 HTML 文档被完全加载和解析完成之后，DOMContentLoaded 事件被触发，而无需等待样式表、图像等完全加载

- 事件名：DOMContentLoaded

- 监听页面DOM加载完毕：

  ```javascript
  //给 document 添加 DOMContentLoaded 事件
  document.addEventListener('DOMContentLoaded', function(){
  })
  ```

- 注意：

  - load事件监听整个页面资源，给window加
  - DOMContentLoaded事件给document加，当初始html文档被加载完和解析完成后被触发。

### [#](https://friday-js.github.io/guide/nodes/javascript/DOM/DOM.html#元素大小和位置)元素大小和位置

#### [#](https://friday-js.github.io/guide/nodes/javascript/DOM/DOM.html#scroll家族-滚动)scroll家族---滚动

- 使用场景：

  - 我们想要页面滚动一段距离，比如100px，就让某些元素显示隐藏，那我们怎么知道，页面滚动了100像素呢？就可以使用scroll 来检测页面滚动的距离~~~

- 获取宽高：

  - 获取元素的内容总宽高（不包含滚动条）返回值不带单位

    - scrollWidth和scrollHeight

      ```javascript
      console.log(div.scrollWidth) 
      ```

    - 代表获容器内部可滚动的宽度和高度（width/height + padding）

    - 包括由于溢出而无法展示在网页的不可见部分

- 获取位置：

  - 获取元素内容往左、往上滚出去看不到的距离

    - scrollLeft和scrollTop

      - 这两个属性是可以修改的，不仅可以获取数值，也可以赋值，但是不要带单位。

        ```javascript
        div.addEventListener('scroll', function(){
        	console.log(this.scrollTop)
        })
        ```

        - 相对于父盒子，元素向上/向左 卷曲出去（滚出去）的距离

- 开发中，我们经常检测页面滚动的距离，比如页面滚动100像素，就可以显示一个元素，或者固定一个元素

  ```javascript
  window.addEventListener('scroll',function(){
  	//获得当前页面被卷去的头部
  	let num = document.documentElement.scrollTop
  	console.log(num)
  })
  ```

  - 注意事项
    - document.documentElement HTML文档返回对象为HTML元素，documentElement是HTML的一种写法。

#### [#](https://friday-js.github.io/guide/nodes/javascript/DOM/DOM.html#offset家族-偏移量)offset家族---偏移量

- 使用场景：
  - 前面案例滚动多少距离，都是我们自己算的，最好是页面滚动到某个元素，就可以做某些事。
  - 简单说，就是通过js的方式，得到元素在页面中的位置
  - 这样我们可以做，页面滚动到这个位置，就可以返回顶部的小盒子显示…
- 获取宽高：
  - 获取元素的自身宽高、包含元素自身设置的宽高、padding、border
    - offsetWidth和offsetHeight
      - 元素盒子模型的宽高
- 获取位置：
  - 获取元素到距离自己最近的带有定位的父级元素的左、上距离（如果父级无定位，以浏览器窗口左上角为原点）
    - offsetLeft和offsetTop 注意是只读属性
- 获取父元素
  - 获取最近的一个相对父级元素（默认指向body）
    - offsetParent

#### [#](https://friday-js.github.io/guide/nodes/javascript/DOM/DOM.html#client家族)client家族

- 获取宽高：

  - 获取元素的可见部分宽高（不包含边框，滚动条等）
    - clientWidth 和 clientHeight

- 获取位置：

  - 获取左边框和上边框宽度（厚度）
    - clientLeft 和 clientTop 注意是只读属性

- 会在窗口尺寸改变的时候触发事件：

  ```javascript
  //resize
  window.addEventListener('resize', function(){
  })
  ```

- 检测屏幕宽度：

  ```javascript
  window.addEventListener('resize', function(){
  	let w = document.documentElement.clientWidth
  	console.log(w)
  })
  ```

#### [#](https://friday-js.github.io/guide/nodes/javascript/DOM/DOM.html#三者区别)三者区别：

scrollWidth scrollHeight 内容宽高 offsetWidth offsetHeight 盒子元素的大小=盒子本身的宽度和高度+padding+border clientWidth clientHeight 当前可视区域的宽高（不包含滚动条，边框等）

scrollLeft scrollTop 获取元素内容往左、往上滚出去看不到的距离 offsetLeft offsetTop 获取元素到距离自己最近的带有定位的父级元素的左、上距离 clientLeft clientTop 获取左边框和上边框宽度（厚度）