/**
 * @author 'Dancy'
 * @description '导航栏配置项'
 */

import { Nav } from "./type/Nav.mts"

export const nav: Nav = [
	{ text: "首页", link: "/" },
	// {
	// 	text: "计算机基础",
	// 	items:[]
	// },
	{
		text: "前端",
		items: [
			{
				text: "语言",
				items: [
					{ text: "HTML", link: "/guide/html/" },
					{ text: "CSS", link: "/guide/css/" },
					{ text: "JavaScript", link: "/guide/javascript/" },
					{ text: "TypeScript", link: "/guide/typescript/" },
				],
			},
			{
				text: "框架与库",
				items: [
					{
						text: "Vue",
						link: "/guide/vue/index",
					},

					{
						text: "React",
						link: "/guide/react/index",
					},
					{
						text: "Nuxt",
						link: "/guide/nuxt/index",
					},
					{
						text: "小程序",
						link: "/guide/mini-app/index",
					},
				],
			},
		],
	},
	{
		text: "桌面端",
		items: [
			{
				text: "Electron",
				link: "/guide/electron/index",
			},
		],
	},
	{
		text: "服务端",
		items: [
			{
				text: "运行时与框架",
				items: [
					{ text: "Node", link: "/guide/node/" },
					{ text: "Express", link: "/guide/express/" },
					{ text: "Koa", link: "/guide/koa/" },
					{ text: "Nest", link: "/guide/nest/" },
				],
			},
			{
				text: "数据库",
				items: [{ text: "MongoDB", link: "/guide/mongodb/" }],
			},
			{
				text: "服务器",
				items: [{ text: "Nginx", link: "/guide/nginx/" }],
			},
		],
	},
	{
		text: "工程化",
		items: [
			{
				text: "版本控制",
				items: [{ text: "Git 分布式版本控制系统", link: "/guide/git/" }],
			},
			{
				text: "工具",
				items: [
					{ text: "ESLint 代码检查工具", link: "/guide/eslint/" },
					{ text: "Prettier 代码格式化工具", link: "/guide/prettier/" },
				],
			},
		],
	},
	{
		text: "开发手记",
		items: [
			{
				text: "Monorep架构",
				link: "/guide/notes/monorepo",
			},
			{
				text: "Vue3 管理端实战",
				link: "/guide/notes/m-side/",
			},
			{
				text: "Koa 服务端实战",
				link: "/guide/notes/koa-server-side/",
			},
			// {
			// 	text: "脚手架",
			// 	link: "/guide/notes/",
			// },
			// {
			// 	text: "组件库",
			// 	link: "/guide/notes/",
			// },
			// {
			// 	text: "工具库",
			// 	link: "/guide/notes/",
			// },
		],
	},
	{
		text: "源码剖析",
		items: [
			{
				text: "Vue3",
				link: "/guide/vue-principle/index",
			},
		],
	},
	{
		text: "扩展",
		items: [
			{
				text: "开发环境",
				items: [
					{
						text: "brew",
						link: "/guide/extend/homebrew",
					},
					{
						text: "nvm",
						link: "/guide/extend/nvm",
					},
					{
						text: "ohmyzsh",
						link: "/guide/extend/ohmyzsh",
					},
					{
						text: "nginx",
						link: "/guide/extend/nginx",
					},
				],
			},
			{
				text: "云服务器",
				items: [
					{
						text: "面板安装",
						link: "/guide/extend/运维面板安装",
					},
					{
						text: "域名解析",
						link: "/guide/extend/域名解析",
					},
				],
			},
			{
				text: "常用命令",
				items: [
					{
						text: "zsh",
						link: "/guide/extend/zsh",
					},
					{
						text: "常用命令",
						link: "/guide/extend/常用命令",
					},
				],
			},
		],
	},
]
