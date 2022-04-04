import { MouseEventHandler } from 'react';
import { IStandardProps } from '../../../../helpers/types';

export interface IButtonProps extends IStandardProps {
  text: string;
  fullWidth?: boolean;
  type: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  primary?: boolean;
  small?: boolean;
  onClick: MouseEventHandler;
}
