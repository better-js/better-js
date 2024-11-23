/**
 * @author 'Dancy'
 * @description '默认主题配置'
 * @see https://vitepress.dev/zh/reference/default-theme-config
 */

import { nav } from "./nav.mts"
import { sidebar } from "./sidebar.mts"
import {
	logo,
	outline,
	socialLinks,
	footer,
	editLink,
	lastUpdated,
	search,
	docFooter,
} from "./others.mts"

export const themeConfig: any = {
	// 导航栏上显示的 Logo，位于站点标题前。
	logo,

	// 站点标题，当设置为 false 时，导航中的标题将被禁用。
	siteTitle: "Code Better",

	// 导航菜单项的配置。
	nav,

	// 侧边栏菜单项的配置。
	sidebar,

	// 将此值设置为 false 可禁止渲染大纲容器。
	outline,

	// 可以定义此选项以在导航栏中展示带有图标的社交帐户链接。
	socialLinks,

	// 页脚配置。
	footer,

	// 编辑链接。
	editLink,

	// 允许自定义上次更新的文本和日期格式。
	lastUpdated,

  // 一个配置即可展示 Carbon Ads。 https://www.carbonads.net/
  // carbonAds: {
  //   code: 'your-carbon-code',
  //   placement: 'your-carbon-placement'
  // },

	// 搜索。
	search,

	// 自定义出现在上一页和下一页链接上方的文本。
	docFooter,

	// 用于自定义深色模式开关标签，该标签仅在移动端视图中显示。
	darkModeSwitchLabel: "切换日光/暗黑模式",

	// 用于自定义悬停时显示的浅色模式开关标题。
	lightModeSwitchTitle: "暗黑模式",

	// 用于自定义悬停时显示的深色模式开关标题。
	darkModeSwitchTitle: "日光模式",

	// 用于自定义侧边栏菜单标签，该标签仅在移动端视图中显示。
	sidebarMenuLabel: "文章",

	// 用于自定义返回顶部按钮的标签，该标签仅在移动端视图中显示。
	returnToTopLabel: "Top",

	// 是否在 markdown 中的外部链接旁显示外部链接图标。
	externalLinkIcon: true,
}
