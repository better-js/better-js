/**
 * @author 'Dancy'
 * @description '侧边栏配置项'
 */

import { Sidebar } from "./type/Sidebar.mts";
// 计算机基础

// 基本功
import HTML from "../../src/HTML/sidebar.mjs";
import CSS from "../../src/CSS/sidebar.mjs";
import JavaScript from "../../src/JavaScript/sidebar.mjs";
import TypeScript from "../../src/TypeScript/sidebar.mjs";
// 框架
import Vue from "../../src/Vue/sidebar.mjs";
import React from "../../src/React/sidebar.mjs";
import WeApp from "../../src/WeApp/sidebar.mjs";
// 工程化
import Git from "../../src/Git/sidebar.mjs";
import WebPack from "../../src/WebPack/sidebar.mjs";
// 服务端
import Node from "../../src/Node/sidebar.mjs";
import Nginx from "../../src/Nginx/sidebar.mjs";
// 扩展
import cli from "../../src/cli/sidebar.mjs";
import request from "../../src/request/sidebar.mts";
export const sidebar: Sidebar = {
  "/HTML": HTML,
  "/CSS": CSS,
  "/JavaScript": JavaScript,
  "/TypeScript": TypeScript,
  "/Vue": Vue,
  "/React": React,
  "/WeApp": WeApp,
  "/Git": Git,
  "/WebPack": WebPack,
  "/Node": Node,
  "/Nginx": Nginx,
  "/cli": cli,
  "/request": request,
};
