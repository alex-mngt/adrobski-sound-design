import { Dispatch, MouseEventHandler, SetStateAction } from 'react';
import { CustomHook, IStandardProps } from '../../../helpers/types';

export interface ISampleProps extends IStandardProps {
  text: string;
}

export type ISampleHook = CustomHook<
  {
    counter: number;
    setCounter: Dispatch<SetStateAction<number>>;
  },
  { handleClick: MouseEventHandler }
>;
