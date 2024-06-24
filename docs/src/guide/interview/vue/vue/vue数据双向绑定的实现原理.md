# Vue数据双向绑定的实现原理

## 原理

采用Object.defineProperty进行数据劫持并结合发布者-订阅者模式的方式实现数据的双向绑定原理

借助 `Object.defineProperty()` 对数据进行劫持，其中会有getter()和setter()方法；当读取属性值时，就会触发getter()方法，在view中如果数据发生了变化，就会通过 `Object.defineProperty()` 对属性设置一个setter函数，当数据改变了就会来触发这个函数



vue实现数据双向绑定主要是：采**用数据劫持结合发布者-订阅者模式**的方式，通过**Object.defineProperty（）**来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应监听回调。当把一个普通 Javascript 对象传给 Vue 实例来作为它的 data 选项时，Vue 将遍历它的属性，用 Object.defineProperty 将它们转为 getter/setter。用户看不到 getter/setter，但是在内部它们让 Vue 追踪依赖，在属性被访问和修改时通知变化。

vue的数据双向绑定 将MVVM作为数据绑定的入口，整合Observer，Compile和Watcher三者，通过Observer来监听自己的model的数据变化，通过Compile来解析编译模板指令（vue中是用来解析 {{}}），最终利用watcher搭起observer和Compile之间的通信桥梁，达到数据变化 —>视图更新；视图交互变化（input）—>数据model变更双向绑定效果。



## 简单实现双向数据绑定

```jsx
<body>
    <div id="app">
        <input type="text" id="txt">
        <p id="show"></p>
    </div>
</body>
<script type="text/javascript">
    var obj = {}
    Object.defineProperty(obj, 'txt', {
        get: function () {
            return obj
        },
        set: function (newValue) {
            document.getElementById('txt').value = newValue
            document.getElementById('show').innerHTML = newValue
        }
    })
    document.getElementById('txt').addEventListener('keyup', function (e) {
        obj.txt = e.target.value
    })
</script>
```

