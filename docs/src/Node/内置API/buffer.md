# Buffer

## 概念

Buffer中文译为缓冲区，是一个类似于 Array 的**对象**，用于表示固定长度的字节序列。

Buffer本质是一段内存空间，专门用来处理**二进制数据**。



## 特点

1. Buffer大小固定且无法调整
2. Buffer性能较好，可以直接对计算机内存进行操作
3. 每个元素的大小为1字节（byte）



## 使用

### 创建Buffer

Node.js中创建Buffer的方式主要有如下几种：

#### 1 Buffer.alloc()

```js
// 创建了一个长度为 10 字节的 Buffer
// 相当于申请了 10 字节的内存空间，每个字节的值为 0
let buf_1 = Buffer.alloc(10);
console.log(buf_1); // <Buffer 00 00 00 00 00 00 00 00 00 00>
```

#### 2 Buffer.allocUnsafe()

```js
// 创建了一个长度为20字节的 Buffer，buffer中可能存在旧的数据，可能会影响执行结果，所以叫 unsafe
let buf_2 = Buffer.allocUnsafe(20);
console.log(buf_2); // <Buffer 00 00 00 00 00 00 00 00 00 00>
```

#### 3 Buffer.from()

```js
// 通过字符串创建
let buf_3 = Buffer.from("hello")
console.log(buf_3); // <Buffer 68 65 6c 6c 6f>

// 通过数组创建
let buf_4 = Buffer.from([1, 2, 3, 4, 5])
console.log(buf_4); // <Buffer 01 02 03 04 05>


// 在转化时，每一个字母都会被转化为这个字符在unicode码表中对应的数字，然后这个数字会转成二进制存到Buffer中

```

### Buffer与字符串的转换

我们可以借助 `toString()` 方法将 Buffer转为字符串，`toString()` 默认按照 `utf-8` 编码方式进行转换的。

```js
let buf = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
console.log(buf.toString()); // iloveyou
```



### Buffer的读写

Buffer可以直接通过 `[]` 的方式对数据进行处理。

```js
let buf = Buffer.from("hello");
// 读取
console.log(buf[1]); // 101

// 修改
buf[1] = 97;

// 查看修改后的字符串结果
console.log(buf.toString()); // hallo
```

如果修改的数值超过 225，则超过 8 位数据会被舍弃

```js
let buf = Buffer.from("hello");
buf[0] = 361; // 舍弃高位的数字 0001 0110 1001 => 0110 1001
console.log(buf[0]); // 105
console.log(buf.toString()); // iello
console.log(buf[0].toString(2)); // 1101001
```

一个 utf-8 的字符一般占 3 个字节

```js
let buf = Buffer.from("你好");
console.log(buf); // <Buffer e4 bd a0 e5 a5 bd>
```

