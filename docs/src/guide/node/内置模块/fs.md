# fs

fs（全称File System，中文译为：文件系统）

fs模块可以实现与硬盘的交互，例如：文件的创建、删除、重命名、移动，还有文件内容的写入、读取，以及文件夹的相关操作。



## 文件写入

| 方法                        | 说明     |
| --------------------------- | -------- |
| writeFile                   | 异步写入 |
| writeFileSync               | 同步写入 |
| appendFile / appendFileSync | 追加写入 |
| creatWriteStream            | 流式写入 |

### writeFile

**语法：**`fs.writeFile(file, data[, options], callback)`

**参数说明：**

- file：文件名
- data：待写入的数据
- options：选项设置（可选）
- callback：写入回调

**返回值：**`undefined`

代码示例：

```js
/**
 * 需求：
 * 新建一个文件，座右铭.txt，写入内容：三人行，则必有我师焉。
 */

// 1.导入fs模块
const fs = require("fs");
const path = require("path");

// 2.创建文件
//会覆盖原来的内容，追加appendFile

let filepath = path.join(__dirname, "座右铭.txt");

fs.writeFile(filepath, "三人行，则必有我师焉!", "utf-8", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("写完了！");
});
```



## 文件读取

### 同步读取

```js
//同步读取
const fs = require('fs');
const path = require('path');
//获取被读取文件的路径
let filepath = path.join(__dirname, 'demo02.txt');

let ret = fs.readFileSync(filepath,'utf-8');
console.log(ret); //<Buffer e8 8b 8f e4 b8 9c e6 97 ad>  是node引擎存储文件数据的一种格式，以十六进制的方式存储

//通过toString()转成字符串就是我们能看懂的信息了
console.log(ret.toString()); //苏东旭


//同步sync：任务按顺序执行，执行完一个任务后再去执行另外一个任务
//异步async：有回调函数的几乎都是异步。如ajax请求、事件、定时器
```



### 异步读取

```js
//异步读取
const fs = require('fs');
const path = require('path');
//获取被读取文件的路径
let filepath = path.join(__dirname, 'demo02.txt');

fs.readFile(filepath,'utf-8',(err,data)=>{
  //err 错误
  //data 读取到的数据
  if(err){
    console.log(err);
    return;
  }
  console.log(data)
});

```



## 文件移动与重命名



## 文件删除



## 文件夹操作




