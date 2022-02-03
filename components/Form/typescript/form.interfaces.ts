import { Dispatch, RefObject, SetStateAction } from 'react';
import { CustomHook, IStandardProps } from '../../../helpers/types';

export interface IFormProps extends IStandardProps {
  reference: RefObject<HTMLFormElement>;
  setIsValid: Dispatch<SetStateAction<boolean>>;
  isValid: boolean;
}

export type IFormHook = CustomHook<
  Pick<IFormProps, 'reference' | 'isValid' | 'setIsValid'>,
  void
>;
