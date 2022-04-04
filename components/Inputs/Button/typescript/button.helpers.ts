import { MouseEventHandler } from 'react';
import { IButtonProps } from './button.interfaces';

export const handleClick = (onClick: IButtonProps['onClick']) => {
  const handler: MouseEventHandler = e => {
    e.preventDefault();

    onClick(e);
  };

  return handler;
};
