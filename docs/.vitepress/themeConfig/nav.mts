/**
 * @author 'Dancy'
 * @description '导航栏配置项'
 */

import { Nav } from "./type/Nav.mts";

export const nav: Nav = [
  { text: "首页", link: "/" },
  // {
  //   text: "计算机基础",
  //   items: [
  //     { text: "计算机网络", link: "" },
  //     { text: "计算机组成原理", link: "" },
  //     { text: "数据结构", link: "" },
  //   ],
  // },
  {
    text: "前端基础",
    items: [
      { text: "HTML", link: "/guide/html/" },
      { text: "CSS", link: "/guide/css/" },
      { text: "JavaScript", link: "/guide/javascript/" },
      { text: "Chrome浏览器", link: "/guide/chrome/" },
    ],
  },
  {
    text: "框架",
    items: [
      {
        text: "Vue生态",
        items: [
          { text: "Vue", link: "/guide/vue/core/" },
          { text: "Vuex", link: "/guide/vue/vuex/" },
          { text: "Pinia", link: "/guide/vue/pinia/" },
          { text: "Router", link: "/guide/vue/router/" },
          { text: "Vite", link: "/guide/vue/vite/" },
        ],
      },

      { text: "React", link: "/guide/react/" },
      { text: "微信小程序", link: "/guide/weapp/" },
    ],
  },
  {
    text: "工程化",
    items: [
      { text: "Git", link: "/guide/git/" },
      {
        text: "构建工具",
        items: [
          { text: "WebPack", link: "/guide/webpack/" },
          { text: "Rollup", link: "/guide/rollup/" },
        ],
      },
      {
        text: "规范化",
        items: [
          { text: "ESLint", link: "/guide/eslint/" },
          { text: "prettier", link: "/guide/prettier/" },
        ],
      },
    ],
  },
  {
    text: "服务端",
    items: [
      { text: "Node", link: "/guide/node/" },
      { text: "Koa", link: "/guide/koa/" },
      { text: "MySQL", link: "/guide/mysql/" },
      { text: "Nginx", link: "/guide/nginx/" },
    ],
  },
  // {
  //   text: "性能优化",
  //   items: [],
  // },
  // {
  //   text: "最佳实践",
  //   items: [],
  // },
  // {
  //   text: "面试宝典",
  //   items: [],
  // },
  // {
  //   text: "扩展",
  //   items: [],
  // },
];
