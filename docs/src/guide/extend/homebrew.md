# HomeBrew

::: tip HomeBrew是 macOS 上流行的包管理器，允许用户轻松安装和管理软件包。

- 官方文档：https://brew.sh/zh-cn/

- 安装教程：https://gitee.com/cunkai/HomebrewCN

:::



## 安装

```bash
# 终端内直接输入以下命令
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
```



## 常用命令

```bash
# 更新homebrew
brew update

# 查看版本
brew -v

# 查看已安装软件包
brew list

# 显示命令帮助
brew help

# 搜索应用程序（支持模糊搜索）
brew search <package_name>

# 安装软件包
brew install <package_name> # 适用于命令行工具和库，是 HomeBrew 的核心功能
brew install --cask <package_name> # 适用于GUI应用程序，是 HomeBrew 的扩展功能

# 更新软件包
brew upgrade <package_name>

# 卸载软件包
brew uninstall <package_name>

# 查看软件包信息
brew info <package_name>
```

