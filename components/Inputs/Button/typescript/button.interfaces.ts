import { Props } from '../../../../interfaces';

export interface IButtonProps extends Props {
  text: string;
  fullWidth?: boolean;
  type: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  primary?: boolean;
}
