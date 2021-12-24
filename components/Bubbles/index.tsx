import { FC, RefObject, useEffect, useRef } from 'react';
import { bubbles } from '../../helpers/bubbleList';
import { rafDebounce } from '../../helpers/tools';
import Bubble from '../Bubble';

import s from './scss/bubbles.module.scss';

const Bubbles: FC = () => {
  const bubblesWrapperRef = useRef<HTMLDivElement>(null);

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

  const rafDebouncedHandleScroll = rafDebounce(() =>
    handleScroll(bubblesWrapperRef),
  );

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
