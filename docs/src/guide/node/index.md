# Node

Node.js中不能使用BOM和DOM的API，可以使用 console和定时器API

Node.js中的顶级对象为 global，也可以用 globalThis 访问顶级对象。



## 1. 全局对象

node下的全局对象global

```js
//console.log(global) ==> node引擎下的全局对象

let a = 10;
console.log(global.a)

//解释文件（js文件）的模式下，a不会被挂载到全局对象上。
//交互模式（黑窗口的命令行）下，定义的变量会被挂载到global上。


global.b=20
console.log(b)  //挂载在global上的变量可以直接访问


console.log(global === this); //false  解释文件模式下，this不指向global，而是指向本模块（该js文件）；但是在交互模式下，this指向global。

```



## 2. 模块的使用

### 使用模块的好处（了解）

- 最大的好处就是大大提高了代码的可维护性。其次，编写代码不必从零开始。当一个模块编写完毕，就可以被其他地方引用。
- 使用模块可以避免函数名和变量名冲突。相同名字的函数和变量完全可以分别存在不同的模块中，因此，我们自己编写模块时，不必考虑名字会与其他模块冲突。

### 模块规范的定义（了解）

- 一个js文件就是一个模块，模块的作用域时私有的，内部定义的变量或者函数，只在当前的文件（模块）可以使用。
- 如果别人使用我们模块里面的的东西，那么有两点要做：（以commonJS的Modules规范：Node.js为例）
  - 自己编写的模块，由于模块作用域是私有的，默认情况下，外部是没有办法使用的。可以导出exports或者modules.exports。导出的时候以对象的方式导出。
  - 别人要使用，则需要先引入该模块，使用require引入，并设置一个变量来接收导入的对象。

对书写格式和交互规则的详细描述，就是模块定义规范。

- AMD规范：Require.js	【模块化规范的鼻祖，旧规范，已经退出历史舞台了】
- CMD规范：Sea.js     【模块化规范的鼻祖，旧模范，已经退出历史舞台了】
- **CommonJS的Modules规范：Nodejs**【现在正在使用的】
- **ES6模块化规范 import ... from ...**【现在正在使用的】



### 模块化使用

#### commonJS的使用

CommonJS的Modules规范，也是Nodejs自带的规范，就是规范了导出该怎么写，导入该怎么写

```js
//CommonJS模块规范
let a=10;
function fn(){
  console.log('我是模块中的函数fn')
}
class Animal{
  constructor(){
    this.age=0
  }
}


//CommonJS导出的第一种格式
exports.a=a
exports.fn=fn
exports.Animal=Animal
//CommonJS导出的第二种格式
module.exports = {
  a,
  fn,
  Animal
}

//引入模块
const xxx(跟模块文件名一致) = require('./modules/xxx.js');
//使用
console.log(xxx.a)  	//10
xxx.fn()	//我是模块中的函数fn
let ani = new xxx.Animal();
console.log(an1.age)




/*
	注意：
		1.require() 是commonJS引入模块的一个方法
		2.引入模块之后，被一个常量接收，常量名一般跟模块名一致（不是必须，但大家都这么做）
		3.当导入的是js文件时，后缀名可以不写
		4.如果文件名是index.js，则整个文件名都可以不写

*/
```



### 模块中的this指向

```js
//模块中的this指向本模块
console.log(exports);		//{}
console.log(module.exports)		//{}
console.log(exports===module.exports)		//true

console.log(exports===this)		//true
console.log(this)		//{}
console.log(global===this)		//false

```

## 3. nodemon插件

```sh
# 创建并进入demo文件夹
mkdir demo && cd demo
# 创建package.json
npm init -y
# 安装express模块
npm install express
# 安装nodemon插件
npm i -g nodemon

# 启动服务
nodemon app.js
```

