# path内置模块

```js
//引入path模块
const path = require('path');


//跟path无关，但使用path时会用到
console.log(__dirname)	//可以获取到该js文件所在的路径

//通过拼接的方式：获取当前文件的确完整路径
let filepath = path.join(__dirname,'文件名')
	//第一个参数：获取当前文件所在位置
	//当前文件的文件名


//获取同级其他目录下的文件路径
let filepath2 = path.join(__dirname,'文件夹名','文件名')

```

