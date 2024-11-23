# Actions



```jsx
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    num: 10,
  },
  mutations: {
    addNum(state, payload) {
      state.num += payload;
    },
  },
  actions: {
    changeNum(context, payload) {
      // context 包含环境所处的上下文对象
      setTimeout(() => {
        context.commit("addNum", payload);
      }, 1000);
    },
  },
});

```

```vue
<template>
  <div>
    <p>{{ $store.state.num }}</p>
    <button @click="asyncClick">异步按钮</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    asyncClick() {
      // 调用actions中的方法
      this.$store.dispatch("changeNum", 20);
    },
  },
};
</script>
```
