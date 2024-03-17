## 软件篇

[谷歌浏览器下载地址](https://www.google.cn/intl/zh-CN/chrome/)

### VSCode

[下载地址](https://code.visualstudio.com/)

| 插件名          |        |
| --------------- | ------ |
| chinese         | 汉化包 |
| open in browser |        |
| Live Server     |        |
| Volar           |        |
| GitLengs        |        |



### 网易有道词典





## 环境配置篇

### homebrew

[下载地址](https://brew.sh/index_zh-cn)

[Homebrew国内如何自动安装（国内地址）（Mac & Linux）](https://zhuanlan.zhihu.com/p/111014448/)

```shell
# 配置brew
brew -v

git config --global --add safe.directory /opt/homebrew/Library/Taps/homebrew/homebrew-core

git config --global --add safe.directory /opt/homebrew/Library/Taps/homebrew/homebrew-cask
```



### nvm

```shell
# 安装nvm
brew install nvm
```



```shell
# 
vim ~/.zshrc

# 按 i 进入编辑模式
i

# 将以下内容粘贴进去
export NVM_DIR="$HOME/.nvm"
  [ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"  # This loads nvm
  [ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion
  

# 按 esc 退出编辑模式
esc

:wq

source ~/.zshrc
```



```shell
# 安装node
nvm install v14.21.3

# 切换源
npm config set registry https://registry.npm.taobao.org
```



### mysql

下载地址：https://dev.mysql.com/downloads/mysql/
