export default [
  {
    text: "HTML",
    collapsed: true,
    items: [
      { text: "标签", link: "/HTML/标签" },
      { text: "链接", link: "/HTML/链接" },
      { text: "图片", link: "/HTML/图片" },
      { text: "媒体", link: "/HTML/媒体" },
      { text: "表格", link: "/HTML/表格" },
      { text: "列表", link: "/HTML/列表" },
      { text: "表单", link: "/HTML/表单" },
      { text: "字符实体", link: "/HTML/字符实体" },
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
          { text: "cookie", link: "/HTML/本地存储/cookie" },
          { text: "localStorage", link: "/HTML/本地存储/local-storage" },
          { text: "sessionStorage", link: "/HTML/本地存储/session-storage" },
          { text: "区别", link: "/HTML/本地存储/区别" },
        ],
      },
      { text: "拖拽API", link: "/HTML/拖拽API" }
    ],
  },
];
