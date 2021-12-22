import { ChangeEvent, Dispatch, FocusEvent, SetStateAction } from 'react';
import { ITextAreaInputProps } from '../../components/inputs/TextAreaInput';
import { ITextInputProps } from '../../components/inputs/TextInput';

export const checkValidity = (
  e:
    | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    | FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  label: ITextInputProps['label'],
  error: string,
  setError: Dispatch<SetStateAction<string>>,
  required?: ITextInputProps['required'],
  minLength?: ITextInputProps['minLength'],
  maxLength?: ITextInputProps['maxLength'],
  customValidationFunction?:
    | ITextInputProps['customValidationFunction']
    | ITextAreaInputProps['customValidationFunction'],
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

  // if (customValidationFunction) {
  //   const customValidationMessage = customValidationFunction(e);
  //   if (customValidationMessage) {
  //     e.target.setCustomValidity(customValidationMessage);
  //     setError(customValidationMessage);
  //     return;
  //   }
  // }

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
