import { Dispatch, MouseEventHandler, SetStateAction } from 'react';
import { CustomHook } from '../../../helpers/types';

export type IHeaderHook = CustomHook<
  { setIsMenuOpen: Dispatch<SetStateAction<boolean>> },
  {
    handleBurgerClick: MouseEventHandler;
    handleCloseIconClick: MouseEventHandler;
  }
>;
