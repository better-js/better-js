# vue-router安装

-----

**步骤 1：安装 Vue Router**

首先，你需要为你的 Vue 项目安装 Vue Router。使用以下命令添加 Vue Router 依赖：

```bash
pnpm add vue-router@4
```

-----

**步骤 2：创建路由配置文件**

我们将创建两个文件：`index.ts` 和 `routes.ts`。`index.ts` 将用于创建和导出路由实例，而 `routes.ts` 将定义路由规则。

:::code-group

```ts [index.ts]
import { createRouter, createWebHashHistory } from "vue-router"
import routes from "./routes.ts"

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes,
})

export default router
```
```ts [routes.ts]
import HomeView from "../views/home/index.vue"

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/login",
		name: "login",
		component: () => import("../views/login/index.vue"),
	},
]

export default routes
```
:::

-----

**步骤 3：添加 404 页面捕获**

在 `routes.ts` 中添加一个捕获所有未匹配路由的 404 页面：

```ts {3,18}
import HomeView from "../views/home/index.vue"
import NotFound from "../views/404.vue" // [!code focus]

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/login",
		name: "login",
		component: () => import("../views/login/index.vue"),
	},
	{ path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound }, // [!code focus]
]

export default routes
```

-----

**步骤 4：设置滚动行为**

在 `index.ts` 中配置路由的滚动行为，使其在路由跳转后滚动到页面顶部：

```ts
import { createRouter, createWebHashHistory } from "vue-router"
import routes from "./routes.ts"

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes,
	scrollBehavior() { // [!code focus]
		return { // [!code focus]
			left: 0, // [!code focus]
			top: 0, // [!code focus]
		} // [!code focus]
	}, // [!code focus]
})

export default router
```
-----
**步骤 5：在 `main.ts` 中注册路由**

在你的项目入口文件 `main.ts` 中引入并注册路由：

```ts
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // [!code focus]

const app = createApp(App);
app.use(router); // [!code focus]
app.mount('#app');
```

