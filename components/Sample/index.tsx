import { FC } from 'react';
import { ISampleProps } from './typescript/sample.interfaces';

import s from './scss/sample.module.scss';
import { useSample } from './typescript/sample.hook';

const Sample: FC<ISampleProps> = ({ text, className }) => {
  const [counter, handleClick] = useSample();

  return (
    <div className={`${className || ''} ${s['sample']}`}>
      <p onClick={handleClick}>{text}</p>
    </div>
  );
};

export default Sample;
