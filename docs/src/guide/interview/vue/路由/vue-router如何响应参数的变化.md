# Vue-Router如何响应参数的变化

**什么是路由参数的变化**

当使用路由参数时，例如从 `/user/foo` 导航到 `/user/bar`，原来的组件实例会被复用。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。不过，这也意味着组件的生命周期钩子不会再被调用。

**监测路由参数变化的方法**

**方法一watch监听：**

```js
watch: { // watch的第一种写法
    $route (to, from) {
        console.log(to)
        console.log(from)
    }
},
// =========================
watch: { // watch的第二种写法
    $route: {
        handler (to, from){
            console.log(to)
            console.log(from)
        },
        // 深度观察监听
        deep: true
    }
},
// =========================
watch: { // watch的第三种写法
    '$route':'getPath'
},
methods: {
    getPath(to, from){
	    console.log(this.$route.path);
    }
},
```

**方法二：导航守卫**

导航守卫可以识别路由参数的变化

```js
beforeRouteEnter (to, from, next) {
    next()
},
```

