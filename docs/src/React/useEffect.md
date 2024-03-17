# useEffect

useEffect 是一个 React Hook 函数，用于在 React组件中创建**不是由事件引起**而是**由渲染本身引起的操作**，比如发送Ajax请求，更改DOM等等。

```jsx
useEffect(() => {}, [])

// 参数1:是一个函数，可以把它叫做副作用函数，在函数内部可以放置要执行的操作。
// 参数2:是一个数组（可选参），在数组里放置依赖项，不同依赖项会影响第一个参数函数的执行，当是一个空数组的时候，副作用函数只会在组件渲染完毕之后执行一次。
```



::: tip 依赖项参数说明

useEffect副作用函数的执行时机存在多种情况，根据传入依赖项的不同，会有不同的执行表现。

| 依赖项             | 副作用函数执行时机                  |
| ------------------ | ----------------------------------- |
| **没有依赖项**     | 组件初始渲染 + 组件更新时执行       |
| **空数组依赖**     | 只在初始渲染时执行一次              |
| **添加特定依赖项** | 组件初始渲染 + 特定依赖项变化时执行 |

:::

## 没有依赖项

组件初始渲染 + 组件更新时执行

```jsx
import { useEffect, useState } from "react";

export default function App() {
  let [count, setCount] = useState(0);
  useEffect(() => {
    console.log("副作用函数执行了");
  });
  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>自增</button>
    </>
  );
}
```



## 空数组依赖项

只在初始渲染时执行一次

```jsx
import { useEffect, useState } from "react";
const URL = "http://geek.itheima.net/v1_0/channels";
export default function App() {
  let [list, setList] = useState([]);
  useEffect(() => {
    async function getList() {
      const res = await fetch(URL);
      const jsonRes = await res.json();
      setList(jsonRes.data.channels);
    }
    getList();
  }, []);
  return (
    <>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}
```

## 添加特定依赖项

组件初始渲染 + 特定依赖项变化时执行

```jsx
import { useEffect, useState } from "react";

export default function App() {
  let [count, setCount] = useState(0);
  useEffect(() => {
    console.log("副作用函数执行了");
  }, [count]);
  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>自增</button>
    </>
  );
}
```



## 清除副作用

在 useEffect 中编写的 由渲染本身引起的对接组件外部的操作，社区也常常把它叫做副作用操作，比如在 useEffect中开起了一个定时器，我们想在组件卸载时把这个定时器再清理掉，这个过程就是清理副作用。

```jsx
useEffect(() => {
  // 实现副作用操作逻辑
  return () => {
    // 清除副作用逻辑
  };
});
```

**清除副作用的函数最常见的时机是在组件卸载时自动执行。**

::: code-group

```jsx [父组件]
import Child from "./Child";
import { useState } from "react";
export default function App() {
  let [isShow, setIsShow] = useState(true);
  return (
    <>
      {isShow && <Child />}
      <button onClick={() => setIsShow(!isShow)}>卸载子组件</button>
    </>
  );
}
```

```jsx [子组件]
import { useEffect } from "react";
export default function Child() {
  useEffect(() => {
    let timer = setInterval(() => {
      console.log("定时器执行中...");
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <h1>子组件</h1>
    </div>
  );
}
```



:::
