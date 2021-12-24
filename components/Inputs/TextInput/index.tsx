import {
  ChangeEventHandler,
  FC,
  FocusEventHandler,
  KeyboardEventHandler,
  useState,
} from 'react';
import { ITextInputProps } from './typescript/text-input.interfaces';
import s from './scss/text-input.module.scss';
import {
  handleBlur,
  handleChange,
  handleKeyDown,
} from './typescript/text-input.helpers';

const TextInput: FC<ITextInputProps> = ({
  className,
  name,
  label,
  placeholder,
  value,
  setValue,
  required,
  minLength,
  maxLength,
  type,
  form,
  index,
  validateOnBlur,
  rows,
}) => {
  const [error, setError] = useState<string>('');

  const onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> =
    e => {
      handleChange(
        e,
        setValue,
        label,
        error,
        setError,
        validateOnBlur,
        required,
        minLength,
        maxLength,
        type,
      );
    };

  const onBlur: FocusEventHandler<HTMLInputElement> = e => {
    handleBlur(
      e,
      label,
      error,
      setError,
      validateOnBlur,
      required,
      minLength,
      maxLength,
      type,
    );
  };

  const onKeyDown: KeyboardEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = e => {
    handleKeyDown(e, form, index);
  };

  return (
    <div className={`${className} f f-direction-column`}>
      <label className='mb-2' htmlFor={name}>
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          className={`${s['text-input__input']} ${
            s['text-input__input--textarea']
          } ${error ? s['text-input__input--invalid'] : ''} p-2`}
          data-form={`${form}-${index}`}
          onChange={onChange}
          onKeyDown={onKeyDown}
          name={name}
          placeholder={placeholder}
          id={name}
          value={value}
          rows={rows}
          required={required}
        />
      ) : (
        <input
          className={`${s['text-input__input']} ${
            error ? s['text-input__input--invalid'] : ''
          } p-2`}
          data-form={`${form}-${index}`}
          onChange={onChange}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          type={type}
          name={name}
          placeholder={placeholder}
          id={name}
          value={value}
          required={required}
        />
      )}

      {error && (
        <p className={`${s['text-input__error']} fs-small mt-2`}>{error}</p>
      )}
    </div>
  );
};

export default TextInput;
