import { FC, useCallback, useEffect, useRef } from 'react';
import Image from 'next/image';
import { debounce, getRandomArbitrary } from '../../helpers/tools';

interface IBubbleProps {
  className: string;
  bubble: StaticImageData;
}

const Bubble: FC<IBubbleProps> = ({ className, bubble }) => {
  let ref = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0,
    });

    if (!ref.current) {
      return;
    }

    observer.observe(ref.current);
  });

  const handleIntersection: IntersectionObserverCallback = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        listenMouseMove();
      } else {
        cancelMouseMoveListening();
      }
    });
  };

  let prevTimestamp: number;

  const listenMouseMove = () => {
    window.addEventListener('mousemove', e => {
      if (Date.now() - prevTimestamp < 50) {
        return;
      }

      debouncedHandleMouseMove(e);
      prevTimestamp = Date.now();
    });
  };

  const cancelMouseMoveListening = () => {
    window.removeEventListener('mousemove', debouncedHandleMouseMove);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) {
      return;
    }

    const boundingClientRect = ref.current.getBoundingClientRect();

    const centerCoord = {
      x: boundingClientRect.left + boundingClientRect.width / 2,
      y: boundingClientRect.top + boundingClientRect.height / 2,
    };

    const translateX = `${-(centerCoord.x - e.clientX) / 10}px`;
    const translateY = `${-(centerCoord.y - e.clientY) / 10}px`;

    ref.current.style.willChange = 'transform';
    ref.current.style.transform = `translate(${translateX}, ${translateY})`;
    ref.current.style.willChange = 'unset';
  };

  const debouncedHandleMouseMove = debounce(handleMouseMove);

  return (
    <div ref={ref} className={className}>
      <Image alt='' src={bubble} />
    </div>
  );
};

export default Bubble;
