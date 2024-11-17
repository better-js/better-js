# Oh My Zsh

::: tip Oh My Zsh 是一个开源的 Zsh 配置管理框架，旨在简化 Zsh 的配置并提供丰富的插件和主题支持。

官方文档：https://github.com/ohmyzsh/ohmyzsh

:::

## 安装

**（1）下载并安装脚本**

```bash
# 安装前请确保已经安装 zsh 和 git
zsh --version
git --version

# 安装命令
sh -c "$(curl -fsSL https://install.ohmyz.sh/)"
```

**（2）配置 Oh My Zsh**

编辑 `~/.zshrc` 文件

```bash
vi ~/.zshrc
```

配置主题及插件

```bash
# ==========================
# oh-my-zsh安装路径。
export ZSH="$HOME/.oh-my-zsh"
# zsh主题
ZSH_THEME="robbyrussell"
# 加载git插件
plugins=(git)
source $ZSH/oh-my-zsh.sh
# ==========================
```

每次修改 `~/.zshrc` 文件后，记得运行以下命令使更改生效

```bash
source ~/.zshrc
```

## 常用命令

```bash
# 查看zsh版本
zsh --version

# 卸载
uninstall_oh_my_zsh
```



