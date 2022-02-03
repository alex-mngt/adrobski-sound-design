import { MouseEventHandler } from 'react';
import { IArtist } from '../../../helpers/types';

export interface INotificationVideoProps {
  name: string;
  artists: IArtist[];
  link?: string;
}

export interface INotificationVideoHook {
  handleButtonClick: MouseEventHandler;
}
