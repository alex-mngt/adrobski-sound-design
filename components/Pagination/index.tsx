import { FC } from 'react';
import LeftArrow from '../svg/arrow-left.svg';
import RightArrow from '../svg/arrow-right.svg';
import { IPaginationProps } from './typescript/pagination.interfaces';

import s from './scss/pagination.module.scss';
import { usePagination } from './typescript/pagination.hooks';

const Pagination: FC<IPaginationProps> = ({
  length,
  itemsPerPage,
  selectedPage,
  setSelectedPage,
  fnExecution,
  fnDelay = 0,
  fn = () => {},
}) => {
  const [
    displayedSelectedPage,
    nbOfPages,
    pages,
    handleLeftArrowClick,
    handleRightArrowClick,
    handlePageClick,
  ] = usePagination(
    length,
    selectedPage,
    itemsPerPage,
    setSelectedPage,
    fn,
    fnExecution,
    fnDelay,
  );

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
