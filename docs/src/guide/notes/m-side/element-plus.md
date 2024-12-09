# Element Plus 组件库

-----

**步骤 1：安装 Element Plus**

[Element Plus](https://element-plus.org/zh-CN/)是一个基于 Vue 3 的组件库，我们首先需要将其安装到我们的项目中。

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
import AutoImport from 'unplugin-auto-import/vite' // [!code focus]
import Components from 'unplugin-vue-components/vite' // [!code focus]
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers' // [!code focus]

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({ // [!code focus]
      resolvers: [ElementPlusResolver()], // [!code focus]
    }), // [!code focus]
    Components({ // [!code focus]
      resolvers: [ElementPlusResolver()], // [!code focus]
    }), // [!code focus]
  ],
})
```
------

**步骤 4：在组件中直接使用 Element Plus**

配置完成后，你可以直接在 Vue 组件中使用 Element Plus 提供的 UI 组件，无需手动导入。

```vue
<template>
	<el-button>Default</el-button> // [!code focus]
</template>
```

请注意，`<el-button>` 是 Element Plus 中按钮组件的标签，你可以直接使用它，而不需要在脚本部分显式导入。

-----

**步骤5：自动导入icon图标配置（可选）**

为了简化 Element Plus 图标的使用并自动导入，我们可以配置 Vite 插件 `unplugin-icons`。

**（1）安装图标库和插件**

首先，安装 Element Plus 图标库和 `unplugin-icons` 插件：

```bash
pnpm install @element-plus/icons-vue
pnpm add -D unplugin-icons
```

**（2）配置 Vite 插件**

在 Vite 配置文件中，配置自动导入 Element Plus 图标：

```js
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
// 配置 element plus 自动导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
// 配置 element plus icon 自动导入 // [!code focus]
import Icons from 'unplugin-icons/vite' // [!code focus]
import IconsResolver from 'unplugin-icons/resolver' // [!code focus]
 
// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
            imports: ['vue'],
            resolvers: [
                // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
                ElementPlusResolver(),
                // 自动导入图标组件 // [!code focus]
                IconsResolver() // [!code focus]
            ],
        }),
        Components({
            resolvers: [
                // 自动注册图标组件 // [!code focus]
                IconsResolver({ // [!code focus]
                    prefix: 'icon',   // 使用 'icon-' 作为前缀，默认是 'i' // [!code focus]
                    enabledCollections: ['ep'], // 指定 Element Plus 图标库 // [!code focus]
                }),
                // 自动导入 Element Plus 组件
                ElementPlusResolver(),
            ]
        }),
        Icons({ // [!code focus]
            autoInstall: true, // 自动安装图标 // [!code focus]
        }), // [!code focus]
    ]
})
```

**（3）在项目中使用图标**

配置完成后，你可以直接在 Vue 组件中使用 Element Plus 图标，格式为 `{prefix}-{collection}-{icon}`：

```vue
<template>
  <div>
    <Edit/> // [!code --]
    <icon-ep-Edit/> // [!code ++]
  </div>
</template>
```

在这里，`icon-ep-Edit` 是 Element Plus 中的一个图标组件，你可以直接使用它而无需手动导入。`icon` 是我们设置的前缀，`ep` 是 Element Plus 的图标库名称，`Edit` 是具体的图标名称。

-----

**步骤6：定制主题色（可选）**

**（1）安装 sass**

为了使用 Element Plus 的 SCSS 变量，您需要在项目中安装 Sass：

```bash
pnpm add -d sass
```

**（2）创建自定义样式文件**

创建一个 SCSS 文件来定义您的自定义主题色。例如，在 `assets/element/index.scss`：

```scss
/* 只需要重写你需要的即可 */
@forward 'element-plus/theme-chalk/src/common/var.scss' with (
  $colors: (
    'primary': (
      'base': green,
    ),
    'success': (
      'base': green,
    ),
    'warning': (
      'base': green,
    ),
    'danger': (
      'base': green,
    ),
    'error': (
      'base': green,
    ),
  ),
);
```

**（3）配置 Vite 自动导入样式**

在 `vite.config.ts` 中配置 Vite 以使用自定义的 SCSS 文件，并确保 Element Plus 组件样式正确导入：

```js
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url))
    }
  },
  css: { // [!code focus]
    preprocessorOptions: { // [!code focus]
      scss: { // [!code focus]
        additionalData: `@use "@/assets/element/index.scss" as *;` // [!code focus]
      } // [!code focus]
    } // [!code focus]
  }, // [!code focus]
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass' // [!code focus]
        })
      ]
    })
  ]
})
```



