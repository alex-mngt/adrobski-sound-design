import { RefObject } from 'react';
import { CustomHook } from '../../../helpers/types';

export type IBubblesHook = CustomHook<
  { reference: RefObject<HTMLDivElement> },
  void
>;
