import { MouseEventHandler } from 'react';
import { CustomHook } from '../../../../helpers/types';
import { IButtonHook, IButtonProps } from './button.interfaces';

export const useButton: CustomHook<
  Pick<IButtonProps, 'onClick'>,
  IButtonHook
> = ({ onClick }) => {
  const handleClick: MouseEventHandler = e => {
    e.preventDefault();

    onClick(e);
  };

  return { handleClick };
};
