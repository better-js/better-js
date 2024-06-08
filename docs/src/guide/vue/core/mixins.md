# Mixins

可以将公共的数据、方法和生命周期函数声明在混入中，方便管理与统一修改。如果是全局混入，可以在任何的组件中直接使用混入中的数据或方法，如果是局部混入，哪个组件引入该混入，就可以在哪个组件中使用该混入中的数据和方法

同一个生命周期，mixins中的会比组件中的先执行。

## 全局混入

```js
// 必须声明在 main.js 中，且在 new Vue 对象之前
import Vue from 'vue'
import App from './views/indexView.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.mixin({
	data(){
		return {}
	},
	methods:{}
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
```



## 局部混入

- 导出mixins

```jsx
// src/mixins/index.js
export default {
  created() {
    console.log("这里是Mixins触发的created");
  },
};
```

- 引用mixins

```vue
<template>
  <div></div>
</template>

<script>
import mixins from "@/mixins";
export default {
  data() {
    return {};
  },
  // 局部混入需要注册
  mixins: [mixins],
  created() {
    console.log("我是组件触发的created");
  },
};
</script>
```

