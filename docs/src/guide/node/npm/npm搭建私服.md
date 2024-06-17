# npm搭建私服

## 构建npm私服

构建私服有什么收益吗？

- 可以离线使用，你可以将npm私服部署到内网集群，这样离线也可以访问私有的包。
- 提高包的安全性，使用私有的npm仓库可以更好的管理你的包，避免在使用公共的npm包的时候出现漏洞。
- 提高包的下载速度，使用私有 npm 仓库，你可以将经常使用的 npm 包缓存到本地，从而显著提高包的下载速度，减少依赖包的下载时间。这对于团队内部开发和持续集成、部署等场景非常有用

## 如何搭建npm 私服

[verdaccio](https://verdaccio.org/zh-cn/)

Verdaccio 是可以帮我们快速构建npm私服的一个工具

```sh
npm install --global verdaccio
```

使用方式非常简单

```sh
# 使用默认配置运行服务器
verdaccio

# 在端口5000上运行服务器
verdaccio --listen 5000

# 通过使用配置文件的不同绝对位置运行服务器
verdaccio --config /home/user/verdaccio/config.yaml
```



## 基本命令

```sh
#创建账号
npm adduser --registry http://localhost:4873/

# 发布npm
npm publish --registry http://localhost:4873/

#指定开启端口 默认 4873
verdaccio --listen 9999

# 指定安装源
npm install --registry http://localhost:4873

# 从本地仓库删除包
npm unpublish <package-name> --registry http://localhost:4873
```

其他配置文件项[配置文件](https://verdaccio.org/zh-cn/docs/configuration/)