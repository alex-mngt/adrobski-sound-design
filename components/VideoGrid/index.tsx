import { FC, useRef, useState } from 'react';
import { slugify } from '../../helpers/tools';
import Pagination from '../Pagination';
import {
  BEFORE_PAGE_CHANGE,
  VIDEOS_PER_PAGE,
} from '../Pagination/typescript/pagination.constants';
import Video from '../Video';

import s from './scss/videos-grid.module.scss';
import { useVideoGrid } from './typescript/video-grid.hooks';
import { IVideosGridProps } from './typescript/video-grid.interfaces';

const VideosGrid: FC<IVideosGridProps> = ({ videos, className }) => {
  const [page, setPage] = useState<number>(1);
  const [isShiftPressed, setIsShiftPressed] = useState<boolean>(false);
  const [isCtrlPressed, setIsCtrlPressed] = useState<boolean>(false);
  const reference = useRef<HTMLDivElement>(null);
  const focusedVideo = useRef<HTMLVideoElement>();

  const { videosSlice, paginationFn } = useVideoGrid({
    reference,
    page,
    setIsCtrlPressed,
    setIsShiftPressed,
  });

  const displayedVideos = videos.slice(videosSlice[0], videosSlice[1]);

  return (
    <>
      <div ref={reference} className={`${s['videos-grid']} ${className || ''}`}>
        {displayedVideos.map((video, index) => (
          <Video
            key={slugify(video.name)}
            video={video}
            focusedVideo={focusedVideo}
            isCtrlPressed={isCtrlPressed}
            isShiftPressed={isShiftPressed}
            setIsCtrlPressed={setIsCtrlPressed}
            setIsShiftPressed={setIsShiftPressed}
            index={index}
          />
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
