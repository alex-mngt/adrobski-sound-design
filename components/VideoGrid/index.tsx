import { FC, useRef, useState } from 'react';
import { slugify } from '../../helpers/tools';
import Pagination from '../Pagination';
import {
  BEFORE_PAGE_CHANGE,
  VIDEOS_PER_PAGE,
} from '../Pagination/typescript/pagination.constants';
import Video from '../Video';
import { IVideo } from '../Video/typescript/video.interfaces';

import s from './scss/videos-grid.module.scss';
import { useVideoGrid } from './typescript/video-grid.hooks';
import { IVideosGridProps } from './typescript/video-grid.interfaces';

const VideosGrid: FC<IVideosGridProps> = ({ videos, className }) => {
  const [page, setPage, ref, videosSlice, paginationFn] = useVideoGrid();

  return (
    <>
      <div ref={ref} className={`${s['videos-grid']} ${className || ''}`}>
        {videos.slice(videosSlice[0], videosSlice[1]).map(video => (
          <Video isAnimated key={slugify(video.name)} video={video} />
        ))}
      </div>
      <div className={`f f-jc-center ${s['videos-grid__pagination']}`}>
        <Pagination
          selectedPage={page}
          setSelectedPage={setPage}
          length={videos.length}
          itemsPerPage={VIDEOS_PER_PAGE}
          fn={paginationFn}
          fnExecution={BEFORE_PAGE_CHANGE}
          fnDelay={1200}
        />
      </div>
    </>
  );
};

export default VideosGrid;
