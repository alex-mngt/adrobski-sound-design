import { MouseEventHandler, RefObject } from 'react';
import { IVideoProps } from './video.interfaces';

import s from '../scss/video.module.scss';
import { INotificationContext } from '../../Notification/typescript/notification.interfaces';
import { rafDebounce } from '../../../helpers/tools';

export const observe = (
  ref: RefObject<HTMLVideoElement>,
  focusedVideo: IVideoProps['focusedVideo'],
  notifications: INotificationContext,
) => {
  if (!ref.current) {
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

  const handleDisappearingIntersections: IntersectionObserverCallback =
    intersections => {
      intersections.forEach(intersection => {
        const videoElement = intersection.target as HTMLVideoElement;

        if (
          !intersection.isIntersecting &&
          focusedVideo.current === videoElement
        ) {
          videoElement.pause();
          focusedVideo.current.classList.remove(s['video--focused']);
          focusedVideo.current = undefined;
          notifications.hideNotification();
        }
      });
    };

  const appearingObserver = new IntersectionObserver(
    handleAppearingIntersections,
    {
      threshold: 0.3,
    },
  );

  const disappearingObserver = new IntersectionObserver(
    handleDisappearingIntersections,
    { threshold: 0 },
  );

  appearingObserver.observe(ref.current);
  disappearingObserver.observe(ref.current);
};

export const handleMouseMove = (
  ref: RefObject<HTMLDivElement>,
): MouseEventHandler<HTMLVideoElement> => {
  const handler: MouseEventHandler<HTMLVideoElement> = e => {
    if (!ref.current) {
      return;
    }

    ref.current.style.transform = `translate(${e.pageX + 13.5}px, ${
      e.pageY - window.scrollY + 13.5
    }px)`;
  };

  const rafDebouncedHandleMouseMove = rafDebounce(handler);

  return rafDebouncedHandleMouseMove;
};
