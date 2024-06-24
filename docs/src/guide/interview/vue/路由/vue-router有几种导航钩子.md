# vue-router 有几种导航钩子

1. 全局守卫： router.beforeEach
2. 全局解析守卫： router.beforeResolve
3. 全局后置钩子： router.afterEach
4. 路由独享的守卫： beforeEnter
5. 组件内的守卫： beforeRouteEnter、beforeRouteUpdate (2.2 新增)、beforeRouteLeave