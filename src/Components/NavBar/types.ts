import { Simplify } from "type-fest";

export interface LinkMenuItem {
  id: string;
  link: string;
  onClick?: never;
  isBlank: boolean;
  contenido: React.ReactNode | string;
}
export interface ButtonMenuItem {
  id: string;
  link?: never;
  onClick: () => void;
  contenido: React.ReactNode | string;
}

export interface ButtonItem {
  link: string;
  onClick?: never;
  contenido: React.ReactNode | string;
}
export interface ButtonItemOnClick {
  link?: never;
  onClick: () => void;
  contenido: React.ReactNode | string;
}

export type MenuItemType = Simplify<LinkMenuItem | ButtonMenuItem>;

export type NavBarProps = Simplify<{
  items: MenuItemType[];
  description?: any;
  buttonsCollection?: Array<Simplify<ButtonItem | ButtonItemOnClick>>;
}>;
