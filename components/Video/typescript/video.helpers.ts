import { RefObject } from 'react';
import { IVideoProps } from './video.interfaces';

import s from '../scss/video.module.scss';

export const observe = (
  videoRef: RefObject<HTMLVideoElement>,
  isAnimated: IVideoProps['isAnimated'],
) => {
  if (!videoRef.current || !isAnimated) {
    return;
  }

  const observer = new IntersectionObserver(handleIntersections, {
    threshold: 0.5,
  });
  observer.observe(videoRef.current);
};

const handleIntersections: IntersectionObserverCallback = (
  intersections,
  observer,
) => {
  intersections.forEach(intersection => {
    if (!intersection.isIntersecting) {
      return;
    }

    intersection.target.classList.add(s['video--appearing']);
    observer.disconnect();
  });
};
