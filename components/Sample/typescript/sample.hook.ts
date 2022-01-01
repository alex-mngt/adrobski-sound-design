import { MouseEventHandler, useState } from 'react';
import { DEFAULT_COUNTER } from './sample.constants';
import { changeColor } from './sample.helpers';

export const useSample = (): [
  number,
  MouseEventHandler<HTMLParagraphElement>,
] => {
  const [counter, setCounter] = useState<number>(DEFAULT_COUNTER);

  const handleClick: MouseEventHandler<HTMLParagraphElement> = e => {
    changeColor(e);
    setCounter(counter + 1);
  };

  return [counter, handleClick];
};
