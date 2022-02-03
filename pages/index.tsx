import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import BaseLayout from '../layout/BaseLayout';
import Image from 'next/image';

import s from '/styles/pages/home.module.scss';
import Artists from '/public/images/artists.png';
import Brands from '/public/images/brands.png';
import VideoGrid from '../components/VideoGrid';
import Bubbles from '../components/Bubbles';
import { spotifyLink } from '../constants/links';
import { useEffect, useMemo, useRef } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import Footer from '../components/Footer';
import Notification, { NotificationContext } from '../components/Notification';
import { useNotification } from '../components/Notification/typescript/notification.hooks';
import { videos } from '../constants/videos';

const Home: NextPage = ({}) => {
  useEffect(() => {
    smoothscroll.polyfill();
  });

  const reference = useRef<HTMLDivElement>(null);

  const { notificationContent, notificationContextValue } = useNotification({
    reference,
  });

  return (
    <NotificationContext.Provider value={notificationContextValue}>
      <Header />
      <BaseLayout>
        <h1 className={`${s['home__title']} mt-6 h3 fw-700`}>
          <span>Adrosbki is a french</span>{' '}
          <span>
            <a
              href={spotifyLink}
              target='_blank'
              rel='noreferrer'
              className={`${s['home__title-emphasis']}`}
            >
              Musician
            </a>{' '}
            and Sound
          </span>{' '}
          <span>Designer</span>
        </h1>
        <div
          className={`${s['home__clients']} f f-direction-column f-ai-end mt-6 mb-8`}
        >
          <p className={`${s['home__2nd-title']} h1 fw-400 mb-4 ta-right`}>
            He works for
          </p>
          <div className={`${s['home__clients-imgs']} f f-wrap f-jc-end`}>
            <div className={`${s['home__artists']} mb-5`}>
              <Image
                width={281}
                height={54.9}
                layout='responsive'
                alt=''
                src={Artists}
              />
            </div>
            <div className={`${s['home__brands']}`}>
              <Image
                width={322}
                height={54.9}
                layout='responsive'
                alt=''
                src={Brands}
              />
            </div>
          </div>
        </div>
        <VideoGrid
          className={`${s['home__square-videos']} mb-6`}
          videos={videos}
        />
        <Footer />
      </BaseLayout>
      <Bubbles />
      <Notification reference={reference} content={notificationContent} />
    </NotificationContext.Provider>
  );
};

export default Home;
