# 项目初始化

在初始化项目时，我们并没有选择[create-vue](https://github.com/vuejs/create-vue)提供的一键式项目创建方式，而是选择了使用[Vite](https://cn.vitejs.dev/)从零开始创建项目。这样做的目的是为了能够更深入地理解项目的创建过程，虽然这种方法可能需要更多的初始设置工作，但它使我们能够获得对项目结构和配置的更深层次理解，从而在未来的开发和维护中更加得心应手。

-----

**步骤 1：初始化项目**

使用 Vite 初始化新项目，运行以下命令：

```bash
pnpm create vite
```

-----

**步骤 2：设置项目结构**

以下是推荐的项目结构，它有助于保持代码的组织性和可维护性：

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

------









通过这种方式，你可以构建一个结构清晰、易于管理的 Vue 项目。虽然手动设置项目结构需要一些额外的时间和精力，但它为你提供了对项目构建过程的完全控制，使你能够根据项目需求定制构建配置。

