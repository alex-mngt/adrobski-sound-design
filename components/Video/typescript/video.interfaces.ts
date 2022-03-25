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
  isCtrlPressed: boolean;
  isShiftPressed: boolean;
}

export type IVideoHook = CustomHook<
  Pick<IVideoProps, 'video' | 'focusedVideo'> & {
    reference: RefObject<HTMLVideoElement>;
    setIsMacOs: Dispatch<SetStateAction<boolean | undefined>>;
  },
  { handleClick: MouseEventHandler }
>;
