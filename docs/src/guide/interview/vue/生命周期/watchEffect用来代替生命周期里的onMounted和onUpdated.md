# watchEffect用来代替生命周期里的onMounted和onUpdated

> 初始化页面的时候watchEffect里的代码会执行，当watchEffect里的数据有更新的时候同样会执行

```jsx
const count = ref(0)

watchEffect(() => console.log(count.value))
// -> logs 0

setTimeout(() => {
  count.value++
  // -> logs 1
}, 100)
```

> 注意watchEffect第一次运行是在组件挂载之前，如果需要访问DOM需要将我们的watchEffect放在onMounted里

```jsx
onMounted(() => {
  watchEffect(() => console.log(count.value))
})
```

