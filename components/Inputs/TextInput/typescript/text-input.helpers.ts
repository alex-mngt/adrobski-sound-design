import {
  ChangeEvent,
  Dispatch,
  FocusEvent,
  KeyboardEvent,
  SetStateAction,
} from 'react';
import { ITextInputProps } from './text-input.interfaces';

export const handleChange = (
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  setValue: Dispatch<SetStateAction<string>>,
  label: ITextInputProps['label'],
  error: string,
  setError: Dispatch<SetStateAction<string>>,
  validateOnBlur: ITextInputProps['validateOnBlur'],
  required: ITextInputProps['required'],
  minLength: ITextInputProps['minLength'],
  maxLength: ITextInputProps['maxLength'],
  type: ITextInputProps['type'],
) => {
  setValue(e.target.value);

  if (validateOnBlur && !error) {
    return;
  }

  checkValidity(
    e,
    label,
    error,
    setError,
    required,
    minLength,
    maxLength,
    type,
  );
};

export const handleBlur = (
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  label: ITextInputProps['label'],
  error: string,
  setError: Dispatch<SetStateAction<string>>,
  validateOnBlur: ITextInputProps['validateOnBlur'],
  required: ITextInputProps['required'],
  minLength: ITextInputProps['minLength'],
  maxLength: ITextInputProps['maxLength'],
  type: ITextInputProps['type'],
) => {
  if (!validateOnBlur) {
    return;
  }

  checkValidity(
    e,
    label,
    error,
    setError,
    required,
    minLength,
    maxLength,
    type,
  );
};

export const handleKeyDown = (
  e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
  form: ITextInputProps['form'],
  index: ITextInputProps['index'],
) => {
  if (e.key !== 'Enter') {
    return;
  }

  const nextInput: HTMLInputElement | null = document.querySelector(
    `input[data-form="${form}-${index + 1}"]`,
  );

  nextInput?.focus();
};

const checkValidity = (
  e:
    | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    | FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  label: ITextInputProps['label'],
  error: string,
  setError: Dispatch<SetStateAction<string>>,
  required?: ITextInputProps['required'],
  minLength?: ITextInputProps['minLength'],
  maxLength?: ITextInputProps['maxLength'],
  type?: ITextInputProps['type'],
) => {
  if (required) {
    if (!e.target.value) {
      e.target.setCustomValidity(`${label} is required`);
      setError(e.target.validationMessage);
      return;
    }
  }

  if (minLength) {
    if (e.target.value.length < minLength) {
      e.target.setCustomValidity(
        `${label} must be at least ${minLength} characters`,
      );
      setError(e.target.validationMessage);
      return;
    }
  }

  if (maxLength) {
    if (e.target.value.length > maxLength) {
      e.target.setCustomValidity(
        `${label} can't exceed ${maxLength} characters`,
      );
      setError(e.target.validationMessage);
      return;
    }
  }

  if (type === 'email') {
    if (e.target.validity.typeMismatch) {
      e.target.setCustomValidity(`${e.target.value} is not a valid email`);
      setError(e.target.validationMessage);
      return;
    }
  }

  if (type === 'url') {
    if (e.target.validity.typeMismatch) {
      e.target.setCustomValidity(`${e.target.value} is not a valid url`);
      setError(e.target.validationMessage);
      return;
    }
  }

  e.target.setCustomValidity('');
  setError('');
};
