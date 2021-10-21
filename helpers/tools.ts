import { MutableRefObject } from 'react';

export const getRandomArbitrary = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

export const debounce = (fn: Function) => {
  var timeout: number;

  return (...args: any[]) => {
    if (timeout) {
      window.cancelAnimationFrame(timeout);
    }

    timeout = window.requestAnimationFrame(() => {
      fn.apply(this, args);
    });
  };
};
