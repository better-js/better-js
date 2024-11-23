/**
 * @author 'Dancy'
 * @description '侧边栏配置项'
 */

import { Sidebar } from "./type/Sidebar.mts"
// 小案例
import Demo from '../../src/guide/demo/sidebar.mts'

// 前端
import HTML from '../../src/guide/html/sidebar.mts'
import CSS from '../../src/guide/css/sidebar.mts'
import JavaScript from '../../src/guide/javascript/sidebar.mts'
import TypeScript from '../../src/guide/typescript/sidebar.mts'
// 服务端
import Node from '../../src/guide/node/sidebar.mts'
import Nginx from '../../src/guide/nginx/sidebar.mts'
import MongoDB from '../../src/guide/mongodb/sidebar.mts'

// 框架
import Vue from "../../src/guide/vue/sidebar.mts"
import Nuxt from "../../src/guide/nuxt/sidebar.mts"
import React from "../../src/guide/react/sidebar.mts"
import Electron from "../../src/guide/electron/sidebar.mts"
import MiniApp from "../../src/guide/mini-app/sidebar.mts"
import Express from "../../src/guide/express/sidebar.mts"
import Koa from "../../src/guide/koa/sidebar.mts"
import Nest from "../../src/guide/nest/sidebar.mts"
// 工程化
import Git from '../../src/guide/git/sidebar.mts'
import ESLint from '../../src/guide/eslint/sidebar.mts'
import Prettier from '../../src/guide/prettier/sidebar.mts'

// 源码剖析
import VuePrinciple from "../../src/guide/vue-principle/sidebar.mts"

export const sidebar: Sidebar = {
	// 小案例
	"/guide/demo/": Demo,

	// 前端
	"/guide/html/": HTML,
	"/guide/css/": CSS,
	"/guide/javascript/": JavaScript,
	"/guide/typescript/": TypeScript,
	// 服务端
	"/guide/node/": Node,
	"/guide/nginx/": Nginx,
	"/guide/mongodb/": MongoDB,
	// 框架
	"/guide/vue/": Vue,
	"/guide/nuxt/": Nuxt,
	"/guide/react/": React,
	"/guide/electron/": Electron,
	"/guide/mini-app/": MiniApp,
	"/guide/express/": Express,
	"/guide/koa/": Koa,
	"/guide/nest/": Nest,
	// 工程化
	"/guide/git/": Git,
	"/guide/eslint/": ESLint,
	"/guide/prettier/": Prettier,
	// 开发手记
	// 源码剖析
	"/guide/vue-principle/": VuePrinciple,
	// 扩展
}
