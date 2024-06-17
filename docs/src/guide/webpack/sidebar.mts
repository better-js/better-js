export default [
  {
    text: "前言",
    collapsed: true,
    items: [
      {
        text: "webpack介绍",
        items: [
          {
            text: "webpack定义",
            link: "/guide/webpack/前言/webpack介绍/定义",
          },
          {
            text: "为什么需要打包工具",
            link: "/guide/webpack/前言/webpack介绍/打包工具",
          },
        ],
      },
      {
        text: "五大核心概念",
        items: [
          {
            text: "entry",
            link: "/guide/webpack/前言/五大核心概念/entry",
          },
          {
            text: "output",
            link: "/guide/webpack/前言/五大核心概念/output",
          },
          {
            text: "loaders",
            link: "/guide/webpack/前言/五大核心概念/loaders",
          },
          {
            text: "plugins",
            link: "/guide/webpack/前言/五大核心概念/plugins",
          },
          {
            text: "mode",
            link: "/guide/webpack/前言/五大核心概念/mode",
          },
        ],
      },
      {
        text: "基本使用",
        link: "/guide/webpack/前言/基本使用",
      },
      {
        text: "webpack配置文件",
        link: "/guide/webpack/前言/配置文件",
      },
      {
        text: "开发服务器及自动化",
        link: "/guide/webpack/前言/开发服务器及自动化",
      },
    ],
  },
  {
    text: "基础配置",
    collapsed: true,
    link: "/guide/webpack/基础配置/基础配置",
    items: [
      {
        text: "html资源处理",
        items: [
          {
            text: "处理html资源",
            link: "/guide/webpack/基础配置/html/处理html资源",
          },
          {
            text: "html压缩",
            link: "/guide/webpack/基础配置/html/html压缩",
          },
        ],
      },
      {
        text: "css资源处理",
        items: [
          {
            text: "处理css资源",
            link: "/guide/webpack/基础配置/css/处理css资源",
          },
          {
            text: "处理less资源",
            link: "/guide/webpack/基础配置/css/处理less资源",
          },
          {
            text: "处理sass或scss资源",
            link: "/guide/webpack/基础配置/css/处理sass或scss资源",
          },
          {
            text: "处理styl资源",
            link: "/guide/webpack/基础配置/css/处理styl资源",
          },
          {
            text: "封装通用styleLoader函数",
            link: "/guide/webpack/基础配置/css/封装通用styleLoader函数",
          },
          {
            text: "提取css成单独文件",
            link: "/guide/webpack/基础配置/css/提取css成单独文件",
          },
          {
            text: "css兼容处理",
            link: "/guide/webpack/基础配置/css/css兼容处理",
          },
          {
            text: "css压缩",
            link: "/guide/webpack/基础配置/css/css压缩",
          },
        ],
      },
      {
        text: "js资源处理",
        items: [
          {
            text: "处理eslint资源",
            link: "/guide/webpack/基础配置/js/处理eslint资源",
          },
          {
            text: "处理babel资源",
            link: "/guide/webpack/基础配置/js/处理babel资源",
          },
        ],
      },
      {
        text: "处理其它资源",
        items: [
          {
            text: "处理图片资源",
            link: "/guide/webpack/基础配置/处理其它资源/处理图片资源",
          },
          {
            text: "处理字体图标资源",
            link: "/guide/webpack/基础配置/处理其它资源/处理字体图标资源",
          },
          {
            text: "处理其它资源",
            link: "/guide/webpack/基础配置/处理其它资源/处理其它资源",
          },
        ],
      },
    ],
  },
  {
    text: "高级配置",
    collapsed: true,
    link: "/guide/webpack/高级配置/高级配置",
    items: [
      {
        text: "提升开发体验",
        items: [
          {
            text: "SourceMap",
            link: "/guide/webpack/高级配置/提升开发体验/sourcemap",
          },
        ],
      },
      {
        text: "提升打包构建速度",
        items: [
          {
            text: "HotModuleReplacement",
            link: "/guide/webpack/高级配置/提升打包构建速度/hmr",
          },
          {
            text: "OneOf",
            link: "/guide/webpack/高级配置/提升打包构建速度/oneof",
          },
          {
            text: "Include & Exclude",
            link: "/guide/webpack/高级配置/提升打包构建速度/include&exclude",
          },
          {
            text: "Cache",
            link: "/guide/webpack/高级配置/提升打包构建速度/cache",
          },
          {
            text: "Thead",
            link: "/guide/webpack/高级配置/提升打包构建速度/thead",
          },
        ],
      },
      {
        text: "减少代码体积",
        items: [
          {
            text: "Tree Shaking",
            link: "/guide/webpack/高级配置/减少代码体积/tree-shaking",
          },
          {
            text: "Babel",
            link: "/guide/webpack/高级配置/减少代码体积/babel",
          },
          {
            text: "Image Minimizer",
            link: "/guide/webpack/高级配置/减少代码体积/image-minimizer",
          },
        ],
      },
      {
        text: "优化代码运行性能",
        items: [
          {
            text: "Code Split",
            link: "/guide/webpack/高级配置/优化代码运行性能/codesplit",
          },
          {
            text: "Preload & Prefetch",
            link: "/guide/webpack/高级配置/优化代码运行性能/preload&prefetch",
          },
          {
            text: "Network Cache",
            link: "/guide/webpack/高级配置/优化代码运行性能/networkcache",
          },
          {
            text: "core-js",
            link: "/guide/webpack/高级配置/优化代码运行性能/core-js",
          },
          {
            text: "PWA",
            link: "/guide/webpack/高级配置/优化代码运行性能/pwa",
          },
        ],
      },
    ],
  },
  {
    text: "项目实战",
    collapsed: true,
    items: [
      {
        text: "React-cli",
        items: [
          {
            text: "开发模式配置",
            link: "/guide/webpack/项目实战/react/开发模式配置",
          },
          {
            text: "生产模式配置",
            link: "/guide/webpack/项目实战/react/生产模式配置",
          },
          {
            text: "合并开发&生产配置",
            link: "/guide/webpack/项目实战/react/合并开发&生产配置",
          },
          {
            text: "优化配置",
            link: "/guide/webpack/项目实战/react/优化配置",
          },
        ],
      },
      {
        text: "Vue-cli",
        items: [
          {
            text: "开发模式配置",
            link: "/guide/webpack/项目实战/vue/开发模式配置",
          },
          {
            text: "生产模式配置",
            link: "/guide/webpack/项目实战/vue/生产模式配置",
          },
          {
            text: "合并开发&生产配置",
            link: "/guide/webpack/项目实战/vue/合并开发&生产配置",
          },
          {
            text: "优化配置",
            link: "/guide/webpack/项目实战/vue/优化配置",
          },
        ],
      },
    ],
  },
  {
    text: "原理分析",
    collapsed: true,
    items: [
      {
        text: "Loader原理",
        items: [
          {
            text: "loader概念",
          },
          {
            text: "loader执行顺序",
          },
          {
            text: "loader分类",
          },
        ],
      },
      {
        text: "Plugin原理",
      },
    ],
  },
];
