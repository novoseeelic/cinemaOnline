import Loader from '../Loader/Loader';
import './Button.scss';
import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  secondary?: boolean;
  submit?: boolean;
  loading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, onClick, className, secondary, submit, loading, disabled, ...rest }) => {
  return (
    <button
      className={`button ${secondary ? ' button--secondary' : ''} ${loading ? 'button--loading' : ''} ${className ?? ''}`}
      type={submit ? 'submit' : 'button'}
      onClick={onClick}
      disabled={loading ? true : disabled}
      {...rest}
    >
      {children}
      {loading && <div className='button__loader'><Loader small black /></div>}
    </button>
  )
}

export default Button;