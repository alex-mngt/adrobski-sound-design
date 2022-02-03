import { MouseEventHandler } from 'react';
import { CustomHook, IArtist } from '../../../helpers/types';

export interface INotificationVideoProps {
  name: string;
  artists: IArtist[];
  link?: string;
}

export type INotificationVideoHook = CustomHook<
  Pick<INotificationVideoProps, 'link'>,
  {
    handleButtonClick: MouseEventHandler;
  }
>;
