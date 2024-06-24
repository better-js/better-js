# 本地存储

- 随着互联网的快速发展，基于网页的应用越来越普遍，同时也变的越来越复杂，为了满足各种各样的需求，会经常性在本地存储大量的数据，HTML5规范提出了相关解决方案。 
  - 数据存储在用户浏览器中
  - 设置、读取方便、甚至页面刷新不丢失数据
  - 容量较大，sessionStorage和localStorage约 5M 左右

## localStorage

- 生命周期永久生效，除非手动删除 否则关闭页面也会存在

- 可以多窗口（页面）共享（同一浏览器可以共享）

- 以键值对的形式存储使用

  ```javascript
  //存储数据：
  localStorage.setItem(key, value)
  
  //获取数据：
  localStorage.getItem(key)
  
  //删除数据：
  localStorage.removeItem(key)
  ```

  - 注意：字符串要放在''内

- 本地查看，以谷歌浏览器为例：右键单击-检查-Application-Local Storage

- 存储复杂数据类型存储

  - 本地只能存储字符串,无法存储复杂数据类型.需要将复杂数据类型转换成JSON字符串，再存储到本地

  - JSON.stringify(复杂数据类型) 

    - 将复杂数据转换成JSON字符串 **存储** 本地存储中

    ```javascript
    let obj = {
    		uname: '小苏同学',
    		age: 18,
    		address: '沈阳师范大学'
    	}
    	localStorage.setItem('obj', JSON.stringify(obj))
    ```

  - JSON.parse(JSON字符串) 

    - 将JSON字符串转换成对象 **取出** 时候使用

    ```javascript
    console.log(JSON.parse(localStorage.getItem('obj')))
    ```

    

## sessionStorage（了解）

- 生命周期为关闭浏览器窗口
- 在同一个窗口(页面)下数据可以共享

- 以键值对的形式存储使用

- 用法跟localStorage 基本相同