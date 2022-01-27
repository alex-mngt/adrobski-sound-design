import { FC } from 'react';
import Image from 'next/image';
import { IBubbleProps } from './typescript/bubble.interfaces';
import { useBubble } from './typescript/bubble.hooks';

const Bubble: FC<IBubbleProps> = ({ className, bubble }) => {
  const [ref] = useBubble();

  return (
    <div ref={ref} className={className}>
      <Image alt='' src={bubble} />
    </div>
  );
};

export default Bubble;
