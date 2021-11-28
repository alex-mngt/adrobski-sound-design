import { FC, useEffect, useRef } from 'react';
import { bubbles } from '../../helpers/bubbleList';
import { rafDebounce } from '../../helpers/tools';
import Bubble from '../bubbles/Bubble';

import s from '/styles/components/bubbles.module.scss';

const Bubbles: FC = () => {
  const bubblesWrapperRef = useRef(null);

  const handleScroll = () => {
    if (!bubblesWrapperRef.current) {
      return;
    }

    const bubblesWrapper = bubblesWrapperRef.current as HTMLDivElement;
    bubblesWrapper.style.transform = `translate(0, -${window.scrollY / 4}px)`;
    bubblesWrapper.style.willChange = 'height';
    bubblesWrapper.style.height = `calc(100% + ${window.scrollY / 4}px)`;
    bubblesWrapper.style.willChange = 'unset';
  };

  const rafDebouncedHandleScroll = rafDebounce(handleScroll);

  useEffect(() => {
    document.addEventListener('scroll', rafDebouncedHandleScroll, {
      passive: true,
    });

    return () =>
      document.removeEventListener('scroll', rafDebouncedHandleScroll);
  }, []);

  return (
    <div ref={bubblesWrapperRef} className={`${s['bubbles-wrapper']}`}>
      {bubbles.map((bubble, index) => (
        <Bubble
          key={bubble.key}
          className={`${bubble.className} ${
            index < 3 ? s['bubble--animated'] : ''
          }`}
          bubble={bubble.bubble}
        />
      ))}
    </div>
  );
};

export default Bubbles;
