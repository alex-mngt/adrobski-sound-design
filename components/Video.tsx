import { FC, useEffect, useRef } from 'react';
import { slugify } from '../helpers/tools';
import { IVideo } from '../helpers/videos';

import s from '/styles/components/video.module.scss';

interface IVideoProps {
  video: IVideo;
  isAnimated?: boolean;
}

const Video: FC<IVideoProps> = ({ video, isAnimated = false }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current || !isAnimated) {
      return;
    }

    const observer = new IntersectionObserver(handleIntersections, {
      threshold: 0.5,
    });
    observer.observe(videoRef.current);
  });

  const handleIntersections: IntersectionObserverCallback = (
    intersections,
    observer,
  ) => {
    intersections.forEach(intersection => {
      if (!intersection.isIntersecting) {
        return;
      }

      intersection.target.classList.add(s['video--appearing']);
      observer.disconnect();
    });
  };

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
