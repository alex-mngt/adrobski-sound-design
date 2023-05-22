import { FC, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TwitterLogo from '../svg/twitter.svg';
import SpotifyLogo from '../svg/spotify.svg';
import InstaLogo from '../svg/instagram.svg';
import AdrobskiLogo from '/public/images/logo.png';
import AdrobskiLogoBlack from '/public/images/logo-black.png';
import CloseIcon from '../svg/close-icon.svg';
import Burger from '../Burger';
import {
  INSTAGRAM_LINK,
  SPOTIFY_LINK,
  TWITTER_LINK,
} from '../../constants/links';
import {
  handleBurgerClick,
  handleCloseIconClick,
} from './typescript/header.helpers';

import s from './scss/header.module.scss';

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className={`${s['header']} p-4`}>
      <div className={`${s['header__mobile']} f f-jc-space-b f-ai-center`}>
        <div className={`${s['header__mobile-logo']}`}>
          <Link href='/' passHref>
            <Image
              priority={true}
              src={AdrobskiLogo}
              alt='Adrobski Logo'
              height={1182}
              width={2016}
              sizes='100vw'
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </Link>
        </div>
        <Burger
          isMenuOpen={isMenuOpen}
          onClick={handleBurgerClick(setIsMenuOpen)}
        />
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
          <a href={TWITTER_LINK} target='_blank' rel='noreferrer'>
            <TwitterLogo />
          </a>
          <a href={INSTAGRAM_LINK} target='_blank' rel='noreferrer'>
            <InstaLogo className='ml-4 mr-4' />
          </a>
          <a href={SPOTIFY_LINK} target='_blank' rel='noreferrer'>
            <SpotifyLogo />
          </a>
        </div>
        <div className={`${s['header__logo']} f-js-center f-as-end`}>
          <div className={`${s['main-logo']}`}>
            <Link href='/' passHref>
              <Image
                priority={true}
                src={AdrobskiLogo}
                alt='Adrobski Logo'
                height={1182}
                width={2016}
                sizes='100vw'
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </Link>
          </div>
          <div className={`${s['main-logo--black']}`}>
            <Link href='/' passHref>
              <Image
                priority={true}
                src={AdrobskiLogoBlack}
                alt='Adrobski Logo'
                height={1182}
                width={2016}
                sizes='100vw'
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </Link>
          </div>
        </div>
        <div className={`${s['header__links']} f f-ai-center f-jc-center`}>
          <Link
            href='/contact'
            className={`${s['header__link']} fw-700 f-js-center mt-5 mb-5`}
          >
            contact
          </Link>
          <Link
            href='/collaborations'
            className={`${s['header__link']} fw-700 f-js-center mt-5 mb-5`}
          >
            clients
          </Link>
        </div>
        <CloseIcon
          onClick={handleCloseIconClick(setIsMenuOpen)}
          className={`${s['header__close']} ${
            isMenuOpen ? s['header__close--popin'] : ''
          }`}
        />
      </div>
    </header>
  );
};

export default Header;
