import { FC, ReactNode } from "react";
import { Link } from "react-router";
import './Button.scss';

type ButtonLinkProps = {
  children: ReactNode;
  to: string;
  secondary?: boolean;
}

const ButtonLink: FC<ButtonLinkProps> = ({ children, to: to, secondary }) => {
  return (
    <Link
      className={'button' + (secondary ? ' button--secondary' : '')}
      to={to}>
      {children}
    </Link>
  )
}

export default ButtonLink;