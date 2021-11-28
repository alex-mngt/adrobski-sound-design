import { FC, useRef, useState } from 'react';
import { BEFORE_PAGE_CHANGE } from '../helpers/pagination';
import { slugify } from '../helpers/tools';
import { IVideo } from '../helpers/videos';
import Pagination from './Pagination';
import Video from './Video';

import s from '/styles/components/square-video-grid.module.scss';

const VIDEOS_PER_PAGE = 8;

interface IVideosGridProps {
  className?: string;
  videos: IVideo[];
}

const VideosGrid: FC<IVideosGridProps> = ({ videos, className }) => {
  const [page, setPage] = useState<number>(1);
  const ref = useRef<HTMLDivElement>(null);

  const videosSlice = [(page - 1) * VIDEOS_PER_PAGE, page * VIDEOS_PER_PAGE];

  const paginationFn = () => {
    ref.current?.classList.toggle(s['square-video-grid--hidden']);
    setTimeout(() => {
      window.scroll({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        ref.current?.classList.toggle(s['square-video-grid--hidden']);
      }, 600);
    }, 400);
  };

  return (
    <>
      <div ref={ref} className={`${s['square-video-grid']} ${className || ''}`}>
        {videos.slice(videosSlice[0], videosSlice[1]).map(video => (
          <Video isAnimated key={slugify(video.name)} video={video} />
        ))}
      </div>
      <div className={`f f-jc-center ${s['square-video-grid__pagination']}`}>
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
