import { VIDEOS_PER_PAGE } from '../../Pagination/typescript/pagination.constants';
import { IVideoGridHook } from './video-grid.interfaces';
import s from '../scss/videos-grid.module.scss';

export const useVideoGrid: IVideoGridHook = ({ reference, page }) => {
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

  return { videosSlice, paginationFn };
};
