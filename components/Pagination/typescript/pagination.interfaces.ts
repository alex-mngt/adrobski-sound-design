import { Dispatch, SetStateAction } from 'react';
import { AFTER_PAGE_CHANGE, BEFORE_PAGE_CHANGE } from './pagination.constants';

export interface IPaginationProps {
  length: number;
  itemsPerPage: number;
  selectedPage: number;
  setSelectedPage: Dispatch<SetStateAction<number>>;
  fnExecution?: typeof BEFORE_PAGE_CHANGE | typeof AFTER_PAGE_CHANGE;
  fnDelay?: number;
  fn?: () => void;
}
