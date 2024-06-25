# 创建项目

## 完整版

::: code-group

```sh [1.创建命令]
npm create vue@latest
```

```sh [2.具体配置]
# 配置项目名称
✔ Project name: … hello_vue3

# 是否使用TypeScript语法？
✔ Add TypeScript? … Yes

# 是否启用JSX支持？
✔ Add JSX Support? … No

# 是否引入 Vue Router 进行单页面应用开发？
✔ Add Vue Router for Single Page Application development? … No

# 是否引入 Pinia 用于状态管理？
✔ Add Pinia for state management? … No

# 是否引入 Vitest 用于单元测试？
✔ Add Vitest for Unit Testing? … No

# 是否要引入一款端到端（End to End）测试工具？
✔ Add an End-to-End Testing Solution? › No

# 是否引入 ESLint 用于代码质量检测？
✔ Add ESLint for code quality? … Yes

# 是否引入 Prettier 用于代码格式化？ 
✔ Add Prettier for code formatting? … Yes
```

```sh [3.项目构建完成]
cd hello_vue3
npm install
npm run format
npm run dev
```

:::

## 简洁版

无router、无pinia

:::code-group

```sh [1.创建命令]
npm create vite@latest
```

```sh [2.具体配置]
# 配置项目名称
✔ Project name: … vue3-vite-app

# 选择一个框架
✔ Select a framework: › Vue

# 选择一个项目模版
✔ Select a variant: › TypeScript
```

:::
