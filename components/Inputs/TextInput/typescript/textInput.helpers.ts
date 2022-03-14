import { Dispatch, FocusEventHandler, SetStateAction } from 'react';
import { CustomHook } from '../../../../helpers/types';
import { checkValidity } from './text-input.helpers';
import { ITextInputProps } from './text-input.interfaces';

export const handleBlur: CustomHook<
  Pick<
    ITextInputProps,
    'validateOnBlur' | 'label' | 'required' | 'minLength' | 'maxLength' | 'type'
  > & { setError: Dispatch<SetStateAction<string>> },
  void
> = ({
  validateOnBlur,
  label,
  setError,
  required,
  minLength,
  maxLength,
  type,
}) => {
  const handler: FocusEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = e => {
    if (!validateOnBlur) {
      return;
    }

    checkValidity(e, label, setError, required, minLength, maxLength, type);
  };
  return handler;
};
