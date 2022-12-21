import { Simplify } from "type-fest";

export interface LinkMenuItem {
  id: string;
  link: string;
  onClick?: never;
  isBlank: boolean;
  contenido: React.ReactNode;
}
export interface ButtonMenuItem {
  id: string;
  link?: never;
  onClick: () => void;
  contenido: string;
}

export interface ButtonItem {
  link: string;
  onClick?: never;
  contenido: string;
}
export interface ButtonItemOnClick {
  link?: never;
  onClick: () => void;
  contenido: string;
}

export type MenuItemType = Simplify<LinkMenuItem | ButtonMenuItem>;

export type NavBarProps = Simplify<{
  items: MenuItemType[];
  description?: any;
  buttonsCollection?: Array<Simplify<ButtonItem | ButtonItemOnClick>>;
}>;
