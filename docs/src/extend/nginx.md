# Nginx

```shell
# 启动nginx
sudo nginx

# 重新加载nginx配置文件
sudo nginx -s reload

# 关闭nginx，这个命令会向nginx主进程发送一个停止信号，让它优雅地关闭服务。如果有正在处理的请求，nginx会等待请求处理完成后再关闭服务
sudo nginx -s stop

# 立即关闭nginx，这个命令会向nginx主进程发送一个退出信号，让它立即关闭服务。如果有正在处理的请求，nginx会立即停止处理请求并关闭服务
sudo nginx -s quit
```



Nginx的
