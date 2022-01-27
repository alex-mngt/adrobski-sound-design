import { createContext, FC } from 'react';
import {
  INotificationContext,
  INotificationProps,
} from './typescript/notification.interfaces';

import s from './scss/notification.module.scss';

const Notification: FC<INotificationProps> = ({ isVisible, content }) => {
  return isVisible ? (
    <div className={`${s['notification']}`}>{content}</div>
  ) : (
    <></>
  );
};

export const NotificationContext = createContext<INotificationContext>({
  showNotification: () => {},
  hideNotification: () => {},
});

export default Notification;
