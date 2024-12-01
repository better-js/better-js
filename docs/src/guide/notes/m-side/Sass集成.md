# Sass集成





## 全局样式

### reset.scss

`npmjs.org` 搜索 `reset-scss` 将 `Code/reset.scss` 样式复制并粘贴到 `assets/styles/reset.scss` 中



### main.scss

在 `assets/styles` 目录下新建 `main.scss`

```scss
// 引入清除默认样式
import './reset.scss'
```

在 `src/main.ts` 入口文件中引入全局样式

```ts
import '@/assets/main.scss'
```



### variable.scss

在 `assets/styles` 目录下新建 `variable.scss`

```scss
$color: red
```

在 `vite.config.ts` 文件中增加如下配置：

```ts
export default defineConfig({
  CSS: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        additionalData: `@import "@/assets/styles/variable.scss";`
      }
    }
  }
})
```





