# HTTP简介

[HTTP](https://developer.mozilla.org/zh-CN/docs/Web/HTTP)（hypertext transport protocol）协议：超文本传输协议，协议详细规定了浏览器和万维网服务器之间互相通信的规则。

协议：约定、规则。

HTTP主要是规范约定了请求和响应

请求：浏览器向服务器发送内容，其中发送的内容叫做请求报文。

响应：服务器给浏览器返回结果，其中返回的结果叫做响应报文。

分为四部分：行、头、空行、体

## 请求报文

Request Headers请求头

```js
1.请求行
GET /posts HTTP/1.1
- 请求类型	 			GET、POST、...
- URL路径				 /posts
- HTTP协议版本		HTTP/1.1

2.请求头（格式为键值对）
- Host
- Cookie
- Content-type
- User-Agent

3.空行（必须有）
4.请求体
- get请求，请求体是空的
- post请求，请求体可以不为空
```



## 响应报文

Response Headers响应头

```
1.响应行
HTTP/1.1 200 OK
- HTTP协议版本		HTTP/1.1
- 响应状态码		 	 200
- 响应状态字符串   ok

2.响应头（格式为键值对）
- 类型	      Content-type
- 长度		    Content-length
- 压缩方式     Content-encoding

3.空行（必须有）
4.响应体
- 返回的结果
```

