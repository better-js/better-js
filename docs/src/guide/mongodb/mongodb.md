# 安装 MongoDB 社区版

MongoDB 社区版是 MongoDB 的开源版本，适用于开发者和小型团队。它提供了大多数核心功能，适合开发、测试以及小型生产环境。通过简单的安装步骤，你可以在本地环境中快速部署 MongoDB，并利用其强大的功能来构建和管理应用数据。

## 1 官网下载压缩包手动安装
**（1）下载和解压**

- 从 [MongoDB官方下载页面](https://www.mongodb.com/try/download/community-edition) 下载适合 macOS 的 `.tgz` 文件

- 打开终端，导航到下载目录并解压缩文件：

  ```bash
  cd ~/Downloads
  tar -xzvf mongodb-macos-arm64-8.0.3.tgz
  ```

**（2）移动解压后的文件到目标目录**
- 创建一个目录来存放 `mongodb` 二进制文件，例如 `/usr/local/mongodb`
  ```bash
  sudo mkdir -p /usr/local/mongodb
  ```
- 将解压后的文件移动到目标目录：
  ```
  sudo mv mongodb-macos-aarch64-8.0.3/* /usr/local/mongodb
  ```

**（3）配置环境变量**
```bash
# 打开配置文件
open ~/.zshrc
# 在配置文件中添加以下行，将 MongoDB 的路径添加到 PATH 环境变量中
export PATH=${PATH}:/usr/local/mongodb/bin
# 保存配置
source ~/.zshrc
```
**（4）验证安装**
```bash
mongod -version
```
**（5）创建数据和日志目录**
```bash
# 创建目录
sudo mkdir -p /usr/local/mongodb/{data,log}
# 设置读写权限
sudo chmod -R 755 /usr/local/mongodb/{data,log}
```
**（6）启动 MongoDB**

- 使用 `mongod` 命令启动 MongoDB 服务器：

  ```bash
  mongod --dbpath /usr/local/mongodb/data
  ```

- 如果需要在后台运行，可以使用 `--fork` 选项，并指定日志文件：

  ```bash
  mongod --dbpath /usr/local/mongodb/data --logpath /usr/local/mongodb/log/mongo.log --logappend --fork
  ```

:::details 参数解释

- **`--dbpath /usr/local/mongodb/data`**
  - 指定 MongoDB 数据库文件的存储路径。确保此目录存在且可写。
- **`--logpath /usr/local/mongodb/log/mongo.log`**
  - 指定日志文件的路径。确保日志目录存在且可写。
- **`--logappend`**
  - 以追加模式写入日志文件，以防止覆盖现有日志。
- **`--fork`**
  - 使 MongoDB 进程在后台运行。
- **`--port`**
  - 指定端口号

:::

**（7）验证启动**

http://127.0.0.1:27017/

**（8）关闭 MongoDB** 

```bash
sudo killall mongod
```
## 2 Homebrew安装
**（1）安装 MongoDB**
```bash
# 将 MongoDB 的 Tap 添加到 Homebrew
brew tap mongodb/brew
# 安装 MongoDB社区版 8.0
brew install mongodb-community@8.0
```
**（2）验证安装**
```bash
mongod -version
```
**（3）启动 MongoDB 服务**
```bash
brew services start mongodb/brew/mongodb-community
```
**（4）验证启动**

http://127.0.0.1:27017/

**（5）停止 MongoDB 服务**

```bash
brew services stop mongodb/brew/mongodb-community
```
