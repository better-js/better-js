# 项目手记

## 环境搭建

```shell
# 方式一：推荐（可选安装router、pinia等）
npm create vue@latest
# 初始化配置
✔ Project name: … vue3-vite-app
✔ Add TypeScript? … Yes
✔ Add JSX Support? … No
✔ Add Vue Router for Single Page Application development? … Yes
✔ Add Pinia for state management? … Yes
✔ Add Vitest for Unit Testing? … No
✔ Add an End-to-End Testing Solution? › No
✔ Add ESLint for code quality? … Yes
✔ Add Prettier for code formatting? … Yes


# 方式二：vite初始化项目（简洁版）
npm create vite@latest
# 初始化配置
✔ Project name: … vue3-vite-app
✔ Select a framework: › Vue
✔ Select a variant: › TypeScript
```



### 1.安装依赖

```shell
npm i vue-router@next -S
npm i axios
npm i less
npm i pinia
npm i @types/node -D
# element-plus
npm install element-plus --save
# 按需引入
npm install -D unplugin-vue-components unplugin-auto-import

# cookie
npm i js-cookie # js版
npm i @types/js-cookie	# ts版
```



### 2.搭建路由

`/src/router/index.ts`

```tsx
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component :() => import("../views/home/home.vue")
    },
    {
        path: "/login",
        name: "login",
        component: () => import('../views/login/login.vue')

    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
```

`/src/main.ts`

```ts
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
```



找不到模块“…/views/xxxx.vue”或其相应的类型声明。

`env.d.ts`

```tsx
declare module "*.vue" {
    import type { DefineComponent } from "vue";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>;
    export default component;
}
```

### 3.封装请求

```tsx
// api/index.ts
import axios from 'axios'
const instance = axios.create({
    baseURL: '',
    timeout: 1000,
    headers: { 'X-Custom-Header': '' }
});

instance.interceptors.request.use(config => {
    // 判断token
    return config
}, err => {
    return Promise.reject(err)
})
instance.interceptors.response.use(res => {
    return res.data
}, err => {
    return Promise.reject(err)
})

export default instance
```

### 4.支持@符

```tsx
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
const resolve = (dir: string) => path.join(__dirname, dir)

export default defineConfig({
  plugins: [ vue() ],
  resolve: {
    alias: {
      '@': resolve('src'),
      comps: resolve('src/components'),
      views: resolve('src/views'),
    }
  }
})
```

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "strict": true,
    "jsx": "preserve",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "lib": ["ESNext", "DOM"],
    "skipLibCheck": true,
    "noEmit": true,
    "baseUrl": "",
    "paths": {
      "@/*":["src/*"]
    }

  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```



### 5.配置跨域

```tsx
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [ vue() ],
  server:{
    // Vue3在这里配置跨域
    proxy: {
      "/api": {
        target: "",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  }
})

```

### 6.Element-Plus

```tsx
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// element-plus 按需自动导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ]
})

```



## 本地存储方式

### localStorage

localStorage中只能存字符串，不能存对象，否则拿不到值

因此，在存入时要用window.localStorage.setItem('key', JSON.stringify(object))将对象转为字符串，在获取时要用JSON.parse(localStorage.getItem('key'))转换再拿到值

```tsx
// 设置
localStorage.setItem('token', token);

// 读取
localStorage.getItem('token');

// 移除指定
localStorage.removeItem('token');

// 移除所有
localStorage.clear();
```

### sessionStorage

```tsx
// 设置
sessionStorage.setItem('token', token);

// 读取
sessionStorage.getItem('token');

// 移除指定
sessionStorage.removeItem('token');

// 移除所有
sessionStorage.clear();
```

### cookie

```tsx
import Cookie from 'js-cookie'

// 设置
Cookie.set("token", token, { expires: 7 })

// 读取
Cookie.get('token')

// 删除
Cookie.remove('token')
```



## 权限管理

### Vuex或pinia刷新数据丢失问题

```js
// 路由拦截：页面刷新100%会执行的位置
router.beforeEach(async (to, from, next) => {
  const token = Cookie.get("token");
  const store = useStore()
  if (token && store.menus.length === 0) {
    const getAdminInfo = await getAdminInfoApi()
    store.setMenu(getAdminInfo.data.menus);
  }
  next()
});
```

### 根据权限生成动态路由

权限管理的核心就是addRoute

```ts
import { createRouter, createWebHashHistory } from "vue-router";
import Cookie from "js-cookie";

import useStore from "@/store";
import { getAdminInfoApi } from "@/api/api";

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import(/* webpackChunkName: login" */ "../views/login/login.vue"),
  }
];

const router = createRouter({
  history: createWebHashHistory(), // createWebHashHistory() hash模式  createWebHistory() history
  routes,
});

// 动态加载路由
const getRouter = () => {
  let children = new Array();
  // 拿到用户权限列表
  const store = useStore();
  let menus = store.getMenu;
  menus.map((item) => {
    item.children!.map((v) => {
      let itemRouter = {
        path: `/${item.name}/${v.name}`,
        name: v.name,
        component: () => import(`../views/${item.name}/${v.name}.vue`),
      }
      children.push(itemRouter);
    });
  });

  let myRoute = {
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ "../views/home/home.vue"),
      children:children
    }
  // 动态添加路由
  router.addRoute(myRoute);
};

// 路由拦截 页面刷新100%会执行的位置
router.beforeEach(async (to, from, next) => {
  const store = useStore();
  const token = Cookie.get("token");
  // 用户登录了，但是页面刷新导致pinia数据丢失了
  if (token && store.menus.length === 0) {
    // 重新发请求
    const getAdminInfo = await getAdminInfoApi();
    store.setMenu(getAdminInfo.data.menus);
    // 重新生成动态路由
    getRouter();
    next(to); // 这里的next()不能为空
  } else if (
    token &&
    store.menus.length !== 0 &&
    from.path == "/login" &&
    to.path == "/home"
  ) {
    // 第一次刚刚成功登录的时候，只需要生成一下路由即可
    getRouter();
    next("/ums/admin");
  } else if (!token && to.path !== "/login") {
    // 未登录，就想访问其他页
    next("/login");
  } else if (token && to.path == "/login") {
    // 已登录，还想访问登录页
    next(from);
  } else {
    next();
  }
});
export default router;
```



## 文件上传

```html
<!-- element ui 第一种 -->
<el-upload
  class="avatar-uploader"
  action="http://kumanxuan1.f3322.net:8360/admin/upload/goodNewPic"
  :show-file-list="false"
  :on-success="onSuccess"
  :before-upload="onBefore"
  name="good_pic"
>
  <img v-if="imageUrl" :src="imageUrl" class="avatar" />
  <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
</el-upload>
```

```html
<!-- element ui 第二种 常用-->
<el-upload
  class="avatar-uploader"
  action="http://kumanxuan1.f3322.net:8360/admin/upload/goodNewPic"
  :show-file-list="false"
  :http-request="twoUpload"
>
  <img v-if="imageUrl2" :src="imageUrl2" class="avatar" />
  <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
</el-upload>
```

```html
<!-- 第三种 终极通用版 --> 
<input type="file" ref="file" />
<el-button @click="lastUpload">上传</el-button>
```

