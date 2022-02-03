import { RefObject } from 'react';
import { CustomHook, IStandardProps, IVideo } from '../../../helpers/types';

export interface IVideosGridProps extends IStandardProps {
  videos: IVideo[];
}

export type IVideoGridHook = CustomHook<
  { reference: RefObject<HTMLDivElement>; page: number },
  { videosSlice: any; paginationFn: any }
>;
