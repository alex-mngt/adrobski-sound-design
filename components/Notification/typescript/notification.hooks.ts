import { useState } from 'react';
import { INotificationContext } from './notification.interfaces';

export const useNotification = (): [boolean, any, INotificationContext] => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [content, setContent] = useState<JSX.Element>();

  const contextValue: INotificationContext = {
    showNotification: content => {
      setIsVisible(true);
      setContent(content);
    },
    hideNotification: () => setIsVisible(false),
  };

  return [isVisible, content, contextValue];
};
