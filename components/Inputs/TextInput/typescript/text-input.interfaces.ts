import {
  ChangeEventHandler,
  Dispatch,
  FocusEventHandler,
  KeyboardEventHandler,
  RefObject,
  SetStateAction,
} from 'react';
import { CustomHook, IStandardProps } from '../../../../helpers/types';

export interface ITextInputProps extends IStandardProps {
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

export type ITextInputHook = CustomHook<
  Pick<
    ITextInputProps,
    | 'setValue'
    | 'validateOnBlur'
    | 'label'
    | 'required'
    | 'minLength'
    | 'maxLength'
    | 'type'
    | 'form'
    | 'index'
  > & { setError: Dispatch<SetStateAction<string>> },
  {
    handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    handleBlur: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    handleKeyDown: KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  }
>;
