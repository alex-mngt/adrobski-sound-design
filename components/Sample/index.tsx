import { EventHandler, FC, MouseEventHandler, useState } from 'react';
import { DEFAULT_COUNTER } from './typescript/sample.constants';
import { handleClick } from './typescript/sample.helpers';
import { ISampleProps } from './typescript/sample.interfaces';

import s from './scss/sample.module.scss';

const Sample: FC<ISampleProps> = ({ text, className }) => {
  const [counter, setCounter] = useState<number>(DEFAULT_COUNTER);

  const onClick: MouseEventHandler<HTMLParagraphElement> = e => {
    handleClick(e, counter, setCounter);
  };

  return (
    <div className={`${className || ''} ${s['sample']}`}>
      <p onClick={onClick}>{text}</p>
    </div>
  );
};

export default Sample;
