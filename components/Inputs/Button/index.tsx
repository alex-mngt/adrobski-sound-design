import { FC } from 'react';
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
  small,
  onClick,
}) => {
  return (
    <button
      onClick={handleClick(onClick)}
      disabled={disabled}
      type={type}
      className={`${className || ''} ${s['button']} ${
        fullWidth ? s['button--full'] : ''
      } ${small ? s['button--small'] : ''} ${
        primary ? s['button--primary'] : ''
      } p-4 fw-700`}
    >
      {text}
    </button>
  );
};

export default Button;
