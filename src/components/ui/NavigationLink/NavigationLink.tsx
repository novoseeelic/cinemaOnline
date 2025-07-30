import './NavigationLink.scss';
import { NavLink } from 'react-router';
import { FC, ReactNode } from 'react';

type NavigationLinkProps = {
  to: string;
  className?: string;
  children?: ReactNode;
}

const NavigationLink: FC<NavigationLinkProps> = ({ to, className, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (
        `navigation-link ${isActive ? 'navigation-link--active' : ''} ${className ?? ''}`
      )}
    >
      {children}
    </NavLink>
  )
}

export default NavigationLink;