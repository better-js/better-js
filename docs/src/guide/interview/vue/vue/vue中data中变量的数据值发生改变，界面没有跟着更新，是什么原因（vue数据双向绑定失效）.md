# Vue中data中变量的数据值发生改变，界面没有跟着更新，是什么原因（Vue数据双向绑定失效）

如果data里面定义了对象，对象里面的键值没有，getter/setter函数没法监听到属性值的数据变化，会导致此现象的发生。

解决方法：

```js
Vue.set(obj, key, value);
// or
this.$set(obj, key, value);
```

