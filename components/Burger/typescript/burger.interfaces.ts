import { MouseEventHandler } from 'react';
import { Props } from '../../../interfaces';

export interface IBurgerProps extends Props {
  onClick?: MouseEventHandler<HTMLDivElement>;
  isMenuOpen: boolean;
}
