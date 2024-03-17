# pinia



## 环境搭建

:::code-group

```sh [1.安装]
npm install pinia
```

```ts [2.main.ts]
import {createApp} from 'vue'
// 引入pinia // [!code ++]
import {createPinia} from 'pinia' // [!code ++]
import App from './App.vue'

const app = createApp(App)

// 创建一个 pinia 实例 (根 store) 并将其传递给应用 // [!code ++]
const pinia = createPinia() // [!code ++]
app.use(pinia) // [!code ++]

app.mount('#app')
```



:::

## Store是什么

Store (如 Pinia) 是一个保存状态和业务逻辑的实体，它并不与你的组件树绑定。换句话说，**它承载着全局状态**。它有点像一个永远存在的组件，每个组件都可以读取和写入它。它有**三个概念**，`state`、`getter` 和 `action`，我们可以假设这些概念相当于组件中的 `data`、 `computed` 和 `methods`。