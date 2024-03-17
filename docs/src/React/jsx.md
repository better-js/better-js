# JSX

**JSX** 是 JavaScript 语法的扩展，是 JavaScript 和 XML 的缩写，表示在 **JS代码中编写HTML模版结构** ，它是React中编写UI模版的方式。

JSX 和 React 是互相独立的东西（JSX 是一种语法扩展，而 React 则是一个 JavaScript 库）。但是它们经常一起使用（React使用 JSX 来替代常规的 JavaScript ），但你可以单独使用它们中的任意一个，比如在Vue中也是可以使用 JSX 的。



::: code-group

```jsx [函数声明写法]
// 函数声明
function App() {
	return (
		<div>hello jsx</div>
	);
}

export default App;
```

```jsx [函数表达式写法]
// 函数表达式
const App = () => {
	return (
		<div>hello jsx</div>
	);
}

export default App;
```

```jsx {3,9} [注意]
// return 后面是可以不加小括号的
const App = () => {
  return <div>hello jsx</div>;
};

// 但是 return 有一个特点就是它后面的代码是不执行的
const App = () => {
  return
  <div>hello jsx</div>;
};

// 所以为了防止return后面什么都不加而导致错误🙅
// 我们最好加个小括号，这样就可以在括号内放心大胆的写代码了
const App = () => {
  return (
    <div>hello jsx</div>
    );
};
```

:::



## 优势

1. HTML的声明式模版写法 

2. JS的可编程能力

```jsx {4}
const message = "hello jsx";
function App() {
  return (
  	<div>{message}</div>
  );
}

export default App;

```



## 本质

JSX 并不是标准的 JS 语法，它是 JS 的语法扩展，由于浏览器本身并不能识别 JSX ，所以需要通过解析工具（ SWC 或 Babel ）解析之后才能在浏览器中运行。

https://babeljs.io

![image-20231126163825131](/images/react/react-001.png)



## 特点

1. JSX 执行更快，因为它在编译为 JavaScript 代码后进行了优化
2. 它是类型安全的，在编译过程中就能发现错误
3. 使用 JSX 编写模版更加简单快速



## jsx 和 html 的写法区别

### 1 标签要小写

jsx中使用大写和小写字母来区分本地组件和HTML标签，而在html中标签不区分大小写

::: code-group
```html {1-2} [html]
<DIV>hello html</DIV>
<div>hello html</div>
```
```jsx {3} [jsx]
const App = () => {
  return (
    <div>hello jsx</div>
  );
};

export default App;
```
:::

### 2 标签要闭合

jsx中标签必须闭合，而html可以不闭合

::: code-group

```html {1} [html]
<input type="text">
```

```jsx {3} [jsx]
const App = () => {
  return (
    <input type="text" />
  );
};

export default App;
```
:::
### 3 class和for关键字

JSX和HTML的标签属性的区别，在jsx中 class 和 for 是关键字

| HTML  | JSX                                 | 原因                       |
| ----- | ----------------------------------- | -------------------------- |
| for   | htmlFor                             | for在js中为for循环的关键字 |
| class | className                           | class在js中为声明类关键字  |
| style | 需使用JS对象（使用双花括号--{{}} ） |                            |
::: code-group
```html {1-2} [html]
<div class="box">
	<label for="name">用户名</label>
	<input id="name" type="text">
</div>
```
```jsx {3-4} [jsx]
const App = () => {
  return (
    <div className="app">
      <label htmlFor="name">用户名</label>
      <input id="name" type="text" />
    </div>
  );
};

export default App;
```
:::
### 4 属性驼峰命名

自定义属性 `data-xxx` 除外
::: code-group
```html {1} [html]
<button onclick="alert('确认')">确认</button>
```
```jsx {4} [jsx]
const App = () => {
  return (
    <button
      onClick={() => {
        alert("确认");
      }}
    >
      确认
    </button>
  );
};

export default App;
```
:::
### 5 大括号使用 js 表达式

> 在jsx中使用js代码，必须要写在{}

在 JSX 中可以通过 **大括号{}** 识别 JavaScript 中的表达式，比如常见的变量、函数调用、方法调用等等。

注意：if语句、switch语句、变量声明属于语句，不是表达式，不能出现在{}中

::: code-group
```jsx
const message = "hello jsx";
function getName() {
  return "dancy";
}
const tag = <div>React JSX</div>
function App() {
  return (
    <div>
      {/* 使用引号传递字符串 */}
      {"this is App"}
      {/* 识别js变量 */}
      {message}
      {/* 函数调用 */}
      {getName()}
      {/* 方法调用 */}
      {new Date().getDate()}
      {/* 使用js对象 */}
      <div style={{ color: "orange" }}>this is orange</div>
      {/* 使用jsx */}
      {tag}
      {/* 使用数组 */}
      {[1,2,3].reverse()}
    </div>
  );
}

export default App;
```
:::

### 6 添加注释
注释需采用js的写法，所以需要写在{}内
::: code-group
```jsx {4-7}
const App = () => {
  return (
    <div>
        {/* {我是注释} */}
        {
            // 我是单行注释
        }
    </div>
  );
};

export default App;
```
:::
### 7 唯一根元素

原因：JSX 中的内容会被转成虚拟DOM对象，因此 return 后面只能有一个根标签，但是这个标签内部可以嵌套多个标签。

- 可以借助 Fragment标签 包裹多个节点
  - Fragment相当于容器，是不会被渲染的。
- Fragment标签 可以简写为 `<></>`
  - 两者区别：当你需要写key属性时，必须用 Fragment标签

::: code-group

```jsx [Fragment]
import { Fragment } from "react";
const App = () => {
  return (
    <Fragment>
      <div>111</div>
      <div>222</div>
    </Fragment>
  );
};

export default App;
```
```jsx [简写]
const App = () => {
  return (
    <>
      <div>111</div>
      <div>222</div>
    </>
  );
};

export default App;
```
:::

## 行内样式、全局样式、局部样式

### 行内样式

`style={对象}`

css样式必须是一个对象，这里第一个{}代表js环境，第二个 {} 代表对象格式

::: code-group
```jsx [写法1]
// 单位可以省略
const App = () => {
  return (
    <div style={{ width: 200, height: "100px", backgroundColor: "orange" }}></div>
  );
};

export default App;
```
```jsx [写法2]
const myStyle = { width: "200px", height: "100px", backgroundColor: "orange" }
const App = () => {
  return (
    <div style={myStyle}></div>
  );
};

export default App;
```
:::
### 全局样式
定义单独的css文件，文件名为 `xx.css`
::: code-group
```css [index.css]
.box {
  width: 100px;
  height: 100px;
  background-color: orange;
}
```
```jsx [app.jsx]
import "./index.css";
const App = () => {
  return (
    <>
      <div className="box"></div>
    </>
  );
};

export default App;
```
:::


### 局部样式
局部样式是一种模块化操作的方式，它也是需要定义单独的css文件，文件名为 `xx.module.css` 
::: code-group
```css {6} [index.module.css]
.container {
  width: 100px;
  height: 100px;
  background-color: blue;
}
.container-title {
  color: pink;
}
```
```jsx {2,7-8} [app.jsx]
import "./index.css";
import style from "./index.module.css";
const App = () => {
  return (
    <>
      <div className="box"></div>
      <div className={style.container}></div>
      <div className={style["container-title"]}>title</div>
    </>
  );
};

export default App;
```
:::
通过脚手架最终它会编译成特殊的样式名
```html
<div class="_container_1siw5_1"></div>
```



::: tip style["container-title"] 这种能不能用驼峰写法呢？

其实vite脚手架是提供了这个能力的，但需要手动配置

```js {7-11} [vite.config.js]
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCase'
    }
  }
})
```

:::

### 9 jsx 本地图片先引入 后使用





## 文件引入方式

```jsx
//引入后立即执行
import "./Index.css"

//什么时候调用什么时候执行
import Img from "../static/logo.png"
```



## JSX是React虚拟出来的DOM对象

```jsx
const App = () => {
  console.log("打印虚拟DOM对象", <div className="app">hello jsx</div>);
  return (
    <div className="app">hello jsx</div>
  );
};
```

当我们编写了一段简单的 jsx 代码之后，在react内部会将其转换为虚拟DOM对象

```js
{
	type: 'div',
	props: {
		className: 'app',
		children: 'hello jsx'
	},
	key: null,
	ref: null
}
```

然后通过 React DOM库，对虚拟DOM对象进行原生js操作，从而实现浏览器中的渲染

```js
// js创建DOM元素
domElement = document.createElement();
domElement.appendChild()
domElement.innerHTML
```



```jsx
// js创建DOM元素
document.createElement("div")

// React的标签对象
React.createElement("div",{className:"box"},"hello")
```



