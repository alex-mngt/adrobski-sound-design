import { Dispatch, RefObject, SetStateAction } from 'react';

export const checkValidity = (
  reference: RefObject<HTMLFormElement>,
  setIsValid: Dispatch<SetStateAction<boolean>>,
) => {
  if (!reference.current) {
    return;
  }

  setIsValid(reference.current.checkValidity());
};

export const checkHasCurrentRef = (
  reference: RefObject<HTMLFormElement>,
  setHasCurrentRef: Dispatch<SetStateAction<boolean | undefined>>,
) => {
  if (!reference.current) {
    setHasCurrentRef(false);
    return;
  }

  setHasCurrentRef(true);
};
