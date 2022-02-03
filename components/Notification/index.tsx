import { FC } from 'react';
import { INotificationProps } from './typescript/notification.interfaces';

import s from './scss/notification.module.scss';

const Notification: FC<INotificationProps> = ({ content, reference }) => {
  return (
    <div ref={reference} className={`${s['notification']}`}>
      {content}
    </div>
  );
};

export default Notification;
