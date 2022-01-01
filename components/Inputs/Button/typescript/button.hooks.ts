import { MouseEventHandler } from 'react';

export const useButton = (): [MouseEventHandler<HTMLButtonElement>] => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = e => {
    console.log('click');

    e.preventDefault();
  };

  return [handleClick];
};
