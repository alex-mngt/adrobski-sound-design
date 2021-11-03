import { FC, useEffect, useRef } from 'react';
import { ISquareVideo } from '../helpers/squareVideoList';

import s from '/styles/components/video.module.scss';

interface IVideoProps {
  video: ISquareVideo;
  isAnimated?: boolean;
}

const Video: FC<IVideoProps> = ({ video, isAnimated = false }) => {
  const videoRef = useRef(null);

  // useEffect(() => {
  //   if (!videoRef.current || !isAnimated) {
  //     return;
  //   }

  //   const observer = new IntersectionObserver(handleIntersections, {
  //     threshold: 0.5,
  //   });
  //   observer.observe(videoRef.current);
  // });

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
      id={video.name.replaceAll(' ', '-')}
      poster={video.fallbackSource.poster}
    >
      <source src={video.fallbackSource.url} type={video.fallbackSource.type} />
      Your browser cannot play HTML5 videos
    </video>
  );
};

export default Video;
