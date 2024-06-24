# vue2和vue3的区别

1. 项目的构建上
	Vue2用的是Vue-cli，Vue3用的是Vite
2. Vue3提供了组合式api，setup语法糖，所有的内容写在setup内
3. 生命周期上，Vue3取消了前两个生命周期（beforeCreate、created）用setup代替
	 beforeMount、mounted ==> onBeforeMount、onMounted
	 beforeUpdate、updated ==> onBeforeUpdate、onUpdated
	 废弃了beforeDestory、destoryed改为onBeforeUnmount、onUnmounted
4. Vue3的template取消根元素，支持多个元素并行

```
1. 组合式API，setup函数
2. 双向绑定原理有Object.defineProperty变为new Proxy
3. 完全兼容Vue2的语法
4. Vue3的template支持多个根标签，Vue2不支持
5. 对v-if和v-for进行了优化
6. 项目构建由Vue-cli改为vite，打包由webpack改为rollup
7. 生命周期的改变
8. 虚拟DOM性能提升2倍
9. ref 让基本数据类型变成响应式的，还可以获取DOM节点
10. reactive 让引用类型变成响应式的
11. Vuex中的state由对象变成一个函数，返回一个对象
```

