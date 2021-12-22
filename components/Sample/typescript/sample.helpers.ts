import { Dispatch, MouseEvent, MouseEventHandler, SetStateAction } from 'react';

export const handleClick = (
  e: MouseEvent<HTMLParagraphElement>,
  counter: number,
  setCounter: Dispatch<SetStateAction<number>>,
) => {
  // @ts-ignore
  e.target.style.color = 'blue';
  setCounter(counter + 1);
};
