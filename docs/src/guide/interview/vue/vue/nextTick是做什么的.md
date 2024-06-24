# nextTick是做什么的

- `nextTick` 指定的回调函数会在DOM节点更新之后执行

- DOM渲染完毕更新完毕会触发，可以写在任何一个生命周期中

- 当改变数据后，要基于更新后的新DOM进行某些操作时，要在 `nextTick` 所指定的回调函数中执行。

  ```
  created(){
  	this.$nextTick(()=>{
  		获取DOM 100%能获取到
  		一般情况下，不在这里获取DOM
  	})
  }
  
  mounted(){
  	直接获取DOM，操作
  }
  ```

