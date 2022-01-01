import { MouseEvent } from 'react';

export const changeColor = (e: MouseEvent<HTMLParagraphElement>) => {
  // @ts-ignore
  e.target.style.color = 'blue';
};
