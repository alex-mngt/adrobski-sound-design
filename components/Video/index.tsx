import { FC, Fragment, useRef, useState } from 'react';
import { getOS, slugify } from '../../helpers/tools';

import s from './scss/video.module.scss';
import { handleMouseEnter, handleMouseLeave } from './typescript/video.helpers';
import { useVideo } from './typescript/video.hooks';
import { IVideoProps } from './typescript/video.interfaces';

const Video: FC<IVideoProps> = ({
  video,
  focusedVideo,
  isCtrlPressed,
  isShiftPressed,
  setIsCtrlPressed,
  setIsShiftPressed,
}) => {
  const [isMacOs, setIsMacOs] = useState<boolean>();
  const reference = useRef<HTMLVideoElement>(null);
  const { handleClick } = useVideo({
    video,
    focusedVideo,
    reference,
    setIsMacOs,
    isCtrlPressed,
    isShiftPressed,
    setIsCtrlPressed,
    setIsShiftPressed,
  });

  const isPressDisplayed =
    (!isCtrlPressed && !isShiftPressed) || (isShiftPressed && !video.link);
  const isCtrlDisplayed =
    (isShiftPressed && isCtrlPressed) ||
    (isShiftPressed && !video.link) ||
    (!isShiftPressed && isCtrlPressed) ||
    (!isCtrlPressed && !isShiftPressed);

  return (
    <div
      className={`${
        isCtrlPressed || isShiftPressed ? s['wrapper--keypressed'] : ''
      }`}
    >
      <video
        ref={reference}
        playsInline
        loop
        className={`${s['video']} ${
          video.format === 'rect' ? s['video--rect'] : ''
        }`}
        controls
        preload='metadata'
        onClick={handleClick}
        onMouseEnter={handleMouseEnter()}
        onMouseLeave={handleMouseLeave()}
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
      <div
        className={`${s['video__infos']} f f-direction-column f-ai-start p-4`}
      >
        <p className='mb-4'>
          <span className='fw-700'>{video.name}</span>
          <span> by </span>
          {video.artists.map((artist, index) => (
            <Fragment key={artist.name}>
              <span className={`${s['video__artist']}`}>{artist.name}</span>
              {index !== video.artists.length - 1 && ' x '}
            </Fragment>
          ))}
        </p>
        <p className='f f-ai-center fs-small'>
          {isPressDisplayed ? 'Press' : 'Hold'}
          {isCtrlDisplayed && (
            <span
              className={`${s['video__keyboard-tag']} ${
                isCtrlPressed ? s['video__keyboard-tag--active'] : ''
              } fs-x-small pt-1 pb-1 pr-2 pl-2 ml-2 mr-1`}
            >
              {isMacOs ? '⌘' : 'Ctrl'}
            </span>
          )}
          {isCtrlPressed && (
            <span className={`${s['video__redirect-hint']} ml-1`}>
              + <span className='fw-700'>Click</span> to open artist
              {video.artists.length > 1 && 's'} profile
            </span>
          )}
          {video.link && (
            <>
              {!isCtrlPressed && !isShiftPressed && (
                <span className='ml-1'>or</span>
              )}
              {!isCtrlPressed && (
                <span
                  className={`${s['video__keyboard-tag']} ${
                    isShiftPressed ? s['video__keyboard-tag--active'] : ''
                  } fs-x-small pt-1 pb-1 pr-2 pl-2 ml-2`}
                >
                  {isMacOs ? '⌥' : 'Alt'}
                </span>
              )}
              {isShiftPressed && !isCtrlPressed && (
                <span className={`${s['video__redirect-hint']} ml-1`}>
                  + <span className='fw-700'>Click</span> to open artwork
                  reference
                </span>
              )}
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Video;
