import {
  Dispatch,
  FC,
  RefObject,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

interface IFormProps {
  id: string;
  className?: string;
  reference: RefObject<HTMLFormElement>;
  setIsValid: Dispatch<SetStateAction<boolean>>;
}

const Form: FC<IFormProps> = ({
  id,
  children,
  className,
  reference,
  setIsValid,
}) => {
  const [, setHasCurrentRef] = useState<boolean>();

  useEffect(() => {
    if (!reference.current) {
      return;
    }

    setIsValid(reference.current.checkValidity());
  });

  useEffect(() => {
    if (!reference.current) {
      setHasCurrentRef(false);
      return;
    }

    setHasCurrentRef(true);
  }, [reference]);

  return (
    <form ref={reference} className={className || ''} id={id} noValidate>
      {reference.current && children}
    </form>
  );
};

export default Form;
