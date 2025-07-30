import './ButtonIcon.scss';
import { FC, ReactElement } from 'react';

type ButtonIconProps = {
  icon: ReactElement;
  onClick: () => void;
  ariaLabel: string;
  secondary?: boolean;
  className?: string;
}

const ButtonIcon: FC<ButtonIconProps> = ({ icon, onClick, ariaLabel, secondary, className }) => {
  return (
    <button
      className={`button-icon ${secondary ? 'button-icon--secondary' : ''} ${className ?? ''}`}
      type='button'
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {icon}
    </button>
  )
}

export default ButtonIcon;