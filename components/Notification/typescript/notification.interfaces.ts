import { RefObject } from 'react';
import { CustomHook } from '../../../helpers/types';
import { Props } from '../../../interfaces';

export interface INotificationProps extends Props {
  content: any;
  reference: RefObject<HTMLDivElement>;
}

export interface INotificationContext {
  showNotification: (content: JSX.Element) => void;
  hideNotification: () => void;
}

export type INotificationHook = CustomHook<
  Pick<INotificationProps, 'reference'>,
  {
    notificationContent: JSX.Element | undefined;
    notificationContextValue: INotificationContext;
  }
>;
