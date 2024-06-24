# keep-alive使用场景和原理

keepAlive是vue中的一个内置组件，它可以在组件切换的时候保留状态，防止重复渲染DOM

可以使用 `$route` 获取 meta 中的keepAlive的值来实现选择性保留状态

- 常用的两个属性 include/exclude，允许组件有条件的进行缓存。
- 两个生命周期 activated/deactivated，用来得知当前组件是否处于活跃状态。
- keep-alive 的中还运用了 LRU(最近最少使用) 算法，选择最近最久未使用的组件予以淘汰。

## 使用方法

```html
<keep-alive>
  <component>
    <!-- 该组件将被缓存！ -->
  </component>
</keep-alive>
```

##### 