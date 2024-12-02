# SVG图标配置

使用 svg 后页面加载的不再是图片资源，这对页面性能来说是个很大的提升，而且 SVG 文件比img要小很多，放在项目中几乎不占用资源。

-----

**步骤 1：安装插件**

安装 `vite-plugin-svg-icons` 插件以方便地管理和使用SVG图标：

```bash
pnpm i vite-plugin-svg-icons -D
```

----

**步骤 2：在 `vite.config.ts` 中配置插件**

配置Vite插件，指定SVG图标的存放目录和如何生成SymbolId：

```ts
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'node:path'

export default defineConfig({
  plugins: [
    createSvgIconsPlugin({
      iconDirs:[path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]'
    })
  ],
})
```

-----

**步骤 3：在 `main.ts` 中导入**

导入 `virtual:svg-icons-register` 以注册SVG图标：

```ts
import 'virtual:svg-icons-register'
```

-----

**步骤 4：使用SVG图标**

在Vue模板中使用SVG图标，需要与`use`标签结合使用：

```vue
<template>
	<svg>
    <use xlink:href="#icon-phone"></use>
  </svg>
</template>
```

`use`标签属性说明：

- `xlink:href`：引入哪个图标，属性值必须是`#icon-`加上图标的名字。
- `fill`：设置图标的颜色。



## 组件封装

**步骤 1：组件封装**

创建一个SVG图标组件 `components/SvgIcon/index.vue`：

```vue
<template>
  <svg :style="{ width, height }">
    <use :xlink:href="`${prefix}${name}`" :fill="color" />
  </svg>
</template>
<script setup lang="ts">
defineProps({
  prefix: {
    type: String,
    default: "#icon-"
  },
  name: String,
  color: {
    type: String,
    default: "#000"
  },
  width: {
    type: String,
    default: "16px"
  },
  height: {
    type: String,
    default: "16px"
  }
})
</script>
```

----

**步骤 2：对外暴露插件对象**

在 `components/index.ts` 中对外暴露插件对象：

```ts
import SvgIcon from './SvgIcon/index.vue'

const allGlobalComponent = {SvgIcon}

// 对外暴露的插件对象
export default {
  // 必须叫install，且会有app实例对象作为其参数
  install(app) {
    // 注册项目全部的全局组件
    Object.keys(allGlobalComponent).forEach(key => {
      app.component(key, allGlobalComponent[key])
    })
  }
}
```

----

**步骤 3：在 `main.ts` 注册全局组件**

在 `main.ts` 中注册全局组件：

```ts
// 引入自定义插件对象，注册整个项目的全局组件
import globalComponent from '@/component'

// 安装自定义插件
// 注册时会执行 globalComponent 中的 install 方法
app.use(globalComponent)
```

