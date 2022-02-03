import {
  ChangeEventHandler,
  FocusEventHandler,
  KeyboardEventHandler,
  useState,
} from 'react';
import { checkValidity } from './text-input.helpers';
import { ITextInputHook, ITextInputProps } from './text-input.interfaces';

export const useTextInput: ITextInputHook = ({
  setValue,
  validateOnBlur,
  label,
  required,
  minLength,
  maxLength,
  type,
  form,
  index,
  setError,
}) => {
  const handleBlur: FocusEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = e => {
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

  return { handleChange, handleBlur, handleKeyDown };
};
