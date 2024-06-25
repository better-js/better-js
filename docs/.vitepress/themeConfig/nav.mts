/**
 * @author 'Dancy'
 * @description '导航栏配置项'
 */

import { Nav } from "./type/Nav.mts";

export const nav: Nav = [
  { text: "首页", link: "/" },
  {
    text: "计算机基础",
    items: [
      { text: "计算机网络", link: "/guide/network/" },
      { text: "计算机组成原理", link: "/guide/pocc/" },
      { text: "数据结构", link: "/guide/data-structure/" },
    ],
  },
  {
    text: "前端基础",
    items: [
      { text: "HTML", link: "/guide/html/" },
      { text: "CSS", link: "/guide/css/" },
      {
        text: "JavaScript",
        items: [
          { text: "ECMAScript", link: "/guide/javascript/ECMAScript/" },
          { text: "BOM", link: "/guide/javascript/BOM/" },
          { text: "DOM", link: "/guide/javascript/DOM/" },
        ],
      },
      { text: "TypeScript", link: "/guide/javascript/TypeScript/" },
    ],
  },
  {
    text: "框架",
    items: [
      {
        text: "Vue生态",
        items: [
          { text: "Vue2", link: "/guide/vue/vue2/" },
          { text: "Vue3", link: "/guide/vue/core/" },
          { text: "Vuex", link: "/guide/vue/vuex/" },
          { text: "Pinia", link: "/guide/vue/pinia/" },
          { text: "Router", link: "/guide/vue/router/" },
          { text: "Vite", link: "/guide/vue/vite/" },
        ],
      },
      {
        text: "React生态",
        items: [{ text: "React", link: "/guide/react/" }],
      },
      {
        text: "微信生态",
        items: [{ text: "微信小程序", link: "/guide/weapp/" }],
      },
    ],
  },
  {
    text: "工程化",
    items: [
      { text: "Git", link: "/guide/git/" },
      { text: "模块化", link: "/guide/git/" },
      { text: "包管理器", link: "/guide/git/" },
      {
        text: "规范",
        items: [
          { text: "ESLint", link: "/guide/eslint/" },
          { text: "prettier", link: "/guide/prettier/" },
        ],
      },
      {
        text: "构建工具",
        items: [
          { text: "WebPack", link: "/guide/webpack/" },
          { text: "Rollup", link: "/guide/rollup/" },
        ],
      },
      { text: "性能优化", link: "/guide/git/" },
      { text: "脚手架", link: "/guide/git/" },
      { text: "DevOps", link: "/guide/git/" },
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

  {
    text: "最佳实践",
    items: [
      {
        text: "项目搭建0-1",
        link: "/guide/project/",
      },
      {
        text: "性能优化",
        link: "/guide/project/性能优化",
      },
    ],
  },
  {
    text: "面试宝典",
    items: [{ text: "面试宝典", link: "/guide/interview/" }],
  },
  {
    text: "扩展",
    items: [
      {
        text: "浏览器",
        items: [{ text: "Chrome浏览器", link: "/guide/chrome/" }],
      },
      {
        text: "其他",
        items: [{ text: "其他", link: "/guide/extend/" }],
      },
    ],
  },
];
