# useRef

在 React 组件中获取/操作DOM，需要使用 useRef 钩子函数。

::: tip 实现步骤

1. 使用 useRef 创建 ref 对象，并与 JSX 绑定
2. 在 DOM 可用时，通过 `inputRef.current` 拿到 DOM 对象
   - 这里的可用是指：组件渲染完毕之后，就是DOM生成之后才可用

:::

```jsx
import { useRef } from "react";
export default function App() {
  const inputRef = useRef(null);
  const GetDomElement = () => {
    console.log(inputRef.current);
  };
  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={GetDomElement}>获取DOM元素</button>
    </>
  );
}
```





