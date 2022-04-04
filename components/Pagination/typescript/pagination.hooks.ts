import { MouseEventHandler, useState } from 'react';
import { fillArray } from '../../../helpers/tools';
import { BEFORE_PAGE_CHANGE } from './pagination.constants';
import { handleArrowClick } from './pagination.helpers';
import { IPaginationProps } from './pagination.interfaces';

export const usePagination = (
  length: IPaginationProps['length'],
  selectedPage: IPaginationProps['selectedPage'],
  itemsPerPage: IPaginationProps['itemsPerPage'],
  setSelectedPage: IPaginationProps['setSelectedPage'],
  fn: IPaginationProps['fn'],
  fnExecution: IPaginationProps['fnExecution'],
  fnDelay: IPaginationProps['fnDelay'],
): [
  number,
  number,
  number[],
  MouseEventHandler<HTMLDivElement>,
  MouseEventHandler<HTMLDivElement>,
  (page: number) => void,
] => {
  const [displayedSelectedPage, setDisplayedSelectedPage] =
    useState(selectedPage);
  const nbOfPages = Math.ceil(length / itemsPerPage);
  const pages = fillArray(1, nbOfPages);

  const handleLeftArrowClick: MouseEventHandler<HTMLDivElement> = () => {
    handleArrowClick(
      'left',
      setDisplayedSelectedPage,
      selectedPage,
      setSelectedPage,
      fn,
      fnExecution,
      fnDelay,
    );
  };

  const handleRightArrowClick: MouseEventHandler<HTMLDivElement> = () => {
    handleArrowClick(
      'right',
      setDisplayedSelectedPage,
      selectedPage,
      setSelectedPage,
      fn,
      fnExecution,
      fnDelay,
    );
  };

  const handlePageClick = (page: number) => {
    setDisplayedSelectedPage(page);

    if (!fn) {
      return;
    }

    fnExecution === BEFORE_PAGE_CHANGE && fn();
    setTimeout(() => {
      setSelectedPage(page);
      fnExecution !== BEFORE_PAGE_CHANGE && fn();
    }, fnDelay);
  };

  return [
    displayedSelectedPage,
    nbOfPages,
    pages,
    handleLeftArrowClick,
    handleRightArrowClick,
    handlePageClick,
  ];
};
