# NVM

::: tip NVM 是一个用于管理 Node.js 版本的工具，允许用户在不同的 Node.js 版本之间轻松切换。

- 官方文档：https://github.com/nvm-sh/nvm

:::

## 安装NVM

```bash
# 终端内直接输入以下命令
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

## 配置环境变量

**（1）编辑 `~/.zshrc` 文件**

```bash
vi ~/.zshrc
```

**（2）在配置文件中添加以下内容：**

```bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

**（3）刷新配置**

在编辑完配置文件后，运行以下命令以使更改生效：

```bash
source ~/.zshrc
```

**（4）验证 NVM 安装**

运行以下命令以确认 NVM 已正确安装并配置：

```bash
nvm -v
```

如果返回 nvm 版本号，则表示配置成功

## 常用命令

```bash
# 查看当前 nvm 版本
nvm -v

# 查看已安装的 Node.js 版本
nvm ls

# 查看可以安装的所有远程 Node.js 版本
nvm ls-remote

# 查看当前使用版本
nvm current

# 安装指定版本的 Node.js
nvm install <version>

# 卸载指定版本的 Node.js
nvm uninstall <version>

# 使用指定版本的 Node.js
nvm use <version>

# 设置默认版本
nvm alias default <version>

# 设置国内安装源
nvm npm_mirror https://npmmirror.com/mirrors/npm/
nvm node_mirror https://npmmirror.com/mirrors/node/
```

## 使用技巧

在项目根目录下创建一个名为 `.nvmrc` 的文件，里面写入所需的 Node.js 版本号，使用 `nvm use` 命令可以自动切换到该版本

```bash [.nvmrc]
# 在根目录下执行以下命令，创建一个指定 Node.js 版本号为 14.17.0 的 .nvmrc 文件
echo "14.17.0" > .nvmrc

# 在项目根目录下使用以下命令切换到 .nvmrc 中指定的 Node.js 版本
nvm use
```

