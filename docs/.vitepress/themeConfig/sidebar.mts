/**
 * @author 'Dancy'
 * @description '侧边栏配置项'
 */

import { Sidebar } from "./type/Sidebar.mts";
import HTML from "../../src/guide/html/sidebar.mjs";
import CSS from "../../src/guide/css/sidebar.mjs";
import JavaScript from "../../src/guide/javascript/sidebar.mjs";
import Chrome from "../../src/guide/chrome/sidebar.mjs";
import Vue from "../../src/guide/vue/core/sidebar.mjs";
import Vuex from "../../src/guide/vue/vuex/sidebar.mjs";
import Pinia from "../../src/guide/vue/pinia/sidebar.mjs";
import Router from "../../src/guide/vue/router/sidebar.mjs";
import Vite from "../../src/guide/vue/vite/sidebar.mjs";
import React from "../../src/guide/react/sidebar.mjs";
import WeApp from "../../src/guide/weapp/sidebar.mjs";
import Git from "../../src/guide/git/sidebar.mjs";
import WebPack from "../../src/guide/webpack/sidebar.mjs";
import RollUp from "../../src/guide/rollup/sidebar.mjs";
import ESLint from "../../src/guide/eslint/sidebar.mjs";
import Prettier from "../../src/guide/prettier/sidebar.mjs";
import Node from "../../src/guide/node/sidebar.mjs";
import Koa from "../../src/guide/koa/sidebar.mjs";
import MySQL from "../../src/guide/mysql/sidebar.mjs";
import Nginx from "../../src/guide/nginx/sidebar.mjs";

export const sidebar: Sidebar = {
  "/guide/html/": HTML,
  "/guide/css/": CSS,
  "/guide/javascript/": JavaScript,
  "/guide/chrome/": Chrome,
  "/guide/vue/core/": Vue,
  "/guide/vue/vuex/": Vuex,
  "/guide/vue/pinia/": Pinia,
  "/guide/vue/router/": Router,
  "/guide/vue/vite/": Vite,
  "/guide/react/": React,
  "/guide/weapp/": WeApp,
  "/guide/git/": Git,
  "/guide/webpack/": WebPack,
  "/guide/rollup/": RollUp,
  "/guide/eslint/": ESLint,
  "/guide/prettier/": Prettier,
  "/guide/node/": Node,
  "/guide/koa/": Koa,
  "/guide/mysql/": MySQL,
  "/guide/nginx/": Nginx,
};
