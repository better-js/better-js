# 计算属性

原理：底层借助了 Object.defineProperty方法提供的getter 和 setter方法

优势：与methods相比，内部有缓存机制（实现复用效果），效率高，调试方便



```jsx
// 调用计算属性，不需要写()
<h1> {{total}} </h1>

// 格式一：
computed:{
	total(){
    return 'better'
  }
}
// 格式二
computed:{
	total：{
		get(){
      // 在{{}}中第一次获取这个计算属性的值的时候执行这里的代码
    },
    set(newValue){
      // 计算属性受其他数据影响而变化时
      console.log(newValue)
    }
  }
}
```



什么时候用计算属性，什么时候用method？

一个值如果受其他数据的影响，就用计算属性

## methods 和 computed 的区别

- 调用的时候methods需要使用()，而computed不需要()

- methods调用的时候吧，多次调用多次执行
- computed如果方法的返回值没有改变就只执行一次，多次调用的结果是在内存中获取数据



