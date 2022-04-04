import { MouseEventHandler } from 'react';
import { CustomHook } from '../../../helpers/types';
import {
  INotificationVideoHook,
  INotificationVideoProps,
} from './notificationVideo.interfaces';

export const useNotificationVideo: INotificationVideoHook = ({ link }) => {
  const handleButtonClick: MouseEventHandler = () => {
    window.open(link, '_blank');
  };

  return { handleButtonClick };
};
