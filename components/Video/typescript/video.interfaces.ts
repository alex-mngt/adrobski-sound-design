import { MouseEventHandler, MutableRefObject, RefObject } from 'react';
import { CustomHook, IVideo } from '../../../helpers/types';

export interface IVideoProps {
  video: IVideo;
  focusedVideo: MutableRefObject<HTMLVideoElement | undefined>;
}

export type IVideoHook = CustomHook<
  Pick<IVideoProps, 'video' | 'focusedVideo'> & {
    reference: RefObject<HTMLVideoElement>;
  },
  { handleClick: MouseEventHandler }
>;
