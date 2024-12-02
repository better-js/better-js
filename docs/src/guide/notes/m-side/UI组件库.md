# UI组件库

-----

**步骤 1：安装 Element Plus**

Element Plus 是一个基于 Vue 3 的组件库，我们首先需要将其安装到我们的项目中。

```bash
pnpm install element-plus
```

-----

**步骤 2：安装开发依赖插件，实现按需自动导入**

为了更方便地使用 Element Plus 组件，我们需要安装两个插件：`unplugin-vue-components` 和 `unplugin-auto-import`。

```bash
pnpm add -D unplugin-vue-components unplugin-auto-import
```

------

**步骤 3：配置 Vite**

接下来，我们需要在项目的 Vite 配置文件中添加这两个插件，以便自动导入 Element Plus 组件。

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
})
```
------

**步骤 4：在组件中直接使用 Element Plus**

配置完成后，你可以直接在 Vue 组件中使用 Element Plus 提供的 UI 组件，无需手动导入。

```vue
<template>
	<el-buton>Default</el-buton>
</template>
```

请注意，`<el-button>` 是 Element Plus 中按钮组件的标签，你可以直接使用它，而不需要在脚本部分显式导入。
