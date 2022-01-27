import { Props } from '../../../interfaces';

export interface INotificationProps extends Props {
  isVisible: boolean;
  content: any;
}

export interface INotificationContext {
  showNotification: (content: JSX.Element) => void;
  hideNotification: () => void;
}
