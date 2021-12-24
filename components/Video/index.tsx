import { FC, useEffect, useRef } from 'react';
import { slugify } from '../../helpers/tools';

import s from './scss/video.module.scss';
import { observe } from './typescript/video.helpers';
import { IVideoProps } from './typescript/video.interfaces';

const Video: FC<IVideoProps> = ({ video, isAnimated = false }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => observe(videoRef, isAnimated));

  return (
    <video
      ref={videoRef}
      playsInline
      loop
      className={`${s['video']} ${
        video.format === 'rect' ? s['video--rect'] : ''
      }`}
      controls
      preload='metadata'
    >
      {video.sources.map(source => (
        <source
          key={slugify(source.url)}
          src={`${source.url}#t=0.1`}
          type={source.type}
        />
      ))}
      <source
        src={`${video.fallbackSource.url}#t=0.1`}
        type={video.fallbackSource.type}
      />
      Your browser cannot play HTML5 videos
    </video>
  );
};

export default Video;
