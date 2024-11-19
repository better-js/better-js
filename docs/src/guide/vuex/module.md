# Module

## 1.数据按功能模块化拆分

```jsx
// store/numStore/index.js
export default {
  // 如果命名空间的值为true，那么我们才能把这个目录作为模块去使用
  namespaced: true,
  state: {
    num: 10,
  },
  getters: {
    doubleNum(state) {
      return state.num * 2;
    },
  },
  mutations: {
    addNum(state, payload) {
      state.num += payload;
    },
  },
  actions: {
    changeNum(context, payload) {
      setInterval(() => {
        context.commit("addNum", payload);
      }, 1000);
    },
  },
};
```

终极拆分

```jsx
import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
export default {
  namespaced: true, // 命名空间
  state,
  getters,
  mutations,
  actions,
};
```



## 2.引入并注册模块

```jsx
// store/index.js
import Vue from "vue";
import Vuex from "vuex";
import numStore from "./numStore";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    numStore,
  },
});
```

## 3.拆分写法

```vue
<template>
  <div>
    <p>{{ num }}</p>
    <p>{{ doubleNum }}</p>
    <button @click="addNum(10)">同步按钮</button>
    <button @click="changeNum(20)">异步按钮</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      num: (state) => state.numStore.num,
    }),
    ...mapGetters({
      doubleNum: "numStore/doubleNum",
    }),
  },
  methods: {
    ...mapMutations({
      addNum: "numStore/addNum",
    }),
    ...mapActions({
      changeNum: "numStore/changeNum",
    }),
  },
};
</script>
```

