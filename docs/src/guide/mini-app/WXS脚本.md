# WXS脚本

在小程序的wxml页面，不能直接写一些js默认的一些方法，如果想要在wxml中写一些类似于js的代码，那么需要引入wxs脚本

## WXS第一种写法

```js
//第一种写法 内嵌
<wxs module="脚本名">
	//写类似于js的代码，不支持ES6语法，支持commonjs语法
	val name="狗蛋";
	function _toFixed(price,len){
		return price.toFixed(len)
	}
	//开放出去
	module.exports={
		name:name,
		_toFixed:_toFixed
	}
</wxs>

使用：{{ 脚本名.name }}
使用：{{ 脚本名._toFixed() }}


```



## WXS第二种写法 【推荐】

```js
//单独的common.wxs文件
var name = "狗蛋"

module.exports={
	name:name
}
```

```html
//wxml使用
//引入
<wxs src="../common.wxs" module="脚本名">
  //使用
	{{ 脚本名.name }}
</wxs>
```



## 模块的导出与引入

|          | 导出           | 导入    |
| -------- | -------------- | ------- |
| ES6      | export default | import  |
| commonjs | model.exports  | require |

