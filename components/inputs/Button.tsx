import { ButtonHTMLAttributes, FC, MouseEventHandler } from 'react';
import s from '/styles/components/button.module.scss';

export interface IButtonProps {
  className?: string;
  text: string;
  fullWidth?: boolean;
  type: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  primary?: boolean;
}

const Button: FC<IButtonProps> = ({
  text,
  fullWidth,
  className,
  type,
  disabled,
  primary,
}) => {
  const handleClick: MouseEventHandler = e => {
    e.preventDefault();
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      type={type}
      className={`${className || ''} ${s['button']} ${
        fullWidth ? s['button--full'] : ''
      } ${primary ? s['button--primary'] : ''} p-4 fw-700`}
    >
      {text}
    </button>
  );
};

export default Button;
