import { useEffect, useState } from 'react';
import { IFormHook } from './form.interfaces';

export const useForm: IFormHook = ({ reference, isValid, setIsValid }) => {
  const [, setHasCurrentRef] = useState<boolean>();

  useEffect(() => {
    if (!reference.current) {
      return;
    }

    const currentIsValid = reference.current.checkValidity();

    if (isValid === currentIsValid) {
      return;
    }

    setIsValid(currentIsValid);
  });

  useEffect(() => {
    if (!reference.current) {
      setHasCurrentRef(false);
      return;
    }

    setHasCurrentRef(true);
  }, [reference]);
};
