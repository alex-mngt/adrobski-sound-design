import {
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

export const useForm = (
  reference: RefObject<HTMLFormElement>,
  isValid: boolean,
  setIsValid: Dispatch<SetStateAction<boolean>>,
) => {
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
