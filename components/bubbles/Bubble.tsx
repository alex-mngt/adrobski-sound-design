import { FC, useCallback, useEffect, useRef } from 'react';
import Image from 'next/image';
import { rafDebounce, getRandomArbitrary, debounce } from '../../helpers/tools';

interface IBubbleProps {
  className: string;
  bubble: StaticImageData;
}

const Bubble: FC<IBubbleProps> = ({ className, bubble }) => {
  let ref = useRef<null | HTMLDivElement>(null);
  const animationStrength = getRandomArbitrary(10, 20);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(handleIntersection, {
  //     threshold: 0,
  //   });

  //   if (!ref.current) {
  //     return;
  //   }

  //   observer.observe(ref.current);
  // }, []);

  const handleIntersection: IntersectionObserverCallback = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        listenMouseMove();
      } else {
        cancelMouseMoveListening();
      }
    });
  };

  const listenMouseMove = () => {
    window.addEventListener('mousemove', debouncedHandleMouseMove);
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

    const translateX = `${-(centerCoord.x - e.clientX) / animationStrength}px`;
    const translateY = `${-(centerCoord.y - e.clientY) / animationStrength}px`;

    ref.current.style.willChange = 'transform';
    ref.current.style.transform = `translate(${translateX}, ${translateY})`;
    ref.current.style.willChange = 'unset';
  };

  const rafDebouncedHandleMouseMove = rafDebounce(handleMouseMove);
  const debouncedHandleMouseMove = debounce(rafDebouncedHandleMouseMove, 50);

  return (
    <div ref={ref} className={className}>
      <Image alt='' src={bubble} />
    </div>
  );
};

export default Bubble;
