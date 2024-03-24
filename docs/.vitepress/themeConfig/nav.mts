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
      { text: "计算机网络", link: "/Network" },
      { text: "数据结构", link: "/DataStructure" },
    ],
  },
  {
    text: "基本功",
    items: [
      { text: "HTML", link: "/HTML" },
      { text: "CSS", link: "/CSS" },
      { text: "JavaScript", link: "/JavaScript" },
    ],
  },
  {
    text: "框架",
    items: [
      { text: "Vue", link: "/Vue" },
      { text: "React", link: "/React" },
      { text: "微信小程序", link: "/WeApp" },
    ],
  },
  {
    text: "工程化",
    items: [
      { text: "Git", link: "/Git" },
      { text: "WebPack", link: "/WebPack" },
      { text: "ESLint", link: "/ESLint" },
      { text: "prettier", link: "/Prettier" },
    ],
  },
  {
    text: "服务端",
    items: [
      { text: "Node", link: "/Node" },
      { text: "Nginx", link: "/Nginx" },
      { text: "Koa", link: "/Koa" },
    ],
  },
  {
    text: "扩展",
    items: [
      {
        text: "前端脚手架",
        link: "/cli",
      },
      {
        text: "数据请求",
        link: "/request",
      },
    ],
  },
];
