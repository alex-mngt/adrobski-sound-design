import { FC, useState } from 'react';
import { ISampleProps } from './typescript/sample.interfaces';

import s from './scss/sample.module.scss';
import { useSample } from './typescript/sample.hooks';
import { DEFAULT_COUNTER } from './typescript/sample.constants';

const Sample: FC<ISampleProps> = ({ text, className }) => {
  const [counter, setCounter] = useState<number>(DEFAULT_COUNTER);

  const { handleClick } = useSample({ counter, setCounter });

  return (
    <div className={`${className || ''} ${s['sample']}`}>
      <p onClick={handleClick}>{text}</p>
    </div>
  );
};

export default Sample;
