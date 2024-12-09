# Sass集成【】

----

**步骤 1：安装 Sass**

在你的项目中安装Sass

```bash
pnpm add --save-dev sass vite-plugin-sass
```

-----

**步骤 2：配置构建工具**

在 `vite.config.ts` 中配置Sass插件：

```ts
import { defineConfig } from 'vite';
import scss from 'vite-plugin-sass';

export default defineConfig({
  plugins: [
    scss({
      // 插件选项
    }),
  ],
});
```

----

**步骤 3：使用 Sass**

在你的项目中，现在可以使用`.scss`或`.sass`文件了。

```scss
//variables
$primary-color: #333;

//mixins
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
  -moz-border-radius: $radius;
  -ms-border-radius: $radius;
  border-radius: $radius;
}

//使用变量和mixins
.button {
  background-color: $primary-color;
  @include border-radius(5px);
}
```





