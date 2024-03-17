# nvm & npm & yarn

## nvm

`node.js版本管理工具`

```sh
# 查看nvm的版本
nvm version # 当前的node版本
nvm v

# 查看当前安装的node.js所有版本
nvm list
nvm ls

# 安装指定版本
nvm install [version]

# 卸载指定版本
nvm uninstall [version]

# 使用指定版本
nvm use [version]

# 设置默认版本
nvm alias default [version]

# 设置国内安装源
nvm node_mirror https://npm.taobao.org/mirrors/node/
nvm npm_mirror https://npm.taobao.org/mirrors/npm/
```



## npm

`软件包管理工具`

```sh
# 初始化 初始化之后会在当前目录中生成一个package.json的文件
npm init --yes	

# 安装模块化会在目录中声明一个node_modules的目录，所有安装的模块都会在这里；默认安装的是最新版本
npm install [package]
npm i [package]

# 安装指定版本的模块
npm install [package]@[version]

# 更新模块
npm update [package]

# 卸载模块
npm uninstall [package]  

# 全局安装
npm instatll -g [package]
# 全局更新
npm update -g [package]
# 全局卸载
npm uninstall -g [package]

# -D 开发环境，安装包会在package中的 devDependencies 对象中
npm install [package] --save-dev
npm i [package] -D

# -S 生产环境，安装包会在package中的 dependencies 对象中
npm install [package] --save
npm i [package] -S

# 查看当前镜像使用的地址
npm config get registry

# 默认源
npm config set registry https://registry.npmjs.org
# 切换国内淘宝镜像
npm config set registry https://registry.npmmirror.com
```





## yarn

`软件包管理工具`

```sh
# 安装yarn
npm install --global yarn
npm i -g yarn

# 查看版本
yarn --version
yarn -v

# 显示命令列表
yarn help

# 初始化项目
yarn init

# 安装项目的全部依赖
yarn
yarn install

# 添加依赖包
yarn add [package]	# 会自动安装最新版本的依赖包
yarn add [package]@[version]	# 添加指定版本的依赖包
yarn add [package]@[tag]	#安装某个tag（beta, next, or latest）

# 全局安装
yarn global add [package]

# 升级依赖包
yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]
# yarn 2
yarn up [package]
yarn up [package]@[version]
yarn up [package]@[tag] 

# 移除依赖包
yarn remove [package]

# 更新yarn
yarn set version latest
yarn set version from sources

# 将依赖包添加到不同的类别中
yarn add [package] --dev  # dev dependencies 开发环境
yarn add [package] -D
yarn add [package] --peer # peer dependencies 通用
yarn add [package] -P

# 运行脚本
yarn run
```





npm是同步安装依赖，这意味着它只能一个一个地下载和安装软件包，速度相对较慢

yarn是异步安装依赖，这意味着它可以同时下载和安装多个软件包，从而提高了安装速度
