import { FC, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TwitterLogo from './svg/twitter.svg';
import SpotifyLogo from './svg/spotify.svg';
import InstaLogo from './svg/instagram.svg';
import AdrobskiLogo from '/public/images/logo.png';
import AdrobskiLogoBlack from '/public/images/logo-black.png';
import CloseIcon from './svg/close-icon.svg';

import s from '/styles/components/header.module.scss';
import BaseLayout from '../layout/BaseLayout';
import Burger from './Burger';

const Header: FC = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  return (
    <header className={`${s['header']} p-4`}>
      <div className={`${s['header__mobile']} f f-jc-space-b f-ai-center`}>
        <div className={`${s['header__mobile-logo']}`}>
          <Image
            priority={true}
            layout='responsive'
            src={AdrobskiLogo}
            alt='Adrobski Logo'
            height={1182}
            width={2016}
          />
        </div>
        <Burger isMenuOpen={isMenuOpen} onClick={() => setisMenuOpen(true)} />
      </div>
      <div
        className={`${s['header__wrapper']} ${
          isMenuOpen ? s['header__wrapper--open'] : ''
        }`}
      >
        <div
          className={`${s['header__svgs']} ${
            isMenuOpen ? s['header__svgs--slidin'] : ''
          } f-js-center f-as-start`}
        >
          <a href='https://twitter.com/adrobskimusic'>
            <TwitterLogo />
          </a>
          <a href='https://www.instagram.com/adrobskimusic'>
            <InstaLogo className='ml-4 mr-4' />
          </a>
          <a href='https://open.spotify.com/artist/2pQTrxWzQz1FoHJpL2xQXg?si=T3DVJPviT9uvAquOnhc5ew&dl_branch=1tify '>
            <SpotifyLogo />
          </a>
        </div>
        <div className={`${s['header__logo']} f-js-center f-as-end`}>
          <div className={`${s['main-logo']}`}>
            <Image
              priority={true}
              src={AdrobskiLogo}
              alt='Adrobski Logo'
              height={1182}
              width={2016}
              layout='responsive'
            />
          </div>
          <div className={`${s['main-logo--black']}`}>
            <Image
              priority={true}
              src={AdrobskiLogoBlack}
              alt='Adrobski Logo'
              height={1182}
              width={2016}
              layout='responsive'
            />
          </div>
        </div>
        <Link href='/contact'>
          <a className={`${s['header__contact']} fw-700 f-js-center mt-5 mb-5`}>
            contact
          </a>
        </Link>
        <CloseIcon
          onClick={() => setisMenuOpen(false)}
          className={`${s['header__close']} ${
            isMenuOpen ? s['header__close--popin'] : ''
          }`}
        />
      </div>
    </header>
  );
};

export default Header;
