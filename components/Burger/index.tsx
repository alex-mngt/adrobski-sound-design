import { FC } from 'react';
import { IBurgerProps } from './typescript/burger.interfaces';
import s from './scss/burger.module.scss';

const Burger: FC<IBurgerProps> = ({ className, onClick, isMenuOpen }) => {
  return (
    <div
      onClick={onClick}
      className={`${s['burger']} ${className ? className : ''} ${
        isMenuOpen ? s['burger--popout'] : ''
      } ${'f f-direction-column'}`}
    >
      <div className={`${s['burger__item']}`}></div>
      <div className={`${s['burger__item']}`}></div>
      <div className={`${s['burger__item']}`}></div>
    </div>
  );
};

export default Burger;
