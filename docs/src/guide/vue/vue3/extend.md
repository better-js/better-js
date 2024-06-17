# 其他

## v-bind为css绑定变量

```vue
<template>
  <div class="box"></div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const ys = ref('#ffd100')
</script>

<style scoped>
.box {
  width: 500px;
  height: 500px;
  background-color: v-bind(ys);
}
</style>
```



## 跨域解决

:::code-group

```ts {5} [ajax]
import axios from 'axios'

// 创建实例
export const ajax = axios.create({
  baseURL: '/api',
  timeout: 3000
})
// 请求拦截器
ajax.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

// 响应拦截器
ajax.interceptors.response.use(
  (response) => {
    return response.data
  },
  (err) => {
    return Promise.reject(err)
  }
)
```

```ts {14-22} [vite.config.ts]
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VueSetupExtend()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '^/api': {
        target: 'http://112.125.120.186:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api')
      }
    }
  }
})
```



:::
