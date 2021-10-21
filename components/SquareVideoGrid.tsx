import { FC } from 'react';
import { ISquareVideo } from '../helpers/squareVideoList';

import s from '/styles/components/square-video-grid.module.scss';

interface ISquareVideoGrid {
  videos: ISquareVideo[];
}

const SquareVideoGrid: FC<ISquareVideoGrid> = ({ videos }) => {
  return (
    <div className={`${s['square-video-grid']}`}>
      {videos.map(video => (
        <video
          playsInline
          loop
          className={`${s['square-video-grid__video']}`}
          controls
          key={video.name}
          poster={video.fallbackSource.poster}
        >
          <source
            src={video.fallbackSource.url}
            type={video.fallbackSource.type}
          />
          Your browser cannot play HTML5 videos
        </video>
      ))}
    </div>
  );
};

export default SquareVideoGrid;
