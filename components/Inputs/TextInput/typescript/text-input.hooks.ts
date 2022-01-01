import {
  ChangeEventHandler,
  FocusEventHandler,
  KeyboardEventHandler,
  useState,
} from 'react';
import { checkValidity } from './text-input.helpers';
import { ITextInputProps } from './text-input.interfaces';

export const useTextInput = (
  setValue: ITextInputProps['setValue'],
  validateOnBlur: ITextInputProps['validateOnBlur'],
  label: ITextInputProps['label'],
  required: ITextInputProps['required'],
  minLength: ITextInputProps['minLength'],
  maxLength: ITextInputProps['maxLength'],
  type: ITextInputProps['type'],
  form: ITextInputProps['form'],
  index: ITextInputProps['index'],
): [
  string,
  ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
  FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>,
  KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>,
] => {
  const [error, setError] = useState<string>('');

  const handleBlur: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> =
    e => {
      if (!validateOnBlur) {
        return;
      }

      checkValidity(e, label, setError, required, minLength, maxLength, type);
    };

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = e => {
    setValue(e.target.value);

    if (validateOnBlur) {
      return;
    }

    checkValidity(e, label, setError, required, minLength, maxLength, type);
  };

  const handleKeyDown: KeyboardEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = e => {
    if (e.key !== 'Enter') {
      return;
    }

    const nextInput: HTMLInputElement | null = document.querySelector(
      `input[data-form="${form}-${index + 1}"]`,
    );

    nextInput?.focus();
  };

  return [error, handleChange, handleBlur, handleKeyDown];
};
