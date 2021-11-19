import { FC, useState } from 'react';
import { IVideo } from '../helpers/videos';
import Video from './Video';

import s from '/styles/components/square-video-grid.module.scss';

const VIDEOS_PER_PAGE = 4;

interface IRectVideoGridProps {
  className?: string;
  videos: IVideo[];
}

const RectVideoGrid: FC<IRectVideoGridProps> = ({ videos, className }) => {
  const [page, setPage] = useState<number>(1);

  const handleShowMore = () => {
    setPage(page + 1);
  };

  return (
    <div className={`${s['rect-video-grid']} ${className || ''}`}>
      {videos.map(video => (
        <Video isAnimated key={video.name} video={video} />
      ))}
      {page * VIDEOS_PER_PAGE < videos.length && (
        <div className={`f f-jc-center ${s['rect-video-grid__show-more']}`}>
          <button className='fw-700 h5' onClick={handleShowMore}>
            Show more
          </button>
        </div>
      )}
    </div>
  );
};

export default RectVideoGrid;
