import { Dispatch, RefObject, SetStateAction } from 'react';
import { Props } from '../../../interfaces';

export interface IFormProps extends Props {
  reference: RefObject<HTMLFormElement>;
  setIsValid: Dispatch<SetStateAction<boolean>>;
}
