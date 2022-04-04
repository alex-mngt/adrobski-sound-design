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
  setIsCtrlPressed: Dispatch<SetStateAction<boolean>>;
  setIsShiftPressed: Dispatch<SetStateAction<boolean>>;
  index: number;
}

export type IVideoHook = CustomHook<
  Pick<IVideoProps, 'video' | 'focusedVideo'> & {
    videoReference: RefObject<HTMLVideoElement>;
    setIsMacOs: Dispatch<SetStateAction<boolean | undefined>>;
    isCtrlPressed: IVideoProps['isCtrlPressed'];
    isShiftPressed: IVideoProps['isShiftPressed'];
    setIsCtrlPressed: IVideoProps['setIsCtrlPressed'];
    setIsShiftPressed: IVideoProps['setIsShiftPressed'];
  },
  { handleClick: MouseEventHandler }
>;
