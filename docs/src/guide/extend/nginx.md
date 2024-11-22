# nginx

## 安装nginx

```bash
# 安装 nginx
brew install nginx

# 查看版本
nginx -v

# 查看安装路径
which nginx

# 启动
nginx

# 重新加载配置文件
nginx -s reload

# 关闭nginx
nginx -s stop

# 立即关闭nginx
nginx -s quit
```



## Hosts配置

> 处理因为一级域名不同导致的跨域

```shell
sudo vim /etc/hosts
```

`/etc/hosts` 是一个在 Unix 和 类Unix 操作系统（包括 Linux 和 MacOS）中的系统文件，其主要作用是用来存储主机名和 IP 地址之间的映射关系。

在这个文件中，每一行都代表一个 IP 地址和主机名的映射关系，IP 地址和主机名之间用空格或制表符（Tab键）隔开。例如，一行可能是这样

```
127.0.0.1       codebetter.cn
```

这表示 IP 地址 `127.0.0.1` 被映射到主机名 `codebetter.cn` 。

当在浏览器或其他程序中使用主机名时，系统会首先查看 `/etc/hosts` 文件，如果找到了对应的 IP 地址，就会使用这个 IP 地址。如果 `/etc/hosts` 文件中没有找到，系统就会再去查询 DNS 服务器。

因此，你可以通过修改 `/etc/hosts` 文件来改变主机名到 IP 地址的映射关系，这在开发和测试中经常被用到。

