import { FC, useState } from 'react';
import { ITextInputProps } from './typescript/text-input.interfaces';
import s from './scss/text-input.module.scss';
import { useTextInput } from './typescript/text-input.hooks';

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

  const { handleChange, handleBlur, handleKeyDown } = useTextInput({
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
  });

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
          onChange={handleChange}
          onKeyDown={handleKeyDown}
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
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
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
