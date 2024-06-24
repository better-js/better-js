# vue如何自定义一个过滤器

**1、局部过滤器**

Html：

```html
<div id="app">
     <input type="text" v-model="msg" />
     {{msg| 过滤器名称 }}
</div>
```

JS：

```js
var vm=new Vue({
    el:"#app",
    data:{
        msg:''
    },
    filters: {
      过滤器名称: function (value) {
        if (!value) return ''
        ...
        return value
      }
    }
})
```

**2、全局过滤器**

```js
Vue.filter('过滤器名称', function (value) {
  if (!value) return ''
  ...
  return value
})
```

##### 