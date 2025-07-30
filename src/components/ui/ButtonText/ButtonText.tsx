import { FC } from 'react';
import './ButtonText.scss';

type ButtonTextProps = {
  children: string;
  onClick: () => void;
  dark?: boolean;
  className?: string;
}

const ButtonText: FC<ButtonTextProps> = ({ children, onClick, dark, className }) => {
  return (
    <button
      className={`button-text ${dark ? 'button-text--dark' : ''} ${className ?? ''}`}
      type='button'
      onClick={onClick}>
      {children}
    </button>
  )
}

export default ButtonText;