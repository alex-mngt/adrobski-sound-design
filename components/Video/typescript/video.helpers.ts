import { RefObject } from 'react';
import { IVideoProps } from './video.interfaces';

import s from '../scss/video.module.scss';
import { INotificationContext } from '../../Notification/typescript/notification.interfaces';

export const observe = (videoRef: RefObject<HTMLVideoElement>) => {
  if (!videoRef.current) {
    return;
  }

  const handleAppearingIntersections: IntersectionObserverCallback = (
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

  const appearingObserver = new IntersectionObserver(
    handleAppearingIntersections,
    {
      threshold: 0.3,
    },
  );

  appearingObserver.observe(videoRef.current);
};
