# 路由

## 路由切换原理

```html
<html lang="en">
  <head>
    <title>路由切换原理</title>
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
  </head>
  <body>
    <ul>
      <li><a href="#/login">点击跳转登录页</a></li>
      <li><a href="#/reg">点击跳转注册页</a></li>
    </ul>
    <div id="routerview"></div>
    <script>
      // 路由表
      let routes = {
        "#/login":"./login.html",
        "#/reg":"./reg.html"
      }
      // 当路由发生变化时 hashchange事件，重新加载 routes中的视图
      window.addEventListener("hashchange",()=>{
        $("#routerview").load(routes[location.hash])
      })
    </script>
  </body>
</html>
```

## 安装路由

```sh
npm install react-router-dom@6
```

- 在 src/router/index.jsx

```react
// 先安装路由 npm i react-router-dom@6
// 这不仅仅是一个路由文件，它也是一个路由组件
// BrowserRouter是一个路由组件（自带的history模式），同时还有一个HashRouter（自带hash模式）
// 引入三个路由组件
import { BrowserRouter, Routes, Route } from "react-router-dom";

// BrowserRouter 指定路由模式 HashRouter 两种路由模式
// Routes 路由表
// Route 路由

// 1. 引入要跳转的组件

import Home from "../views/router/Home";
import User from "../views/router/User";

// 2. 创建路由
const router = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/user" element={<User />}></Route>
    </Routes>
  </BrowserRouter>
);

export default router;

```

## 子路由

### 配置子路由

Route嵌套Route

```react
<Route>
	<Route></Route>
</Route>
```

### 子路由页面展示

```react
import {Outlet} from 'react-router-dom';

<Outlet></Outlet>
```



## 路由跳转

### Link方式

```react
import {Link} from "react-router-dom";

<Link to="/路径">标题</link>
```

### JS方式

```react
import {useNavagate} from "react-router-dom"

let navigate = useNavigate()

const goHome=()=>{
  navigate("/Home")
}

<button onClick={goHome}>首页</button>
```



## 路由传参

### 1. 动态路由

优点：美观，但是需要修改路由配置文件

#### 传参

- 配置文件

```react
<Route path="/路由规则/:id/:name/xxxxx"></Route>
```

- 路由传参

```react
// Link方式
<Link to="/路由规则/参数1/参数2/...">首页</Link>

// JS方式
import {useNavagate} from "react-router-dom"
let navigate = useNavigate()

const goHome=()=>{
  navigate("/路由规则/参数1/参数2/...")
}

<button onClick={goHome}>首页</button>
```

#### 接参

Hook

```react
import (useParams) from "react-router-dom"

let params = useParams()
console.log(params)
```

### 2. 通过查询字符串

#### 传参

```react
//?id=19&name=苏东旭
// Link方式
<Link to="/路由规则?参数1=xxx&参数2=xxx...">首页</Link>

// JS方式
import {useNavagate} from "react-router-dom"
let navigate = useNavigate()

const goHome=()=>{
  navigate("/路由规则?参数1=xxx&参数2=xxx...")
}

<button onClick={goHome}>首页</button>
```

#### 接参

Hook

```react
import {useSearchParams} from "react-router-dom"

const [data] = useSearchParams()
console.log(data.get('参数1'))
```

### 3. 通过navigate函数传参

#### 传参

添加第二个参数 {state:{}}

```react
import {useNavigate} from "react-router-dom"
let navigate = useNavigate()

const goHome=()=>{
  navigate("/路由规则",{
    state:{
      id:17,
    	name:"小星星"
    }
  })
}

<button onClick={goHome}>首页</button>
```

#### 接参

```
import (useLocation) from "react-router-dom"

let location = useLocation()
console.log(location.state)
```



> 总结
>
> 传参  useNavigate
>
> 接参  useLocation

