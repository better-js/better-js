# Vuex和redux的区别

Vuex有五种属性state、getter、mutation、action、module
Vuex触发方式有两种commit同步、dispatch异步

redux定义了state、reducer、action
redux触发方式同步和异步都使用dispatch

Redux 使用的是不可变数据，而Vuex的数据是可变的。Redux每次都是用新的state替换旧的state，而Vuex是直接修改
Redux 在检测数据变化的时候，是通过 diff 的方式比较差异的，而Vuex其实和Vue的原理一样，是通过 getter/setter来比较的