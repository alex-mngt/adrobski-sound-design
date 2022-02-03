import { useRef, RefObject, useEffect } from 'react';
import { rafDebounce } from '../../../helpers/tools';

export const useBubbles = (): [RefObject<HTMLDivElement>] => {
  const ref = useRef<HTMLDivElement>(null);

  const handleScroll = (bubblesWrapperRef: RefObject<HTMLDivElement>) => {
    if (!bubblesWrapperRef.current) {
      return;
    }

    bubblesWrapperRef.current.style.transform = `translate(0, -${
      window.scrollY / 4
    }px)`;
    bubblesWrapperRef.current.style.willChange = 'height';
    bubblesWrapperRef.current.style.height = `calc(100% + ${
      window.scrollY / 4
    }px)`;
    bubblesWrapperRef.current.style.willChange = 'unset';
  };

  const rafDebouncedHandleScroll = rafDebounce(() => handleScroll(ref));

  useEffect(() => {
    document.addEventListener('scroll', rafDebouncedHandleScroll, {
      passive: true,
    });

    return () =>
      document.removeEventListener('scroll', rafDebouncedHandleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref];
};
