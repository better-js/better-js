export type Sidebar = SidebarItem[] | SidebarMulti;

interface SidebarMulti {
  [path: string]: SidebarItem[];
}

type SidebarItem = {
  /**
   * 侧边栏项的文本标签
   */
  text?: string;

  /**
   * 侧边栏项的链接
   */
  link?: string;

  /**
   * 侧边栏项的子项
   */
  items?: SidebarItem[];

  /**
   * 如果未指定，侧边栏组不可折叠
   *
   * 如果为 `true`，则侧边栏组可折叠并且默认折叠
   *
   * 如果为 `false`，则侧边栏组可折叠但默认展开
   */
  collapsed?: boolean;
};
