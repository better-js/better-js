# isRef()

> 检查某个值是否为 ref，返回的结果为一个布尔值。

```js
import {ref, isRef} from 'vue';

let name = ref('xiaosu');
console.log(isRef(name)); // true

let age = 18;
console.log(isRef(age)); // false
```

