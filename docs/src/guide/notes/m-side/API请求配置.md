# API请求配置

## axios二次封装

**步骤 1：安装 axios**

在你的项目中安装axios，这是一个基于promise的HTTP客户端，用于浏览器和node.js：

```bash
pnpm add axios
```

-----

**步骤 2：创建axios实例**

在 `utils` 目录下创建 `request.ts` 文件，配置axios实例和拦截器：

```ts
import axios from 'axios'

// 创建 axios 实例
let request = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // 使用环境变量
  timeout: 5000
})

// 请求拦截器
request.interceptors.request.use(function (config) {
  // 在请求发送之前做一些事情，例如设置token
  return config;
}, function (error) {
  // 在请求失败时做一些事情
  return Promise.reject(error);
});

// 响应拦截器
request.interceptors.response.use(function (response) {
  // 任何处于2xx范围内的状态码都会触发此函数
  // 对响应数据做一些事情
  return response;
}, function (error) {
  // 任何超出2xx范围的状态码都会触发此函数
  // 在响应失败时做一些事情
  return Promise.reject(error);
});


// 对外暴露
export default request
```



## API接口统一管理

**用户相关接口管理**

在 `api/user`目录下创建 `index.ts` 文件，统一管理用户相关的接口请求：

```ts
import request from '@/utils/request'
import { ILoginReq, ILoginRes } from './type'
// 统一管理接口
enum API {
  LOGIN_URL: '/user/logins'
}

// 暴露请求函数
export function reqLogin = (data: ILoginReq): ILoginRes => request.post(API.LOGIN_URL, data)
```

**定义接口请求和响应类型**

在 `api/user` 目录下创建 `type.ts` 文件，用于定义登录接口需要携带的参数类型和返回的参数类型：

```ts
// 登录接口需要携带的参数类型
export interface ILoginReq {
  username: string,
  password: string 
}

interface dataType {
  token: string
}
// 登录接口返回的参数类型
export interface ILoginRes {
  code: number,
  data: dataType
}
```



