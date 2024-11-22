# React

## React是什么

React由Meta公司研发，是一个用于 **构建Web和原生交互界面的库**。

也就是说它既可以写基于浏览器的应用，也可以写IOS、Andriod原生应用（React Native）。



## React框架对前端开发的意义

现代化开发中，前端有两点是比较重要，就是页面组件化和数据驱动视图。

- 页面组件化
  - 传统方式：样式、结构、逻辑三者分离，所有样式都在一个style标签内，所有结构都在body标签内，所有逻辑都在script标签内，这种分隔代码的方式，尤其随着项目越来越复杂，导致后期维护有很高的成本。
  - 现代方式：页面组件化的方式，组件的特点封装性特别好，一个组件会把这个组件相关的结构、样式还有逻辑放到一起，使用时直接调组件就可以了，后期维护起来也是非常方便的，且易于复用。

- 数据驱动视图



## React库与React框架的区别是什么

- react库（也称为React.js或ReactJS）是一个自由及开发源代码的前端JavaScript工具库，用于基于UI组件构建用户界面，实现了MVC架构中的V层。
- react框架则是通过脚手架工具构建的一套完善前端环境，包括：路由、状态管理、数据获取、第三方的UI组件库和第三方Hooks库等的完整应用程序。
  - 脚手架工具：create-vite、create-react-app、Next.js、Remix
  - 路由：react-router-dom
  - 状态管理：Redux、Mobx、Zustand
  - UI组件库：Ant Design、Material UI
  - Hooks库：ahooks、react-use

> react库就是用来处理视图的，如果想做更大型的项目则需要使用框架





# React

[React官网](https://zh-hans.react.dev/)



## React框架对前端开发的意义

- 页面组件化
  - 把页面划分成各种组件，一个组件会把组件相关的结构样式逻辑放到一起，便于维护和复用。
- 数据驱动视图
  - 在前端减少DOM操作，开发就会简单很多
  - DOM操作由React完成



## React库与React框架的区别是什么

- React（也称为React.js或ReactJS）是一个自由及开放源代码的前端JavaScript工具库，用于基于UI组件构建用户界面，主要实现MVC架构的V层
- React框架则是通过脚手架工具搭建的一套完善前端环境，包括：路由、状态管理、数据获取、第三方的UI组件库和第三方Hooks库等的完整应用程序
  - 脚手架工具：用于搭建前端环境
    - create-vite
    - create-react-app
    - Next.js
    - Remix
  - 路由
    - react-router-dom
  - 状态管理
    - [Redux](https://cn.redux.js.org/)
    - [Mobx](https://zh.mobx.js.org/README.html)
    - Zustand
  - UI组件库
    - [Ant Design](https://ant-design.antgroup.com/index-cn)
    - [Material UI](https://mui.com/)
  - Hooks库
    - [ahooks](https://ahooks.js.org)
    - react-use

## react模块与react-dom模块分别起什么作用

