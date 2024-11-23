# Vuex

[vuex](https://vuex.vuejs.org/zh/)是一个专为vue.js应用程序开发的一种状态管理模式，它主要采用的是集中化管理所有组件中的状态。说的直白一些，vuex就是vue.js中管理数据状态的一个库，也就是我们可以将所有组件中的公共数据在vuex中集中管理。

一个数据只要放在了Vuex中，当前所有的组件都可以直接访问这个数据。

> Vuex有5个核心属性

- State：相当于data属性，用于存储数据
- Getters：相当于计算属性，当值发生改变时，自动触发
- Mutations：同步修改state中的数据，通过commit()调用mutations中的方法，同步属性不能执行异步操作
- Actions：异步修改state中的数据，通过dispatch()调用actions中的方法
- Modules

> 什么时候用Vuex？

数据需要多组件共享，并且数据量庞大，此时就适合使用Vuex进行状态管理。

注意：Vuex会随着页面刷新或关闭，将所有数据恢复至最初始的状态，所以它并不能替代localStorage。

> Vuex工作流程

在组件中通过 `dispatch` 分发 **Actions** ，在 **Actions**中通过 `commit` 提交 **Mutations** ，在**Mutations**中修改**State**，伴随着**state**改变重新渲染组件

> **Action**是不是有点多余呢，我直接操作**Mutations**不可以吗？

用户可以直接操作**Mutations**，`this.$store.commit`

**Action**是异步的，可以在里面做数据请求，拿接口的返回数据对**State**进行操作

