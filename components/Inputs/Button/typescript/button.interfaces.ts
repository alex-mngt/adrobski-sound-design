import { MouseEventHandler } from 'react';
import { Props } from '../../../../interfaces';

export interface IButtonProps extends Props {
  text: string;
  fullWidth?: boolean;
  type: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  primary?: boolean;
  small?: boolean;
  onClick: MouseEventHandler;
}

export interface IButtonHook {
  handleClick: MouseEventHandler<HTMLButtonElement>;
}
