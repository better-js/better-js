# Monorepo架构

Monorepo 是一种代码库管理策略，即在一个单一的代码库（repository）中管理多个项目/包（package）。这种方法与传统的每个项目一个代码库（multi-repo）相对。

使用 Monorepo 可以带来一些好处，如更好的代码共享和依赖管理、一致的开发环境、统一的CI/CD流程等。





## pnpm 搭建 monorepo 环境

使用 `pnpm` 来管理 `monorepo` 项目是一种高效的方法，`pnpm` 提供了工作空间（workspace）功能，可以帮助你在一个代码库中管理多个包。以下是如何使用 `pnpm` 实现 `monorepo` 的详细步骤：

### （1）初始化项目

首先，确保你已经安装了 `pnpm`。如果还没有安装，可以使用以下命令进行安装：

```bash
npm install pnpm -g
```

然后，初始化你的 `monorepo` 项目：

```bash
mkdir my-monorepo
cd my-munorepo

# 初始化配置文件
pnpm init
```

### （2）创建 `pnpm-workspace.yaml`

在项目根目录下创建一个 `pnpm-workspace.yaml` 文件，用于定义哪些目录包含工作空间包：

```yaml
packages:
	- 'packages/*'
```

### （3）创建包

在使用 monorepo 管理多个项目时，通常需要在根目录下创建一个名为 `packages` 的目录，这个目录用于存放所有的子项目，每个子项目都是 `packages` 下的一个子目录。这种结构有助于统一管理依赖和配置，同时也便于各个子项目之间相互引用和协作。

例如，创建两个子包 `package-a` 和 `package-b`：

```bash
mkdir -p packages/package-a
mkdir -p packages/package-b
```

然后再每个目录下初始化 `package.json` 文件

```bash
cd packages/package-a
pnpm init
cd ../package-b
pnpm init
```

### （4）添加依赖

**安装公共依赖**

如果你希望将依赖安装到工作区的根目录（node_modules）下，共享给所有子包使用，需要在安装的命令中添加 `-w` 或者 `--workspace-root` 标志来显示指定：

```bash
pnpm install <package_name> -w
```

**安装非公共依赖**

如果某个依赖仅用于特定的子包，而不是整个工作区的公共依赖，应该在子包的目录下安装。每个子包有自己的 `package.json` 文件和依赖配置

```bash
cd packages/package-a
pnpm add <package_name>
```

如果子包b依赖于子包a，可以在子包b中添加子包a作为依赖：

```bash
cd packages/package-b
pnpm add package-a --workspace
```



### （5）运行和构建

开发使用 esbuild

生产使用 rollup