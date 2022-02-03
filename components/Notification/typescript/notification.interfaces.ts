import { ReactNode, RefObject } from 'react';
import { CustomHook, IStandardProps } from '../../../helpers/types';

export interface INotificationProps extends IStandardProps {
  content: ReactNode;
  reference: RefObject<HTMLDivElement>;
}

export interface INotificationContext {
  showNotification: (content: ReactNode) => void;
  hideNotification: () => void;
}

export type INotificationHook = CustomHook<
  Pick<INotificationProps, 'reference'>,
  {
    notificationContent: ReactNode;
    notificationContextValue: INotificationContext;
  }
>;
