# Watch

watch的作用是可以监控一个值的交换，并调用因为变化需要执行的方法，可以通过watch动态改变关联的状态。

简单点说，就是实时监听某个数据的变化。

## 普通监听

```vue
<template>
  <div>
    <input type="text" v-model="txtVal" />
    <p>{{ txtVal }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      txtVal: "",
    };
  },
  watch: {
    // 写法一：
    txtVal(newVal,oldVal) {
      // txtVal值变化的时候执行这里的代码
      console.log(newVal,oldVal);
    },
    // 写法二：【推荐】
    txtVal: {
      handler(newVal, oldVal) {
        // txtVal值变化的时候执行这里的代码
        console.log(newVal, oldVal);
      },
    },
  },
};
</script>
```



## 立即监听

`immediate: true` 设置该属性就表示立即监听

程序运行时立即监听一次，当数据发生变化时会触发执行

```vue
<template>
  <div>
    <input type="text" v-model="txtVal" />
    <p>{{ txtVal }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      txtVal: "",
    };
  },
  watch: {
    txtVal: {
      handler(newVal, oldVal) {
        // txtVal值变化的时候执行这里的代码
        console.log(newVal, oldVal);
      },
      immediate: true,
    },
  },
};
</script>
```



## 深度监听

`deep: true` 设置该属性就表示深度监听

我们监听的数据不能是对象，如果是对象，那么对象的数据即使发生变化，我们也无法监听，那么如果需要监听对象中的数据变化，就必须使用deep属性，并设置为true

深度监听不推荐使用，因为它监听整个对象，比较消耗性能，所以我们可以指定去监听对象中的指定值，但是需要注意，如果指定了对象中的某一个数据的监听，那么必须写成字符串格式，deep属性可以省略

```vue
<template>
  <div>
    <input type="text" v-model="txtVal.num" />
    <p>{{ txtVal.num }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      txtVal: {
        num: 10
      },
    };
  },
  watch: {
    "txtVal.num": {
      handler(newVal, oldVal) {
        // txtVal值变化的时候执行这里的代码
        console.log(newVal, oldVal);
      },
      deep: true,	// 此时可以省略
    },
  },
};
</script>
```



## watch和computed的区别

### 区别

- watch中的函数是不需要调用的，而computed内部的函数需要调用，并且调用的时候不需要加()
- watch（属性监听），监听的是属性的变化，拿变化后的属性做后续的操作；而computed（计算属性），是通过它依赖的属性发生变化后得到的值，并且数据的结果会被缓存，且函数中必须通过return返回最终的结果
- watch需要在数据变化时执行异步或开销较大的操作时使用，而对于任何复杂逻辑或一个数据属性，在它所依赖的属性发生变化时，也要发生变化，这种情况下，我们最好使用计算属性computed
- watch一个对象，键是需要观察的表达式，值是对应回调函数。主要用来监听某些特定数据的变化，从而进行某些具体的业务逻辑操作

### 使用场景

- computed
  - 当一个结果受多个属性影响的时候就需要用到computed
  - 比如：购物车商品结算的时候
- watch
  - 当一个数据的变化参与到后续操作的时候就需要用watch
  - 比如：搜索数据
- 总结
  - 一个值的结果受其他值的影响，用computed
  - 一个值的变化将时刻影响其他逻辑，用watch

