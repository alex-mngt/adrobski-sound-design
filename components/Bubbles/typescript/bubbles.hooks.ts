import { useRef, RefObject, useEffect } from 'react';
import { rafDebounce } from '../../../helpers/tools';
import { IBubblesHook } from './bubbles.interfaces';

export const useBubbles: IBubblesHook = ({ reference }) => {
  const handleScroll = (reference: RefObject<HTMLDivElement>) => {
    if (!reference.current) {
      return;
    }

    reference.current.style.transform = `translate(0, -${
      window.scrollY / 4
    }px)`;
    reference.current.style.willChange = 'height';
    reference.current.style.height = `calc(100% + ${window.scrollY / 4}px)`;
    reference.current.style.willChange = 'unset';
  };

  useEffect(() => {
    const rafDebouncedHandleScroll = rafDebounce(() => handleScroll(reference));

    document.addEventListener('scroll', rafDebouncedHandleScroll, {
      passive: true,
    });

    return () =>
      document.removeEventListener('scroll', rafDebouncedHandleScroll);
  }, [reference]);
};
