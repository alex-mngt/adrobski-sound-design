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
}) => {
  const [isMacOs, setIsMacOs] = useState<boolean>();
  const reference = useRef<HTMLVideoElement>(null);
  const { handleClick } = useVideo({
    video,
    focusedVideo,
    reference,
    setIsMacOs,
  });

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
        {isMacOs && (
          <p className='f f-ai-center fs-small'>
            {isCtrlPressed || isShiftPressed ? 'Hold' : 'Press'}
            {((isShiftPressed && isCtrlPressed) ||
              (!isShiftPressed && isCtrlPressed) ||
              (!isCtrlPressed && !isShiftPressed)) && (
              <span
                className={`${s['video__keyboard-tag']} ${
                  isCtrlPressed ? s['video__keyboard-tag--active'] : ''
                } fs-x-small p-1 ml-2 mr-1`}
              >
                {isMacOs ? 'Cmd' : 'Ctrl'}
              </span>
            )}
            {isCtrlPressed && (
              <span className={`${s['video__redirect-hint']} ml-1`}>
                + <span className='fw-700'>Click</span> to see artist profile
              </span>
            )}
            {!isCtrlPressed && !isShiftPressed && (
              <span className='ml-1'>or</span>
            )}
            {!isCtrlPressed && (
              <span
                className={`${s['video__keyboard-tag']} ${
                  isShiftPressed ? s['video__keyboard-tag--active'] : ''
                } fs-x-small p-1 ml-2`}
              >
                Shift
              </span>
            )}
            {isShiftPressed && !isCtrlPressed && (
              <span className={`${s['video__redirect-hint']} ml-1`}>
                + <span className='fw-700'>Click</span> to see artwork online
              </span>
            )}
          </p>
        )}
      </div>
    </div>
  );
};

export default Video;
