import { VIDEOS_PER_PAGE } from '../../Pagination/typescript/pagination.constants';
import { IVideoGridHook } from './video-grid.interfaces';
import s from '../scss/videos-grid.module.scss';
import { useEffect } from 'react';
import { handleKeyUpDown } from './video-grid.helpers';

export const useVideoGrid: IVideoGridHook = ({
  reference,
  page,
  setIsCtrlPressed,
  setIsShiftPressed,
}) => {
  const videosSlice = [(page - 1) * VIDEOS_PER_PAGE, page * VIDEOS_PER_PAGE];

  const paginationFn = () => {
    if (!reference.current) {
      return;
    }

    reference.current.classList.toggle(s['videos-grid--hidden']);
    setTimeout(() => {
      window.scroll({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        if (!reference.current) {
          return;
        }

        reference.current.classList.toggle(s['videos-grid--hidden']);
      }, 600);
    }, 400);
  };

  useEffect(() => {
    window.addEventListener(
      'keydown',
      handleKeyUpDown(setIsCtrlPressed, setIsShiftPressed, 'keydown'),
    );
    window.addEventListener(
      'keyup',
      handleKeyUpDown(setIsCtrlPressed, setIsShiftPressed, 'keyup'),
    );

    return () => {
      window.removeEventListener(
        'keydown',
        handleKeyUpDown(setIsCtrlPressed, setIsShiftPressed, 'keydown'),
      );
      window.removeEventListener(
        'keyup',
        handleKeyUpDown(setIsCtrlPressed, setIsShiftPressed, 'keyup'),
      );
    };
  }, [setIsCtrlPressed, setIsShiftPressed]);

  return { videosSlice, paginationFn };
};
