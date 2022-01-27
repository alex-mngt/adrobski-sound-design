import { RefObject, useContext } from 'react';
import { IVideoProps } from './video.interfaces';

import s from '../scss/video.module.scss';
import { videoNotification } from './video.test';
import { INotificationContext } from '../../Notification/typescript/notification.interfaces';

export const observe = (
  videoRef: RefObject<HTMLVideoElement>,
  isAnimated: IVideoProps['isAnimated'],
  notifications: INotificationContext,
  video: IVideoProps['video'],
) => {
  if (!videoRef.current || !isAnimated) {
    return;
  }

  const handleIntersections: IntersectionObserverCallback = intersections => {
    intersections.forEach(intersection => {
      if (!intersection.isIntersecting) {
        return;
      }

      if (!intersection.target.classList.contains(s['video--appearing'])) {
        intersection.target.classList.add(s['video--appearing']);
      }

      notifications.showNotification(videoNotification(video.name));
      intersection.target.classList.add(s['video--focused']);
    });
  };

  const observer = new IntersectionObserver(handleIntersections, {
    threshold: 0.5,
  });

  observer.observe(videoRef.current);
};
