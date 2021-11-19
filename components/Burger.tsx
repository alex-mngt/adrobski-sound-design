import { FC, MouseEventHandler } from 'react';
import s from '/styles/components/burger.module.scss';

interface IBurgerProps {
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  isMenuOpen: boolean;
}

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
