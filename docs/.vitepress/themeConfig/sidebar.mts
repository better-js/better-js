/**
 * @author 'Dancy'
 * @description '侧边栏配置项'
 */

import { Sidebar } from "./type/Sidebar.mts";
import HTML from "../../src/HTML/sidebar.mjs";
import CSS from "../../src/CSS/sidebar.mjs";
import JavaScript from "../../src/JavaScript/sidebar.mjs";
import Vue from "../../src/Vue/sidebar.mjs";
import React from "../../src/React/sidebar.mjs";
import Git from "../../src/Git/sidebar.mjs";
import WebPack from "../../src/WebPack/sidebar.mjs";
import Node from "../../src/Node/sidebar.mjs";
import Nginx from "../../src/Nginx/sidebar.mjs";
import cli from "../../src/cli/sidebar.mjs";
export const sidebar: Sidebar = {
  "/HTML": HTML,
  "/CSS": CSS,
  "/JavaScript": JavaScript,
  "/Vue": Vue,
  "/React": React,
  "/Git": Git,
  "/WebPack": WebPack,
  "/Node": Node,
  "/Nginx": Nginx,
  "/cli": cli,
};
