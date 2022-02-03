import { FC } from 'react';
import Button from '../Inputs/Button';
import { useNotificationVideo } from './typescript/notificationVideo.hooks';
import { INotificationVideoProps } from './typescript/notificationVideo.interfaces';
import s from './scss/notification-video.module.scss';

const NotificationVideo: FC<INotificationVideoProps> = ({
  name,
  artists,
  link,
}) => {
  const { handleButtonClick } = useNotificationVideo({ link });

  return (
    <div className={`${s['notification-video']} f f-jc-space-b f-ai-center`}>
      <div className={`${s['notification-video__infos']}`}>
        <p className='fw-700 mb-2'>{name}</p>
        <div className={`${s['notification-video__links']} f f-ai-center`}>
          {artists.map((artist, index) => (
            <>
              <a
                key={artist.name}
                href={artist.profileUrl}
                className={`${s['notification-video__link']}`}
              >
                {artist.name}
              </a>
              {index !== artists.length - 1 && (
                <span className='mr-1 ml-1'>x</span>
              )}
            </>
          ))}
        </div>
        <p></p>
      </div>
      {link && (
        <Button
          onClick={handleButtonClick}
          primary
          small
          text='See more'
          type='button'
          className={`${s['notification-video__button']} ml-4`}
        />
      )}
    </div>
  );
};

export default NotificationVideo;
