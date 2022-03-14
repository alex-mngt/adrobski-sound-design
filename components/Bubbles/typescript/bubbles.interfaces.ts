import { RefObject } from 'react';
import { CustomHook } from '../../../helpers/types';

export interface IBubblesHookArgs {
  reference: RefObject<HTMLDivElement>;
}

export type IBubblesHook = CustomHook<IBubblesHookArgs, void>;
