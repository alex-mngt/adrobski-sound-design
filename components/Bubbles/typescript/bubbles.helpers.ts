import { RefObject } from 'react';
import { IBubblesHookArgs } from './bubbles.interfaces';

export const handleScroll = (reference: IBubblesHookArgs['reference']) => {
  if (!reference.current) {
    return;
  }

  reference.current.style.transform = `translate(0, -${window.scrollY / 4}px)`;
  reference.current.style.willChange = 'height';
  reference.current.style.height = `calc(100% + ${window.scrollY / 4}px)`;
  reference.current.style.willChange = 'unset';
};
