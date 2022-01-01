import { FC } from 'react';
import s from './scss/button.module.scss';
import { useButton } from './typescript/button.hooks';
import { IButtonProps } from './typescript/button.interfaces';

const Button: FC<IButtonProps> = ({
  text,
  fullWidth,
  className,
  type,
  disabled,
  primary,
}) => {
  const [handleClick] = useButton();

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
