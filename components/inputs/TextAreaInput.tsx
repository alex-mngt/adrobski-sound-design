import {
  ChangeEvent,
  ChangeEventHandler,
  Dispatch,
  FC,
  FocusEvent,
  FocusEventHandler,
  KeyboardEventHandler,
  RefObject,
  SetStateAction,
  useState,
} from 'react';
import { checkValidity } from '../../helpers/inputs/textInput';
import { ITextInputProps } from './TextInput';
import s from '/styles/components/text-input.module.scss';

export interface ITextAreaInputProps {
  className?: string;
  name: string;
  label: string;
  placeholder?: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  form: RefObject<HTMLFormElement>;
  index: number;
  customValidationFunction?: (
    e: ChangeEvent<HTMLTextAreaElement> | FocusEvent<HTMLTextAreaElement>,
  ) => string;
  validateOnBlur?: boolean;
}

const TextAreaInput: FC<ITextAreaInputProps> = ({
  className,
  name,
  label,
  placeholder,
  value,
  setValue,
  required,
  minLength,
  maxLength,
  form,
  index,
  customValidationFunction,
  validateOnBlur,
}) => {
  const [error, setError] = useState<string>('');

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = event => {
    setValue(event.target.value);

    if (validateOnBlur && !error) {
      return;
    }

    checkValidity(
      event,
      label,
      error,
      setError,
      required,
      minLength,
      maxLength,
      customValidationFunction,
    );
  };

  const handleKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = event => {
    if (event.key !== 'Enter') {
      return;
    }

    const nextInput: HTMLTextAreaElement | null = document.querySelector(
      `input[data-form="${form}-${index + 1}"]`,
    );

    nextInput?.focus();
  };

  const handleBlur: FocusEventHandler<HTMLTextAreaElement> = event => {
    if (!validateOnBlur) {
      return;
    }

    checkValidity(
      event,
      label,
      error,
      setError,
      required,
      minLength,
      maxLength,
      customValidationFunction,
    );
  };

  return (
    <div className={`${className} f f-direction-column`}>
      <label className='mb-2' htmlFor={name}>
        {label}
      </label>
      <textarea
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        data-form={`${form}-${index}`}
        className={`${s['text-input__input']} ${
          error ? s['text-input__input--invalid'] : ''
        } p-2`}
        onChange={handleChange}
        name={name}
        placeholder={placeholder}
        id={name}
        value={value}
        required={required}
      />
      {error && (
        <p className={`${s['text-input__error']} fs-small mt-2`}>{error}</p>
      )}
    </div>
  );
};

export default TextAreaInput;
