# axios封装

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
  baseURL: '/api',
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



## 配置代理

在使用 Vite 开发应用时，你可能需要配置代理以解决本地开发环境中的跨域请求问题。以下是如何在 `vite.config.ts` 中配置代理的步骤：

**步骤 1：编辑 `vite.config.ts`**

在项目的 `vite.config.ts` 文件中，配置开发服务器的代理设置：

```ts
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // 后端服务器地址
        changeOrigin: true, // 是否改变请求头中的Origin字段
        rewrite: (path) => path.replace(/^\/api/, ''), // 重写请求路径
      },
    },
  },
});
```

配置说明

- target：指定你的后端服务器地址。所有匹配 `/api` 的请求将被代理到这个地址。
- changeOrigin：设置为 `true` 可以避免 CORS（跨源资源共享）问题，因为它会修改请求头中的 `Origin` 字段。
- rewrite：一个函数，用于重写请求路径。这里我们将路径中的 `/api` 前缀替换为空，这样代理的请求就会匹配后端服务器的根路径。

-----

**步骤 2：使用代理**

配置完成后，你可以在项目中通过 `/api` 前缀来访问后端接口。例如，如果你有一个后端接口 `http://localhost:3000/users`，你可以在前端代码中这样请求：

```js
fetch('/api/users').then(response => response.json());
```

这个请求会被 Vite 代理到 `http://localhost:3000/users`。
