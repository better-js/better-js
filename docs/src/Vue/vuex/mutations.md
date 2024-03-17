# Mutations



```js
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
});

```

```vue
<template>
  <div>
    <p>{{ $store.state.num }}</p>
    <button @click="hdClick">同步按钮</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    hdClick() {
      // 通过commit()调用mutations中的方法
      this.$store.commit("addNum", 10);
    },
  },
};
</script>
```


