# 安装 MongoDB Shell

`mongosh` 是 MongoDB 官方推荐的新客户端工具，提供了更好的支持和功能。
>  MongoDB 从版本 4.2 开始，将 `mongo shell` 分离出来，并在后续版本中逐渐被 `mongosh`（MongoDB Shell）取代。
## 1 官网下载压缩包手动安装
**（1）下载与解压**
- 从 [MongoDB Shell 下载页面](https://www.mongodb.com/try/download/shell) 下载适合 macOS 的 `.zip` 文件

- 打开终端，导航到下载目录并解压缩文件：

  ```bash
  cd ~/Downloads
  tar -xzvf mongosh-2.3.4-darwin-arm64.zip
  ```

**（2）移动解压后的文件到目标目录**
- 创建一个目录来存放 `mongosh` 二进制文件，例如 `/usr/local/mongodb-shell`
  ```bash
  sudo mkdir -p /usr/local/mongodb-shell
  ```
- 将解压后的文件移动到目标目录：
  ```bash
  sudo mv mongosh-2.3.4-darwin-arm64/* /usr/local/mongodb-shell/
  ```

**（3）配置环境变量**

```bash
# 打开配置文件
open ~/.zshrc
# 在配置文件中添加以下行，将 MongoDB Shell 的路径添加到 PATH 环境变量中
export PATH=${PATH}:/usr/local/mongodb-shell/bin
# 保存配置
source ~/.zshrc
```
**（4）验证安装**

```bash
mongosh --version
```
**（5）启动 MongoDB Shell**
```bash
mongosh
```


## 2 Homebrew安装

**（1）安装 mongosh**
```bash
brew install mongosh
```
**（2）验证安装**

```bash
mongosh --version
```
**（3）使用 mongosh 连接到本地 MongoDB 实例**
```bash
mongosh
