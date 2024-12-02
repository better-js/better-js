# Mock数据

Mock数据是在本地开发环境中模拟后端API响应的一种常用方法。使用Mock数据可以加速开发流程，无需等待后端API的实现。

-----

**步骤 1：安装 Mock 插件和 Mockjs**

在你的项目中安装 `vite-plugin-mock` 和 `mockjs`：

```bash
pnpm i -D vite-plugin-mock mockjs
```

----

**步骤 2：在 `vite.config.ts` 中配置 Mock 插件**

在 Vite 的配置文件中启用 Mock 插件：

```ts
import { viteMockServe } from 'vite-plugin-mock'

export default defineConfig(({command}) => {
  return {
    plugins: [
      viteMockServe({
        localEnabled: command === 'serve'
      }),
    ]
  }
})
```

----

**步骤 3：创建 Mock 数据和接口**

在项目根目录下创建一个 `mock` 文件夹，并在其中创建数据和接口文件。例如，创建一个 `user.ts` 文件：

```ts
function createUserList() {
  return [
    {
      id: 1,
      username: 'dancy',
      password: '123123',
      token: 'asdfghjkl'
    }
  ]
}

// 对外暴露一个数组：数组里面包含接口
export default [
  {
    url: '/api/user/login',
    method: 'post',
    response: ({body}) => {
      // 获取请求体携带过来的用户名和密码
      const { username, password } = body;
      
      // mock逻辑
      const checkUser = createUserList().find((item)=> item.username === username && item.password === password)
      
      if(!checkUser) {
        return {
          code: 201,
          data: {
            message: '账号或密码不正确'
          }
        }
      }
      
      // 如果有返回成功信息
      const { token } = checkUser
      
      return {
        code: 200,
        data: { token }
      }
    }
  }
]
```

-----

**步骤 4：使用 Axios 测试接口**

最后，使用 Axios 来测试你的 Mock 接口：

```ts
import axios from 'axios'

axios({
  url: '/api/user/login',
  method: 'post',
  data: {
    username: 'dancy',
    password: '123123'
  }
})
```

