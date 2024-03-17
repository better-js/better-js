# State



```jsx
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    num: 10,
  },
});
```

```vue
<template>
  <div>
    <p>{{ $store.state.num }}</p>
    <p>{{ num }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    num() {
      return this.$store.state.num;
    },
  },
};
</script>
```


