# 常用的 npm 命令

> npm install 安装模块的时候一般是扁平化安装的，但是有时候出现嵌套的情况是因为版本不同 A 依赖 C1.0, B 依赖 C1.0, D 依赖 C2.0, 此时C 1.0就会被放到A B的node_moduels, C2.0 会被放入D模块下面的node_moduels

| 命令                                     | 描述                                                         |
| ---------------------------------------- | ------------------------------------------------------------ |
| `npm init`                               | 初始化一个新的 npm 项目，创建 package.json 文件              |
| `npm install`                            | 安装一个包或一组包，并且会在当前目录存放一个node_modules     |
| `npm install <package-name>`             | 安装指定的包，并将其添加到 package.json 文件中的 `dependencies` 依赖列表中 |
| `npm install <package-name> --save`      | 安装指定的包，并将其添加到 package.json 文件中的 `dependencies` 依赖列表中，等同于 `npm i -S xxx` 或 `npm i xxx` |
| `npm install <package-name> --save-dev`  | 安装指定的包，并将其添加到 package.json 文件中的 `devDependencies` 开发依赖列表中，等同于 `npm i -D xxx` |
| `npm install -g <package-name>`          | 全局安装指定的包                                             |
| `npm update <package-name>`              | 更新指定的包                                                 |
| `npm uninstall <package-name>`           | 卸载指定的包                                                 |
| `npm run <script-name>`                  | 执行 package.json 文件中定义的脚本命令                       |
| `npm search <keyword>`                   | 搜索 npm 库中包含指定关键字的包                              |
| `npm info <package-name>`                | 查看指定包的详细信息                                         |
| `npm list`                               | 列出当前项目中安装的所有包                                   |
| `npm outdated`                           | 列出当前项目中需要更新的包                                   |
| `npm audit`                              | 检查当前项目中的依赖项是否存在安全漏洞                       |
| `npm publish`                            | 发布自己开发的包到 npm 库中                                  |
| `npm login`                              | 登录到 npm 账户                                              |
| `npm logout`                             | 注销当前 npm 账户                                            |
| `npm link`                               | 将本地模块链接到全局的 `node_modules` 目录下                 |
| **`npm config list`**                    | 用于列出所有的 npm 配置信息。执行该命令可以查看当前系统和用户级别的所有 npm 配置信息，以及当前项目的配置信息（如果在项目目录下执行该命令） |
| `npm get registry`                       | 用于获取当前 npm 配置中的 registry 配置项的值。registry 配置项用于指定 npm 包的下载地址，如果未指定，则默认使用 npm 官方的包注册表地址 |
| `npm config set registry <registry-url>` | 将 registry 配置项的值修改为指定的 `<registry-url>` 地址     |

