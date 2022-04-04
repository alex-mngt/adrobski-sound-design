import { ReactNode, useState } from 'react';
import {
  INotificationContext,
  INotificationHook,
} from './notification.interfaces';

import s from '../scss/notification.module.scss';

export const useNotification: INotificationHook = ({ reference }) => {
  const [content, setContent] = useState<ReactNode>();

  const context: INotificationContext = {
    showNotification: content => {
      if (!reference.current) {
        return;
      }

      setContent(content);
      reference.current.classList.add(s['notification--appearing']);
    },
    hideNotification: () => {
      if (!reference.current) {
        return;
      }
      reference.current.classList.remove(s['notification--appearing']);
    },
  };

  return {
    notificationContent: content,
    notificationContextValue: context,
  };
};
