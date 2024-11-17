# Zsh

zsh，或 Z Shell，是一个 Unix-Like 系统（如 macOS 或 Linux）下的 shell 命令行解释器。

它支持强大的自动补全能力，拥有丰富的插件，具有高可定制性，而且与 bash 充分兼容。虽然，它与 bash 相比，能力更加强大，但是它却依然比 bash 更快。

再者，相较于 bash，zsh 现在社区更加活跃，是一个还在成长中的项目。



> MacOS 快速打开终端方式：按下 `command` + `space(空格键)`，并在弹窗内输入 `Terminal` 即可。

## 常用命令

```shell
# 查看当前终端shell是zsh还是bash
echo $0
# 切换成bash
chsh -s /bin/bash
# 切换成zsh
chsh -s /bin/zsh

# 编辑zsh配置文件
vim ~/.zshrc
# 保存当前配置
source ~/.zshrc

# 查看目录
ls
ls -a # 查看隐藏文件

# 切换目录
cd

# 创建目录
mkdir xxx

# 查看文件
cat xxx

# 当前获取路径
pwd

# 修改文件
vim xxx
```

 

