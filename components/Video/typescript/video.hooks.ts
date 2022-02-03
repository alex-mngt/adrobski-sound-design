import { createElement, MouseEventHandler, useContext, useEffect } from 'react';
import { NotificationContext } from '../../Notification';
import { observe } from './video.helpers';
import { IVideoHook } from './video.interfaces';

import s from '../scss/video.module.scss';
import NotificationVideo from '../../NotificationVideo';
import { sleep } from '../../../helpers/tools';

export const useVideo: IVideoHook = ({ video, focusedVideo, ref }) => {
  const notifications = useContext(NotificationContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => observe(ref), []);

  const handleClick: MouseEventHandler = async e => {
    const videoElement = e.target as Element;

    if (window.innerWidth > 768 || focusedVideo.current === videoElement) {
      return;
    }

    if (focusedVideo.current) {
      focusedVideo.current.classList.remove(s['video--focused']);
      notifications.hideNotification();
      await sleep(400);
    }

    videoElement.classList.add(s['video--focused']);
    focusedVideo.current = videoElement;

    notifications.showNotification(
      createElement(NotificationVideo, {
        artists: video.artists,
        link: video.link,
        name: video.name,
      }),
    );
  };

  return { handleClick };
};
