import { ReactNode } from "react";
import IconFavorite from '/src/assets/icons/favorite.svg?react';
import IconUser from '/src/assets/icons/user.svg?react';
import MyAccountSettings from "./AccountSettings";
import MyAccountFavorites from "./AccountFavorites";

export interface MyAccountTab {
  title: string;
  icon: ReactNode;
  content: ReactNode;
}

export const MyAccountTabs: MyAccountTab[] = [
  {
    title: 'Избранное',
    icon: <IconFavorite width={24} hanging={24} aria-hidden={true} />,
    content: <MyAccountFavorites />
  },
  {
    title: 'Настройки',
    icon: <IconUser width={24} hanging={24} aria-hidden={true} />,
    content: <MyAccountSettings />
  },
];