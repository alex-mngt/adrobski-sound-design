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
}

export type IVideoHook = CustomHook<
  Pick<IVideoProps, 'video' | 'focusedVideo'> & {
    reference: RefObject<HTMLVideoElement>;
    setIsMacOs: Dispatch<SetStateAction<boolean | undefined>>;
    isCtrlPressed: IVideoProps['isCtrlPressed'];
    isShiftPressed: IVideoProps['isShiftPressed'];
    setIsCtrlPressed: IVideoProps['setIsCtrlPressed'];
    setIsShiftPressed: IVideoProps['setIsShiftPressed'];
  },
  { handleClick: MouseEventHandler }
>;
