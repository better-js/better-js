# 项目概述
> 本项目是基于VitePress构建的文档网站，要用于记录个人学习笔记。

## 目录结构

```
.
├─ docs                    # 项目根目录
│  └─ .vitepress           # 配置目录
│     ├─ cache             # 缓存目录
│     ├─ themeConfig       # 默认主题配置目录
│     └─ config.mts        # 配置文件
└─ src                     # 源目录
│  ├─ public               # 静态资源
│  └─ index.md
└─ ...

```

## 项目命令
```sh
# 安装依赖
yarn

# 启动项目
yarn dev

# 构建项目
yarn build
```