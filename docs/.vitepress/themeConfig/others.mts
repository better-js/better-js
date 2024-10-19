/**
 * @author 'Dancy'
 * @description '其他配置项'
 */

import { SocialLink } from "./type/SocialLink.mts";

// logo
export const logo = {
  light: "/logo/code_logo_light.svg",
  dark: "/logo/code_logo_dark.svg",
};

// outline
export const outline = {
  level: "deep", // 右侧大纲标题层级
  label: "目录", // 右侧大纲标题文本配置
};

// socialLinks
export const socialLinks: SocialLink[] = [
  {
    icon: "github",
    link: "https://github.com/dormainty",
  },
  {
    icon: {
      svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>gitee</title><path d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.592.592 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296Z"/></svg>',
    },
    link: "https://gitee.com/dancysue",
  },
];

// footer
export const footer = {
  message: "",
  copyright: "Copyright © 2020-present Dancy Sue",
};

// editLink
export const editLink = {
  pattern: "",
  text: "在 GitHub 上编辑此页面",
};

// lastUpdated
export const lastUpdated = {
  text: "最后更新于",
  formatOptions: {
    dateStyle: "full",
    timeStyle: "medium",
  },
};

export const search = {
  provider: "local",
  options: {
    locales: {
      zh: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
  },
};

// docFooter
export const docFooter = {
  prev: "上一篇",
  next: "下一篇",
};
