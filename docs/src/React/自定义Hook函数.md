# 自定义Hook函数

自定义Hook是以 use打头的函数，通过自定义Hook函数可以用来实现逻辑的封装和复用。

::: tip 封装自定义hook通用思路

1. 封装一个以 `use` 打头的函数。
2. 在函数体内封装可复用的逻辑。
3. 把组件中用到的状态或回调return出去（以对象或数组的方式）。
4. 在哪个组件中要用到这个逻辑，就执行这个函数，解构出来状态和回调进行使用。

:::

```jsx {4-13,16}
import Child from "./Child";
import { useState } from "react";

function useToggle() {
  const [isShow, setIsShow] = useState(true);
  const toggle = () => {
    setIsShow(!isShow);
  };
  return {
    isShow,
    toggle,
  };
}

export default function App() {
  let { isShow, toggle } = useToggle();
  return (
    <>
      {isShow && <Child />}
      <button onClick={toggle}>卸载子组件</button>
    </>
  );
}
```

