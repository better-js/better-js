# DOM

DOM，全称Document Object Model，中文翻译为**文档对象模型**。

DOM属于Web API的一部分，Web API中定义了非常多的对象，通过这些对象可以完成对网页的各种操作，比如：添加删除元素、发送请求、操作浏览器等。

- D：即文档，指的是整个网页。
- O：即对象，将网页的每一部分内容都转换为了对象
  - 为什么转换为对象呢？
    - 转化为对象后就可以通过面向对象的方式去操作网页，想操作哪个元素就获取哪个元素的对象，然后通过调用其方法或属性完成各种操作。
- M：模型，用来表示对象之间的关系，也就是父子元素、祖先后代、兄弟元素等，明确关系后便可以通过任意一个对象获取其他的对象。

## Document对象

Document对象代表的是整个对象，在浏览器中它是window对象的属性（是一个全局变量）。

DOM是一种宿主对象，即由运行环境（浏览器）提供的对象



## DOM树

将HTML文档以树状结构直观表现出来，我们称之为文档树或DOM树



## DOM对象

浏览器根据html标签生成的js对象，所有的标签属性都可以在这个对象上面找到，修改这个对象的属性也会自动映射到对应的标签身上

DOM的核心思想：把网页当作对象来处理



# 节点操作

## 查找节点

获取元素通常使用的两种方式：

- 利用DOM提供的方法获取元素
  - document.getElementById()
  - document.getElementsByTagName()
  - document.querySelector()等
  - 缺点：逻辑性不强、繁琐

- 利用节点层级关系获取元素
  - 利用父元素、子元素、兄弟元素获取元素
  - 逻辑性强，但是兼容性差

### 利用DOM API获取元素

#### querySelector

选择匹配的第一个元素，如果没有匹配到，则返回null

```js
document.querySelector('css选择器')
```

#### querySelectorAll

选择匹配的所有元素，得到一个伪数组。

```js
document.querySelectorAll('css选择器')
```

#### getElementById

根据id获取一个元素

```js
document.getElementById('id名')
```

#### getElementsByName

通过name属性获取元素，一般用于对表单元素进行操作时使用。

```js
document.getElementsByName("name属性值")
```

#### getElementsByTagName

通过 **标签名** 获取一类元素，获取页面所有该元素，[ ]集合

```js
document.getElementsByTagName('div')
// 获取所有元素
document.getElementsByTagName('*')
```

#### getElementsByClassName

根据 **class类名** 获取元素，[ ]集合

```js
document.getElementsByClassName('class类名')
```

#### 获取特殊元素

```js
// 获取body元素
document.body

// 获取html元素
document.documentElement
```



### 利用节点层级关系获取元素

#### 节点关系

父节点、子节点、兄弟节点



#### 子找父

通过子元素找父元素，返回最近一级的父节点，如果找不到返回null

```js
子元素.parentNode

子元素.parentElement
```

#### 父找子

获取父节点的所有子节点

```js
父节点.childNodes
```

获取父节点的子元素，仅获得所有元素节点，得到一个伪数组

```js
// 获取父节点的所有子节点
父节点.childNodes

// 获取父节点的子元素，仅获得所有元素节点，得到一个伪数组
父节点.children

// 返回第一个子节点，找不到则返回null
父节点.firstChild

// 返回最后一个子节点，找不到则返回null
父节点.lastChild

父节点.firstElementChild
父节点.lastElementChild
```

#### 找兄弟

```js
// 返回当前元素的下一个兄弟节点，找不到则返回null
当前元素.nextElementSibling

// 返回当前元素的上一个兄弟节点，找不到则返回null
当前元素.previousElementSibling
```



## 增加节点

### 创建节点

```js
document.createElement('标签名')
```

### 追加节点

#### 插入到父元素的最后

```js
// 父元素.appendChild(子元素)
ul.appendChild(li)
```

#### 插入到父元素中某个子元素之前

```js
// 父元素.insertBefore(子元素,在哪个元素前面)
ul.insertBefore(li,ul.children[1])
```



## 克隆节点

cloneNode会克隆出一个跟原标签一样的元素，括号内传入布尔值

- 若为true，则代表克隆时会包含后代节点一起克隆
- 若为false，则代表克隆时不包含后代节点
- 默认为false

```js
元素.cloneNode(布尔值)
```





## 删除节点

在 JavaScript 原生DOM操作中，要删除元素必须通过父元素删除，如不存在父子关系则删除不成功

```js
父元素.removeChild(要删除的元素)
```



## 替换节点

用新节点替换当前节点

```js
parentNode.replaceChild(新节点,当前节点)
```





## 自定义属性

- 固有属性: 

  - 标签天生自带的属性 比如class id title等, 可以直接使用点语法操作

- 自定义属性: 

  - 由程序员自己添加的属性,在DOM对象中找不到, 无法使用点语法操作,必须使用专门的API

  - **element.setAttribute('属性名', '属性值')** // 设置自定义属性

    ```html
    <div id='mydiv' class='nav'></div>
    
    
    <!--创建属性时，对于标签中已存在的属性，则会进行赋值操作，注意class比较特殊，它对应的class而不是className-->
    let div = document.querySelector('#mydiv')
    console.log(div.setAttribute('class','footer'));   //<div id='mydiv' class='footer'>
    ```

    

  - **element.getAttribute('属性名')** // 获取自定义属性

    ```html
    <div id='mydiv'></div>
    
    let div = document.querySelector('#mydiv')
    console.log(div.getAttribute('id'));   //mydiv
    ```

    

  - **element.removeAttribute('属性名')** // 删除自定义属性

    ```html
    <div id='mydiv' index='1'></div>
    
    let div = document.querySelector('#mydiv')
    console.log(div.removeAttribute('index'));
    ```

- 自定义属性目的：是为了保存并使用数据。有些数据可以保存到页面中而不用保存到数据库中。

- 但是有些自定义属性很容易引起歧义，不容易判断是元素的内置属性还是自定义属性，H5因此给我们新增了自定义属性

  - H5规定自定义属性 `data-` 开头作为属性名并且赋值

  - data-自定义属性: 

    - 传统的自定义属性没有专门的定义规则,开发者随意定值,不够规范,所以在html5中推出来了专门的data-自定义属性 在标签上一律以`data-`开头

    - 在DOM对象上一律以dataset对象方式获取


```html
<div class="box" data-id="10"></div>
<script>
	let box = document.querySelector('.box')
	console.log(box.dataset.id)  //10
</script>
```

  - 可以通过 `element.dataset.自定义属性名` 或者 `element.dataset['自定义属性名']`获取自定义属性（有严重的兼容性问题  ie11才开始支持），并且只支持 `data-`开头的

    - dataset是一个集合，里面存放了所有以data开头的自定义属性

    ```html
    <div id='mydiv' data-index='1'></div>
    例如：获取index属性的值
    
    let div = document.querySelector('#mydiv')
    div.dataset.index
    div.dataset['index']
    ```

    - 如果自定义属性中有多个 - 连接的单词，我们获取的时候采取驼峰命名法

      ```html
      <div id='mydiv' data-list-name='su'></div>
      
      let div = document.querySelector('#mydiv')
      div.dataset.listName
      div.dataset['listName']
      ```

      

    



# 事件

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

      

## 事件监听版本

- DOM L0 

  - 事件源.on事件 = function() { }

- DOM L2 

  - 事件源.addEventListener(事件, 事件处理函数) 

- 发展史：

  - DOM L0：是 DOM 的发展的第一个版本； L：level

  - DOM L1：DOM级别1 于1998年10月1日成为W3C推荐标准

  - DOM L2：使用addEventListener注册事件

  - DOM L3： DOM3级事件模块在DOM2级事件的基础上重新定义了这些事件，也添加了一些新事件类型。

    

## 事件类型

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



## 事件流

事件流指的是事件完整执行过程中的流动路径。当触发事件时，会经历两个阶段，分别是捕获阶段、冒泡阶段。捕获阶段是 从父到子 冒泡阶段是 从子到父。



### 事件捕获

从DOM的根元素开始去执行对应的事件 (从外到里) 

```js
DOM.addEventListener(事件类型, 事件处理函数, 是否使用捕获机制)
```

addEventListener第三个参数传入true代表是捕获阶段触发（很少使用），若传入false代表冒泡阶段触发，默认就是false

### 事件冒泡

当一个元素的事件被触发时，同样的事件将会在该元素的所有祖先元素中依次被触发。这一过程被称为事件冒泡。

- 简单理解：当一个元素触发事件后，会依次向上调用所有父级元素的同名事件

- 事件冒泡是默认存在的

### 阻止事件流动

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

  

### 阻止默认行为

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

      



## 事件委托

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

    

## 事件对象

获取事件对象 

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





## 滚动事件

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

  

## 加载事件

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

    

## 元素大小和位置

### scroll家族---滚动

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

    - document.documentElement  HTML文档返回对象为HTML元素，documentElement是HTML的一种写法。

      

### offset家族---偏移量

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




### client家族

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

  

### 三者区别

scrollWidth scrollHeight 内容宽高
offsetWidth offsetHeight 盒子元素的大小=盒子本身的宽度和高度+padding+border
clientWidth clientHeight 当前可视区域的宽高（不包含滚动条，边框等）

scrollLeft scrollTop 获取元素内容往左、往上滚出去看不到的距离
offsetLeft offsetTop 获取元素到距离自己最近的带有定位的父级元素的左、上距离
clientLeft clientTop 获取左边框和上边框宽度（厚度）

















# 定时器

定时器函数有两种，一种是间歇函数，另一种是延时函数。

## 间歇定时器

每隔一段时间调用这个函数，间隔时间单位是毫秒，函数一旦开始永不停歇，除非强行停止计时器。

定时器返回的是一个id数字

```js
// 开启定时器
setInterval(函数,间隔时间)

// 清除定时器
let timer = setInterval(函数，间隔时间)
clearInterval(timer)
```



## 延时定时器

JavaScript 内置的一个用来让代码延迟执行的函数，叫 setTimeout

setTimeout 仅仅只执行一次，所以可以理解为就是把一段代码延迟执行, 平时省略window

结合递归函数可以使setTimeout 实现 setInterval 一样的功能

```js
// 开启定时器
setTimeout(回调函数, 等待的毫秒数)

// 清除定时器
let timer = setTimeout(回调函数, 等待的毫秒数)
clearTimeout(timer)
```





