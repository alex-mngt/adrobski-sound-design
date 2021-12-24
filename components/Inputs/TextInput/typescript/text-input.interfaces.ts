import { Dispatch, RefObject, SetStateAction } from 'react';
import { Props } from '../../../../interfaces';

export interface ITextInputProps extends Props {
  name: string;
  label: string;
  placeholder?: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  type: 'text' | 'email' | 'password' | 'url' | 'textarea';
  form: RefObject<HTMLFormElement>;
  index: number;
  validateOnBlur?: boolean;
  rows?: number;
}
