import { Dispatch, SetStateAction } from 'react';
import { BEFORE_PAGE_CHANGE } from './pagination.constants';
import { IPaginationProps } from './pagination.interfaces';

export const handleArrowClick = (
  arrowDirection: 'right' | 'left',
  setDisplayedSelectedPage: Dispatch<SetStateAction<number>>,
  selectedPage: IPaginationProps['selectedPage'],
  setSelectedPage: IPaginationProps['setSelectedPage'],
  fn: IPaginationProps['fn'],
  fnExecution: IPaginationProps['fnExecution'],
  fnDelay: IPaginationProps['fnDelay'],
) => {
  if (arrowDirection === 'right') {
    setDisplayedSelectedPage(selectedPage + 1);
  } else {
    setDisplayedSelectedPage(selectedPage - 1);
  }

  if (!fn) {
    return;
  }

  fnExecution === BEFORE_PAGE_CHANGE && fn();
  setTimeout(() => {
    if (arrowDirection === 'right') {
      setSelectedPage(selectedPage + 1);
    } else {
      setSelectedPage(selectedPage - 1);
    }
    fnExecution !== BEFORE_PAGE_CHANGE && fn();
  }, fnDelay);
};
