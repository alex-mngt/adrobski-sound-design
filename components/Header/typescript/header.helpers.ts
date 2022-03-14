import { Dispatch, MouseEventHandler, SetStateAction } from 'react';

export const handleBurgerClick = (
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>,
) => {
  const handler: MouseEventHandler = () => {
    setIsMenuOpen(true);
  };

  return handler;
};

export const handleCloseIconClick = (
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>,
) => {
  const handler: MouseEventHandler = () => {
    setIsMenuOpen(false);
  };

  return handler;
};
