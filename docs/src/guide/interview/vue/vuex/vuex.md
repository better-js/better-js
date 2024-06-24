# vuex

vuex是专门为vue.js提供的一种状态管理模式，它采用的是集中式储存和管理所有组件的状态和数据，方便使用。

Vex有5种属性，分别是 state、getter、mutation、action、module：

**1、state**

Vuex 使用单一状态树,即每个应用将仅仅包含一个store 实例，但单一状态树和模块化并不冲突。存放的数据状态，不可以直接修改里面的数据。

**2、getters**

类似vue的计算属性，主要用来过滤一些数据。

**3、mutations**

mutations定义的方法动态修改Vuex 的 store 中的状态或数据。

**4、actions**

actions可以理解为通过将mutations里面处里数据的方法变成可异步的处理数据的方法，简单的说就是异步操作数据。view 层通过 store.dispath 来分发 action。

```js
const store = new Vuex.Store({ //store实例
  state: {
    count: 0
  },
  mutations: {                
    increment (state) {
      state.count++
    }
  },
  actions: { 
    increment (context) {
      context.commit('increment')
    }
  }
})
```

**5、modules**

项目特别复杂的时候，可以让每一个模块拥有自己的state、mutation、action、getters,使得结构非常清晰，方便管理。

```js
const moduleA = {
  state: { ... },
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}
            
const moduleB = {
  state: { ... },
  mutations: { ... },
  actions: { ... }
 }

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})
```

##### 

Vuex是Vue.js中管理数据状态的一个库，我们可以将所有组件中的公共数据在Vuex中集中管理

Vuex的状态存储是响应式的

Vuex有5个属性

- state：用于存放公共数据
- getter：类似于计算属性，当值改变时自动触发
- mutation：同步修改属性：用于修改state中的数据
- action：异步修改属性，主要就是进行mutation的异步操作
- module：模块管理
  - Vuex使用的是单一状态树，应用的所有状态会集中到一起，会形成一个比较大的对象，而且当应用变得非常复杂时，store对象就有可能变得非常臃肿，为了解决以上问题，Vuex允许我们将store分割成模块，这样就非常灵活，每个模块都有自己的state、getter、mutation、action