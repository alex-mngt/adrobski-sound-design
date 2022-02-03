import { createContext } from 'react';
import { INotificationContext } from './notification.interfaces';

export const NotificationContext = createContext<INotificationContext>({
  showNotification: () => {},
  hideNotification: () => {},
});
