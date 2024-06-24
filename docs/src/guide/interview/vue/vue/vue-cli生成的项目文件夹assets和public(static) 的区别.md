# vue-cli生成的项目文件夹assets和public(static) 的区别

vue-cli2生成的项目目录是static

vue-cli3以上生成的项目目录是public

- 相同点：

assets和public(static) 都是存放静态资源的文件。项目所需要的静态文件、图片、样式文件都可以放在这两个文件夹下

- 不同点：

在assets中存放的静态资源，在项目打包时会将这些静态资源与代码、index.html文件一起一同进行打包压缩，上传到服务器

在public(static)中存放的静态资源，不会被打包压缩格式化等流程，而是直接进入打包好的目录，直接上传到服务器