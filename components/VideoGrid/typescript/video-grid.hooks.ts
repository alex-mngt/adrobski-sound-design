import { useState, useRef, Dispatch, SetStateAction, RefObject } from 'react';
import { VIDEOS_PER_PAGE } from '../../Pagination/typescript/pagination.constants';
import s from '../scss/videos-grid.module.scss';

export const useVideoGrid = (): [
  number,
  Dispatch<SetStateAction<number>>,
  RefObject<HTMLDivElement>,
  number[],
  () => void,
] => {
  const [page, setPage] = useState<number>(1);
  const ref = useRef<HTMLDivElement>(null);

  const videosSlice = [(page - 1) * VIDEOS_PER_PAGE, page * VIDEOS_PER_PAGE];

  const paginationFn = () => {
    ref.current?.classList.toggle(s['videos-grid--hidden']);
    setTimeout(() => {
      window.scroll({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        ref.current?.classList.toggle(s['videos-grid--hidden']);
      }, 600);
    }, 400);
  };

  return [page, setPage, ref, videosSlice, paginationFn];
};
