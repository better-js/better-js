# 项目初始化

在构建项目时，我们并没有采用[create-vue](https://github.com/vuejs/create-vue)提供的一键式项目创建方式，而是选择了[Vite](https://cn.vitejs.dev/)来从基础开始搭建项目。这样做的目的是为了更深入地理解项目的构建过程，我们手动安装了路由和状态管理库，以便更灵活地控制项目结构和依赖。虽然这种方法可能需要更多的初始设置工作，但它为我们提供了更高的自定义能力和对项目细节的深入理解。



## （1）项目初始化

```bash
pnpm create vite
```



## （2）项目结构设置

```
.
├─ public
├─ src
│  ├─ assets             // 静态资源
│  ├─ components         // 公共组件
│  ├─ views              // 页面组件
│  ├─ router             // 路由配置
│  ├─ store              // 状态管理
│  ├─ utils              // 工具函数
│  ├─ App.vue            // 根组件
│  └─ main.js            // 入口文件
├─ index.html
├─ package.json
├─ README.md
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts
```



