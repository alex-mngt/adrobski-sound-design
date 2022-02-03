import { MouseEventHandler } from 'react';
import { IStandardProps } from '../../../helpers/types';

export interface IBurgerProps extends IStandardProps {
  onClick?: MouseEventHandler;
  isMenuOpen: boolean;
}
