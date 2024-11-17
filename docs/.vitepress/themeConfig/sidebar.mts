/**
 * @author 'Dancy'
 * @description '侧边栏配置项'
 */

import { Sidebar } from "./type/Sidebar.mts"
// html
// import HTML from '../../src/guide/html/sidebar.mjs'
// css
// import CSS from '../../src/guide/css/sidebar.mjs'
// javascript
// import javaScript from '../../src/guide/javascript/sidebar.mjs'
// node
// vue
import Vue from "../../src/guide/vue/sidebar.mts"
// react
import React from "../../src/guide/react/sidebar.mts"
// electron
import Electron from "../../src/guide/electron/sidebar.mts"
// 微信小程序
import MiniApp from "../../src/guide/mini-app/sidebar.mts"
// git
import Git from '../../src/guide/git/sidebar.mts'

export const sidebar: Sidebar = {
	// "/guide/html/": HTML,
	// "/guide/css/": CSS,
	// "/guide/javascript/": javaScript,
	"/guide/vue/": Vue,
	"/guide/react/": React,
	"/guide/electron/": Electron,
	"/guide/mini-app/": MiniApp,
	"/guide/git/": Git
}
