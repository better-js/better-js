# Ajax的使用

[AJAX](https://developer.mozilla.org/zh-CN/docs/Web/Guide/AJAX)

::: details AJAX API

```javascript
const xhr = new XMLHttpRequest();
```

| 属性                             | 描述                 |
| -------------------------------- | -------------------- |
| xhr.open(method, url)            | 设置请求类型和URL    |
| xhr.setRequestHeader(key, value) | 设置请求头           |
| xhr.send()                       | 发送                 |
| xhr.onreadystatechange           | 处理服务端返回的结果 |
| xhr.readyState                   | 服务端返回结果状态   |
| xhr.status                       | 响应行-状态码        |
| xhr.statusText                   | 响应行-状态字符串    |
| xhr.getAllResponseHeaders()      | 所有响应头           |
| xhr.response                     | 响应体               |
|                                  |                      |

:::

## 基本使用

### GET请求

::: details 步骤

1. 创建 **xhr** 对象
2. 设置请求方法、url、参数
3. 发送
4. 处理服务端返回结果
   - **on**：当...时候
   - **readystate**：是xhr对象中的属性，表示状态
     - 0：未初始化
     - 1：open方法调用完毕
     - 2：send方法调用完毕 
     - 3：服务端返回了部分结果
     - 4：服务端返回了所有结果
   - **change**：改变的时候触发，总共触发4次（0-1、1-2、2-3、3-4）

::: 

```js
const btn = document.getElementsByTagName("button")[0];
btn.onclick = function () {
  // 1.创建 xhr 对象
  const xhr = new XMLHttpRequest();
  // 2.设置请求类型、URL、URL参数
  xhr.open("GET", "http://127.0.0.1:8000/server?a=100");
  // 3.发送
  xhr.send();
  // 4.事件绑定 处理服务端返回的结果
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        console.log(xhr.status); // 状态码
        console.log(xhr.statusText); // 状态字符串
        console.log(xhr.getAllResponseHeaders()); // 所有响应头
        console.log(xhr.response); // 响应体
      }
    }
  };
};
```



### POST请求

::: details 步骤

1. 创建 **xhr** 对象
2. 设置请求方法、url、参数
3. 发送
   - send方法内设置请求体
4. 处理服务端返回结果

::: 

```js
const btn = document.getElementsByTagName("button")[0];
btn.onclick = function () {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://127.0.0.1:8000/server');
  // 发送（含请求体）
  xhr.send('a=100');
  xhr.onreadystatechange = function (){
    if(xhr.readyState === 4){
      if(xhr.status >= 200 && xhr.status < 300){
        console.log(xhr.response);
      }
    }
  }
}
```

## 其他设置

### 设置请求头

注意：必须在open方法后设置请求头

```javascript
const xhr = new XMLHttpRequest();
xhr.open('POST', 'http://127.0.0.1:8000/server');
// 设置请求头
xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
xhr.send('a=100');
xhr.onreadystatechange = function (){
  if(xhr.readyState === 4){
    if(xhr.status >= 200 && xhr.status < 300){
      console.log(xhr.response);
    }
  }
}
```



### 设置响应体数据类型

responseType

```javascript
const xhr = new XMLHttpRequest();
// 设置响应体数据类型
xhr.responseType = 'json';
xhr.open("GET", "http://127.0.0.1:3001/server");
xhr.send();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log(xhr.response); // 响应体
    }
  }
};
```



### 请求超时处理

```javascript
const xhr = new XMLHttpRequest();
// 请求超时设置2秒
xhr.timeout = 2000;
// 超时回调
xhr.ontimeout = function (){
  alert('请求超时啦，请稍后重试！')
}
xhr.open("GET", "http://127.0.0.1:3001/server");
xhr.send();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log(xhr.response); // 响应体
    }
  }
};
```

### 网络异常处理

```javascript
const xhr = new XMLHttpRequest();
// 网络异常处理
xhr.onerror = function (){
  alert('您的网络似乎出了一些问题！')
}
xhr.open("GET", "http://127.0.0.1:3001/server");
xhr.send();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log(xhr.response); // 响应体
    }
  }
};
```

### 取消请求

`abort()`

```javascript
let xhr = null;
const btn = document.getElementsByTagName("button");
// 发送请求
btn[0].onclick = function () {
  xhr = new XMLHttpRequest();
  xhr.open("get", "http://127.0.0.1:3001/server");
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        console.log(xhr.response); // 响应体
      }
    }
  };
};
// 取消请求
btn[1].onclick = function () {
  xhr.abort();
};
```



## 扩展

### 解决重复发送请求问题

```js
const xhr = null;
// 是否正在发送ajax请求
let isSending = false;
btn.addEventListener("click",()=>{
  if(isSending) xhr.abort();
  xhr = new XMLHttpRequest();
  isSending = true;
  xhr.open('GET', 'http://127.0.0.1:8000/server')
  xhr.send();
  xhr.onreadystatechange = function (){
    if(xhr.readyState === 4){
      isSending = false;
    }
  }
})
```

### 解决IE缓存问题

IE浏览器会对ajax的请求结果做缓存，这样就会导致一个问题，下一次再发送请求时，这时走的是本地缓存，而并不是服务器返回的最新数据，这样一来对于时效性很强的场景，ajax缓存会影响结果。

```js
xhr.open('POST', 'http://127.0.0.1:8000/server?t='+Date.now());
```

