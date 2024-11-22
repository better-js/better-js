# Filter

- 过滤器的主要作用就是过滤数据，让数据按照我们规定的格式来做展示

- 过滤器要先定义后使用
- 过滤器中的方法必须要有return，如果没有，页面什么都不会渲染。
- return返回的数据就是过滤后的数据，经过返回后，就会在页面上渲染过滤后的数据
- 过滤方法的形参用于接收要过滤的数据，过滤器方法在调用时不需要加()
  - 例如：`{{ price | RMBFormat}}`
  - ｜前面是数据，后面是过滤器名称



## 全局过滤器

全局过滤器，可以在所有组件中使用，一般写在`/src/main.js`文件中

不管是局部过滤器还是全局过滤器,都必须要return一个值回去。

```js
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 全局过滤器
Vue.filter('moneyFormat',(value)=>{
  return `${value.toFixed(2)} 元`
})

new Vue({
  render: h => h(App),
}).$mount('#app')
```



## 局部过滤器

局部过滤器只能在当前组件中使用

```vue
<template>
  <div>
    {{ price | RMBFormat }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: 100,
    };
  },
  filters: {
    RMBFormat(value) {
      return `¥ ${value.toFixed(2)}`;
    },
  },
};
</script>

<style lang="less" scoped>
</style>
```



## 过滤器使用场景

1. 人民币：¥ 100 元

```jsx
Vue.filter('RMBformat', val => {
  return "¥ " + Number(val).toFixed(2) + " 元"
})
```

2. 时间戳：new Date().getTime()

```jsx
Vue.filter('dateFormat',val=>{
  let dateObj = new Date(val);
  let year = dateObj.getFullYear();
  let months = dateObj.getMonth()+1;
  months = months < 10 ? '0' + months : months;
  let days = dateObj.getDate();
  days = days < 10 ? '0' + days : days;
  let hours = dateObj.getHours();
  hours = hours < 10 ? '0' + hours : hours;
  let minutes = dateObj.getMinutes();
  minutes = minutes < 10 ? '0' + minutes : minutes;
  let seconds = dateObj.getSeconds();
  seconds = seconds < 10 ? '0' + seconds : seconds;
  
  return `${year}年${months}月${days}日 ${hours}:${minutes}:${seconds}`
})
```

