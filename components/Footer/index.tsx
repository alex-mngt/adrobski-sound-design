import Link from 'next/link';
import React from 'react';
import s from './scss/footer.module.scss';

const Footer = () => {
  return (
    <footer className={`${s['footer']} pt-7 pb-4`}>
      <Link
        href='/contact'
        className={`${s['footer__catchprase']} fw-700 ta-center h5`}
      >
        Let&apos;s Work Together
      </Link>
      <Link href='/legals' className={`${s['footer__legals']}`}>
        Legals
      </Link>
      <p className={`${s['footer__studio']} f f-ai-center ta-right`}>
        <span className='mb-1'>
          Made with [<span className='fw-700 mr-1 ml-1'>love</span>] by{' '}
        </span>
        <Link
          href='https://www.instagram.com/wearestudio99/?hl=fr'
          target='_blank'
          className='ml-2'
          passHref
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className={`${s['footer__logo']}`}
            width='30px'
            height='20.73px'
            src='/images/we-are-studio-99.svg'
            alt='WeAreStudio99Logo'
          ></img>
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
