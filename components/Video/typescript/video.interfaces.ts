import {
  Dispatch,
  MouseEventHandler,
  MutableRefObject,
  RefObject,
  SetStateAction,
} from 'react';
import { CustomHook, IVideo } from '../../../helpers/types';

export interface IVideoProps {
  video: IVideo;
  focusedVideo: MutableRefObject<HTMLVideoElement | undefined>;
}

export type IVideoHook = CustomHook<
  Pick<IVideoProps, 'video' | 'focusedVideo'> & {
    ref: RefObject<HTMLVideoElement>;
  },
  { handleClick: MouseEventHandler }
>;
