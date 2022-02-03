import { MouseEventHandler } from 'react';
import { CustomHook } from '../../../helpers/types';
import {
  INotificationVideoHook,
  INotificationVideoProps,
} from './notificationVideo.interfaces';

export const useNotificationVideo: CustomHook<
  Pick<INotificationVideoProps, 'link'>,
  INotificationVideoHook
> = ({ link }) => {
  const handleButtonClick: MouseEventHandler = () => {
    window.open(link, '_blank');
  };

  return { handleButtonClick };
};
