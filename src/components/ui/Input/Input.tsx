import './Input.scss';
import { FC, ReactElement, InputHTMLAttributes } from 'react';

type InputProps = {
  icon: ReactElement;
  dark?: boolean;
  error?: string;
  onInput?: (value: string) => void;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = ({ icon, dark, error, onInput, ...rest }) => {
  return (
    <div className={`input ${dark ? 'input--dark' : ''} ${error ? 'input--error' : ''}`}>
      <input
        className='input__field'
        onInput={(e) => { if (onInput) onInput(e.currentTarget.value) }}
        {...rest}
      />
      <span className='input__icon'>{icon}</span>
      {error && <span className='input__error'>{error}</span>}
    </div>
  );
};

export default Input;