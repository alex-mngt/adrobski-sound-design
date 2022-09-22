import { createElement, FC } from 'react';
import { Loader } from 'react-feather';
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
  icon,
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
      } ${icon === Loader ? s['button--loader'] : ''} p-4 fw-700`}
    >
      {text}
      {icon && createElement(icon)}
    </button>
  );
};

export default Button;
