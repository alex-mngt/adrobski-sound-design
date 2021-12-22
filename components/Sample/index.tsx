import { EventHandler, FC, MouseEventHandler, useState } from 'react';
import { DEFAULT_COUNTER } from './typescript/sample.constants';
import { handleClick } from './typescript/sample.helpers';
import { ISampleProps } from './typescript/sample.interfaces';

const Sample: FC<ISampleProps> = ({ text }) => {
  const [counter, setCounter] = useState<number>(DEFAULT_COUNTER);

  const onClick: MouseEventHandler<HTMLParagraphElement> = e => {
    handleClick(e, counter, setCounter);
  };

  return (
    <div>
      <p onClick={onClick}>{text}</p>
    </div>
  );
};

export default Sample;
