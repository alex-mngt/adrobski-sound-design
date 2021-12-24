import { FC, MouseEventHandler } from 'react';
import s from './scss/button.module.scss';
import { handleClick } from './typescript/button.helpers';
import { IButtonProps } from './typescript/button.interfaces';

const Button: FC<IButtonProps> = ({
  text,
  fullWidth,
  className,
  type,
  disabled,
  primary,
}) => {
  const onClick: MouseEventHandler<HTMLButtonElement> = e => {
    handleClick(e);
  };

  return (
    <button
      onClick={onClick}
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
