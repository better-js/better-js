# Mock数据

（1）安装

```bash
pnpm i -D vite-plugin-mock mockjs
```

（2）在 `vite.config.ts` 配置文件中启用插件

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

（3）在项目根目录下创建 `mock` 文件夹，然后创建我们的数据和接口

例如，创建一个 `user.ts` 文件

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

（4）最后通过 axios 测试接口

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

