# 虚拟DOM

> **频繁的操作DOM代价很大**，性能和速度很低

Virtual DOM其实本质就是一个JavaScript对象，当数据和状态发生了变化，都会被自动高效的同步到虚拟DOM中，最后再将仅变化的部分同步到DOM中（不需要整个DOM树重新渲染）

Virtual DOM 其实就是一棵以 JavaScript 对象( VNode 节点)作为基础的树，用对象属性来描述节点，实际上它只是一层对真实 DOM 的抽象。最终可以通过一系列操作使这棵树映射到真实的DOM上

下面就是一个真实DOM映射到**虚拟DOM**的例子：

```html
<ul id='list'>
	<li class='item'>Item 1</li>
  <li class='item'>Item 2</li>
  <li class='item'>Item 3</li>
</ul>
```

虚拟DOM:

```js
    var element = {
        tagName: 'ul', // 节点标签名
        props: { // DOM的属性，用一个对象存储键值对
            id: 'list'
        },
        children: [ // 该节点的子节点
          {tagName: 'li', props: {class: 'item'}, children: ["Item 1"]},
          {tagName: 'li', props: {class: 'item'}, children: ["Item 2"]},
          {tagName: 'li', props: {class: 'item'}, children: ["Item 3"]},
        ]
    }
```

##### 