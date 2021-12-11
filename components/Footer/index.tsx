import Link from 'next/link';
import React from 'react';
import s from '/styles/components/footer.module.scss';

const Footer = () => {
  return (
    <footer className={`${s['footer']} pt-7 pb-4`}>
      <p className={`${s['footer__catchprase']} fw-700 ta-center h5`}>
        Let&apos;s Work Together
      </p>
      <Link href='/legals'>
        <a className={`${s['footer__legals']}`}>Mentions légales</a>
      </Link>
      <p className={`${s['footer__studio']} f f-center f-direction-column`}>
        <span className='mb-1'>
          Made with [<span className='fw-700 mr-1 ml-1'>love</span>] by{' '}
        </span>
        <Link href='https://www.instagram.com/wearestudio99/?hl=fr'>
          <a target='_blank' className='f f-center'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              width='30px'
              height='20.73px'
              className={`${s['footer__logo']} mr-1`}
              src='/images/we-are-studio-99.svg'
              alt='WeAreStudio99Logo'
            ></img>
            WeAreStudio99
          </a>
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
