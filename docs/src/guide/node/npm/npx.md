# npx

## npx是什么

npx是一个命令行工具，它是npm 5.2.0版本中新增的功能。它允许用户在不安装全局包的情况下，运行已安装在本地项目中的包或者远程仓库中的包。

npx的作用是在命令行中运行node包中的可执行文件，而不需要全局安装这些包。这可以使开发人员更轻松地管理包的依赖关系，并且可以避免全局污染的问题。它还可以帮助开发人员在项目中使用不同版本的包，而不会出现版本冲突的问题。

## npx 的优势

1. 避免全局安装：`npx` 允许你执行npm package，而不需要你先全局安装它。
2. 总是使用最新版本：如果你没有在本地安装相应的npm package，`npx` 会从npm的package仓库中下载并使用最新版。
3. 执行任意npm包：`npx` 不仅可以执行在 `package.json` 的 `scripts` 部分定义的命令，还可以执行任何npm package。
4. 执行GitHub gist：`npx`甚至可以执行GitHub gist或者其他公开的JavaScript文件。

> npx 的运行规则和 npm 是一样的本地目录查找.bin 看有没有 如果没有就去全局的node_moduels 查找，如果还没有就去下载这个包然后运行命令，然后删除这个包

## npm 和 npx 区别

npm 和 npm 是Node.js生态系统中的两个不同的命令行工具，它们有不同的用途和行为：

- npm（Node Package Manager）：npm是Node.js的默认包管理器，用于管理项目中的依赖项。它允许你安装、更新和移出包，还可以运行定义在 `package.json` 文件中的脚本。**重在安装，并不具备执行某个模块的功能。**

  ```sh
  npm install lodash # 安装lodash
  npm run dev #运行 package.json 中定义的 dev 命令
  ```

- npx（Node Package Execute）：npx是npm 5.2.0及更高版本中引入的一个工具，它用于在不全局安装包的情况下执行包的二进制文件。npx可以运行发布在 npm 上的包，无论这些包是否已经安装在本地。如果包没有在本地安装，npx将临时安装它并运行，运行完成后不会在本地保留这些包，特别适合运行单次命令、创建项目脚手架，或者运行不经常使用的工具。**虽然会自动安装模块，但是重在执行某个命令。**

  ```sh
  npm create-react-app my-react # 使用 create-react-app 创建一个新的 react 应用
  npx eslint --init # 运行 eslint 的初始化命令
  ```

  



