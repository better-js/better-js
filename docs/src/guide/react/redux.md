# Redux

## 什么是Redux

[Redux](https://cn.redux.js.org/)是React最常用的**集中状态管理工具**，类似于Vue中pinia（Vuex），**可以独立于框架运行**。

作用：通过集中管理的方式管理应用的状态。



为了职责清晰，数据流向明确，Redux把整个数据修改的流程分成了三个核心概念，分别是：**state**、**action** 和 **reducer**。

1. state：一个对象，存放着我们管理的数据状态。
2. action：一个对象，用来描述你想怎么改数据。
3. reducer：一个函数，根据action的描述生成一个新的 state





## 配置基础环境

在 React 中使用 redux，官方要求安装两个其他插件：**Redux Toolkit** 和 **react-redux**

- Redux Toolkit（RTK）：官方推荐编写 Redux 逻辑的方式，是一套工具的集合集，**简化书写方式**。

- react-redux：用来链接 **Redux** 和 **React组件** 的中间件。

```sh
# Redux Toolkit
npm install @reduxjs/toolkit

# 配套工具
npm install react-redux
npm install --save-dev redux-devtools
```



## store目录结构设计

```
.
├─ store
│  ├─ modules
│  │  ├─ counterStore.js
│  │  └─ bStore.js
│  └─ index.js
└─ ......
```

1. 通常集中状态管理的部分都会单独创建一个单独的 `store` 目录
2. 应用通常会有很多个子store模块，所以创建一个 `modules` 目录，在内部编写业务分类的子 store
3. store 中的入口文件 `index.js` 的作用是组合 modules 中所有的子模块，并导出 store



## 使用Redux Toolkit

::: code-group

```js [counterStore.js]
import { createSlice } from "@reduxjs/toolkit";

const counterStore = createSlice({
  name: "counter",
  // 初始化状态
  initialState: {
    count: 0,
  },
  // 修改状态的方法 都是同步方法 支持直接修改
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
  },
});

// 结构处来 actionCreater函数
const { increment, decrement } = counterStore.actions;
// 获取 reducer
const reducer = counterStore.reducer;

// 以按需导出的方式导出 actionCreater函数
export { increment, decrement };
// 以默认导出的方式导出 reducer
export default reducer;
```
```js [index.js]
import { configureStore } from "@reduxjs/toolkit";
// 导入子模块reducer
import counterReducer from "./modules/counterStore";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
```
:::

### 为 React 注入 store

react-redux 负责把 Redux 和 React 链接起来，内置 Provider组件，通过 store 参数把创建好的store实例注入到应用中，链接正式建立。

```jsx {4-5,10,12}
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```

### React组件使用 store 中的数据

在 React组件中使用store中的数据，需要用到一个 钩子函数 **`useSelector`** ，它的作用是把 store 中的数据映射到组件中

```jsx
import { useSelector } from "react-redux";

export default function App() {
  const { count } = useSelector((state) => state.counter);
  return <>{count}</>;
}
```

### React组件修改 store 中的数据

React组件中修改 store 中的数据需要借助另外一个hook函数 useDispatch，它的作用是生成提交actions对象的dispatch函数

```jsx
import { useSelector, useDispatch } from "react-redux";
// 导入创建action对象的方法
import { increment, decrement } from "./store/modules/counterStore";
export default function App() {
  const { count } = useSelector((state) => state.counter);
  // 得到dispatch函数
  const dispatch = useDispatch();
  return (
    <>
      {/* 调用dispatch提交action对象 */}
      <button onClick={() => dispatch(increment())}>+</button>
      {count}
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  );
}
```






## 使用redux

redux只有两种属性

- 数据（自定义起名：baseState）
- 修改（自定义起名：reducer）

### 定义

```react
import {createStore} from "redux"

// 初始值
const baseState = {
  const:10,
  name:"张三"
}

// 设置数据和修改  state初始数据 action修改方法
const reducer = (state=baseState,action)=>{
  // 必须先深拷贝
  let nstate = JSON.parse(JSON.stringify(state))
  //============================
  	【把修改的方法写这里】
    console.log(action)
  	if(action.type === 'type值'){
      //业务逻辑
    }else if(action.type === 'type值'){
      //业务逻辑
    }
  //============================
  return nstate
}


// 创建仓库
const store = createStore(reducer)
// 开放出去
export default store
```

### 注入

```react
//引入仓库
import store from "../../store"
//引入发送数据的组件
import {Provider} from "react-redux";


//希望哪些后代能共用 redux的值就可以使用Provider进行包裹
<Provider store={store}>

</Provider>
```

### 接取

```react
import {useSelector} from 'react-redux'

const data = useSelector(state=>state)
console.log(data.键)
```



### 修改

```react
import {useDispatch} from 'react-redux';

const dispatch = useDispatch()
const fn = () =>{
  // dispatch() 可以直接调用 store/index.js的reducer方法
  dispatch({
    type:"",  //必须有type，其他的随意
    //数据直接发给reducer的action
  })
}

<button onClick={fn}></button>
```



> 总结
>
> 传值  Provider
>
> 接值  useSelector
>
> 修改  useDispatch







