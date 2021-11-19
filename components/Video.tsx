import { FC, useEffect, useRef } from 'react';
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
      className={`${s['video']}`}
      controls
      id={video.name.replace(/ /g, '-')}
      poster={video.fallbackSource.poster}
    >
      <source src={video.fallbackSource.url} type={video.fallbackSource.type} />
      Your browser cannot play HTML5 videos
    </video>
  );
};

export default Video;
