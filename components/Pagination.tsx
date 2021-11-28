import { Dispatch, FC, SetStateAction, useState } from 'react';
import { AFTER_PAGE_CHANGE, BEFORE_PAGE_CHANGE } from '../helpers/pagination';
import { fillArray } from '../helpers/tools';
import LeftArrow from './svg/arrow-left.svg';
import RightArrow from './svg/arrow-right.svg';

import s from '/styles/components/pagination.module.scss';

interface IPaginationProps {
  length: number;
  itemsPerPage: number;
  selectedPage: number;
  setSelectedPage: Dispatch<SetStateAction<number>>;
  fnExecution?: typeof BEFORE_PAGE_CHANGE | typeof AFTER_PAGE_CHANGE;
  fnDelay?: number;
  fn?: () => void;
}

const Pagination: FC<IPaginationProps> = ({
  length,
  itemsPerPage,
  selectedPage,
  setSelectedPage,
  fnExecution,
  fnDelay = 0,
  fn = () => {},
}) => {
  const [displayedSelectedPage, setDisplayedSelectedPage] =
    useState(selectedPage);
  const handleLeftArrowClick = () => {
    setDisplayedSelectedPage(selectedPage - 1);
    fnExecution === BEFORE_PAGE_CHANGE && fn();
    setTimeout(() => {
      setSelectedPage(selectedPage - 1);
      fnExecution !== BEFORE_PAGE_CHANGE && fn();
    }, fnDelay);
  };

  const handleRightArrowClick = () => {
    setDisplayedSelectedPage(selectedPage + 1);
    fnExecution === BEFORE_PAGE_CHANGE && fn();
    setTimeout(() => {
      setSelectedPage(selectedPage + 1);
      fnExecution !== BEFORE_PAGE_CHANGE && fn();
    }, fnDelay);
  };

  const handlePageClick = (page: number) => {
    setDisplayedSelectedPage(page);
    fnExecution === BEFORE_PAGE_CHANGE && fn();
    setTimeout(() => {
      setSelectedPage(page);
      fnExecution !== BEFORE_PAGE_CHANGE && fn();
    }, fnDelay);
  };

  const nbOfPages = Math.ceil(length / itemsPerPage);
  const pages = fillArray(1, nbOfPages);

  const renderPages = (page: number) => {
    const isSelected = displayedSelectedPage === page;

    if (selectedPage <= 4 || selectedPage >= nbOfPages - 3) {
      if (page > 4 && page < nbOfPages - 3) {
        if (page === 5) {
          return (
            <p key={page} className='mr-2'>
              ...
            </p>
          );
        } else {
          return;
        }
      }
    } else {
      if (
        page > 2 &&
        page < nbOfPages - 1 &&
        (page < selectedPage - 1 || page > selectedPage + 1)
      ) {
        if (page === selectedPage - 2 || page === selectedPage + 2) {
          return (
            <p key={page} className='mr-2'>
              ...
            </p>
          );
        } else {
          return;
        }
      }
    }

    return (
      <p
        onClick={() => handlePageClick(page)}
        key={page}
        className={`${s['pagination__page']} ${
          page === nbOfPages ? s['pagination__page--last'] : ''
        } ${isSelected ? s['pagionation__page--selected'] : ''}`}
      >
        {page}
      </p>
    );
  };

  return (
    <div className={`f f-center ${s['pagination']}`}>
      <div
        className={`${s['pagination__arrow']} ${
          selectedPage === 1 ? s['pagination__arrow--hidden'] : ''
        } f f-ai-center mr-3`}
        onClick={handleLeftArrowClick}
      >
        <LeftArrow />
      </div>
      {pages.map(page => renderPages(page))}
      <div
        className={`${s['pagination__arrow']} ${
          selectedPage === nbOfPages ? s['pagination__arrow--hidden'] : ''
        } f f-ai-center ml-3`}
        onClick={handleRightArrowClick}
      >
        <RightArrow />
      </div>
    </div>
  );
};

export default Pagination;
