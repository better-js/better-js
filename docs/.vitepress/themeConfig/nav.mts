/**
 * @author 'Dancy'
 * @description '导航栏配置项'
 */

import { Nav } from "./type/Nav.mts";

export const nav: Nav = [
  { text: "首页", link: "/" },
  {
    text: "前端知识",
    items: [
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
        ],
      },
      {
        text: "工程化",
        items: [
          { text: "Git", link: "/Git" },
          { text: "WebPack", link: "/WebPack" },
        ],
      },
      {
        text: "服务端",
        items: [
          { text: "Node", link: "/Node" },
          { text: "Nginx", link: "/Nginx" },
        ],
      },
      {
        text: "扩展",
        items: [
          {
            text:"Chrome", link: "/Chrome"
          }
        ]
      }
    ],
  },
  {
    text: "扩展",
    items: [
      {
        text: "前端脚手架",
        link: "/cli",
      },
    ],
  },
];
