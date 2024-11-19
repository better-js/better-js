# Getters



```jsx
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    num: 10,
  },
  getters: {
    doubleNum(state) {
      return state.num * 2;
    },
  },
});

```

```vue
<template>
  <div>
    <p>{{ $store.getters.doubleNum }}</p>
    <p>{{ doubleNum }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    doubleNum(){
      return this.$store.getters.doubleNum
    }
  },
};
</script>
```


