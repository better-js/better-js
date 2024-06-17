# cross-env

## 环境变量场景

区分开发环境 和 生产环境

```sh
npm install cross-env
```

这个库是干什么的 cross-env 是 跨平台设置和使用环境变量 不论是在Windows系统还是POSIX系统。同时，它提供了一个设置环境变量的脚本，使得您可以在脚本中以unix方式设置环境变量，然后在Windows上也能兼容运行

usage

cross-env NODE_ENV=dev

他的原理就是如果是windows 就调用SET 如果是posix 就调用export 设置环境变量

```sh
set NODE_ENV=production  #windows
export NODE_ENV=production #posix
```

