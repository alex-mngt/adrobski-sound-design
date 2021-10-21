import { FC, useEffect, useRef } from 'react';
import { bubbles } from '../../helpers/bubbleList';
import Bubble from '../bubbles/Bubble';

import s from '/styles/components/bubbles.module.scss';

const Bubbles: FC = () => {
  const bubblesWrapperRef = useRef(null);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll, {
      passive: true,
    });
  }, []);

  const handleScroll = () => {
    if (!bubblesWrapperRef.current) {
      return;
    }

    const bubblesWrapper = bubblesWrapperRef.current as HTMLDivElement;
    bubblesWrapper.style.transform = `translateY(-${window.scrollY / 4}px)`;
    bubblesWrapper.style.height = `calc(100% + ${window.scrollY / 4}px)`;
  };

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
