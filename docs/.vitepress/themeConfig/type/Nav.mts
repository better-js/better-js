export type Nav = (NavItemWithLink | NavItemWithChildren)[];

interface NavItemWithLink {
  text: string;
  link: string;
  activeMatch?: string;
  target?: string;
  rel?: string;
}

interface NavItemChildren {
  text?: string;
  items: NavItemWithLink[];
}

interface NavItemWithChildren {
  text?: string;
  items: (NavItemChildren | NavItemWithLink)[];
  activeMatch?: string;
}