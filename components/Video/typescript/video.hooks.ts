import { createElement, MouseEventHandler, useContext, useEffect } from 'react';
import { observe } from './video.helpers';
import { IVideoHook } from './video.interfaces';

import s from '../scss/video.module.scss';
import NotificationVideo from '../../NotificationVideo';
import { sleep } from '../../../helpers/tools';
import { NotificationContext } from '../../Notification/typescript/notification.context';

export const useVideo: IVideoHook = ({ video, focusedVideo, reference }) => {
  const notifications = useContext(NotificationContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => observe(reference, focusedVideo, notifications), []);

  const handleClick: MouseEventHandler = async e => {
    const videoElement = e.target as HTMLVideoElement;

    console.log('click 1');

    if (window.innerWidth > 768) {
      return;
    }

    if (focusedVideo.current === videoElement) {
      videoElement.classList.add(s['video--focused']);
      notifications.showNotification(
        createElement(NotificationVideo, {
          artists: video.artists,
          link: video.link,
          name: video.name,
        }),
      );

      setTimeout(() => {
        if (!focusedVideo.current) {
          return;
        }

        focusedVideo.current.classList.remove(s['video--focused']);
        notifications.hideNotification();
      }, 5000);

      return;
    }

    if (focusedVideo.current) {
      focusedVideo.current.pause();
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

    setTimeout(() => {
      if (!focusedVideo.current) {
        return;
      }

      focusedVideo.current.classList.remove(s['video--focused']);
      notifications.hideNotification();
    }, 5000);
  };

  return { handleClick };
};
