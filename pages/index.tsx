import type { NextPage } from 'next';
import Header from '../components/Header';
import BaseLayout from '../layout/BaseLayout';
import Image from "next/image";

import s from '/styles/pages/home.module.scss';
import Artists from '/public/images/artists.png';
import Brands from '/public/images/brands.png';
import VideoGrid from '../components/VideoGrid';
import Bubbles from '../components/Bubbles';
import { SPOTIFY_LINK } from '../constants/links';
import { useEffect, useRef } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import Footer from '../components/Footer';
import Notification from '../components/Notification';
import { useNotification } from '../components/Notification/typescript/notification.hooks';
import { videos } from '../constants/videos';
import { NotificationContext } from '../components/Notification/typescript/notification.context';
import Head from 'next/head';

const Home: NextPage = ({}) => {
  useEffect(() => {
    smoothscroll.polyfill();
  });

  const reference = useRef<HTMLDivElement>(null);

  const { notificationContent, notificationContextValue } = useNotification({
    reference,
  });

  return <>
    <Head>
      <title>Adrobski - Sound Design</title>
      <meta
        name='description'
        content='Sound Designer & Composer, working with Mekaverse, Blansable, Matteyy, Yoplait, Valorant France...'
      />
    </Head>
    <NotificationContext.Provider value={notificationContextValue}>
      <Header />
      <BaseLayout>
        <h1 className={`${s['home__title']} mt-6 h3 fw-700`}>
          <span>Adrobski is a french</span>{' '}
          <span>
            <a
              href={SPOTIFY_LINK}
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
                alt=''
                src={Artists}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto"
                }} />
            </div>
            <div className={`${s['home__brands']}`}>
              <Image
                width={322}
                height={54.9}
                alt=''
                src={Brands}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto"
                }} />
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
  </>;
};

export default Home;
