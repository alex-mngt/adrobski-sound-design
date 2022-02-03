import { MouseEventHandler, useState } from 'react';
import { IHeaderHook } from './header.interfaces';

export const useHeader: IHeaderHook = ({ setIsMenuOpen }) => {
  const handleBurgerClick: MouseEventHandler = () => {
    setIsMenuOpen(true);
  };

  const handleCloseIconClick: MouseEventHandler = () => {
    setIsMenuOpen(false);
  };

  return { handleBurgerClick, handleCloseIconClick };
};
