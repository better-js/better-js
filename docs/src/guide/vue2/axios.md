# Axios

[Axios](https://axios-http.com/zh/)是一个基于promise的HTTP库，可以用在浏览器和node.js中。

```shell
# npm安装
npm install axios
# yarn 安装
yarn add axios
```



## 基本使用

- get请求

```jsx
// 注意：get请求的params是固定格式，只能这么写，params值是一个对象，就是要传给后端的参数
axios.get("/getdata", {
  params: {
    id: 123
  }
}).then(res => {
  // res是axios封装好的一个响应对象
  // res.data才是真正后端给我们的数据
  console.log(res);
})
```

- post请求

```jsx
axios.post("/postdata", {
  data: {
    num: 123
  }
}).then(res => {
  console.log(res)
})
```

## 解决跨域

> 什么时跨域？
>
> 协议、域名、端口有一个不一致就会出现跨域

如何解决跨域：axios解决跨域采用的方式是：写代理。

如何设置代理：找到 `vue.config.js` 文件

```jsx
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer:{
		// 如果需要自定义代理名，我们需要重写路径
    '/代理名': {
      target:'代理地址',
      pathRewrite:{
        "^/api":""
      }
    }
  }
})
```

注意：修改配置文件必须重启服务



## 封装Axios

为了便于维护，开发中都会对axios进行封装，建立一个统一的文件去管理它们，另外可以对一些请求进行拦截，发起请求时对一些配置项进行拦截，响应数据时对它进行一个拦截

- request.js
  - 这份文件就是用来做拦截的
- api.js
  - 管理请求



```jsx
import axios from 'axios'

// 创建一个axios实例
const instance = axios.create({
  baseURL:"请求路径",
  timeout:超时时间
})

// 拦截器 - 请求拦截
instance.interceptors.request.use(config=>{
  // 在发送请求之前做些什么
  // 部分接口需要拿到token
  let token = localStorage.getItem('token')
  if(token){
    config.headers.token = token;
  }
  return config
},err=>{
  return Promise.reject(err)
})


// 拦截器 - 响应拦截
instance.interceptors.response.use(response=>{
  // 对响应数据做点什么
  return response
},err=>{
  return Promise.reject(err)
})

// 整体导出
export default instance;
```



```jsx
// 将request.js整体导入
import request from './request'

// 按需导出每个请求，也就是按需导出每个api

// get请求
export const GetHomeAPI = () => request.get('/api')

// post请求
export const PostLoginAPI = (params) => request.post('/api',params)

```



```jsx
// 按需导入
import {GetHomeAPI,PostLoginAPI} from '@/request/api.js'

GetHomeAPI().then(res=>{
  console.log(res)
})

PostLoginAPI({
  username:"xiaosu",
  password:"123"
}).then(res=>{
  console.log(res)
})
```



## get和post的传参差异



```jsx
// get传参时 多一层对象包裹
axios.get('',{
	params:{
		username:"xiaosu"
	}
}).then().catch()

// post传参时，直接是一个对象
axios.post('',{
	username:"xiaosu"
}).then().catch()
```

