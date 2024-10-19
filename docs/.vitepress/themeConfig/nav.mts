/**
 * @author 'Dancy'
 * @description '导航栏配置项'
 */

import { Nav } from "./type/Nav.mts"

export const nav: Nav = [
	{ text: "首页", link: "/" },
	{
		text: "JavaScript",
		items: [
			{ text: "ECMAScript", link: "/guide/network/" },
			{ text: "BOM", link: "/guide/pocc/" },
			{ text: "DOM", link: "/guide/data-structure/" },
		],
	},
	{ text: "Node", link: "/guide/Node/" },
	{
		text: "框架",
		items: [
			{ text: "Vue", link: "/guide/Framework/vue" },
			{ text: "React", link: "/guide/Framework/react" },
			{ text: "小程序", link: "/guide/Framework/weapp" },
		],
	},
	{
		text: "前端工程化",
		items: [
			{ text: "git", link: "/guide/Engineering/" },
			{ text: "webpack", link: "/guide/Engineering/" },
		],
	},
	{
		text: "性能优化",
		items: [
			{ text: "计算机网络", link: "/guide/Performance/" },
			{ text: "计算机组成原理", link: "/guide/Performance/" },
			{ text: "数据结构", link: "/guide/Performance/" },
		],
	},
	{
		text: "面试宝典",
		items: [
			{ text: "js", link: "/guide/Interview/" },
			{ text: "vue", link: "/guide/Interview/" },
			{ text: "react", link: "/guide/Interview/" },
		],
	},
	{
		text: "Demo",
		items: [{ text: "计算机网络", link: "/guide/Demo/" }],
	},
]
