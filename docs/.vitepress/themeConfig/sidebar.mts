/**
 * @author 'Dancy'
 * @description '侧边栏配置项'
 */

import { Sidebar } from "./type/Sidebar.mts";
import HTML from "../../src/guide/html/sidebar.mjs";
import CSS from "../../src/guide/css/sidebar.mjs";
import Vue from "../../src/guide/vue/sidebar.mjs";
import React from "../../src/guide/react/sidebar.mjs";
import WeApp from "../../src/guide/weapp/sidebar.mjs";
import Git from "../../src/guide/git/sidebar.mjs";
import WebPack from "../../src/guide/webpack/sidebar.mjs";

export const sidebar: Sidebar = {
  "/guide/html/": HTML,
  "/guide/css/": CSS,
  "/guide/vue/": Vue,
  "/guide/react/": React,
  "/guide/weapp/": WeApp,
  "/guide/git/": Git,
  "/guide/webpack/": WebPack,
};
