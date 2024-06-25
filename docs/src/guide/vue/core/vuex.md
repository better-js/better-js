# vuex



```js
import {createStore} from 'vuex'

const store = createStore({
  state(){
    return {}
  }
})
```



组件获取state

```js
import {useStore} from 'vuex'
let store = useStore()
store.state.xxx
```

组件获取getter

```js
// 必须在计算属性中调用
import {useStore} from 'vuex'
let store = useStore()

let xxx = computed(()=>store.getters.xxxx())
```





## Vuex数据刷新丢失

### 1. 涉及安全问题

```js
import cookie from ''
import store from '@/store'

router.beforeEach(async (t0,from,next)=>{
  // vuex是不是丢失了 同时token存在
  let token = Cookie.get("token")
  let menu = store.state.menu
  if(token && menu.length === 0){
    // 重新发起请求
    let res = await GetUserInfo()
    store.commit("updateMenus",res.data.menus)
    next()
  }
  next()
})
```

### 2. 不涉及安全问题

localStorage

sessionStorage
