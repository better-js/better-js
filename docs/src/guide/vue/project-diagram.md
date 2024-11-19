# 项目结构介绍

```sh {15}
.
├─ public
│  └─ favicon.ico # 页签图标
├─ src
│  ├─ assets
│  │  └─ ...
│  ├─ conponents
│  │  └─ ...
│  ├─ App.vue
│  └─ main.ts
├─ .eslintrc.cjs # eslint配置文件
├─ .gitignore # git忽略文件
├─ .prettierrc.json # prettier配置文件
├─ env.d.ts 
├─ index.html # 入口文件
├─ package-lock.json
├─ package.json
├─ README.md
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts
```

----

:::danger 注意

在 `vite` 项目中，`index.html` 通常是整个应用的入口文件。

`vite` 利用了浏览器原生ES模块导入的特性，因此可以直接在 `index.html` 中通过 `<script type="module">` 标签引入 JavaScript模块，例如：

```html {11}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <link rel="icon" href="/favicon.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello Vue3</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

在这个例子中，`/src/main.ts` 就是项目的主要 `JavaScript` 文件，它被作为模块从 `index.html` 中导入。

:::
