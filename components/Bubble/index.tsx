import { FC, useRef } from 'react';
import Image from 'next/image';
import { IBubbleProps } from './typescript/bubble.interfaces';

const Bubble: FC<IBubbleProps> = ({ className, bubble }) => {
  let reference = useRef<HTMLDivElement>(null);

  return (
    <div ref={reference} className={className}>
      <Image
        alt=''
        src={bubble}
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
      />
    </div>
  );
};

export default Bubble;
