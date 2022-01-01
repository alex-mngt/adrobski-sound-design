import { FC } from 'react';
import { useForm } from './typescript/form.hooks';
import { IFormProps } from './typescript/form.interfaces';

const Form: FC<IFormProps> = ({
  id,
  children,
  className,
  reference,
  isValid,
  setIsValid,
}) => {
  useForm(reference, isValid, setIsValid);

  return (
    <form ref={reference} className={className || ''} id={id} noValidate>
      {reference.current && children}
    </form>
  );
};

export default Form;
