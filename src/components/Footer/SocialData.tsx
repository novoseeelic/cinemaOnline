import { ReactElement } from "react";
import IconVk from '/src/assets/icons/social-vk.svg?react';
import IconYoutube from '/src/assets/icons/social-youtube.svg?react';
import IconOk from '/src/assets/icons/social-ok.svg?react';
import IconTelegram from '/src/assets/icons/social-tg.svg?react';

interface SocialData {
  url: string;
  icon: ReactElement;
  ariaLabel: string;
}

export const socialDatas: SocialData[] = [
  {
    url: 'https://vk.com',
    icon: <IconVk aria-hidden={true} />,
    ariaLabel: "Наша страница в VK",
  },
  {
    url: 'https://youtube.com',
    icon: <IconYoutube aria-hidden={true} />,
    ariaLabel: "Наша страница на YouTube",
  },
  {
    url: 'https://ok.ru',
    icon: <IconOk aria-hidden={true} />,
    ariaLabel: "Наша страница в Одноклассниках",
  },
  {
    url: 'https://t.me',
    icon: <IconTelegram aria-hidden={true} />,
    ariaLabel: "Наша страница в Telegram",
  },
];