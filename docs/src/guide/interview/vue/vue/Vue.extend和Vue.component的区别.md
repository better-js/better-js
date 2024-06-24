# Vue.extend和Vue.component的区别

`Vue.extend`返回的是一个**扩展实例构造器**，也就是预设了部分选项的Vue实例构造器。其主要用来服务于`Vue.component`。

`Vue.component()`会注册一个全局的组件，其会自动判断第二个传进来的是Vue继承对象（`Vue.extend`）还是普通对象(`{...}`)，如果传进来的是普能对象的话会自动调用`Vue.extend`