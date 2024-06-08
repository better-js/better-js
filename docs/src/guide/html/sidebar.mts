export default [
  {
    text: "HTML4",
    collapsed: true,
    items: [
      { text: "标签", link: "/guide/html/标签" },
      { text: "链接", link: "/guide/html/链接" },
      { text: "图片", link: "/guide/html/图片" },
      { text: "媒体", link: "/guide/html/媒体" },
      { text: "表格", link: "/guide/html/表格" },
      { text: "列表", link: "/guide/html/列表" },
      { text: "表单", link: "/guide/html/表单" },
      { text: "字符实体", link: "/guide/html/字符实体" },
    ],
  },
  {
    text: "HTML5",
    collapsed: true,
    items: [
      {
        text: "本地存储",
        collapsed: true,
        items: [
          { text: "cookie", link: "/guide/html/本地存储/cookie" },
          { text: "localStorage", link: "/guide/html/本地存储/local-storage" },
          { text: "sessionStorage", link: "/guide/html/本地存储/session-storage" },
          { text: "区别", link: "/guide/html/本地存储/区别" },
        ],
      },
      { text: "拖拽API", link: "/guide/html/拖拽API" }
    ],
  },
];
