import { FC, useEffect, useRef } from 'react';
import { bubbles } from '../../helpers/bubbleList';
import { debounce, rafDebounce } from '../../helpers/tools';
import Bubble from '../bubbles/Bubble';

import s from '/styles/components/bubbles.module.scss';

const Bubbles: FC = () => {
  const bubblesWrapperRef = useRef(null);

  const handleScroll = () => {
    if (!bubblesWrapperRef.current) {
      return;
    }

    const bubblesWrapper = bubblesWrapperRef.current as HTMLDivElement;
    bubblesWrapper.style.willChange = 'transform';
    bubblesWrapper.style.transform = `translate3d(0, -${
      window.scrollY / 4
    }px, 0)`;
    bubblesWrapper.style.willChange = 'unset';
    bubblesWrapper.style.height = `calc(100% + ${window.scrollY / 4}px)`;
  };

  const rafDebouncedHandleScroll = rafDebounce(handleScroll);
  const debouncedHandleScroll = debounce(rafDebouncedHandleScroll, 100);

  useEffect(() => {
    document.addEventListener('scroll', debouncedHandleScroll, {
      passive: true,
    });

    return () => document.removeEventListener('scroll', debouncedHandleScroll);
  }, []);

  return (
    <div ref={bubblesWrapperRef} className={`${s['bubbles-wrapper']}`}>
      {bubbles.map(bubble => (
        <Bubble
          key={bubble.key}
          className={bubble.className}
          bubble={bubble.bubble}
        />
      ))}
    </div>
  );
};

export default Bubbles;
