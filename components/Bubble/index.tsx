import { FC, useRef } from 'react';
import Image from 'next/image';
import { IBubbleProps } from './typescript/bubble.interfaces';

const Bubble: FC<IBubbleProps> = ({ className, bubble }) => {
  let ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} className={className}>
      <Image alt='' src={bubble} />
    </div>
  );
};

export default Bubble;
