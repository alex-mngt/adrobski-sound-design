import { Dispatch, RefObject, SetStateAction } from 'react';
import { CustomHook, IStandardProps, IVideo } from '../../../helpers/types';

export interface IVideosGridProps extends IStandardProps {
  videos: IVideo[];
}

export type IVideoGridHook = CustomHook<
  {
    reference: RefObject<HTMLDivElement>;
    page: number;
    setIsCtrlPressed: Dispatch<SetStateAction<boolean>>;
    setIsShiftPressed: Dispatch<SetStateAction<boolean>>;
  },
  { videosSlice: any; paginationFn: any }
>;
