# useMemo

useMemo(回调函数，[监听的内容])



```jsx
import { useMemo } from "react";
import { useState } from "react";

export default function App() {
  const [num, setNum] = useState(0);
  let total = useMemo(() => {
    return num * 2;
  }, [num]);
  return (
    <div>
      <p>{num}</p>
      <p>{total}</p>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        按钮
      </button>
    </div>
  );
}
```

