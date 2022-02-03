import { MouseEventHandler, useState } from 'react';
import { DEFAULT_COUNTER } from './sample.constants';
import { changeColor } from './sample.helpers';
import { ISampleHook } from './sample.interfaces';

export const useSample: ISampleHook = ({ counter, setCounter }) => {
  const handleClick: MouseEventHandler<HTMLParagraphElement> = e => {
    changeColor(e);
    setCounter(counter + 1);
  };

  return { handleClick };
};
