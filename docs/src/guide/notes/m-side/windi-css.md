# Windi CSS 集成

[Windi CSS](https://cn.windicss.org/)是一个下一代的原子 CSS 框架，它提供了实用工具类和自定义风格，帮助你快速构建尾部wind（Tailwind）风格的项目。

-----

**步骤 1：安装 Windi CSS 和相关插件**

在你的项目中安装 Windi CSS 和 `vite-plugin-windicss` 插件：

```bash
pnpm add -D vite-plugin-windicss windicss
```

-----

**步骤 2：在 Vite 配置中添加 Windi CSS 插件**

在你的 Vite 配置文件中添加 Windi CSS 插件：

```js
import WindiCSS from 'vite-plugin-windicss'

export default {
  plugins: [
    WindiCSS(),
  ],
}
```

----

**步骤 3：导入 Windi CSS 样式**

在你的项目入口文件（`main.ts`）中导入 Windi CSS：

```js
import 'virtual:windi.css'
```

-----

**步骤4：使用**

```vue
<template>
	<div>
    <button class="bg-purple-500 hover:(bg-purple-900)">按钮</button>
  </div>
</template>
```

