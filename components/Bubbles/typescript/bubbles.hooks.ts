import { useRef, RefObject, useEffect } from 'react';
import { rafDebounce } from '../../../helpers/tools';
import { handleScroll } from './bubbles.helpers';
import { IBubblesHook } from './bubbles.interfaces';

export const useBubbles: IBubblesHook = ({ reference }) => {
  useEffect(() => {
    const rafDebouncedHandleScroll = rafDebounce(() => handleScroll(reference));

    document.addEventListener('scroll', rafDebouncedHandleScroll, {
      passive: true,
    });

    return () =>
      document.removeEventListener('scroll', rafDebouncedHandleScroll);
  }, [reference]);
};
