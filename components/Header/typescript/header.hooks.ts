import { MouseEventHandler, useState } from 'react';

export const useHeader = (): [
  boolean,
  MouseEventHandler<HTMLDivElement>,
  MouseEventHandler<HTMLDivElement>,
] => {
  const [isMenuOpen, setisMenuOpen] = useState<boolean>(false);

  const handleBurgerClick: MouseEventHandler<HTMLDivElement> = () => {
    setisMenuOpen(true);
  };

  const handleCloseIconClick: MouseEventHandler<HTMLDivElement> = () => {
    setisMenuOpen(false);
  };

  return [isMenuOpen, handleBurgerClick, handleCloseIconClick];
};
