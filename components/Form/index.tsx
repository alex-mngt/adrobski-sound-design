import { FC, useEffect, useState } from 'react';
import { checkHasCurrentRef, checkValidity } from './typescript/form.helpers';
import { IFormProps } from './typescript/form.interfaces';

const Form: FC<IFormProps> = ({
  id,
  children,
  className,
  reference,
  setIsValid,
}) => {
  const [, setHasCurrentRef] = useState<boolean>();

  useEffect(() => {
    checkValidity(reference, setIsValid);
  });

  useEffect(() => {
    checkHasCurrentRef(reference, setHasCurrentRef);
  }, [reference]);

  return (
    <form ref={reference} className={className || ''} id={id} noValidate>
      {reference.current && children}
    </form>
  );
};

export default Form;
