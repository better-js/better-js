# Vue3简介

2020年9月18日，Vue.js 发布 `3.0` 版本，代号：`One Piece`（海贼王）

https://github.com/vuejs/core/releases/tag/v3.0.0



## Vue3的变化

- 同一元素上使用的`v-if`和`v-for`优先级已更改，但**不推荐**同时使用 `v-if` 和 `v-for`。

- 组件事件需要在`emits`选项中声明

- `destroyed` 生命周期选项被重命名为 `unmounted`

- `beforeDestroy` 生命周期选项被重命名为 `beforeUnmount`

- 自定义指令的API已更改为与组件生命周期一致

- 新增了三个组件：
  - `Fragment` 支持多个根节点

  - `Suspense` 可以在组件渲染之前的等待时间显示指定内容

  - `Teleport` 可以让子组件能够在视觉上跳出父组件(如父组件overflow:hidden)

- 新增指令 `v-memo`，可以缓存 html 模板，比如 v-for 列表不会变化的就缓存，简单说就是用内存换时间。

- 用  new `Proxy` 代替 Object.defineProperty 重构了响应式系统，可以监听到数组下标变化，及对象新增属性，因为监听的不是对象属性，而是对象本身，还可拦截 apply、has 等13种方法


- 重构了虚拟 DOM，在编译时会将事件缓存、将 slot 编译为 lazy 函数、保存静态节点直接复用(静态提升)、以及添加静态标记、Diff 算法使用 最长递增子序列 优化了对比流程，使得虚拟 DOM 生成速度提升 `200%`
- 支持在 `<style></style>` 里使用 `v-bind`，给 CSS 绑定 JS 变量(`color: v-bind(str)`)
- <span style="color:red">新增 `Composition API(组合式api)` 可以更好的逻辑复用和代码组织</span>，同一功能的代码不至于像以前一样太分散，虽然 Vue2 中可以用 mixin 来实现复用代码，但也存在问题，比如方法或属性名会冲突，代码来源也不清楚等
- 全局函数 `set` 和 `delete` 以及实例方法 `$set` 和 `$delete`移除。基于代理的变化检测已经不再需要它们了
- 毕竟 Vue3 是用 `TS` 写的，所以对 `TS` 的支持度更好
- Vue3 不兼容 `IE11`
- `$on`，`$off` 和 `$once` 实例方法已被移除，组件实例不再实现事件触发接口。

## OptionsAPI 与 CompositionAPI

- `Vue2`的`API`设计是`Options`（配置）风格的。
- `Vue3`的`API`设计是`Composition`（组合）风格的。
###  Options API 的弊端

`Options`类型的 `API`，数据、方法、计算属性等，是分散在：`data`、`methods`、`computed`中的，若想新增或者修改一个需求，就需要分别修改：`data`、`methods`、`computed`，不便于维护和复用。
<div style="display:flex">
<img src="/images/vue3/1.gif" alt="1.gif" style="zoom:60%;border-radius:20px;margin-right:10px" /><img src="/images/vue3/2.gif" alt="2.gif" style="zoom:60%;border-radius:20px" />
</div>


### Composition API 的优势

可以用函数的方式，更加优雅的组织代码，让相关功能的代码更加有序的组织在一起。
<div style="display:flex">
<img src="/images/vue3/3.gif" alt="3.gif" style="height:300px;border-radius:10px;margin-right:10px"  /><img src="/images/vue3/4.gif" alt="4.gif" style="height:300px;border-radius:10px"  />
</div>