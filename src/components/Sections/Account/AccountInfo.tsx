import { FC, ReactNode } from "react";
import './AccountInfo.scss';

type MyAccountInfoProps = {
  title: string;
  text: string;
  iconContent: ReactNode,
}

const MyAccountInfo: FC<MyAccountInfoProps> = ({ title, text, iconContent }) => {
  return (
    <div className="my-account-info">
      <div className="my-account-info__icon">{iconContent}</div>
      <div className="my-account-info__content">
        <span className="my-account-info__title">{title}</span>
        <span className="my-account-info__text">{text}</span>
      </div>
    </div>
  )
}

export default MyAccountInfo;