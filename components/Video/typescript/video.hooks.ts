import { RefObject, useContext, useEffect, useRef } from 'react';
import { NotificationContext } from '../../Notification';
import { observe } from './video.helpers';
import { IVideoProps } from './video.interfaces';

export const useVideo = (
  isAnimated: IVideoProps['isAnimated'],
  video: IVideoProps['video'],
): [RefObject<HTMLVideoElement>] => {
  const ref = useRef<HTMLVideoElement>(null);
  const notifications = useContext(NotificationContext);

  useEffect(() => observe(ref, isAnimated, notifications, video), []);

  return [ref];
};
